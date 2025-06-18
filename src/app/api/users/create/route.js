// /app/api/users/create/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/userModel";
import Order from "@/models/orderModel";
import Product from "@/models/productModel";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { userId, name, email, phone } = body;

    if (!userId || !name || !email) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ userId });

    // ✅ Always fetch all orders to recompute accurate stats
    const orders = await Order.find({ user: userId });
    const ordersPlaced = orders.length;

    let lastAddress = null;
    const monthlyData = {};
    let totalGroupedOrders = 0;

    for (const order of orders) {
      if (order.shippingAddress) lastAddress = order.shippingAddress;
      const month = new Date(order.placedAt).toLocaleString("default", { month: "short" });

      for (const item of order.items) {
        const product = await Product.findOne({ productId: item.productId });
        if (!product) continue;        
        const qty = item.quantity || 1;

        if (!monthlyData[month]) {
          monthlyData[month] = {
            carbon: 0,
            points: 0,
            emissions: 0,
            plastics: 0,
            water: 0,
            groupedOrders: 0,
          };
        }

        monthlyData[month].carbon += product.sustainableScore * qty;
        monthlyData[month].points += product.greenPoints * qty;
        monthlyData[month].emissions += product.emissions * qty;
        monthlyData[month].plastics += product.plasticAvoided * qty;
        monthlyData[month].water += product.waterSaved * qty;
        
      }
      if (order.deliveryOption === "group") monthlyData[month].groupedOrders++;
    }

    const greenStats = {
      monthlyCarbonData: [],
      monthlyPointsData: [],
      monthlyEmissionsData: [],
      monthlyPlasticsData: [],
      monthlyWaterData: [],
      monthlyGroupedOrdersData: [],
    };

    for (const [month, data] of Object.entries(monthlyData)) {
      greenStats.monthlyCarbonData.push({ month, value: data.carbon });
      greenStats.monthlyPointsData.push({ month, value: data.points });
      greenStats.monthlyEmissionsData.push({ month, value: data.emissions });
      greenStats.monthlyPlasticsData.push({ month, value: data.plastics });
      greenStats.monthlyWaterData.push({ month, value: data.water });
      greenStats.monthlyGroupedOrdersData.push({ month, value: data.groupedOrders });
    }

    const finalUserData = {
      userId,
      name,
      email,
      phone: phone || "",
      address: lastAddress ? [lastAddress] : existingUser?.address || [],
      isPrimeMember:  false,
      memberSince:  null,
      isTrustedReviewer: true,
      ordersPlaced,
      greenStats,
      lastStatsUpdatedAt: new Date(),
    };

    let updatedUser;
    if (existingUser) {
      await User.updateOne({ userId }, finalUserData);
      updatedUser = await User.findOne({ userId });
    } else {
      const newUser = new User(finalUserData);
      await newUser.save();
      updatedUser = newUser;
    }

    return NextResponse.json({ success: true, message: "User upserted", user: updatedUser });
  } catch (error) {
    console.error("Error in user upsert:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
