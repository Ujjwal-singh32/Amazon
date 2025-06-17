import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/orderModel";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { order } = body;

    if (
      !order ||
      !order.user ||
      !order.items ||
      !order.totalAmount ||
      !order.shippingAddress
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid order data" },
        { status: 400 }
      );
    }

    const newOrder = await Order.create({
      user: order.user,
      items: order.items.map((item) => ({
        productId: (item.productId),
        quantity: item.quantity,
        priceAtPurchase: item.priceAtPurchase,
      })),
      totalAmount: order.totalAmount,
      paymentStatus: "COD",
      orderStatus: "placed",
      shippingAddress: {
        street: order.shippingAddress.street,
        city: order.shippingAddress.city,
        state: order.shippingAddress.state,
        country: order.shippingAddress.country,
        pincode: order.shippingAddress.pincode,
      },
      deliveryOption: order.deliveryOption || "individual",
      packagingPoints: order.packagingPoints || 0,
      placedAt: new Date(),
    });

    return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
  } catch (error) {
    console.error("COD order error:", error);
    return NextResponse.json(
      { success: false, message: "COD order failed" },
      { status: 500 }
    );
  }
}
