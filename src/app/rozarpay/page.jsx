"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const OrderSummaryPage = () => {
  const { user } = useUser();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (user) {
      const storedOrder = localStorage.getItem(`checkout_${user.id}`);
      if (storedOrder) {
        setOrder(JSON.parse(storedOrder));
      }
    }
  }, [user]);

  if (!order) return <div className="p-6 text-gray-700">Loading order summary...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h1>

      {/* Order Info */}
      <div className="mb-6">
        <div><strong>User ID:</strong> {order.user}</div>
        <div><strong>Order Status:</strong> {order.orderStatus}</div>
        <div><strong>Payment Status:</strong> {order.paymentStatus}</div>
        <div><strong>deliveryOption:</strong> {order.deliveryOption}</div>
        <div><strong>packagingPoints:</strong> {order.packagingPoints}</div>
        <div><strong>Placed At:</strong> {new Date(order.placedAt).toLocaleString()}</div>
      </div>

      {/* Items */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Items Ordered</h2>
        <div className="space-y-3">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-3 rounded-md bg-gray-50"
            >
              <div>
                <div><strong>Product ID:</strong> {item.productId}</div>
                <div><strong>Quantity:</strong> {item.quantity}</div>
              </div>
              <div className="text-right">
                <div><strong>Price:</strong> ₹{item.priceAtPurchase}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Shipping Address</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div>{order.shippingAddress.street}</div>
          <div>
            {order.shippingAddress.city}, {order.shippingAddress.state}
          </div>
          <div>{order.shippingAddress.country} - {order.shippingAddress.pincode}</div>
        </div>
      </div>

      {/* Total */}
      <div className="text-right text-xl font-bold text-orange-600">
        Total: ₹{order.totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default OrderSummaryPage;