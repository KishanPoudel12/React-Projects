import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import OrderContext from "../Context/OrderContext/ContextProvider";
import { ThemeContext } from "../Context/OrderContext/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { orders } = useContext(OrderContext);
  const { isDarkTheme, themeToggler } = useContext(ThemeContext);

  return (
    <header
      className={`bg-transparent p-3 pb-3 top-0 fixed w-full z-20 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-2xl font-bold flex items-center text-orange-500">
          <FaShoppingCart className="mr-2" /> ByProduct
        </h3>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : `${isDarkTheme ? "text-white" : "text-black"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : `${isDarkTheme ? "text-white" : "text-black"}`
                }
              >
                Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : `${isDarkTheme ? "text-white" : "text-black"}`
                }
              >
                Orders
                <div className="absolute -top-100 -right-50 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md font-bold mx-6 -my-5">
                  {orders.length}
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : `${isDarkTheme ? "text-white" : "text-black"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500"
                    : `${isDarkTheme ? "text-white" : "text-black"}`
                }
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <button onClick={themeToggler}>
                {isDarkTheme ? (
                  <FaSun className="text-white" size={20} />
                ) : (
                  <FaMoon className="text-black" size={20} />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
