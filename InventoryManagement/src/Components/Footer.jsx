import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getUTCFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 text-center">
      {/* Footer Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
        {/* Team Members */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-3">
            Team Members
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>Kishan Poudel</li>
            <li>Suman Tiwari</li>
            <li>Nishant Lama</li>
          </ul>
        </div>

        {/* Team Roles */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-3">
            Team Roles
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>Frontend - Nishant</li>
            <li>Backend - Suman</li>
            <li>Database - Kishan</li>
          </ul>
        </div>

        {/* About Project */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-3">
            About Project
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>Inventory Management</li>
            <li>Admin Dashboard</li>
            <li>Beautiful UI</li>
            <li>Collective Contribution</li>
            <li>Secure</li>
          </ul>
        </div>

        {/* Hire Us */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-3">
            Hire Us
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              Suman -{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                GitHub
              </Link>{" "}
              ,{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                LinkedIn
              </Link>
            </li>
            <li>
              Kishan -{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                GitHub
              </Link>{" "}
              ,{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                LinkedIn
              </Link>
            </li>
            <li>
              Nishant -{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                GitHub
              </Link>{" "}
              ,{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">© {date} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
