import React from "react";
function Filter({ isFilterOpen,setIsFilterOpen }) {
  return (
    <div
      className={`absolute top-33 left-0 w-64 h-220% min-h-full  bg-gray-100 dark:bg-gray-800 shadow-lg p-4 transform ${
        isFilterOpen ? "translate-x-0 z-[100]" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300"
        onClick={setIsFilterOpen}
      >
        ✖
      </button>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Colors
      </h2>
      <ul className="space-y-2">
        <li>
          <label>
            <input type="radio" name="color" value="red" className="mr-2" /> Red
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="color" value="green" className="mr-2" />{" "}
            Green
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="color" value="blue" className="mr-2" />{" "}
            Blue
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="color" value="white" className="mr-2" />{" "}
            White
          </label>
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4 mb-2">
        Price
      </h2>
      <ul className="space-y-2">
        <li>
          <label>
            <input type="radio" name="price" value="$50" className="mr-2" /> $50
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="price" value="$50-100" className="mr-2" />{" "}
            $50-100
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="$100-200"
              className="mr-2"
            />{" "}
            $100-200
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="Over $200"
              className="mr-2"
            />{" "}
            Over $200
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
