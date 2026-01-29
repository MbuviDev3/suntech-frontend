import React, { useState } from "react";

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    accountNumber: "",
    ssid: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
WiFi Password Reset Request

Full Name: ${formData.fullName}
Phone Number: ${formData.phone}
Account Number: ${formData.accountNumber}
New WiFi Name (SSID): ${formData.ssid}
New WiFi Password: ${formData.password}
    `;

    const whatsappNumber = "254114386777";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          WiFi Password Reset
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07XXXXXXXX"
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Account Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              New WiFi Name (SSID) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ssid"
              value={formData.ssid}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm WiFi Password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="text"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit Request
          </button>

          <a
            href="https://suntechhometechnologies.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-gray-500 hover:underline"
          >
            Skip to content
          </a>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
