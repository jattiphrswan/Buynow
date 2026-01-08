import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Navigate to product page
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Add item to cart without navigating
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="
        group bg-white rounded-xl shadow-sm
        hover:shadow-md transition-shadow duration-300
        overflow-hidden border border-gray-100 cursor-pointer
      "
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Hover overlay */}
        <div className="
          absolute inset-0 bg-black/0
          group-hover:bg-black/10 
          transition-colors duration-300
        " />

        {/* Floating Add Button */}
        <button
          onClick={handleAddToCart}
          className="
            absolute bottom-4 right-4 z-10
            bg-white p-3 rounded-full shadow-lg
            opacity-0 translate-y-12
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            hover:bg-brand-primary hover:text-white
            active:scale-95
          "
          title="Add to Cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-brand-primary font-medium mb-1">
          {product.category}
        </p>

        <h3
          className="
            font-semibold text-gray-900 mb-2 
            line-clamp-1 transition-colors
            hover:text-brand-primary
          "
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="
              flex-1 px-4 py-2 rounded-full font-semibold
              bg-white text-gray-900 border-2 border-gray-900
              hover:bg-gray-900 hover:text-white
              transition-all duration-300
              hover:shadow-lg active:scale-95
            "
          >
            Add to Cart
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
              navigate('/checkout');
            }}
            className="
              flex-1 px-4 py-2 rounded-full font-semibold
              bg-white text-gray-900 border-2 border-gray-900
              hover:bg-gray-900 hover:text-white
              transition-all duration-300
              hover:shadow-lg active:scale-95
            "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
