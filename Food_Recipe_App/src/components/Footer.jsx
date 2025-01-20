import React from "react";

function Footer() {
  const currYear = new Date().getUTCFullYear();

  return (
    <footer className="text-white p-4 text-center bottom-0 relative w-full bg-gray-800 dark:bg-gray-700">
      &copy; All Rights Reserved, {currYear}
    </footer>
  );
}

export default Footer;
