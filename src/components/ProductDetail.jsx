import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "./data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return <div className="text-center py-20">Product not found</div>;

  const nextImage = () => setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  const handleBuyNow = () => {
    // Redirect user to the Paystack checkout link
    window.location.href = product.paystackLink;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Back to Store</Link>
      <div className="flex flex-col md:flex-row gap-8">
        {/* IMAGE CAROUSEL */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-4">
          <div className="overflow-hidden rounded-xl">
            <img src={product.images[currentImage]} alt={product.name} className="w-full h-[350px] object-contain" />
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={prevImage} className="px-4 py-2 bg-blue-600 text-white rounded">Prev</button>
            <button onClick={nextImage} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl font-bold text-blue-600">KES {product.price.toLocaleString()}</span>
          </div>

                      <a
              href="https://suntechhometechnologies.co.ke/payment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Pay Now
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}
