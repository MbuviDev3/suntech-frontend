import React from "react";
import { Link } from "react-router-dom";
import products from "./data/products";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Solar Products</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.oldPrice && <span className="line-through mr-2 text-sm">KES {product.oldPrice.toLocaleString()}</span>} KES {product.price.toLocaleString()}</p>
              <Link to={`/products/${product.id}`} className="text-blue-600 font-semibold hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
