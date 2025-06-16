import { NextResponse } from "next/server";
import Order from "@/models/orderModel";
import Product from "@/models/productModel";
import connectDB from "@/lib/db";

export async function GET(req) {
  await connectDB();

  const userId = req.headers.get("x-user-id");

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const orders = await Order.find({ user: userId })
      .sort({ placedAt: -1 })
      .populate("items.productId");
      

    const formatted = orders.map(order => ({
      ...order._doc,
      items: order.items.map(item => ({
        ...item._doc,
        product: item.productId,
      }))
    }));

    return NextResponse.json({ orders: formatted });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
