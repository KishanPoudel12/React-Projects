import React from "react";
function Card2({value}) {
  console.log("Value In Cart ",value)
  return (
    <div className="max-w-lg mx-auto p-1 bg-white dark:bg-gray-800 border rounded-xl shadow-xl">
      <h2 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
        Hello world
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {
        value.map((item, index) => (
          <div
            key={index}
            className="w-[45%] bg-gray-100 dark:bg-gray-600 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 p-2"
          >
            <img
              src={item.imageUrl}
              alt={item.description}
              className="w-full h-22 object-contain rounded-md"
            />
            <h3 className="text-lg font-semibold mt-1 text-gray-800 dark:text-gray-200">
              <span className="text-blue-600 dark:text-blue-400 h-2.5">{item.name}</span>
            </h3>
          </div>
        ))
        }
      </div>
      <p className="text-xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4 p-3">
        Catagory
      </p>
    </div>
  );
}

export default Card2;
