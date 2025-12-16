import React from 'react';
import { Wifi, Zap, Shield, Headphones, TrendingUp, Check, Star } from 'lucide-react';


// Home Component Only
export default function Home() {
  return (
    <div className=" bg-gray-30">
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <p className="text-black text-sm sm:text-base font-semibold tracking-wide uppercase mb-4">
              Premium Internet and Solar solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-blue-600">
              Unlimited, High-speed internet
            </h1>
            <p className="text-lg sm:text-xl text-black mb-8 max-w-3xl mx-auto">
              A new day with faster connectivity — because every sunrise deserves speed that keeps you moving.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button className="!border-2 !border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold">
    Get Connected
  </button>

  <button className="!border-2 !border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold">
    Explore Solar
  </button>
</div>

          </div>
        </div>
      </div>




      {/* Services Grid */}
      <div className="py-16 lg:py-24 bg-gray-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">High-Speed Internet</h3>
              <p className="text-gray-600">Reliable, high-quality Internet for your Business.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">24Hr Installation Time</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Certified Solutions</h3>
              <p className="text-gray-600">100% Guarantee</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Huge Savings</h3>
              <p className="text-gray-600">At Lowest Price</p>
            </div>
          </div>
        </div>
      </div>

      

   {/* Why Choose Section */}
<div className="py-16 lg:py-24 bg-gray-30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4">
        Enjoy Solar Power!
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We offer faster and relaible solar power solutions under 24 hours .
      </p>
      
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-500">Solar Power</h3>
        <p className="text-gray-600">
          Reliable. Affordable. Clean. Switch to solar power and cut your electricity bills instantly. Our systems give you steady, dependable energy for homes, businesses, and farms — even during blackouts. Enjoy long-term savings with a solution built for Kenyan conditions.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-500">Solar Borehole Systems</h3>
        <p className="text-gray-600">
          Pump water anytime, anywhere. Solar borehole systems give you free, uninterrupted water for domestic use, irrigation, or livestock. No fuel costs, no generator breakdowns — just powerful, 100% renewable water pumping designed to work even in remote areas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-500">Solar Water Heaters</h3>
        <p className="text-gray-600">
          Hot water powered by the sun. Enjoy constant hot showers while reducing your monthly energy bill. Our solar water heaters are efficient, durable, and designed to heat water quickly even on cloudy days. Save money while upgrading your home comfort.
        </p>
      </div>

      

    </div>
  </div>
</div>

      {/* Testimonials Section */}
      <div className="py-16 lg:py-24 bg-gray-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4">
              Customers Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start With a Free Solar Quote. No Commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Reliable and very efficient. The solar system has cut our power bills by more than half. Installation was fast and the team was professional. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Mark </h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h2 className='text-blue-500 font-bold text-3xl'>Deal of the Day: 15% Off All Solar Solutions!</h2>
              <p className="text-gray-700 mb-6 italic">
                Get clean, reliable solar energy at a discounted price. Save on solar power, borehole pumps, and water heaters — limited-time offer!
              </p>
              <button className="!border-2 !border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold">
    Shop Now
  </button>
              
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Water on demand with zero fuel costs. Our solar borehole pump works perfectly. No more generator expenses, and we get steady water throughout the day. Great investment!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Alice</h4>
                  <p className="text-gray-600 text-sm">Enterprenuer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}