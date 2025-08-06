import React from "react";

const Navbar = () => (
  <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
   
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
          Shop —
        </button>
        <button className="text-lg font-bold text-black hover:text-gray-600 transition-colors">
          +
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
          className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
        >
          Buscar
        </a>
        <a
          href="#"
          className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
        >
          Carrito
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
