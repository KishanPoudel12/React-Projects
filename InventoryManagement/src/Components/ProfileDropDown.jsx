import React from "react";
function ProfileDropDown() {
  return (
    <div className=" invisible  group-hover:opacity-100 group-hover:visible absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden duration-500 z-100">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Change User
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Theme Change
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Join Membership
        </li>
        <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Log Out</li>
      </ul>
    </div>
  );
}
export default ProfileDropDown;
