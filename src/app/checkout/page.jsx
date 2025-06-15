"use client";
import React, { useState } from "react";
import {
  Check,
  Truck,
  CreditCard,
  DollarSign,
  Gift,
  Building2,
  Banknote,
  Wallet,
  ShoppingCart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AmazonCheckout() {
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [orderType, setOrderType] = useState("group");
  const [packaging, setPackaging] = useState("eco");

  const orderItems = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 349.99,
      quantity: 1,
      image: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Case",
      price: 29.99,
      quantity: 1,
      image: "/api/placeholder/60/60",
    },
  ];

  const subtotal = 379.98;
  const shipping = 9.99;
  const groupDiscount = -5.99;
  const tax = 30.4;
  const total = 404.39;

  const paymentMethods = [
    {
      id: "credit",
      label: "Credit or debit card",
      icon: CreditCard,
      details: "Visa •••• 1234 | Expires 12/25",
    },
    { id: "paypal", label: "PayPal", icon: DollarSign, details: null },
    { id: "amazon", label: "Amazon Pay", icon: Wallet, details: null },
    { id: "gift", label: "Gift Card", icon: Gift, details: null },
    { id: "bank", label: "Bank Transfer", icon: Building2, details: null },
    { id: "cash", label: "Cash on Delivery", icon: Banknote, details: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Checkout Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
              <div className="flex items-center text-gray-600">
                <span className="text-lg">3 items</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg px-4 py-2">
              <div className="text-sm text-blue-600">Subtotal (3 items)</div>
              <div className="text-2xl font-bold text-blue-600">$379.97</div>
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
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-semibold">
                    Choose a delivery address
                  </h2>
                </div>
                <button className="text-orange-500 hover:underline">
                  Change
                </button>
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
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-semibold">
                  Order Type & Packaging
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-green-800">
                        Selected Order Type: Group Order
                      </div>
                      <div className="text-sm text-green-600">
                        Your order will be grouped with nearby orders to reduce
                        shipping costs
                      </div>
                    </div>
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-800">
                        Selected Packaging: Compostable Packaging
                      </div>
                      <div className="text-sm text-blue-600">
                        Made from cornstarch and mushroom materials
                      </div>
                    </div>
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-xl font-semibold">
                  Choose a payment method
                </h2>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                    >
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="w-4 h-4 text-orange-500"
                        />
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <div className="flex-1">
                          <div className="font-medium">{method.label}</div>
                          {method.details && (
                            <div className="text-sm text-gray-500">
                              {method.details}
                            </div>
                          )}
                        </div>
                        {method.id === "credit" && (
                          <button className="text-orange-500 hover:underline text-sm">
                            Change
                          </button>
                        )}
                      </label>
                    </div>
                  );
                })}
              </div>

              {/* Group Order Notice */}
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-800">
                      Group Order Notice
                    </div>
                    <div className="text-sm text-yellow-700 mt-1">
                      Since you selected Group Order, your order will be
                      processed at the end of the day and grouped with nearby
                      orders. You'll receive dispatch details within 24 hour
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {item.id === 1 ? "WH" : "IP"}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </div>
                      <div className="font-semibold">${item.price}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Items (2):</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping & handling:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Group Order Discount:</span>
                  <span>${groupDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span className="text-red-600">Order Total:</span>
                  <span className="text-red-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg mt-6 shadow-md">
                Place your order
              </button>

              <div className="text-center text-sm text-gray-500 mt-4">
                By placing your order, you agree to Amazon's privacy notice
                and conditions of use.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
