"use client";

import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dummyOrders = [
  {
    id: "1",
    name: "boAt Rockerz 450 Bluetooth On Ear Headphones",
    image:
      "https://www.boat-lifestyle.com/cdn/shop/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1673002682",
    price: 1499,
    orderedOn: "1 June 2025",
    deliveredOn: "4 June 2025",
    status: "Delivered",
  },
  {
    id: "2",
    name: "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB)",
    image: "https://m.media-amazon.com/images/I/818VqDSKpCL._SX679_.jpg",
    price: 12999,
    orderedOn: "8 June 2025",
    deliveredOn: "11 June 2025",
    status: "Delivered",
  },
  {
    id: "3",
    name: "Wildcraft Backpack for Men & Women | 30L",
    image: "https://m.media-amazon.com/images/I/81bECvKU9nL._SX679_.jpg",
    price: 999,
    orderedOn: "10 June 2025",
    deliveredOn: "Expected by 17 June 2025",
    status: "In Transit",
  },
];

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <div className="flex justify-between flex-wrap md:flex-nowrap mb-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">ORDER PLACED:</span>{" "}
                  {order.orderedOn}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">TOTAL:</span> ₹{order.price}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">SHIP TO:</span>{" "}
                  <span className="text-blue-700 hover:underline cursor-pointer">
                    Ujjwal Kumar Singh
                  </span>
                </p>
              </div>
              <div className="space-y-1 text-right text-sm text-gray-600">
                <p>
                  <span className="font-semibold">ORDER #</span> 408-1119341-4497946
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
              <div className="w-full md:w-32">
                <Image
                  src={order.image}
                  alt={order.name}
                  width={150}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-blue-700 font-medium text-sm mb-1 hover:underline cursor-pointer">
                  {order.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {order.status === "Delivered"
                    ? `Return window closed on ${order.deliveredOn}`
                    : `Delivery by ${order.deliveredOn}`}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {order.status === "In Transit" && (
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm rounded font-semibold">
                      Track package
                    </button>
                  )}
                  <button className="border border-gray-400 px-4 py-2 text-sm rounded font-medium">
                    Buy it again
                  </button>
                  <button className="border border-gray-400 px-4 py-2 text-sm rounded font-medium">
                    View your item
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-sm rounded font-semibold">
                    Get product support
                  </button>
                  <button className="border border-gray-400 px-4 py-2 text-sm rounded font-medium">
                    Write a product review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {dummyOrders.length === 0 && (
          <p className="text-center text-gray-500 mt-10">You have no orders.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;
