"use client";

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const carbonData = [
  { month: 'Jan', co2: 3 },
  { month: 'Feb', co2: 7.5 },
  { month: 'Mar', co2: 11 },
  { month: 'Apr', co2: 6 },
  { month: 'May', co2: 2.5 },
  { month: 'Jun', co2: 8 }
];

const pointsData = [
  { month: 'Jan', points: 45 },
  { month: 'Feb', points: 38 },
  { month: 'Mar', points: 78 },
  { month: 'Apr', points: 55 },
  { month: 'May', points: 115 },
  { month: 'Jun', points: 92 }
];

export default function AmazonDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-400 text-black px-2 py-1 text-sm font-bold rounded">a</div>
          <span className="font-semibold text-lg">Amazon</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Hello, John</span>
          <div className="w-6 h-6 border border-white rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Your Account</h1>
        
        {/* User Profile Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mr-4">
              <span className="text-white text-xl font-semibold">JS</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">John Smith</h2>
              <p className="text-gray-600">Prime Member since 2019</p>
              <div className="flex items-center mt-1">
                <span className="text-orange-400 text-sm">★</span>
                <span className="text-sm text-gray-600 ml-1">Trusted Reviewer</span>
              </div>
            </div>
          </div>

          {/* User Details Grid - 6 items in 2 rows */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-blue-600 mr-2">✉</span>
                <span className="font-medium text-gray-700">Email</span>
              </div>
              <p className="text-gray-800">john.smith@email.com</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-green-600 mr-2">📞</span>
                <span className="font-medium text-gray-700">Phone</span>
              </div>
              <p className="text-gray-800">+1 (555) 123-4567</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-purple-600 mr-2">📍</span>
                <span className="font-medium text-gray-700">Address</span>
              </div>
              <p className="text-gray-800">123 Main St, New York, NY 10001</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-orange-600 mr-2">📅</span>
                <span className="font-medium text-gray-700">Member Since</span>
              </div>
              <p className="text-gray-800">March 15, 2019</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-red-600 mr-2">📦</span>
                <span className="font-medium text-gray-700">Orders Placed</span>
              </div>
              <p className="text-gray-800">247</p>

            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-indigo-600 mr-2">⭐</span>
                <span className="font-medium text-gray-700">Prime Member</span>
              </div>
              <p className="text-gray-800">Yes</p>
            </div>
          </div>
        </div>

        {/* Green Dashboard */}
        <div className="bg-green-100 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <span className="text-green-600 text-2xl mr-3">🌱</span>
            <h2 className="text-2xl font-semibold text-green-800">GREEN DASHBOARD</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">☁️</span>
                <span className="text-sm">Emissions Saved</span>
              </div>
              <div className="text-2xl font-bold">1.4 kg CO2</div>
              <div className="text-xs opacity-90">saved this month</div>
              <div className="text-xs mt-1 opacity-80">Equivalent to planting a small tree</div>
            </div>

            <div className="bg-purple-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">♻️</span>
                <span className="text-sm">Plastics Avoided</span>
              </div>
              <div className="text-2xl font-bold">3.5 kg</div>
              <div className="text-xs opacity-90">plastic waste prevented</div>
              <div className="text-xs mt-1 opacity-80">Enough to fill a medium recycling bin</div>
            </div>

            <div className="bg-green-400 text-white p-6 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="mr-2">🎯</span>
              <span className="text-sm">Green Points</span>

            </div>
            <div className="text-2xl font-bold">418</div>
            <div className="text-xs opacity-90 mb-3">Current Balance</div> {/* Added bottom margin for spacing */}

            <button className="bg-white hover:bg-yellow-300 text-green-800 font-medium px-3 py-1 rounded text-xs transition duration-200">
              Redeem Now
            </button>
          </div>
          
            <div className="bg-cyan-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">💧</span>
                <span className="text-sm">Water Saved</span>
              </div>
              <div className="text-2xl font-bold">125 L</div>
              <div className="text-xs opacity-90">this month</div>
              <div className="text-xs mt-1 opacity-80">Equivalent to 2.5 bathtubs</div>
            </div>
          </div>

          {/* Second Row Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-orange-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">📦</span>
                <span className="text-sm">Eco Packages</span>
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs opacity-90">Sustainable Deliveries</div>
            </div>

            <div className="bg-pink-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🚴</span>
                <span className="text-sm">Grouped Orders</span>
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs opacity-90">Eco-Friendly and Cost-Effective Delivery</div>
            </div>

            <div className="bg-indigo-400 text-white p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🌲</span>
                <span className="text-sm">Forest Impact</span>
              </div>
              <div className="text-2xl font-bold">0.3 m²</div>
              <div className="text-xs opacity-90">forest area protected</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Carbon Footprint Over Time</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={carbonData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Line 
                      type="monotone" 
                      dataKey="co2" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>

                </ResponsiveContainer>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-4 h-2 bg-red-400 mr-2"></div>
                <span className="text-sm text-gray-600">CO2 Emissions (kg)</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Green Points Earned</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pointsData} barCategoryGap="20%">
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Bar dataKey="points" fill="#22c55e" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-4 h-2 bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Green Points</span>
              </div>

            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-green-600 text-white p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🌱</div>
            <blockquote className="text-lg italic mb-2">
              "Every small action towards sustainability creates ripples of positive change for our planet."
            </blockquote>
            <p className="text-sm opacity-90">Thank you for making a difference with every order! 🌿</p>

          </div>
        </div>
      </div>
    </div>
  );
}
