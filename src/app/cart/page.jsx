"use client";

import React, { useState } from "react";
import {

  Package, Recycle, Leaf, ShoppingCart, Search, User,
  ArrowLeft, Plus, Minus, Heart, RotateCcw, MapPin
} from 'lucide-react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AmazonCart() {
  const [orderType, setOrderType] = useState("group");
  const [packaging, setPackaging] = useState("reusable");
  const [headphoneQty, setHeadphoneQty] = useState(1);
  const [caseQty, setCaseQty] = useState(2);

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
                    <span className="text-lg">3 items</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm text-blue-600 font-medium">
                      Subtotal (3 items)
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      $379.97
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                      : "border-gray-200"
                  }`}
                  onClick={() => setPackaging("reusable")}
                >
                  <div className="flex items-center">
                    <Recycle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium">Reusable Packaging</div>
                      <div className="text-sm text-gray-600">
                        Returnable packaging that can be reused
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      +150 Green Points
                    </div>
                    <div className="text-sm text-gray-600 mt-1">$4.99</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Items in Cart */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-medium mb-6">Items in your cart</h2>

              <div className="space-y-6">
                {/* Sony Headphones */}
                <div className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 text-xs text-white font-bold">SONY</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">
                      Sony WH-1000XM4 Wireless Noise Canceling Headphones
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Color: Black | Size: One Size
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-red-600">
                        $279.99
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        $349.99
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() =>
                            setHeadphoneQty(Math.max(1, headphoneQty - 1))
                          }
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x">
                          {headphoneQty}
                        </span>
                        <button
                          onClick={() => setHeadphoneQty(headphoneQty + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800">
                        Delete
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>

                {/* iPhone Case */}
                <div className="flex flex-col sm:flex-row gap-4 pb-6 border-b">

                  <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg flex items-center justify-center relative border-2 border-gray-200">
                    <div className="w-20 h-28 bg-white rounded-xl border border-gray-300 relative shadow-sm">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                      <div className="absolute top-6 right-1 w-2 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-gray-600 font-bold">15 Pro Max</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">
                      iPhone 15 Pro Max Case - Clear with MagSafe
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Compatible with iPhone 15 Pro Max
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold">$49.99</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => setCaseQty(Math.max(1, caseQty - 1))}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x">{caseQty}</span>
                        <button
                          onClick={() => setCaseQty(caseQty + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800">
                        Delete
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2 sm:ml-4">
                    <button className="p-2 border rounded hover:bg-gray-50">
                      <MapPin className="w-5 h-5" />
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-50">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-50">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-50">
                      <MapPin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Items */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-medium mb-6">
                Similar items you might like
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AirPods */}
                <div className="border rounded-lg p-4">

                  <div className="w-full h-48 bg-gradient-to-br from-white to-gray-100 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="w-24 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative">
                      <div className="w-8 h-8 bg-white rounded-full shadow-md absolute -top-2 -left-2"></div>
                      <div className="w-8 h-8 bg-white rounded-full shadow-md absolute -top-2 -right-2"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-sm text-gray-600 font-bold">AirPods Pro</div>
                  </div>
                  <h3 className="font-medium mb-2">Apple AirPods Pro (2nd Gen)</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-red-600">
                      $199.99
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      $249.99
                    </span>
                  </div>
                  <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>

                {/* USB Cable */}
                <div className="border rounded-lg p-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="w-32 h-2 bg-white rounded-full relative shadow-sm">
                      <div className="absolute -left-3 -top-1 w-6 h-4 bg-gray-600 rounded"></div>
                      <div className="absolute -right-3 -top-1 w-6 h-4 bg-white border-2 border-gray-300 rounded"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-sm text-gray-600 font-bold">USB-C</div>
                    <div className="absolute bottom-4 right-4 text-sm text-gray-600 font-bold">Lightning</div>
                  </div>
                  <h3 className="font-medium mb-2">USB-C to Lightning Cable (3ft)</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">$15.99</span>
                  </div>
                  <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>

                {/* Phone Stand */}
                <div className="border rounded-lg p-4 sm:col-span-2 lg:col-span-1">

                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="w-16 h-24 bg-gray-600 rounded-lg relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-800 rounded border border-gray-500"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-sm text-gray-600 font-bold">Stand</div>
                  </div>
                  <h3 className="font-medium mb-2">Adjustable Phone Stand for Desk</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">$15.99</span>
                  </div>
                  <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-80">

            <div className="bg-white rounded-lg border sticky top-6 max-h-screen overflow-y-auto">
              <div className="p-6 border-b">
                <h2 className="text-xl font-medium">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Items (3):</span>
                    <span>$379.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & handling:</span>
                    <span>$8.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging fee:</span>
                    <span>$4.99</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Group order discount:</span>
                    <span>-$4.50</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Order total:</span>
                    <span>$388.45</span>
                  </div>

                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">Congratulations, you will earn 150 green points on this order</div>
                </div>
                
                <button className="w-full bg-yellow-400 text-black py-3 rounded-full text-lg font-medium hover:bg-yellow-500 mb-4">
                  Proceed to Buy
                </button>
                
                <p className="text-xs text-gray-600 text-center">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}