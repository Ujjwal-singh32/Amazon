"use client";
import React, { useState, useEffect } from 'react';
import { Check, Truck, ShoppingCart, Gift } from 'lucide-react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import Image from 'next/image';
import { useUser } from "@clerk/nextjs";

export default function AmazonCheckout() {
  const router = useRouter();
  const { user } = useUser();
  const [summary, setSummary] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("checkoutSummary");
    if (data) {
      setSummary(JSON.parse(data));
    }
  }, []);


  const {
    cartItems,
    getTotalPrice
  } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [addresses, setAddresses] = useState([
    {
      name: "John Doe",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      country: "United States",
      pincode: "10001",
    },
    {
      name: "Jane Smith",
      street: "456 Park Avenue",
      city: "Los Angeles",
      state: "CA",
      country: "United States",
      pincode: "90001",
    },
    {
      name: "Alice Johnson",
      street: "789 Broadway",
      city: "Chicago",
      state: "IL",
      country: "United States",
      pincode: "60601",
    },
  ]);

  if (!summary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold animate-pulse text-gray-600">
          Loading Checkout...
        </div>
      </div>
    );
  }
  const subtotal = getTotalPrice();
  const shipping = summary.shipping;
  const packagePrice = summary.packaging.price;
  const discount = summary.discount;

  const calculateTotal = () => {
    if (!summary) return 0;

    const subtotal = getTotalPrice();
    const shipping = summary.shipping || 0;
    const packaging = summary.packaging?.price || 0;
    const discount = summary.discount || 0;

    const total = subtotal + shipping + packaging - discount;
    return total;
  };


  const handleSaveAddress = () => {
    setAddresses([...addresses, newAddress]);
    setSelectedIndex(addresses.length); // select newly added
    setNewAddress({ name: "", street: "", city: "", state: "", country: "", pincode: "" });
    setShowAddForm(false);
    setIsChanging(false);
  };

  const handleProceed = () => {
    if (!user) return alert("Please log in");

    const orderPayload = {
      user: user.id, // Clerk user ID
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        priceAtPurchase: item.price,
      })),
      totalAmount: calculateTotal(),
      paymentStatus: "pending",
      orderStatus: "Pending",
      shippingAddress: {
        street: addresses[selectedIndex].street,
        city: addresses[selectedIndex].city,
        state: addresses[selectedIndex].state,
        country: addresses[selectedIndex].country,
        pincode: addresses[selectedIndex].pincode,
      },
      deliveryOption: summary.isGroupOrder ? "group" : "individual",
      placedAt: new Date().toISOString(),
      packagingPoints: summary.packaging.points
    };

    const key = `checkout_${user.id}`;
    localStorage.setItem(key, JSON.stringify(orderPayload));
    router.push("/rozarpay");
  };
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
                  <span className="text-lg font-medium">
                    {cartItems.length} item{cartItems.length > 1 ? 's' : ''} ready for delivery
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-200 shadow-lg">
              <div className="text-sm text-blue-700 font-medium">Subtotal ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</div>
              <div className="text-3xl font-bold text-indigo-800">₹{calculateTotal().toFixed(2)}</div>
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
                <button
                  onClick={() => setIsChanging(!isChanging)}
                  className="text-orange-500 hover:underline"
                >
                  {isChanging ? "Cancel" : "Change"}
                </button>
              </div>

              {!isChanging && (
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-semibold">{addresses[selectedIndex].name}</div>
                  <div className="text-gray-600">{addresses[selectedIndex].street}</div>
                  <div className="text-gray-600">
                    {addresses[selectedIndex].city}, {addresses[selectedIndex].state}{" "}
                    {addresses[selectedIndex].pincode}
                  </div>
                  <div className="text-gray-600">{addresses[selectedIndex].country}</div>
                </div>
              )}

              {isChanging && (
                <div className="space-y-4">
                  {addresses.map((addr, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`border p-4 rounded-lg cursor-pointer ${selectedIndex === index
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200"
                        }`}
                    >
                      <div className="font-semibold">{addr.name}</div>
                      <div className="text-gray-600">{addr.street}</div>
                      <div className="text-gray-600">
                        {addr.city}, {addr.state} {addr.pincode}
                      </div>
                      <div className="text-gray-600">{addr.country}</div>
                    </div>
                  ))}

                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="mt-2 text-orange-500 hover:underline"
                  >
                    {showAddForm ? "Cancel" : "Add New Address"}
                  </button>

                  {showAddForm && (
                    <div className="mt-4 space-y-2">
                      {["name", "street", "city", "state", "country", "pincode"].map((field) => (
                        <input
                          key={field}
                          type="text"
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                          className="w-full border rounded px-3 py-2"
                          value={newAddress[field]}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, [field]: e.target.value })
                          }
                        />
                      ))}
                      <button
                        onClick={handleSaveAddress}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      >
                        Save Address
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>



            {/* Order Type & Packaging */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-semibold">Order Type & Packaging</h2>
              </div>

              <div className="space-y-4">
                {/* Order Type */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-green-800">
                        Selected Order Type:{" "}
                        {summary.orderType === "group" ? "Group Order" : "Individual Order"}
                      </div>
                      <div className="text-sm text-green-600">
                        {summary.orderType === "group"
                          ? "Your order will be grouped with nearby orders to reduce shipping costs"
                          : "This order will be delivered individually with regular shipping"}
                      </div>
                    </div>
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                {/* Packaging */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-800">
                        Selected Packaging: {summary.packaging?.title}
                      </div>
                      <div className="text-sm text-blue-600">
                        {summary.packaging?.desc}
                      </div>
                      <div className="text-sm text-blue-500 mt-1">
                        Packaging Cost: ₹{summary.packaging?.price}
                      </div>
                    </div>
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>


            {/* Group Order Notice */}
            {summary.orderType === "group" && (
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
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={"product image"}
                          width={64} // or 128, depending on your layout
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-gray-800 line-clamp-2">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">Size: {item.size}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                        <div className="font-semibold text-gray-900">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Items ({cartItems.length}{cartItems.length > 1 ? '' : ''}):</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping & handling:</span>
                    <span>₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>packaging Price:</span>
                    <span>₹{packagePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Discount:</span>
                    <span>- ₹{discount.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span className="text-red-600">Order Total:</span>
                    <span className="text-red-600">₹{calculateTotal().toFixed(2)}</span>

                  </div>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                {/* Proceed to Payment Button */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors shadow-md" onClick={handleProceed}>
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