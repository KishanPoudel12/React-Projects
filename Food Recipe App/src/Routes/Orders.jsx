import React, { useContext, useState } from "react";
import OrderContext from "../Context/OrderContext/ContextProvider";
import { FaShoppingCart } from "react-icons/fa";
import OrderCart from "../components/OrderCart";

function Orders() {
  const { orders } = useContext(OrderContext);

  let TotalPrice = orders.reduce((acc, curr) => {
    acc += curr.price.toFixed(4) * curr.quantity;
    return parseFloat(acc.toFixed(4));
  }, 0);

  return (
    <div className="z-10 min-h-screen overflow-x-auto overflow-y-auto dark:bg-gray-900 bg-white flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        Your Orders
      </h1>

      {orders && orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center align-center gap-6">
          {orders.map((item, ind) => (
            <OrderCart item={item} key={ind} />
          ))}

          <div className="order-amounts mt-6 text-white">
            <p className="text-lg font-bold mb-2">
              Total Products: {orders.length}
            </p>
            <p className="text-lg font-bold mb-2">Items</p>
            <ul className="list-disc pl-5">
              {orders.map((item, ind) => (
                <li key={ind} className="text-base">
                  {item.title}-x{item.quantity} - $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            {orders.length > 0 && (
              <h1 className="text-xl font-bold mt-4">Total: ${TotalPrice}</h1>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <FaShoppingCart className="ml-5 text-white h-10" />
          <h1 className="text-2xl text-center text-white">No Orders Placed</h1>
        </div>
      )}
    </div>
  );
}

export default Orders;
