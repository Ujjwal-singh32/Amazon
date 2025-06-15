import { useState } from "react";
import { FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

export default function GreenNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <ClerkProvider>
            <nav className="bg-green-600 text-white px-4 py-2 flex items-center justify-between flex-wrap">
                {/* Left: Logo */}
                <div className="flex items-center space-x-2 text-xl font-bold">
                    <FaLeaf className="text-white" />
                    <span>Amazon Green Kart</span>
                </div>

                {/* Middle: Search bar */}
                {/* Middle: Search bar */}
                <div className="hidden md:flex flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search green products"
                        className="flex-1 p-2 rounded-l-md bg-white text-green-700 placeholder-green-600 font-semibold"
                    />
                    <button className="bg-white p-2 rounded-r-md text-green-600">
                        🔍
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
        </ClerkProvider>
    );
}
