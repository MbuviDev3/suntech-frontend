import React from "react";
import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-amber-50 text-black">
      <div className="py-12">
        <div className="px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
              
                <span className="ml-2 text-xl font-bold">SunTech Home</span>
              </div>
              <p className="text-blue-500">
                A new day with faster connectivity because every sunrise deserves speed that keeps you moving.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-700">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link to="/internet" className="hover:text-blue-600">Internet Packages</Link></li>
                <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li><Link to="/services" className="hover:text-blue-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link to="/passwordreset" className="hover:text-blue-600">Password Reset</Link></li>
                <li><Link to="/terms" className="hover:text-blue-600">Terms</Link></li>

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-500">
                <li>Athi River, Machakos</li>
                <li>suntechpowerke@gmail.com</li>
                <li>+254 114 386 777</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-300 mt-10 pt-6 text-center text-blue-500">
            <p>&copy; 2026 SunTech Home Technologies. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
