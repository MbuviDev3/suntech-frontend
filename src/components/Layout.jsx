import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Navbar on all pages */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer on all pages */}
      <Footer />
    </div>
  );
}

export default Layout;
