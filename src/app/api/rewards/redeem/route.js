// /app/api/rewards/redeem/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/userModel";
import RedeemOrder from "@/models/redeemOrderModel";

export async function POST(req) {
  await connectDB();
  const { userId, product } = await req.json();
  if (!userId || !product?.greenPoints) return NextResponse.json({ error: "Missing data" }, { status: 400 });

  const user = await User.findOne({ userId });
  const currentPoints = user.greenStats.monthlyPointsData?.reduce((sum, m) => sum + (m.value || 0), 0) || 0;

  if (product.greenPoints > currentPoints) {
    return NextResponse.json({ success: false, message: "Not enough points" }, { status: 400 });
  }

  // Save redemption
  await RedeemOrder.create({
    userId,
    product,
    status: "Pending",
  });

  // Subtract points logically (e.g., subtract from the latest month)
  if (user.greenStats.monthlyPointsData?.length > 0) {
    let remaining = product.greenPoints;
    for (let i = user.greenStats.monthlyPointsData.length - 1; i >= 0 && remaining > 0; i--) {
      const monthEntry = user.greenStats.monthlyPointsData[i];
      const deduct = Math.min(monthEntry.value, remaining);
      monthEntry.value -= deduct;
      remaining -= deduct;
    }
  }

  await user.save();
  return NextResponse.json({ success: true });
}
