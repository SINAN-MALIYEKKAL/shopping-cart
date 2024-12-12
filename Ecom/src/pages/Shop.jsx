import React, { useEffect, useState } from "react";

export default function Shop() {
  const [view, setView] = useState("grid");
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("default");
  const [data, setData] = useState([]); // State to store the API data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://e-commerce-backend-jt6u.onrender.com/api/product/get"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData); 
        console.log(jsonData);
        
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Run only once when the component mounts

  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <img
          className="w-full h-[280px] object-cover"
          src="/public/Group 78.png"
          alt="Shop Banner"
        />
        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-between p-4 bg-beige-50 border border-gray-200">
          <button className="px-4 py-2 text-sm font-medium border rounded bg-gray-100 hover:bg-gray-200">
            Filter
          </button>

          {/* View Toggle Section */}
          <div className="flex gap-2">
            <button
              className={`p-2 text-lg border rounded ${
                view === "grid" ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setView("grid")}
            >
              🔳
            </button>
            <button
              className={`p-2 text-lg border rounded ${
                view === "list" ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setView("list")}
            >
              📋
            </button>
          </div>

          {/* Results Info */}
          <div className="text-sm text-gray-600">
            Showing 1–{Math.min(showCount, data.length)} of {data.length} results
          </div>

          {/* Show Count Section */}
          <div className="flex items-center gap-2">
            <label htmlFor="show" className="text-sm text-gray-600">
              Show
            </label>
            <input
              type="number"
              id="show"
              min="1"
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="w-16 p-1 text-center border rounded"
            />
          </div>

          {/* Sort By Section */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-by" className="text-sm text-gray-600">
              Sort by
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-1 text-sm border rounded"
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex justify-center">
      <div
        className="w-[85%] h-auto grid lg:grid-cols-4 md:grid-cols-3 gap-10 pt-10" 
         
      >
        {data.map((product) => (
          <div
            key={product._id} // Replace `_id` with the unique identifier in your API data
            className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border"
          >
            {/* Product Image Section */}
            <div className="relative">
              <img
                src={product.images} 
                alt={product.name}
                className="w-full h-fit object-cover"
              />
              
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                 -30%
                </span>
              
            </div>

            {/* Product Info Section */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              
              <div >
                <span className="text-lg font-bold text-gray-800">
                  RS {product.price.toLocaleString("id-ID")}
                </span>
            
              
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
