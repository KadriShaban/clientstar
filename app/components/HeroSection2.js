import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="text-yellow-400 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HeroSection2 = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why ClientWords?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          With ClientWords, you can effortlessly collect, manage, and showcase
          authentic client testimonials in your own website by embedding a
          single line of code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="</>"
            title="Easy Integration"
            description="Easily integrate with your website using a single line of code."
          />
          <FeatureCard
            icon="🚀"
            title="Boost Conversions"
            description="Leverage social proof to build credibility and drive your business growth."
          />
          <FeatureCard
            icon="📂"
            title="Effortless Collection"
            description="Collect authentic testimonials from your customers with ease."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
