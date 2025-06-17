// /api/payment/verify-payment.js
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Order from '@/models/orderModel';
import mongoose from 'mongoose';

export async function POST(request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      originalOrder,
    } = await request.json();

    // 1. Verify the signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Save order to MongoDB
    await connectDB();

    const newOrder = await Order.create({
      user: originalOrder.user, 
      items: originalOrder.items.map((item) => ({
        productId:(item.productId),
        quantity: item.quantity,
        priceAtPurchase: item.priceAtPurchase,
      })),
      totalAmount: originalOrder.totalAmount,
      paymentStatus: 'paid',
      orderStatus: 'placed',
      shippingAddress: originalOrder.shippingAddress,
      deliveryOption: originalOrder.deliveryOption || 'individual',
      packagingPoints: originalOrder.packagingPoints || 0,
      placedAt: new Date(),
    });

    return NextResponse.json({ success: true, order: newOrder }, { status: 200 });
  } catch (error) {
    console.error('Verify Payment Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
