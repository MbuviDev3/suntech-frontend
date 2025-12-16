import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "./data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!product) return <div className="text-center py-20">Product not found</div>;

  // Format and validate phone for Paystack
// Function to format and validate phone
const formatPhone = (value) => {
  let digits = value.replace(/\D/g, ""); // remove non-digits

  // If it starts with 0, replace with 254
  if (digits.startsWith("0")) digits = "254" + digits.slice(1);

  // If it starts with 7 and length 9, prepend 254
  if (digits.length === 9 && digits.startsWith("7")) digits = "254" + digits;

  return digits;
};

const handleBuyNow = async () => {
  if (!phone || !email) return alert("Please enter your phone and email");

  // Format phone
  let formattedPhone = phone.replace(/\D/g, "");
  if (formattedPhone.startsWith("0")) formattedPhone = "254" + formattedPhone.slice(1);
  if (formattedPhone.length === 9 && formattedPhone.startsWith("7")) formattedPhone = "254" + formattedPhone;

  if (!/^2547\d{8}$/.test(formattedPhone)) {
    return alert("Phone must be in the format 2547XXXXXXXX");
  }

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

    if (res.ok) alert(data.message);
    else alert("Payment failed: " + JSON.stringify(data.error));
  } catch (err) {
    console.error(err);
    alert("Payment failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-20">
      <Link to="/products" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Store
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} ${idx + 1}`}
              className="w-full max-h-[300px] object-contain rounded-2xl"
            />
          ))}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-6">
            KES {product.price.toLocaleString()}
          </p>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />

            <input
              type="tel"
              placeholder="0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            onClick={handleBuyNow}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
