import React from "react";
import { NavLink } from "react-router-dom";
import { profilePic, companyLogo } from "../../assets/images";
import ProfileDropDown from "./ProfileDropDown";
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={companyLogo} alt="Company Logo" className="h-10 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder={`🔍 Search Items Here`}
          className="w-full max-w-md px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      {/* Navigation Links */}
      <ul className="flex items-center space-x-6">
        <li>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `flex items-center ${isActive ? `text-orange-500` : `text-white`}`
            }
          >
            🛒 Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="distributors"
            className={({ isActive }) =>
              `flex items-center ${isActive ? `text-orange-500` : `text-white`}`
            }
          >
            Become a Distributor
          </NavLink>
        </li>
        <li className="relative group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <ProfileDropDown />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
