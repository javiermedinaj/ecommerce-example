import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import products from "../data/products.json";

const categories = [
  { name: "Camperas", path: "/" },
  { name: "Buzos", path: "/" },
  { name: "Remeras", path: "/" },
  { name: "Gorras", path: "/" },
  { name: "Pantalones", path: "/" },
  { name: "Cómo comprar", path: "/como-comprar" },
];

const HeaderCategories = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (search.trim().length === 0) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(search.toLowerCase()))
    );
    setResults(filtered.slice(0, 6));
    setShowDropdown(filtered.length > 0);
  }, [search]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (id) => {
    setSearch("");
    setShowDropdown(false);
    navigate(`/products/${id}`);
  };

  return (
    <nav className="w-full border-b border-gray-100 bg-white top-0 z-30">
      <div className="container mx-auto px-4 flex flex-wrap gap-2 md:gap-6 py-2 justify-center items-center relative">
        {/* Categorías */}
        <div className="flex flex-wrap gap-2 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className={`text-xs md:text-sm uppercase tracking-wide px-2 py-1 rounded transition-colors ${location.pathname === cat.path ? "bg-black text-white" : "text-black hover:bg-gray-100"}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
        {/* Barra de búsqueda */}
        <div className="relative ml-auto w-full max-w-xs" ref={inputRef}>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Buscar productos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setShowDropdown(results.length > 0)}
          />
          {showDropdown && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 z-50 max-h-64 overflow-y-auto">
              {results.map(product => (
                <li
                  key={product.id}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(product.id)}
                >
                  <img
                    src={product.media?.[0]?.url || product.images?.[0] || 'https://via.placeholder.com/40?text=No+Img'}
                    alt={product.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <span className="text-xs md:text-sm font-medium">{product.name}</span>
                  <span className="ml-auto text-xs text-gray-500">${product.base_price?.toLocaleString() || '0'}</span>
                </li>
              ))}
              {results.length === 0 && (
                <li className="px-3 py-2 text-xs text-gray-400">No se encontraron productos</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderCategories;