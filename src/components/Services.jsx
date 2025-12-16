import React from "react";
import {
  Users,
  Home,
  Clock,
  Sun,
  Droplets,
  Wifi,
  ShieldCheck,
  Zap,
  Wallet,
  Headset,
  Target,
  Eye,
} from "lucide-react";

export default function Services() {
  return (
    <div className="w-full text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br text-blue-500 py-24 px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Suntech Home Technologies
        </h1>
        <p className="max-w-3xl mx-auto text-lg lg:text-xl opacity-95">
          Smart Energy. Seamless Internet. Complete Home Solutions.
        </p>
        <p className="max-w-4xl mx-auto mt-6 text-base lg:text-lg opacity-90 text-black">
          We provide reliable solar power and high-speed internet solutions designed to power, connect, and transform modern Kenyan homes, businesses, and farms.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Suntech Home Technologies is a solutions-driven company combining clean solar energy and dependable internet connectivity under one trusted brand. We serve homes, businesses, and farms with systems built for performance, durability, and long-term savings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From solar power systems, water heaters, and borehole pumps to fast and stable Wi-Fi and broadband services, we deliver technology that improves daily life and reduces reliance on costly traditional energy.
            </p>
          </div>

          {/* IMPACT CARDS */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-2xl p-8 text-center shadow-lg">
              <Users className="mx-auto mb-3" size={36} />
              <p className="text-4xl font-bold">5,000+</p>
              <p className="mt-2 text-sm opacity-90">Lives Impacted</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl p-8 text-center shadow-lg">
              <Home className="mx-auto mb-3" size={36} />
              <p className="text-4xl font-bold">800+</p>
              <p className="mt-2 text-sm opacity-90">Home Installations</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-2xl p-8 text-center shadow-lg">
              <Clock className="mx-auto mb-3" size={36} />
              <p className="text-4xl font-bold">24 Hrs</p>
              <p className="mt-2 text-sm opacity-90">Average Installation Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="py-20 px-6 bg-gray-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Sun className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Solar Power Systems</h3>
              <p className="text-gray-600">
                Reliable solar installations for homes, businesses, and farms — designed to save up to 70% on electricity bills while providing power even during blackouts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Droplets className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Water Heaters & Borehole Pumps</h3>
              <p className="text-gray-600">
                Energy-efficient solar water heating and pumping solutions ideal for residential, agricultural, and commercial use.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-blue-500">
              <Wifi className="text-indigo-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Internet & Wi-Fi Solutions</h3>
              <p className="text-gray-600">
                Fast, stable, and affordable broadband connectivity with expert installation and dependable local support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-500">Why Choose Suntech</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <WhyCard icon={ShieldCheck} title="Certified Products" />
            <WhyCard icon={Zap} title="Reliable Performance" />
            <WhyCard icon={Wallet} title="Affordable Solutions" />
            <WhyCard icon={Headset} title="Local Support" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 bg-gray-30">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <MissionCard icon={Target} title="Our Mission" />
          <MissionCard icon={Eye} title="Our Vision" />
        </div>
      </section>
    </div>
  );
}

const WhyCard = ({ icon: Icon, title }) => (
  <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
    <Icon className="mx-auto mb-4 text-green-600" size={28} />
    <h4 className="font-semibold text-lg mb-2 text-blue-500">{title}</h4>
    <p className="text-gray-600">
      {title === "Certified Products" && "Eco-friendly, durable, and built to last"}
      {title === "Reliable Performance" && "Consistent power and stable internet"}
      {title === "Affordable Solutions" && "Lower energy costs and flexible packages"}
      {title === "Local Support" && "Expert installation and responsive service"}
    </p>
  </div>
);

const MissionCard = ({ icon: Icon, title }) => (
  <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition">
    <Icon className="text-blue-500 mb-4" size={32} />
    <h3 className="text-2xl font-bold mb-4 text-blue-500">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {title === "Our Mission"
        ? "To empower homes and businesses with clean energy and fast, secure internet — driving growth, sustainability, and innovation across Kenya."
        : "To become a leading provider of integrated home technologies, known for reliability, innovation, and exceptional customer experience."}
    </p>
  </div>
);
