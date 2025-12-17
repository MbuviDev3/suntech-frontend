import React from "react";
import { useNavigate } from "react-router-dom";
import products from "./data/products";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-amber-40">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">
        Solar Products
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden
                       shadow-md hover:shadow-2xl transition-all duration-300
                       hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Stock badge */}
              <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                In Stock
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.047 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    KES {product.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-lg font-bold text-blue-600">
                  KES {product.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
