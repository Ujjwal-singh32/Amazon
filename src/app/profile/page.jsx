"use client";

import React from "react";
import {
  Search,
  ShoppingCart,
  User,
  Leaf,
  Cloud,
  Recycle,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
export default function AmazonGreenDashboard() {
  const carbonData = [
    { month: "Jan", value: 0.8 },
    { month: "Feb", value: 1.2 },
    { month: "Mar", value: 0.9 },
    { month: "Apr", value: 1.5 },
    { month: "May", value: 1.1 },
    { month: "Jun", value: 1.4 },
  ];

  const pointsData = [
    { month: "Jan", value: 47 },
    { month: "Feb", value: 68 },
    { month: "Mar", value: 53 },
    { month: "Apr", value: 78 },
    { month: "May", value: 62 },
    { month: "Jun", value: 85 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* User Profile Section */}
      <div className="bg-white p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Smith</h2>
            <p className="text-gray-600">john.smith@email.com</p>
            <p className="text-gray-600">Member since 2019</p>
            <div className="flex items-center mt-1">
              <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">Prime Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Green Dashboard */}
      <div className="bg-green-50 p-6">
        <div className="flex items-center mb-6">
          <Leaf className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">GREEN DASHBOARD</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Emissions Saved */}
          <div className="bg-blue-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Cloud className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">
                Emissions Saved
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-1">
              1.4 kg CO2
            </div>
            <div className="text-blue-700 text-sm mb-1">saved this month</div>
            <div className="text-blue-600 text-xs">
              Equivalent to planting a small tree
            </div>
          </div>

          {/* Plastics Avoided */}
          <div className="bg-purple-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Recycle className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-purple-800">
                Plastics Avoided
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-900 mb-1">
              3.5 kg
            </div>
            <div className="text-purple-700 text-sm mb-1">
              Plastic wastes prevented
            </div>
            <div className="text-purple-600 text-xs">
              Enough to fill a medium sized recycling bin
            </div>
          </div>

          {/* Green Points */}
          <div className="bg-green-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">
                Green Points
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-900 mb-1">418</div>
            <div className="text-green-700 text-sm mb-3">Current Balance</div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Redeem Now
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Carbon Footprint Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Carbon Footprint Over Months
            </h3>
            <div className="relative h-48 mb-8">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 20"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Y-axis labels */}
                <text x="10" y="20" className="text-xs fill-gray-400">
                  1.5
                </text>
                <text x="10" y="50" className="text-xs fill-gray-400">
                  1.4
                </text>
                <text x="10" y="80" className="text-xs fill-gray-400">
                  1.3
                </text>
                <text x="10" y="110" className="text-xs fill-gray-400">
                  1.2
                </text>
                <text x="10" y="140" className="text-xs fill-gray-400">
                  1.1
                </text>
                <text x="10" y="170" className="text-xs fill-gray-400">
                  1.0
                </text>
                <text x="10" y="195" className="text-xs fill-gray-400">
                  0.9
                </text>

                {/* Line path */}
                <path
                  d="M 50 180 L 110 120 L 170 160 L 230 20 L 290 140 L 350 60"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {[
                  { x: 50, y: 180 },
                  { x: 110, y: 120 },
                  { x: 170, y: 160 },
                  { x: 230, y: 20 },
                  { x: 290, y: 140 },
                  { x: 350, y: 60 },
                ].map((point, index) => (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#4ade80"
                    stroke="white"
                    strokeWidth="2"
                  />
                ))}
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-12">
                {carbonData.map((item, index) => (
                  <span key={index} className="text-xs text-gray-600">
                    {item.month}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
              <span className="text-sm text-gray-600">CO2 Saved (kg)</span>
            </div>
          </div>

          {/* Green Points Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Green Points Earned
            </h3>
            <div className="flex items-end space-x-2 h-48">
              {pointsData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-green-500 rounded-t-sm mb-2"
                    style={{ height: `${item.value * 2}px` }}
                  ></div>
                  <span className="text-xs text-gray-600">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-4">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600">Green Points</span>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg text-center text-white">
          <div className="text-4xl mb-4">💬</div>
          <blockquote className="text-lg mb-4 italic">
            "Every small action you take towards sustainability creates ripples
            of positive change. Your commitment to green choices today is
            building a better tomorrow for generations to come."
          </blockquote>
          <div className="flex items-center justify-center">
            <span className="text-pink-200 mr-2">💚</span>
            <span className="font-medium">
              Thank you for making a difference!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
