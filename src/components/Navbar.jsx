"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from "@clerk/nextjs";

function Navbar() {
  const router = useRouter();
  const items = [];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/products?query=${encodeURIComponent(searchTerm)}`);
  };
  const { user } = useUser();

  return (
    <div className="sticky top-0 z-50">
      {/* Top nav */}
      <div className="flex items-center bg-[#131921] px-4 py-1 h-[60px]">
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
          <SignedIn>
            <div className="cursor-pointer flex items-center space-x-2">
              <UserButton afterSignOutUrl="/home" />
              {user && (
                <button
                  onClick={() => router.push("/profile")}
                  className="hidden sm:inline font-extrabold md:text-sm text-white hover:underline"
                >
                  <div className="text-center">Hi</div>
                  <div className="text-center">{user.firstName}</div>
                </button>
              )}




            </div>
          </SignedIn>

          <SignedOut>
            <div className="cursor-pointer" onClick={() => router.push("/home")}>
              <SignInButton mode="modal">
                <p className="hover:underline">Sign In</p>
              </SignInButton>
            </div>
          </SignedOut>

          <div className="cursor-pointer " onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
  className="relative flex items-center cursor-pointer"
  onClick={() => router.push("/cart")}
>
  {/* Cart Icon Container */}
  <div className="relative">
    <ShoppingCartIcon className="h-10 w-10 text-white" />

    {/* Badge aligned inside the basket area */}
   <span className="absolute top-[4.5px] right-2 h-4 w-4 bg-yellow-400 rounded-full text-black text-[10px] font-bold flex items-center justify-center shadow-sm">
  {items.length}
</span>




  </div>

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
