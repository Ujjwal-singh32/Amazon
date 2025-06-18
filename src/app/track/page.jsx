// pages/track-order.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function OrderTracking() {
  const [showReschedule, setShowReschedule] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const deliverySteps = [
    {
      id: 'confirmed',
      title: 'Order confirmed',
      date: 'Dec 15, 2024 - 3:15 PM',
      description: 'Your order has been confirmed and is being prepared',
      completed: true
    },
    {
      id: 'shipped',
      title: 'Package shipped',
      date: 'Dec 16, 2024 - 2:30 PM',
      description: 'Departed from fulfillment center',
      completed: true
    },
    {
      id: 'transit',
      title: 'In transit',
      date: 'Dec 17, 2024 - 11:45 PM',
      description: 'Package is traveling to the next facility',
      completed: true
    },
    {
      id: 'facility',
      title: 'Package arrived at delivery facility',
      date: 'Dec 18, 2024 - 5:15 AM',
      description: 'Brooklyn, NY facility',
      completed: true
    },
    {
      id: 'delivery',
      title: 'Out for delivery',
      date: 'Dec 18, 2024 - 7:30 AM',
      description: 'Your package is on the delivery truck',
      completed: true,
      current: true
    }
  ];

  return (
    <>
      <Head>
        <title>Track Package - Order Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar/>
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <nav className="text-sm">
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Your Account</span>
                <span className="mx-2 text-gray-400">›</span>
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Your Orders</span>
                <span className="mx-2 text-gray-400">›</span>
                <span className="text-orange-600 font-medium">Order Details</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Order Details Header */}
          <div className="bg-white p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-normal text-gray-900 mb-4">Order Details</h1>
                <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
                  <div>
                    <span className="text-gray-600">Order placed </span>
                    <span className="font-medium">24 May 2025</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Order number </span>
                    <span className="font-medium">8324-1298531</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-medium mr-2">Invoice</span>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Order Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 border-t border-gray-200">
              {/* Ship to */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Ship to</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Jane Smith</p>
                  <p>Hostel E</p>
                  <p>NIT Jamshedpur</p>
                  <p>Jamshedpur, Jharkhand 831014</p>
                  <p>India</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Payment Methods</h3>
                <p className="text-gray-700">Pay on Delivery</p>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Item(s) Subtotal:</span>
                    <span className="text-gray-900">₹397.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="text-gray-900">₹120.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cash/Pay on Delivery fee:</span>
                    <span className="text-gray-900">₹10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-gray-900">₹527.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Promotion Applied:</span>
                    <span className="text-gray-900">-₹120.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Grand Total:</span>
                    <span className="text-gray-900">₹407.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Delivery Status</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Out for Delivery
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expected delivery: Today by 9:00 PM</p>
                  <p className="text-gray-600 text-sm">Your package is out for delivery and will arrive today</p>
                </div>
              </div>
            </div>

            {/* Delivery Timeline */}
            <div className="space-y-4">
              {deliverySteps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.current 
                        ? 'bg-green-500 text-white' 
                        : step.completed 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {step.completed ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.date}</p>
                    <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Package Details</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Sony Headphones" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Sony WH-1000XM4 Wireless Noise Canceling Headphones</h3>
                <p className="text-sm text-gray-600 mt-1">Color: Black | Quantity: 1</p>
                <p className="font-bold text-lg mt-2">$89.99</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tracking Number</h4>
                <p className="text-gray-700 font-mono">1Z999AA1234567890</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Carrier</h4>
                <p className="text-gray-700">UPS Ground</p>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setShowReschedule(!showReschedule)}
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Reschedule Delivery</h3>
                    <p className="text-sm text-gray-600">Choose a different delivery date</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setShowInstructions(!showInstructions)}
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Delivery Instructions</h3>
                    <p className="text-sm text-gray-600">Add special delivery notes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Need help with your order?</h2>
                <p className="text-gray-600">Contact our customer service team</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
