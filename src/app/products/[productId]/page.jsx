"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/cartContext"; // ⬅️ import this
import { toast, ToastContainer } from "react-toastify";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const router = useRouter();
  const product = products.find((item) => item._id === productId);

  const [selectedImage, setSelectedImage] = useState(product?.image[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 8);

  // ✅ Handle Add to Cart
  const handleAddToCart = (item, size = null) => {
    console.log("add to cart clicked");

    if (item._id === product._id && !size) {
      toast.error("Please Select a Size");
      return;
    }

    addToCart({
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image[0],
      size: size,
      quantity: 1,
    });
    toast.success("Added to Cart");
    router.push("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 bg-white">
        {/* Left Section - Images */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
            {product.image.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={product.name + " thumb"}
                width={60}
                height={60}
                className={`cursor-pointer border rounded-md ${
                  selectedImage === img
                    ? "border-purple-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="w-full">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="rounded-lg object-contain w-full max-h-[400px]"
            />
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-700 text-sm mb-2">
            ⭐⭐⭐⭐ (1,892 ratings & 21,212 reviews)
          </p>
          <p className="text-gray-700 text-sm mb-4">{product.description}</p>
          <p className="text-purple-700 font-bold text-lg sm:text-xl mb-4">
            ₹{product.price}
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-1">Available Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-full text-sm cursor-pointer ${
                    selectedSize === size
                      ? "border-purple-500 bg-purple-100"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Offer Section */}
          <div className="bg-gray-100 p-4 rounded-md mb-4 text-sm">
            <h2 className="font-semibold mb-2">Available Offers</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>10% Instant Discount on Credit Cards</li>
              <li>5% Cashback on Rakshaa Pay</li>
              <li>No Cost EMI available</li>
              <li>Get additional ₹50 cashback on select wallets</li>
            </ul>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-4 text-sm mb-4">
            <div className="flex items-center gap-2">
              <span>🚚</span> <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔁</span> <span>7-Day Return</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span> <span>Cash on Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✔️</span> <span>100% Original</span>
            </div>
          </div>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md w-full sm:w-auto"
            onClick={() => handleAddToCart(product, selectedSize)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {similarProducts.map((item) => (
            <div
              key={item._id}
              className="bg-purple-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="cursor-pointer"
                onClick={() => router.push(`/products/${item._id}`)}
              >
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover mx-auto"
                />
                <p className="text-sm font-medium text-center mt-2 line-clamp-2">
                  {item.name}
                </p>
                <p className="text-center text-purple-700 font-bold">
                  ₹{item.price}
                </p>
              </div>
              <button
                className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 rounded-full"
                onClick={() => handleAddToCart(product, selectedSize)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6">
        {/* Graph Section */}
        <div className="md:w-1/3">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Ratings Summary</h2>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-8">{stars}★</span>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: `${60 - stars * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="md:w-2/3">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Rahul Sharma",
                rating: "★★★★★",
                comment:
                  "Really impressed with the quality of the product. Looks exactly like shown in the images. Delivery was fast and the packaging was neat.",
              },
              {
                name: "Anjali Mehta",
                rating: "★★★★☆",
                comment:
                  "Good quality and fit. However, delivery took a bit longer than expected.",
              },
              {
                name: "Sandeep Yadav",
                rating: "★★★★★",
                comment: "Excellent! Totally worth the price. Will buy again.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <p className="font-semibold text-purple-800">{review.name}</p>
                <p className="text-sm text-yellow-600 mb-1">{review.rating}</p>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
