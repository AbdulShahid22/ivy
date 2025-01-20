import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IVYAdmissions</h3>
            <p className="text-gray-400">
              Your trusted partner in international education consulting.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  USA
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  UK
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  Germany
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-400 hover:text-white"
                >
                  Ireland
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Education Street</p>
            <p className="text-gray-400">Chicago, IL 60659</p>
            <p className="text-gray-400">contact@ivyadmissions.com</p>
            <p className="text-gray-400">+1 (773) 699-6921</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IVYAdmissions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
