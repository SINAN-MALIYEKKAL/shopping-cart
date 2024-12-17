import React from 'react'

export default function Cart() {
  return (
    <>
    <div className="w-full">
        <img
          className="w-full h-[280px] object-cover"
          src="/public/Group 78.png"
          alt="Shop Banner" />

    <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-6">
      {/* Cart Table */}
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-beige-100">
              <th className="p-4 border-b">Product</th>
              <th className="p-4 border-b">Price</th>
              <th className="p-4 border-b">Quantity</th>
              <th className="p-4 border-b">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="flex items-center p-4 border-b">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Product"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="p-4 border-b">Rs. 250,000.00</td>
              <td className="p-4 border-b">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-12 text-center border rounded-md"
                />
              </td>
              <td className="p-4 border-b">Rs. 250,000.00</td>
              <td className="p-4 border-b text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-full md:w-1/3 bg-beige-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-700">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-700 font-semibold">Total</span>
          <span className="text-gold-600 font-bold">Rs. 250,000.00</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Check Out
        </button>
      </div>
    </div>

    <div className="flex flex-col space-y-6 p-4">
      {/* Features Section */}
      <div className="flex flex-wrap justify-between items-center bg-beige-100 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m1-5a9 9 0 11-6.6 15.2A9 9 0 0115 2z"
            />
          </svg>
          <div>
            <h4 className="font-bold text-black">High Quality</h4>
            <p className="text-sm text-gray-700">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div>
            <h4 className="font-bold text-black">Warranty Protection</h4>
            <p className="text-sm text-gray-700">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h11M9 21H7a2 2 0 01-2-2v-4H3a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v8h3m8-6a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
          <div>
            <h4 className="font-bold text-black">Free Shipping</h4>
            <p className="text-sm text-gray-700">Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16h.01M12 16h.01M16 16h.01M9 20h6a2 2 0 002-2v-5a2 2 0 00-2-2h-1m-4 0H9a2 2 0 00-2 2v5a2 2 0 002 2z"
            />
          </svg>
          <div>
            <h4 className="font-bold text-black">24 / 7 Support</h4>
            <p className="text-sm text-gray-700">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
        </div>

    </>
  )
}
