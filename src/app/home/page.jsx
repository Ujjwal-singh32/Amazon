"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useState  , useEffect} from "react";
const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"), {
  ssr: false,
});
const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  ssr: false,
});
const CategoryCard = dynamic(() => import("@/components/CategoryCard"), {
  ssr: false,
});
const ProductSlider = dynamic(() => import("@/components/ProductSlider"), {
  ssr: false,
});
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample data for categories
const categories = [
  {
    title: "Electronics",
    image: "/P1.jpg",
    link: "/products?category=electronics",
  },
  {
    title: "Fashion",
    image: "/P2.jpg",
    link: "/products?category=fashion",
  },
  {
    title: "Home & Kitchen",
    image: "/P3.jpg",
    link: "/products?category=home",
  },
  {
    title: "Beauty",
    image: "/P1.jpg",
    link: "/products?category=beauty",
  },
  {
    title: "Books",
    image: "/P2.jpg",
    link: "/products?category=books",
  },
  {
    title: "Sports",
    image: "/P3.jpg",
    link: "/products?category=sports",
  },
  // Added more for demoing wider grid
  {
    title: "Health & Personal Care",
    image: "/P1.jpg",
    link: "/products?category=health",
  },
  {
    title: "Toys & Games",
    image: "/P2.jpg",
    link: "/products?category=toys",
  },
  {
    title: "Automotive",
    image: "/P3.jpg",
    link: "/products?category=automotive",
  },
  {
    title: "Pet Supplies",
    image: "/P1.jpg",
    link: "/products?category=pets",
  },
];

// Sample data for products
const products = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    category: "Electronics",
    image: "/P1.jpg",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "Smart Watch Series 5",
    price: 299.99,
    description:
      "Advanced smartwatch with health monitoring and fitness tracking features.",
    category: "Electronics",
    image: "/P2.jpg",
    rating: { rate: 4.8, count: 89 },
  },
  {
    id: 3,
    title: "Professional Blender",
    price: 79.99,
    description: "High-powered blender perfect for smoothies, soups, and more.",
    category: "Home & Kitchen",
    image: "/P3.jpg",
    rating: { rate: 4.3, count: 156 },
  },
  {
    id: 4,
    title: "Yoga Mat Premium",
    price: 29.99,
    description:
      "Non-slip yoga mat with perfect thickness for comfort and stability.",
    category: "Sports",
    image: "/P1.jpg",
    rating: { rate: 4.6, count: 203 },
  },
  // Added more for demoing wider grid
  {
    id: 5,
    title: "4K Smart LED TV",
    price: 499.99,
    description: "Stunning 4K resolution with smart features and sleek design.",
    category: "Electronics",
    image: "/P2.jpg",
    rating: { rate: 4.7, count: 95 },
  },
  {
    id: 6,
    title: "Espresso Machine",
    price: 149.99,
    description: "Brew barista-quality espresso at home with ease.",
    category: "Home & Kitchen",
    image: "/P3.jpg",
    rating: { rate: 4.2, count: 78 },
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: 49.99,
    description: "High-precision gaming mouse with customizable RGB lighting.",
    category: "Electronics",
    image: "/P1.jpg",
    rating: { rate: 4.9, count: 300 },
  },
  {
    id: 8,
    title: "Air Fryer 5.8 QT",
    price: 89.99,
    description:
      "Healthy cooking with little to no oil, perfect for crispy results.",
    category: "Home & Kitchen",
    image: "/P2.jpg",
    rating: { rate: 4.4, count: 180 },
  },
];

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  // Guard any DOM-dependent logic until after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      <main className="py-0 space-y-8 px-2">
        {/* Image Carousel */}
        <div className="relative mb-8 shadow-lg">
          <ImageCarousel />
        </div>

        {/* Prime Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg shadow-xl">
          <div className="p-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
              Unlock exclusive benefits with Amazon Prime.{" "}
              <span className="font-bold">Join today!</span>
            </p>
            <Button
              variant="secondary"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow-md"
            >
              Try Prime free for 30 days
            </Button>
          </div>
        </Card>

        {/* Featured Products */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 px-2">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>

        {/* Product Sliders */}
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 px-2">Deals of the Day</h2>
            <ProductSlider>
              {products.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  rating={product.rating}
                />
              ))}
            </ProductSlider>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 px-2">Best Sellers</h2>
            <ProductSlider>
              {products.slice(4, 12).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  rating={product.rating}
                />
              ))}
            </ProductSlider>
          </div>
        </div>

        {/* Shop by Category */}
        <section className="bg-white rounded-lg shadow-md mb-8 py-6">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  image={category.image}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Products (Product Cards) */}
        <section className="bg-white rounded-lg shadow-md mb-8 py-6">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Recommended Products
              </h2>
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-800 text-base"
              >
                Discover more
              </Button>
            </div>
            <ProductSlider>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </ProductSlider>
          </div>
        </section>

        {/* Best Sellers (Product Cards) */}
        <section className="bg-white rounded-lg shadow-md py-6">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-800 text-base"
              >
                Explore all
              </Button>
            </div>
            <ProductSlider>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </ProductSlider>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
