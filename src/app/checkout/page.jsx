import React, { useState } from "react";

export default function AmazonCheckout() {
  const [orderType, setOrderType] = useState("individual");
  const [packaging, setPackaging] = useState("compostable");

  const ecoPoints = {
    minimal: 50,
    compostable: 100,
    reusable: 150,
  };

  const ecoCost = {
    minimal: 0,
    compostable: 2.99,
    reusable: 4.99,
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Amazon-style Navbar */}
      <div className="bg-[#232F3E] text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">amazon</div>
        <div className="text-sm">
          <div>Hello, John</div>
          <div className="text-xs">Account & Lists | Returns & Orders</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:flex gap-4">
        <div className="lg:w-2/3 w-full">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>

          {/* Delivery Option */}
          <div className="mb-6 border rounded p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">Choose your delivery option</h2>
            <div className="space-y-4">
              <label className="block p-4 border rounded cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="delivery"
                  checked={orderType === "individual"}
                  onChange={() => setOrderType("individual")}
                  className="mr-2"
                />
                <strong>Individual Order</strong>
                <div className="text-sm text-gray-600">Standard delivery, ships individually</div>
                <div className="text-green-600 text-sm">Delivery: 2-3 business days</div>
                <div className="text-sm">Shipping: $8.99</div>
              </label>

              <label className="block p-4 border rounded cursor-pointer hover:bg-gray-50 bg-yellow-50">
                <input
                  type="radio"
                  name="delivery"
                  checked={orderType === "group"}
                  onChange={() => setOrderType("group")}
                  className="mr-2"
                />
                <strong>Group Order</strong> <span className="ml-2 bg-yellow-300 px-2 rounded text-sm">SAVE MONEY</span>
                <div className="text-sm text-gray-600">
                  Grouped with nearby customers to reduce shipping costs
                </div>
                <div className="text-green-600 text-sm">Delivery: 3-5 business days</div>
                <div className="text-sm">Estimated Shipping: $3.50 - $5.99</div>
                <div className="mt-2 text-xs text-blue-600">
                  ℹ️ Orders within 5 km radius are grouped and shipped together. Shipping costs are shared.
                </div>
              </label>
            </div>
          </div>

          {/* Eco-Friendly Packaging */}
          <div className="mb-6 border rounded p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Choose Eco-Friendly Packaging</h2>
              <span className="text-green-600 font-medium">Earn {ecoPoints[packaging]} eco-points</span>
            </div>

            <div className="space-y-4">
              <label className={`block p-4 border rounded cursor-pointer flex justify-between items-center ${packaging === "minimal" ? "bg-[#f9f9f9] border-green-600" : "hover:bg-gray-50"}`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="packaging"
                    checked={packaging === "minimal"}
                    onChange={() => setPackaging("minimal")}
                    className="mr-2"
                  />
                  <div>
                    <strong>Minimal Packaging</strong>
                    <div className="text-sm text-gray-600">Essential packaging only, no frills</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">Free</div>
                  <div className="text-green-600 text-sm">+50 points</div>
                </div>
              </label>

              <label className={`block p-4 border rounded cursor-pointer flex justify-between items-center ${packaging === "compostable" ? "bg-[#e7fbe7] border-green-600" : "hover:bg-gray-50"}`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="packaging"
                    checked={packaging === "compostable"}
                    onChange={() => setPackaging("compostable")}
                    className="mr-2"
                  />
                  <div>
                    <strong>Compostable Packaging</strong>
                    <div className="text-sm text-gray-600">
                      Made from cornstarch and mushroom materials
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">$2.99</div>
                  <div className="text-green-600 text-sm">+100 points</div>
                </div>
              </label>

              <label className={`block p-4 border rounded cursor-pointer flex justify-between items-center ${packaging === "reusable" ? "bg-[#f9f9f9] border-green-600" : "hover:bg-gray-50"}`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="packaging"
                    checked={packaging === "reusable"}
                    onChange={() => setPackaging("reusable")}
                    className="mr-2"
                  />
                  <div>
                    <strong>Reusable Packaging</strong>
                    <div className="text-sm text-gray-600">Returnable packaging that can be reused</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">$4.99</div>
                  <div className="text-green-600 text-sm">+150 points</div>
                </div>
              </label>
            </div>

            <div className="mt-4 bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-800 mb-2">Your Eco-Impact</h3>
              <div className="text-sm text-gray-800">Plastic Waste Saved: <strong>130g</strong></div>
              <div className="text-sm text-gray-800">CO₂ Emissions Reduced: <strong>0.2kg</strong></div>
              <div className="text-sm text-gray-800">Water Saved: <strong>75ml</strong></div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 w-full">
          <div className="border rounded p-4 bg-white sticky top-4">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="text-sm">Items (4): $398.97</div>
            <div className="text-sm">Shipping & handling: $8.99</div>
            <div className="text-sm">Total before tax: $407.96</div>
            <div className="text-sm mb-2">Estimated tax: $32.64</div>
            <div className="text-lg font-bold text-red-600">Order total: $440.60</div>
            <button className="mt-4 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
