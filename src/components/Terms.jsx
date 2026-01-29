import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Terms & Conditions
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Suntech Home Technologies  provides internet
            connectivity services subject to the terms outlined below. By using
            our services, you agree to comply with these conditions.
          </p>

          <div>
            <h2 className="font-semibold text-xl mb-2">Service Delivery</h2>
            <p>
              Internet services are offered according to the selected plan,
              including speed, coverage, and pricing. Service activation depends
              on timely payments and compliance with usage policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Installation</h2>
            <p>
              A one-time installation fee of KES 1,500 applies. Customers must
              provide reasonable access to their premises to allow proper setup
              and configuration.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Billing & Payments</h2>
            <p>
              All subscriptions are prepaid. Failure to settle payments on time
              may result in temporary suspension until the balance is cleared.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Customer Obligations
            </h2>
            <p>
              Customers must not modify, interfere with, or misuse any network
              equipment provided. Any damage or unauthorized alteration may lead
              to service termination or additional costs.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Service Availability</h2>
            <p>
              While we aim to deliver consistent connectivity, occasional service
              interruptions may occur due to maintenance, power issues, or
              factors beyond our control.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Privacy & Data</h2>
            <p>
              Customer information is kept confidential and is never sold or
              shared, except where disclosure is required by law.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Limitation of Liability</h2>
            <p>
              Linaxnet Solution shall not be responsible for indirect losses,
              including data loss or business interruption arising from service
              issues.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              Conflict Resolution
            </h2>
            <p>
              Any disputes shall be resolved through discussion and mutual
              understanding before pursuing other legal options.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
