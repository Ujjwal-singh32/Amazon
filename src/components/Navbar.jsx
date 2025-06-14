"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const items = [];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/products?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="sticky top-0">
      {/* Top nav */}
      <div className="flex items-center bg-[#131921] px-4 py-1 h-[60px] sticky top-0">
        {/* Logo */}
        <div className="flex items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            alt="Logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={90}
            height={30}
            className="cursor-pointer object-contain mt-2"
          />
        </div>

        {/* Delivery Location */}
        <div className="text-white ml-3 hidden sm:flex flex-col cursor-pointer">
          <p className="text-xs">Deliver to Jamshedpur 831014</p>
          <p className="font-bold text-sm">Update Location</p>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex items-center h-9 mx-4 rounded-md flex-grow bg-yellow-500"
        >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white h-full p-2 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
          />
          <button type="submit">
            <MagnifyingGlassIcon className="h-10 p-2 text-black" />
          </button>
        </form>

        {/* Right Nav */}
        <div className="text-white flex items-center text-xs space-x-6 ml-4 whitespace-nowrap">
          <div className="cursor-pointer" onClick={() => router.push("/profile")}>
            <p className="hover:underline">Hello, User</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="cursor-pointer " onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline font-extrabold md:text-sm ml-1">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-[#232F3E] text-white text-sm w-full px-6 py-2">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto gap-x-6 gap-y-2">
          <p className="flex items-center cursor-pointer">
            <Bars3Icon className="h-6 mr-1" /> All
          </p>
          <p className="cursor-pointer">Today's Deals</p>
          <p className="cursor-pointer hidden lg:inline-flex">Registry</p>
          <p className="cursor-pointer hidden lg:inline-flex">Customer Service</p>
          <p className="cursor-pointer hidden lg:inline-flex">Gift Cards</p>
          <p className="cursor-pointer hidden lg:inline-flex">Sell</p>
          <p className="cursor-pointer hidden lg:inline-flex">Amazon Pay</p>
          <p className="cursor-pointer hidden lg:inline-flex">Best Sellers</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
