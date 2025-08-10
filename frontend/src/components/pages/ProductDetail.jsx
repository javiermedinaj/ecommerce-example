import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  
  // Estados para el componente
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Talles disponibles basados en las variantes del producto
  const availableSizes = product.variants?.map(variant => variant.size) || [];

  // Obtener la variante seleccionada y su precio
  const selectedVariant = product?.variants?.find(variant => variant.size === selectedSize);
  const currentPrice = selectedVariant?.price || product?.base_price || 0;

  // Resetear cantidad si cambia el talle y la cantidad actual excede el stock
  useEffect(() => {
    if (selectedVariant && quantity > selectedVariant.stock) {
      setQuantity(Math.min(1, selectedVariant.stock));
    }
  }, [selectedSize, selectedVariant, quantity]);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Producto no encontrado</h2>
        <p className="text-gray-600">El producto que buscas no existe o ha sido eliminado.</p>
      </div>
    );
  }

  // Función para agregar al carrito
  const addToCart = async () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla");
      return;
    }

    setIsAddingToCart(true);

    // Simular llamada a API o actualización del estado global
    try {
      // Aquí irían tus funciones de carrito (Context, Redux, etc.)
        const cartItem = {
          id: product.id,
          name: product.name,
          price: currentPrice,
          image_url: product.media?.[0]?.url || product.images?.[0],
          size: selectedSize,
          quantity: quantity,
          total: currentPrice * quantity
        };      // Obtener carrito actual del localStorage
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
      // Verificar si el producto ya existe con la misma talla
      const existingItemIndex = currentCart.findIndex(
        item => item.id === product.id && item.size === selectedSize
      );

      if (existingItemIndex > -1) {
        // Actualizar cantidad si ya existe
        currentCart[existingItemIndex].quantity += quantity;
        currentCart[existingItemIndex].total = currentCart[existingItemIndex].quantity * currentPrice;
      } else {
        // Agregar nuevo item
        currentCart.push(cartItem);
      }

      // Guardar en localStorage
      localStorage.setItem("cart", JSON.stringify(currentCart));

      // Mostrar mensaje de éxito
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      console.log("Producto agregado al carrito:", cartItem);
      
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      alert("Hubo un error al agregar el producto al carrito");
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleQuantityChange = (increment) => {
    const maxStock = selectedVariant?.stock || 10;
    const newQuantity = quantity + increment;
    if (newQuantity >= 1 && newQuantity <= Math.min(maxStock, 10)) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="space-y-4">
          <img 
            src={product.media?.[0]?.url || product.images?.[0] || 'https://via.placeholder.com/400?text=No+Image'} 
            alt={product.name} 
            className="w-full rounded-lg shadow-md"
          />
          {/* Aquí podrías agregar una galería de imágenes si tienes más */}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            {product.brand && (
              <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
            )}
            <p className="text-2xl font-semibold text-gray-900">
              ${currentPrice.toLocaleString()}
            </p>
          </div>

          {/* Descripción */}
          {product.description && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Selección de talla */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Talla</h3>
            <div className="grid grid-cols-6 gap-2">
              {product.variants?.map((variant) => {
                const isOutOfStock = variant.stock === 0;
                const isSelected = selectedSize === variant.size;
                return (
                  <button
                    key={variant.id}
                    onClick={() => !isOutOfStock && setSelectedSize(variant.size)}
                    disabled={isOutOfStock}
                    className={`py-2 px-1 text-sm font-medium rounded border transition-colors ${
                      isSelected
                        ? "bg-black text-white border-black"
                        : isOutOfStock
                        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {variant.size}
                    {isOutOfStock && <br />}
                    {isOutOfStock && <span className="text-xs">Sin stock</span>}
                  </button>
                );
              })}
            </div>
            {!selectedSize && (
              <p className="text-sm text-red-500 mt-1">* Selecciona una talla</p>
            )}
          </div>

          {/* Cantidad */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Cantidad</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                −
              </button>
              <span className="text-lg font-medium w-8 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= Math.min(selectedVariant?.stock || 10, 10)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
            {selectedVariant && (
              <p className="text-sm text-gray-500 mt-1">
                Stock disponible: {selectedVariant.stock} unidades
              </p>
            )}
          </div>

          {/* Precio total */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-xl font-bold">
                ${(currentPrice * quantity).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Botón agregar al carrito */}
          <button
            onClick={addToCart}
            disabled={isAddingToCart || !selectedSize}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
              isAddingToCart || !selectedSize
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isAddingToCart ? "Agregando..." : "Agregar al carrito"}
          </button>

          {/* Mensaje de éxito */}
          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              ✓ Producto agregado al carrito exitosamente
            </div>
          )}

          {/* Información adicional */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Envío gratis en compras superiores a $50.000</p>
            <p>• Devoluciones gratuitas dentro de 30 días</p>
            <p>• Garantía de calidad</p>
          </div>
        </div>
      </div>

      {/* Especificaciones adicionales */}
      {(product.material || product.care_instructions) && (
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Especificaciones</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {product.material && (
              <div>
                <h3 className="font-semibold mb-2">Material:</h3>
                <p className="text-gray-700">{product.material}</p>
              </div>
            )}
            {product.care_instructions && (
              <div>
                <h3 className="font-semibold mb-2">Cuidados:</h3>
                <p className="text-gray-700">{product.care_instructions}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;