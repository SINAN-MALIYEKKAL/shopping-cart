import React from "react";
import { Link } from "react-router-dom";

const Smcart = () => {
  return (
    <div className=" flex justify-center items-center absolute top-20 right-0">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80" // Replace with the actual image URL
                alt="Asgaard sofa"
                className="w-16 h-16 rounded"
              />
              <div>
                {/* <h3 className="text-lg font-semibold">Asgaard sofa</h3>
                <p className="text-gray-500 text-sm">1 x Rs. 250,000.00</p> */}
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/80" // Replace with the actual image URL
                alt="Casaliving Wood"
                className="w-16 h-16 rounded"
              />
              <div>
                {/* <h3 className="text-lg font-semibold">Casaliving Wood</h3>
                <p className="text-gray-500 text-sm">1 x Rs. 270,000.00</p> */}
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            {/* <span className="text-lg font-medium">Subtotal</span>
            <span className="text-lg font-semibold text-yellow-600">Rs. 520,000.00</span> */}
          </div>
        </div>

        <div className="mt-6 flex justify-between space-x-4">
          <Link to={'/cart'} className="flex-1 text-center bg-gray-200 w-11 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300"  >
            Cart
          </Link>
          <button className="flex-1 bg-yellow-600 w-[120px] text-white py-2 rounded-lg font-medium hover:bg-yellow-700">
            Checkout
          </button>
          <button className="flex-1 bg-gray-200 w-[120px] text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Smcart;
