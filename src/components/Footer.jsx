import React from "react";
import { Wifi } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-blue-400 text-white">
      {/* Content Wrapper */}
      <div className="py-12">
        <div className="px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold">SunTech Home</span>
              </div>
              <p className="text-blue-100">
                A new day with faster connectivity because every sunrise deserves speed that keeps you moving.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 ">Quick Links</h4>
              <ul className="space-y-2 ">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#internet" className="hover:text-white">Internet Packages</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white-700">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#support" className="hover:text-white">Support</a></li>
                <li><a href="#cart" className="hover:text-white">Shopping Cart</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Athi River, Machakos</li>
                <li>suntechpowerke@gmail.com</li>
                <li>+254 114 386 777</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-300 mt-10 pt-6 text-center text-blue-100">
            <p>&copy; 2025 SunTech Home Technologies. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
