import React from "react";

const Payment = () => {
  const handleWhatsAppShare = () => {
    const message = `
Hello,

Here is my payment confirmation for the following product
    `;

    const whatsappNumber = "254114386777"; // optional: remove if you want open chat picker
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50  px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
          💳 Make a Payment
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Renew or activate your internet service using any option below.
        </p>

        <div className="space-y-6">
          {/* Paybill */}
          <div className="border-l-4 border-blue-600 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              🏦 Paybill (Co-operative Bank)
            </h3>
            <p className="text-gray-700">
              <strong>Paybill Number:</strong>{" "}
              <span className="font-mono text-blue-700">400200</span>
            </p>
            <p className="text-gray-700">
              <strong>Account Number:</strong>{" "}
              <span className="font-mono text-blue-700">
                01103816667800
              </span>
            </p>
          </div>

          {/* Till */}
          <div className="border-l-4 border-green-600 bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              📱 M-Pesa Till (Safaricom)
            </h3>
            <p className="text-gray-700">
              <strong>Till Number:</strong>{" "}
              <span className="font-mono text-green-700">3212492</span>
            </p>
          </div>
        </div>

        {/* WhatsApp Share Button */}
        <button
          onClick={handleWhatsAppShare}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
        >
          📤 Share Payment Details via WhatsApp
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Ensure you use the correct details to avoid payment delays.
        </p>
      </div>
    </div>
  );
};

export default Payment;
