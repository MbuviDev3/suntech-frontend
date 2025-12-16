import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wifi, ShoppingCart } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Wifi className="h-8 w-8 text-blue-600" />
            <Link to="/" className="ml-2 text-xl font-bold text-gray-900">
              SunTech Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/internet" className="text-gray-700 hover:text-blue-600 transition">Internet</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">Products</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/login" className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6 bg-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/internet" className="block py-2 text-gray-700 hover:text-blue-600">Internet</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
            <Link to="/cart" className="block py-2 text-gray-700 hover:text-blue-600">Cart (0)</Link>
            <Link to="/login" className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-2 text-center">
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
