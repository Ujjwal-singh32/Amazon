"use client";

import React from "react";
import { FaLeaf } from "react-icons/fa";
import GreenNavbar from "@/components/GreenNavbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";


const dummyProducts = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    brand: "GreenLife",
    price: "$24.99",
    tags: ["Green Leader", "Low Carbon Logistics"],
    grade: "A",
    energy: 80,
    emissions: 60,
    image: "/product.webp"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    brand: "EcoWear",
    price: "$26.99",
    tags: ["Sustainable Materials"],
    grade: "B",
    energy: 65,
    emissions: 40,
    image: "/product.webp"
  },
  {
    id: 3,
    name: "Bamboo Cutlery Set",
    brand: "EcoEssentials",
    price: "$19.99",
    tags: ["Green Leader", "Zero Waste"],
    grade: "A",
    energy: 90,
    emissions: 30,
    image: "/product.webp"
  },
  {
    id: 4,
    name: "Reusable Grocery Bags",
    brand: "EcoSmart",
    price: "$14.99",
    tags: ["Reusable", "Eco Friendly"],
    grade: "A",
    energy: 70,
    emissions: 35,
    image: "/product.webp"
  },
  {
    id: 5,
    name: "Compostable Plates",
    brand: "BioWare",
    price: "$12.99",
    tags: ["Compostable", "Biodegradable"],
    grade: "B",
    energy: 55,
    emissions: 45,
    image: "/product.webp"
  },
  {
    id: 6,
    name: "Solar Powered Light",
    brand: "SunEco",
    price: "$34.99",
    tags: ["Solar", "Energy Efficient"],
    grade: "A",
    energy: 95,
    emissions: 10,
    image: "/product.webp"
  },
  {
    id: 7,
    name: "Recycled Notebook",
    brand: "PaperLoop",
    price: "$7.99",
    tags: ["Recycled", "Zero Waste"],
    grade: "A",
    energy: 50,
    emissions: 20,
    image: "product.webp"
  },
  {
    id: 8,
    name: "Natural Fiber Doormat",
    brand: "EcoLiving",
    price: "$22.50",
    tags: ["Natural Fiber", "Durable"],
    grade: "B",
    energy: 60,
    emissions: 50,
    image: "/product.webp"
  },
  {
    id: 9,
    name: "Organic Herbal Tea",
    brand: "GreenSip",
    price: "$10.99",
    tags: ["Organic", "Healthy Living"],
    grade: "A",
    energy: 40,
    emissions: 15,
    image: "/product.webp"
  },
  {
    id: 10,
    name: "Eco-Friendly Phone Case",
    brand: "GreenTech",
    price: "$18.99",
    tags: ["Biodegradable", "Sustainable"],
    grade: "A",
    energy: 75,
    emissions: 30,
    image: "/product.webp"
  },
  {
    id: 11,
    name: "Recycled Notebook",
    brand: "PaperLoop",
    price: "$7.99",
    tags: ["Recycled", "Zero Waste"],
    grade: "A",
    energy: 50,
    emissions: 20,
    image: "product.webp"
  },
  {
    id: 12,
    name: "Natural Fiber Doormat",
    brand: "EcoLiving",
    price: "$22.50",
    tags: ["Natural Fiber", "Durable"],
    grade: "B",
    energy: 60,
    emissions: 50,
    image: "/product.webp"
  }


];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <GreenNavbar />

      {/* Hero Section */}
       <section className="bg-green-50 py-5 md:py-9 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-left w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-green-700 flex items-center gap-2 justify-center md:justify-start animate-bounce">
              <FaLeaf className="text-green-600" /> Greenkart
            </h1>
            <p className="text-md md:text-xl text-green-800 mt-2">
              Where Every Purchase Plants a Better Future.
            </p>
            <button
              onClick={() => router.push("/profile")}
              className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
            >
              Explore Green Contribution
            </button>

          </div>
        </div>
        <img
          src="/env2.jpeg"
          alt="Green Mission"
          className="mt-4 md:mt-0 w-5/6 md:w-[55%] h-[160px] md:h-[240px] rounded-lg shadow"
        />
      </section>


      {/* Category Sections */}
      {[
        { title: "Electronics", range: [0, 4] },
        { title: "Clothing", range: [4, 8] },
        { title: "Accessories", range: [8, 12] },
      ].map((section, idx) => (
        <section key={idx} className="p-4 bg-green-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl md:text-2xl font-bold text-green-800">{section.title}</h2>
            <a href="#" className="text-green-600 hover:underline text-sm md:text-base">See All</a>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dummyProducts.slice(section.range[0], section.range[1]).map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden relative">
                <div className="absolute top-2 right-2 bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                  {product.grade}
                </div>
                <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <h2 className="text-base font-semibold text-green-700">{product.name}</h2>
                  <p className="text-xs text-gray-600">{product.brand}</p>
                  <p className="text-right font-bold text-green-600 text-sm">{product.price}</p>
                  <div className="flex flex-wrap gap-2 my-1">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-semibold mt-1 flex items-center gap-1 text-black">
                    Sustainability Score <span className="text-green-600">❔</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-gray-600">Energy Use</div>
                  <div className="bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-600 h-1.5 rounded-full"
                      style={{ width: `${product.energy}%` }}
                    ></div>
                  </div>
                  <div className="mt-0.5 text-[10px] text-gray-600">Emissions</div>
                  <div className="bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: `${product.emissions}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <button className="bg-green-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-green-700">
                      🌿 View Details
                    </button>
                     <button className="border border-green-600 text-green-700 text-sm px-3 py-1 rounded-lg hover:bg-green-50">
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      {/* Footer Section */}
      <Footer />
    </>
  );
}
