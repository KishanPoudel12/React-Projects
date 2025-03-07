import React from 'react'

function Card({name,imageUrl,priceNew,reviewStars,description}) {
  return (
    <div>
      <div className="p-1 overflow-x-auto overflow-y-auto flex justify-between">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-yellow-300 dark:bg-yellow-100">
          <img
            className="w-full h-48 object-cover"
            src={imageUrl}
          />
          <div className="px-5 py-2">
            <div className="font-bold text-xl mb-1 text-gray-800">${priceNew}</div>
            <div className="font-bold text-xl mb-1 text-gray-800">{name}</div>
            <p className="text-gray-600 text-base line-clamp-3">{description}</p>
          </div>
          <div className="px-6 py-4 flex justify-between items-center">
            <button
              className={
                "bg-green-300 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-green-600"
              }
            >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card