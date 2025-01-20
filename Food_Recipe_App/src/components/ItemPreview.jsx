import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderContext from "../Context/OrderContext/ContextProvider";

function ItemPreview() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  const { orders, addOrder, removeOrder } = useContext(OrderContext);

  let { id } = useParams();

  async function fetchSingleProduct() {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      if (data) {
        setLoading(false);
        setItem(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  // Check if the item exists in the orders
  const isExist = Boolean(orders.find((elem) => elem.id === item.id));

  function handlePreviewClick(item) {
    if (isExist) {
      removeOrder(item);
    } else {
      addOrder(item);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-9 z-10 overflow-x-auto overflow-y-auto dark:bg-gray-900 bg-white dark:text-white text-gray-800">
      {loading ? (
        <h1 className="text-2xl font-bold text-center text-orange-500">
          Loading! Please Wait
        </h1>
      ) : (
        item && (
          <div className="max-w-4xl mx-auto mt-100 dark:bg-orange-300 bg-orange-500 rounded-lg shadow-lg p-11 flex flex-col md:flex-row">
            <div className="item-image mb-4 md:mb-0 md:w-1/2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="info md:w-1/2 md:pl-6">
              <p className="text-2xl font-bold mb-2">Item Name: {item.title}</p>
              <p className="text-xl font-bold mb-2">
                Item Price: ${item.price}
              </p>
              <p className="text-xl font-bold mb-2">
                Item Category: {item.category}
              </p>
              <p className="text-xl font-bold mb-2">
                Item Brand: {item.brand ? item.brand : "Unspecified :)"}
              </p>
              <p className="text-xl font-bold mb-2">
                Item Warranty: {item.warrantyInformation}
              </p>
              <div className="mt-4">
                <p className="text-xl font-bold mb-2">Full Description:</p>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="carting">
                {isExist ? (
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-orange-600"
                    onClick={() => handlePreviewClick(item)}
                  >
                    REMOVE FROM CART
                  </button>
                ) : (
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-orange-600"
                    onClick={() => handlePreviewClick(item)}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      )}
      {error && (
        <h1 className="text-2xl font-bold text-center text-red-500">
          Error: {error}
        </h1>
      )}
    </div>
  );
}

export default ItemPreview;
