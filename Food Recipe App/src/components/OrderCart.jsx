import React, { useState, useContext } from "react";
import OrderContext from "../Context/OrderContext/ContextProvider";
import { useNavigate } from "react-router-dom";
import { ORDER_OPERATIONS } from "../utils/constant";

function OrderCart({ item }) {
  const navigate = useNavigate();
  const { removeOrder, handleOrderQuantity } = useContext(OrderContext);
  const isLastItem = item.quantity === 1;

  function handleOrderClick(id) {
    navigate(`/recipes/${id}`);
  }

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-300 dark:bg-orange-400 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
      onClick={(e) => handleOrderClick(item.id)}
    >
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={item.thumbnail}
        alt={item.title}
      />
      <div className="px-5 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200 truncate">
          {item.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2">
          ${item.price}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-3 mb-4">
          {item.description}
        </p>
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-full text-white transition duration-300 ${
              isLastItem
                ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleOrderQuantity(item.id, ORDER_OPERATIONS.DECREMENT);
            }}
            disabled={isLastItem}
          >
            -1
          </button>
          <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
            {item.quantity}
          </span>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-green-600"
            onClick={(e) => {
              e.stopPropagation();
              handleOrderQuantity(item.id, ORDER_OPERATIONS.INCREMENT);
            }}
          >
            +1
          </button>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-red-600"
          onClick={(e) => {
            e.stopPropagation();
            removeOrder(item);
          }}
        >
          REMOVE ITEM
        </button>
      </div>
    </div>
  );
}

export default OrderCart;
