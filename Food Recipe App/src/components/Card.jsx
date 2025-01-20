import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderContext from "../Context/OrderContext/ContextProvider";

function Card({ recipe }) {
  const { addOrder, orders } = useContext(OrderContext);
  const navigate = useNavigate();

  const isExist = Boolean(orders.find((elem) => elem.id === recipe.id));

  function handleAddToCart(e) {
    e.stopPropagation();
    if (isExist) {
      navigate(`/orders`);
      return;
    }
    addOrder(recipe);
  }

  function handleCardClick(e) {
    navigate(`/recipes/${recipe.id}`);
  }

  return (
    <div
      className="p-10 overflow-x-auto overflow-y-auto flex justify-center"
      onClick={handleCardClick}
    >
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-yellow-300 dark:bg-yellow-100">
        <img
          className="w-full h-48 object-cover"
          src={recipe.thumbnail}
          alt={recipe.title}
        />
        <div className="px-5 py-2">
          <div className="font-bold text-xl mb-1 text-gray-800">
            ${recipe.price}
          </div>
          <div className="font-bold text-xl mb-1 text-gray-800">
            {recipe.title}
          </div>
          <p className="text-gray-600 text-base line-clamp-3">
            {recipe.description}
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <button
            className={
              isExist
                ? "bg-green-300 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-green-600"
                : "bg-orange-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-orange-600"
            }
            onClick={handleAddToCart}
          >
            {isExist ? `GO TO CART` : `ADD TO CART`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
