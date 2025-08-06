import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div className="p-8 text-center">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <img src={product.image_url} alt={product.name} className="w-full rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg font-semibold mb-4">${product.price.toLocaleString()}</p>
      {/* Agrega más detalles si tienes */}
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;