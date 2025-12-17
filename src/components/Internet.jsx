import React from "react";

export default function Internet() {
  return (
    <div className="w-full bg-amber-40">

      {/* Hero Section */}
      <section className="py-20 bg-gray-30 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
          Home Fibre Packages
        </h1>
        <p className="text-lg text-gray-600">
          Experience lightning-fast internet tailored for your home and lifestyle
        </p>
      </section>

      {/* Home Fibre Packages */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Package Card */}
          {[
            {
              speed: "7",
              price: "1,499",
              features: [
                "Fast web browsing",
                "SD video & music streaming",
                "Internet surfing & social media",
              ],
            },
            {
              speed: "10",
              price: "1,999",
              features: [
                "Fast web browsing",
                "SD video & music streaming",
                "Internet surfing & social media",
                "Multiple device streaming",
              ],
            },
            {
              speed: "20",
              price: "2,950",
              features: [
                "HD video streaming",
                "Simultaneous streaming",
                "Fast video downloads",
                "CCTV device capability",
                "Unlimited usage",
              ],
            },
            {
              speed: "25",
              price: "3,500",
              features: [
                "4K / UHD streaming",
                "Superfast downloads",
                "Multiple device streaming",
                "Unlimited usage",
              ],
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <div className="text-5xl font-bold text-blue-600">{pkg.speed}</div>
              <div className="text-gray-500 mb-4">Mbps</div>

              <div className="text-xl font-semibold mb-2">
                Ksh {pkg.price} / Month
              </div>

              <ul className="text-gray-600 space-y-2 mb-6">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold w-full">
                Get Connected
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Business Fibre Packages */}
      <section className="py-20 bg-gray-30 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
          Business Fibre Packages
        </h2>
        <p className="text-lg text-gray-600">
          Empower your business with high-speed, reliable internet solutions
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              speed: "40",
              price: "5,000",
              features: ["1–20 users", "Moderate usage", "Unlimited internet"],
            },
            {
              speed: "100",
              price: "18,250",
              features: [
                "11–50 users",
                "Cloud sharing",
                "Unlimited usage",
                "Online gaming",
              ],
            },
            {
              speed: "500",
              label: "Dedicated Internet",
            },
            {
              speed: "1 Gbps",
              label: "Dedicated Internet",
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <div className="text-5xl font-bold text-blue-600">{pkg.speed}</div>
              <div className="text-gray-500 mb-4">Mbps</div>

              {pkg.price ? (
                <>
                  <div className="text-xl font-semibold mb-2">
                    Ksh {pkg.price} / Month
                  </div>

                  <ul className="text-gray-600 space-y-2 mb-6">
                    {pkg.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-gray-600 mb-6">{pkg.label}</p>
              )}

              <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold w-full">
                Get Connected
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-20 amber-50  ">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
            SunTech Subscription Form
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Installation Address"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <select className="w-full border rounded-lg px-4 py-3" required>
              <option>--- Select Package ---</option>
              <option>7 Mbps @Ksh 1,499</option>
              <option>10 Mbps @Ksh 1,999</option>
              <option>20 Mbps @Ksh 2,950</option>
              <option>25 Mbps @Ksh 3,500</option>
              <option>Business 40 Mbps @Ksh 5,000</option>
              <option>Business 100 Mbps @Ksh 18,250</option>
              <option>Business 500 Mbps</option>
              <option>Business 1Gbps</option>
            </select>

            <input
              type="datetime-local"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              placeholder="Comments"
              className="w-full border rounded-lg px-4 py-3"
              rows="4"
            />

            <p className="text-sm text-gray-600">
              * Installation fee of Ksh 1,500 charged separately on installation.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-blue-500 py-3 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
