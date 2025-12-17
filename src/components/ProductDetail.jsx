import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "./data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!product) return <div className="text-center py-20">Product not found</div>;

  // Image navigation
  const nextImage = () => setCurrentImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1));

  // Buy handler
  const handleBuyNow = async () => {
    if (!email || !phone) return alert("Please enter your email and phone number");

    let formattedPhone = phone.replace(/\D/g, "");
    if (formattedPhone.startsWith("0")) formattedPhone = "254" + formattedPhone.slice(1);

    if (!/^2547\d{8}$/.test(formattedPhone)) return alert("Phone must be in format 2547XXXXXXXX");

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/payments/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formattedPhone,
          email,
          amount: product.price * quantity,
        }),
      });

      const data = await res.json();
      alert(res.ok ? data.message : "Payment failed: " + JSON.stringify(data.error));
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to Store
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* IMAGE CAROUSEL */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-contain transition-transform duration-300"
            />
          </div>

          {/* Bottom controls */}
          <div className="flex justify-between mt-4 px-2 sm:px-6">
            <button
              onClick={prevImage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <ChevronLeft size={20} /> Previous
            </button>

            <button
              onClick={nextImage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-3">
            {product.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === currentImage ? "bg-blue-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                KES {product.oldPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-bold text-blue-600">
              KES {product.price.toLocaleString()}
            </span>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-3 mb-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="tel"
              placeholder="0712345678"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleBuyNow}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
