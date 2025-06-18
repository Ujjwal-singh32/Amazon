import { NextResponse } from "next/server";
import Order from "@/models/orderModel";
import Product from "@/models/productModel";
import User from "@/models/userModel";
import connectDB from "@/lib/db";

export async function GET(req) {
  await connectDB();

  const userId = req.headers.get("x-user-id");

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Step 1: Fetch orders for the user
    const orders = await Order.find({ user: userId })
      .sort({ placedAt: -1 })
      .lean();

    // Step 2: Collect unique productIds
    const productUUIDs = [
      ...new Set(
        orders.flatMap((order) => order.items.map((item) => item.productId))
      ),
    ];

    // Step 3: Fetch product details
    const products = await Product.find({
      productId: { $in: productUUIDs },
    }).lean();
    const productMap = new Map(products.map((p) => [p.productId, p]));

    // Step 4: Get user info from Clerk
    const userInfo = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    }).then((res) => res.json());

    // Step 5: Attach product + user info
    const formatted = orders.map((order) => ({
      ...order,
      userInfo: {
        name: userInfo.first_name + " " + userInfo.last_name,
        email: userInfo.email_addresses?.[0]?.email_address || "",
        phone: userInfo.phone_numbers?.[0]?.phone_number || "",
      },
      items: order.items.map((item) => ({
        ...item,
        product: productMap.get(item.productId) || null,
      })),
    }));

//     // Step 6: Update GreenStats in user model
//     let totalEmissions = 0;
//     let totalPlastics = 0;
//     let totalWater = 0;
//     let totalPoints = 0;
//     let grouped = 0;

//     for (const order of orders) {
//       for (const item of order.items) {
//         const product = productMap.get(item.productId);
//         if (!product) continue;

//         totalEmissions += (product.emissions || 0) * (item.quantity || 1);
//         totalPlastics += (product.plasticAvoided || 0) * (item.quantity || 1);
//         totalWater += (product.waterSaved || 0) * (item.quantity || 1);
//         totalPoints += (product.greenPoints || 0) * (item.quantity || 1);
//       }
//       if (order.deliveryOption === "group") grouped++;
//     }

//     const monthStr = new Date().toLocaleString("default", { month: "short" });

//     await User.updateOne(
//   { userId },
//   {
//     $set: {
//       ordersPlaced: orders.length,
//       "greenStats.monthlyCarbonData": [{ month: monthStr, value: totalEmissions }],
//       "greenStats.monthlyEmissionsData": [{ month: monthStr, value: totalEmissions }],
//       "greenStats.monthlyPlasticsData": [{ month: monthStr, value: totalPlastics }],
//       "greenStats.monthlyWaterData": [{ month: monthStr, value: totalWater }],
//       "greenStats.monthlyPointsData": [{ month: monthStr, value: totalPoints }],
//       "greenStats.monthlyGroupedOrdersData": [{ month: monthStr, value: grouped }],
//     },
//   },
//   { upsert: true }
// );

//  console.log("GreenStats:", totalEmissions, totalPlastics, totalWater, totalPoints, grouped);

    return NextResponse.json({ orders: formatted });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
