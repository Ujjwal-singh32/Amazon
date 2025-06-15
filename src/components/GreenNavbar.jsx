import { useState } from "react";
import { FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function GreenNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaShoppingCart />
                    <span>Cart</span>
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
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaShoppingCart />
                        <span>Cart</span>
                    </div>
                    <a href="/" className="font-semibold hover:underline">
                        Amazon Home
                    </a>
                </div>
            )}
        </nav>
    );
}
