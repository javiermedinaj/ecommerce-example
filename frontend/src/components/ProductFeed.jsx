import React, { useState } from "react";

const ProductFeed = ({ products = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => Math.min(prev + 4, products.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedProducts = products.slice(0, visibleProducts);
  const hasMore = visibleProducts < products.length;

  return (
    <section className="py-8 px-4 sm:py-12 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/*una columna en mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Imagen un poco mas responsive */}
              <div className="aspect-square bg-gray-50 mb-2 sm:mb-4 overflow-hidden rounded-sm max-w-sm mx-auto">
                <a href="/" className="block w-full h-full">
                  <img
                    src={product.image_url}
                    alt={`${product.name} - comprar online`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              </div>
              
              {/* Info del producto - responsive */}
              <div className="space-y-1 max-w-sm mx-auto">
                <div className="text-xs text-gray-400 font-mono">/-</div>
                <a href="/" className="block">
                  <h3 className="text-sm sm:text-sm font-medium text-black hover:text-gray-600 transition-colors leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-sm font-medium text-black mt-1">
                    ${product.price.toLocaleString()}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más */}
        {hasMore && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-block bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Cargando...' : 'Ver más'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFeed;
