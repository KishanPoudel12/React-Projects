import React, { useState } from 'react'

function Recommended({ setIsFilterOpen }) {
  return (
    <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-800">
      <button
        className="p-2 text-xl bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
        onClick={setIsFilterOpen}
      >
        ⏳
      </button>
      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
        All Products
      </button>
      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
        Kitchen
      </button>
      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
        Kids
      </button>
      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
        Home
      </button>
    </div>
  );
}

export default Recommended;
