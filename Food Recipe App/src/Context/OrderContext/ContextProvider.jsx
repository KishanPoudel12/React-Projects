import React, { createContext, useState } from "react";
import { ORDER_OPERATIONS } from "../../utils/constant";
const OrderContext = createContext();

export const ContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  function handleOrderQuantity(itemId, operation) {
    if (operation === ORDER_OPERATIONS.INCREMENT) {
      setOrders((prevOrder) => {
        const updatedOrders = prevOrder.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedOrders;
      });
    }
    if (operation === ORDER_OPERATIONS.DECREMENT) {
      setOrders((prevOrder) => {
        const updatedOrders = prevOrder.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        return updatedOrders;
      });
    }
  }

  const addOrder = (item) => {
    setOrders((prev) => [...prev, { ...item, quantity: 1 }]);
    console.log("Item Added :", item);
  };

  const removeOrder = (item) => {
    setOrders((prev) => {
      const prevProd = [...prev];
      const removedProd = prevProd.filter((elem) => elem.title !== item.title);
      return removedProd;
    });
  };
  // console.log(orders)
  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, handleOrderQuantity }}
    >
      {children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
