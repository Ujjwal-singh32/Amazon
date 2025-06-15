"use client";

import React, { useState } from "react";
import {

  Package, Recycle, Leaf, ShoppingCart, Search, User,
  ArrowLeft, Plus, Minus, Heart, RotateCcw, MapPin, Gift
} from 'lucide-react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AmazonCart() {
  const [orderType, setOrderType] = useState("group");
  const [packaging, setPackaging] = useState("reusable");
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const router = useRouter();

  const subtotal = getTotalPrice();
  const shipping = 9.99;
  const groupDiscount = orderType === "group" ? -5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + groupDiscount + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Cart Header */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Shopping Cart
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    <span className="text-lg">{cartItems.length} items</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm text-blue-600 font-medium">
                      Subtotal ({cartItems.length} items)
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      ${subtotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg border p-6 text-center text-gray-600">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border p-6 flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={item.image && item.image !== '' ? item.image : '/placeholder.png'}
                      alt={item.title || "Product image"}
                      width={80}
                      height={80}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border rounded-md text-gray-700 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-md font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border rounded-md text-gray-700 hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-600 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} / item</p>
                  </div>
                </div>
              ))
            )}

            {/* Delivery Options */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-medium mb-6">
                Choose your delivery option
              </h2>

              <div className="space-y-4">
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    orderType === "individual"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setOrderType("individual")}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        orderType === "individual"
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {orderType === "individual" && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <span className="font-semibold text-lg">
                      Individual Order
                    </span>
                  </div>
                  <p className="text-gray-600 ml-7 mb-1">
                    Standard delivery, ships individually
                  </p>
                  <p className="text-green-600 font-medium ml-7 mb-2">
                    Delivery: 2-3 business days
                  </p>
                  <p className="text-gray-900 font-medium ml-7">
                    Shipping: $8.99
                  </p>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    orderType === "group"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-yellow-50"
                  }`}
                  onClick={() => setOrderType("group")}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        orderType === "group"
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {orderType === "group" && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <span className="font-semibold text-lg">Group Order</span>
                    <span className="ml-2 bg-yellow-400 text-black text-sm px-2 py-1 rounded font-medium">
                      SAVE MONEY
                    </span>
                  </div>
                  <p className="text-gray-600 ml-7 mb-1">
                    Grouped with nearby customers to reduce shipping costs
                  </p>
                  <p className="text-green-600 font-medium ml-7 mb-2">
                    Delivery: 3-5 business days
                  </p>
                  <p className="text-gray-900 font-medium ml-7 mb-3">
                    Estimated Shipping: $3.50 - $5.99
                  </p>
                  <div className="ml-7 flex items-center text-blue-600 text-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">i</span>
                    </div>
                    <span>
                      Orders within 5 km radius are grouped and shipped
                      together. Shipping costs are shared.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging Selection */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center mb-4">
                <Leaf className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-lg font-medium">Choose Packaging</h2>
              </div>

              <div className="space-y-3">
                <div
                  className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
                    packaging === "minimal"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setPackaging("minimal")}
                >
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <div className="font-medium">Minimal Packaging</div>
                      <div className="text-sm text-gray-600">
                        Essential packaging only, no frills
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      +50 Green Points
                    </div>
                    <div className="text-sm text-gray-600 mt-1">FREE</div>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
                    packaging === "compostable"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => setPackaging("compostable")}
                >
                  <div className="flex items-center">
                    <Leaf className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium">Compostable Packaging</div>
                      <div className="text-sm text-gray-600">
                        Made from cornstarch and mushroom materials
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      +100 Green Points
                    </div>
                    <div className="text-sm text-gray-600 mt-1">$2.99</div>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
                    packaging === "reusable"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-blue-50"
                  }`}
                  onClick={() => setPackaging("reusable")}
                >
                  <div className="flex items-center">
                    <Recycle className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Reusable Packaging</div>
                      <div className="text-sm text-gray-600">
                        Durable, returnable packaging reduces waste
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      +200 Green Points
                    </div>
                    <div className="text-sm text-gray-600 mt-1">FREE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Delivery Location */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                <h2 className="text-lg font-medium">Estimated Delivery Location</h2>
              </div>
              <p className="text-gray-700">Jamshedpur 831014</p>
              <button className="text-blue-600 text-sm mt-2 hover:underline">
                Change location
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 bg-white rounded-lg border p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Items ({cartItems.length}):</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping & handling:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              {groupDiscount !== 0 && (
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Group order discount:</span>
                  <span>-${Math.abs(groupDiscount).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-700">
                <span>Total before tax:</span>
                <span>${(subtotal + shipping + groupDiscount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Estimated tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between text-2xl font-bold text-gray-900 border-t pt-4 border-gray-200">
              <span>Order total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => router.push("/checkout")}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md mt-6 transition duration-200"
            >
              Proceed to Checkout
            </button>
            <div className="text-center text-sm text-gray-600 mt-3">
              By placing your order, you agree to Amazon's privacy notice and
              conditions of use.
            </div>
            <div className="flex items-center justify-center mt-4 text-green-600">
              <Gift className="w-5 h-5 mr-2" />
              <span>Send as a gift. Learn more</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}