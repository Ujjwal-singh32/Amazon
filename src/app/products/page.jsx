"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { products } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/cartContext";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const { addToCart } = useCart();
  const [results, setResults] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setResults(filtered);
    }
  }, [query]);

  const sortResults = (items) => {
    let sorted = [...items];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  };

  const sortedResults = sortResults(results);

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Search Results for: <span className="text-purple-600">"{query}"</span>
        </h1>

        {/* Mobile Filter Button */}
        <div className="lg:hidden text-right mb-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => setShowMobileFilters(true)}
          >
            Filter
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters for Desktop */}
          <aside className="hidden lg:block w-full lg:w-1/4 bg-white p-4 rounded shadow-md h-fit">
            <Filters sortBy={sortBy} setSortBy={setSortBy} />
          </aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {sortedResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedResults.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                  >
                    <div
                      onClick={() => router.push(`/products/${product._id}`)}
                      className="cursor-pointer"
                    >
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="w-full h-[250px] object-contain mx-auto"
                      />
                    </div>

                    <div className="mt-3">
                      <h2 className="text-md font-semibold leading-tight line-clamp-2 h-[40px]">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2 h-[38px]">
                        {product.description}
                      </p>
                      <p className="text-black font-bold text-lg mt-2">
                        ₹{product.price}
                      </p>
                      <button
                        className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow"
                        onClick={() =>
                          addToCart({
                            id: product._id,
                            name: product.name,
                            price: product.price,
                            image: product.image[0],
                          })
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[90%] max-w-sm max-h-[90%] overflow-y-auto shadow-lg relative">
            <div className="text-right mb-2">
              <button
                className="text-gray-600 font-bold text-lg"
                onClick={() => setShowMobileFilters(false)}
              >
                ✕
              </button>
            </div>
            <Filters sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

// Filter Component with Sort Dropdown
const Filters = ({ sortBy, setSortBy }) => {
  return (
    <>
      {/* Sort Dropdown */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="">Select</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>

      {/* Delivery Day Filters */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Delivery Day</h3>
        <div className="space-y-1 text-sm">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Get It Today
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Get It by Tomorrow
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Get It in 2 Days
          </label>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="space-y-1 text-sm">
          {["Allen Solly", "Lymio", "LEOTUDE", "Van Heusen"].map((brand) => (
            <label className="block" key={brand}>
              <input type="checkbox" className="mr-2" />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold mb-2">Men's Size</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"].map(
            (size) => (
              <span
                key={size}
                className="border px-2 py-1 rounded-md cursor-pointer"
              >
                {size}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
