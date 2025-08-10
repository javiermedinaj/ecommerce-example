import React from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => (
  <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-black hover:text-gray-600 transition-colors flex items-center gap-2">
          <FaBars />
        </button>
      </div>

      <a
        href="/"
        className="text-2xl font-black tracking-tight text-black uppercase"
      >
        COMMERCEUB
      </a>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-xl font-medium text-black hover:text-gray-600 transition-colors flex items-center gap-2"
        >
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
