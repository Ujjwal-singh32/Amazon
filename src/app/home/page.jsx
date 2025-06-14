export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <header className="bg-purple-700 text-white py-4 px-6 flex justify-between items-center rounded-md mb-6">
        <h1 className="text-xl font-bold">ShopEasy</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded text-black w-1/2"
        />
        <button className="bg-white text-purple-700 px-4 py-1 rounded font-semibold">
          Cart (0)
        </button>
      </header>

      {/* Dummy Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded shadow flex flex-col items-center"
          >
            <div className="w-32 h-32 bg-gray-200 mb-3" />
            <h2 className="font-semibold mb-1">Product {item}</h2>
            <p className="text-sm text-gray-600 mb-2">₹{item * 499}</p>
            <button className="bg-purple-700 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
