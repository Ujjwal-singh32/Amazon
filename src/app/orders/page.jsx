// orders/page.jsx
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user?.id) return;

    axios
      .get("/api/orders", {
        headers: {
          "x-user-id": user.id,
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch orders failed", err);
        setLoading(false);
      });
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">You have no orders.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm hover:shadow-md transition duration-200 bg-white"
            >
              <div className="flex justify-between flex-wrap md:flex-nowrap mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">ORDER PLACED:</span>{" "}
                    {new Date(order.placedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">TOTAL:</span> ₹{order.totalAmount}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">SHIP TO:</span>{" "}
                    <span className="text-blue-700 hover:underline cursor-pointer">
                      {order.userInfo?.name || "Customer"}
                    </span>
                  </p>

                </div>
                <div className="space-y-1 text-right text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">ORDER #</span> {order._id.slice(-6)}
                  </p>
                  <div className="flex gap-4 justify-end text-sm mt-1">
                    <span className="text-blue-700 hover:underline cursor-pointer">
                      View order details
                    </span>
                    <span className="text-blue-700 hover:underline cursor-pointer">
                      Invoice
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 border-t pt-4">
                {order.items.map((item, idx) => (
                  <div className="w-full md:w-32" key={idx}>
                    <Image
                      src={item.product?.images[0] || "/placeholder.jpg"}
                      alt={item.product?.name || "Product"}
                      width={150}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}

                <div className="flex-1">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      <h2 className="text-blue-700 font-medium text-sm mb-1 hover:underline cursor-pointer"
                        onClick={() => router.push(`/products/${item.product?.productId}`)}>
                        {item.product?.name || "Product Name"}
                      </h2>
                      <p className="text-sm text-gray-600">
                        ₹{item.priceAtPurchase} x {item.quantity}
                      </p>
                    </div>
                  ))}

                  <p className="text-sm text-gray-600 mb-2">
                    {order.orderStatus === "delivered"
                      ? `Delivered on ${new Date(order.placedAt).toLocaleDateString()}`
                      : `Status: ${order.orderStatus}`}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="border border-gray-400 px-4 py-2 text-sm rounded font-medium">
                      View your item
                    </button>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm rounded font-semibold">
                      Get product support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;
