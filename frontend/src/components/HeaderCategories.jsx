import React from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { name: "Camperas", path: "/" },
  { name: "Buzos", path: "/" },
  { name: "Remeras", path: "/" },
  { name: "Tops", path: "/" },
  { name: "Gorras", path: "/" },
  { name: "Cómo comprar", path: "/como-comprar" },
];

const HeaderCategories = () => {
  const location = useLocation();

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap gap-2 md:gap-6 py-2 justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className={`text-xs md:text-sm uppercase tracking-wide px-2 py-1 rounded transition-colors
              ${location.pathname === cat.path ? "bg-black text-white" : "text-black hover:bg-gray-100"}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HeaderCategories;