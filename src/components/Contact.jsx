import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full text-gray-30 bg-amber-40">
      {/* HERO / HEADER */}
      <section className="bg-gradient-to-br  text-blue-500 py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-500">Get in Touch</h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          We're Here to Help You. Have questions? Need support? Our team is ready to assist you with any inquiries about our services.
        </p>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-20 px-6 bg-gray-30">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Call Us */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
            <Phone className="mx-auto mb-4 text-blue-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Call Us</h4>
            <p className="text-gray-600 mb-1">+254 114 3867 77</p>
            <p className="text-sm text-gray-500">Available 24/7 for support</p>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
            <Mail className="mx-auto mb-4 text-green-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Email Us</h4>
            <p className="text-gray-600 mb-1">suntechpowerke@gmail.com</p>
            <p className="text-sm text-gray-500">We respond within 1 Hr</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
            <MessageCircle className="mx-auto mb-4 text-green-600" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">WhatsApp Us</h4>
            <p className="text-gray-600 mb-1">+254 114 386 777</p>
            <p className="text-sm text-gray-500">Quick responses via WhatsApp</p>
          </div>

          {/* Visit Us */}
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center">
            <MapPin className="mx-auto mb-4 text-red-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Visit Us</h4>
            <p className="text-gray-600 mb-1">Athi River, Machakos Kenya</p>
            <p className="text-sm text-gray-500">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 bg-gray-30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Send us a Message</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="John Smith"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="+254 700 000 000"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select a subject</option>
              <option>General Inquiries</option>
              <option>Internet</option>
              <option>Solar Power</option>
            </select>
            <textarea
              rows="5"
              placeholder="Tell us how we can help you..."
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-blue-600 text-blue-500 font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* BUSINESS HOURS & EMERGENCY SUPPORT */}
      <section className="py-20 px-6 bg-gray-30">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-2xl p-8 shadow text-center">
            <Clock className="mx-auto mb-4 text-yellow-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Business Hours</h4>
            <p className="text-gray-600 mb-1">Mon-Fri: 8AM-6PM</p>
            <p className="text-gray-600 mb-1">Sat: 9AM-2PM</p>
            <p className="text-gray-600">Sun: Closed</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow text-center">
            <Clock className="mx-auto mb-4 text-red-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Support</h4>
            <p className="text-gray-600 mb-1">Available 24/7</p>
            <p className="text-gray-600">+254 114 386 777</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow text-center">
            <MapPin className="mx-auto mb-4 text-red-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Headquarters</h4>
            <p className="text-gray-600 mb-1">Athi River, Machakos</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow text-center">
            <MapPin className="mx-auto mb-4 text-red-500" size={32} />
            <h4 className="font-semibold text-lg mb-2 text-blue-600">Our Branches</h4>
            <p className="text-gray-600 mb-1">Athi River, Machakos</p>
            <p className="text-gray-600">+254 114 386 777</p>
            <p className="text-gray-600">suntechpowerke@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
