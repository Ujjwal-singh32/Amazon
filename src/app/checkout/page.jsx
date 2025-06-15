"use client";
import React,{ useState } from 'react';
import { Check, Truck, ShoppingCart, Gift } from 'lucide-react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function AmazonCheckout() {
  const [orderType, setOrderType] = useState('group');
  const [packaging, setPackaging] = useState('eco');
  const { cartItems, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const shipping = 9.99;
  const groupDiscount = orderType === "group" ? -5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + groupDiscount + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Checkout Header */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-xl p-8 shadow-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-full p-3 border-2 border-white border-opacity-50">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-1 tracking-wide">
                  CHECKOUT
                </h1>
                <div className="flex items-center text-white text-opacity-90">
                  <Gift className="w-4 h-4 mr-2" />
                  <span className="text-lg font-medium">{cartItems.length} items ready for delivery</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-200 shadow-lg">
              <div className="text-sm text-blue-700 font-medium">Subtotal ({cartItems.length} items)</div>
              <div className="text-3xl font-bold text-indigo-800">${subtotal.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-xl font-semibold">Choose a delivery address</h2>
                </div>
                <button className="text-orange-500 hover:underline">Change</button>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="font-semibold">John Doe</div>
                <div className="text-gray-600">123 Main Street, Apt 4B</div>
                <div className="text-gray-600">New York, NY 10001</div>
                <div className="text-gray-600">United States</div>
              </div>
            </div>

            {/* Order Type & Packaging */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-semibold">Order Type & Packaging</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-green-800">Selected Order Type: {orderType === "group" ? "Group Order" : "Individual Order"}</div>
                      <div className="text-sm text-green-600">{orderType === "group" ? "Your order will be grouped with nearby orders to reduce shipping costs" : "Standard delivery, ships individually"}</div>
                    </div>
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-800">Selected Packaging: {packaging === "eco" ? "Eco-Friendly Packaging" : packaging === "minimal" ? "Minimal Packaging" : packaging === "compostable" ? "Compostable Packaging" : "Reusable Packaging"}</div>
                      <div className="text-sm text-blue-600">{packaging === "eco" ? "" : packaging === "minimal" ? "Essential packaging only, no frills" : packaging === "compostable" ? "Made from cornstarch and mushroom materials" : "Durable, returnable packaging reduces waste"}</div>
                    </div>
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Group Order Notice */}
            {orderType === "group" && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-800">Group Order Notice</div>
                      <div className="text-sm text-yellow-700 mt-1">
                        Since you selected Group Order, your order will be processed at the end of the day and grouped with nearby orders. You'll receive dispatch details within 24 hours.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-4 max-h-screen overflow-hidden flex flex-col">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Order Summary</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.length === 0 ? (
                    <p className="text-gray-600">No items in cart.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image 
                            src={item.image && item.image !== '' ? item.image : '/placeholder.png'}
                            alt={item.title || "Product image"}
                            width={60}
                            height={60}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-800 line-clamp-2">{item.title}</div>
                          <div className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</div>
                          <div className="font-semibold text-gray-900">${item.price.toFixed(2)}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Items ({cartItems.length}):</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping & handling:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  {groupDiscount !== 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Group Order Discount:</span>
                      <span>${groupDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-700">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span className="text-red-600">Order Total:</span>
                    <span className="text-red-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                {/* Proceed to Payment Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors shadow-md">
                  Proceed to Payment
                </button>

                <div className="text-xs text-gray-500 text-center mt-3">
                  By proceeding, you agree to Amazon's privacy notice and conditions of use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}