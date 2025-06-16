"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function GreenNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const { cartItems } = useCart();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <nav className="sticky top-0 z-50 bg-green-600 text-white px-4 py-2 flex items-center justify-between flex-wrap">
                {/* Basic navbar structure without dynamic content */}
                <div className="flex items-center space-x-2 text-xl font-bold">
                    <Image
                        alt="Logo"
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        width={90}
                        height={30}
                        className="cursor-pointer object-contain mt-2"
                    />
                    <span> Greenkart</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <FaShoppingCart />
                        <span>Cart</span>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="sticky top-0 z-50 bg-green-600 text-white px-4 py-2 flex items-center justify-between flex-wrap">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2 text-xl font-bold">
                <Image
                    onClick={() => router.push("/")}
                    alt="Logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    width={90}
                    height={30}
                    className="cursor-pointer object-contain mt-2"
                />
                <span> Greenkart</span>
            </div>

            {/* Middle: Search bar */}
            <div className="hidden md:flex flex-1 mx-6">
                <input
                    type="text"
                    placeholder="Search green products"
                    className="flex-1 p-2 rounded-l-md bg-white text-green-700 placeholder-green-600 font-semibold"
                />
                <button
                    type="submit"
                    className="bg-white hover:bg-green-600 rounded-r-md transition-colors duration-200"
                >
                    <MagnifyingGlassIcon className="h-10 p-2 text-black hover:text-white" />
                </button>
            </div>

            {/* Right: Buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <div 
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={() => router.push('/cart')}
                >
                    <FaShoppingCart />
                    <span>Cart</span>
                    {cartItems.length > 0 && (
                        <span className="bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                            {cartItems.length}
                        </span>
                    )}
                </div>
                <a href="/" className="font-semibold hover:underline">
                    Amazon Home
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="w-full mt-2 flex flex-col space-y-2 md:hidden">
                    <input
                        type="text"
                        placeholder="Search green products"
                        className="p-2 text-green-700 placeholder-green-600 font-semibold rounded bg-white"
                    />

                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <div 
                        className="flex items-center space-x-1 cursor-pointer"
                        onClick={() => router.push('/cart')}
                    >
                        <FaShoppingCart />
                        <span>Cart</span>
                        {cartItems.length > 0 && (
                            <span className="bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                    <a href="/" className="font-semibold hover:underline">
                        Amazon Home
                    </a>
                </div>
            )}
        </nav>
    );
}
