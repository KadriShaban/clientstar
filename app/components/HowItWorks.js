import React from "react";

const StepCard = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl font-bold text-yellow-400 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How it Works?</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Collect and showcase authentic testimonials in four easy steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StepCard
            number="1"
            title="Create Your Form"
            description="Design a custom testimonial form tailored to your business needs."
          />
          <StepCard
            number="2"
            title="Share the Link"
            description="Send the unique form link to your clients via email or any channel."
          />
          <StepCard
            number="3"
            title="Receive Testimonials"
            description="Collect and review client's testimonials in your dashboard."
          />
          <StepCard
            number="4"
            title="Showcase Testimonials"
            description="Embed the love gallery on your website to boost credibility."
          />
        </div>

        <div className="text-center">
          <button className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition duration-300">
            Start Collecting Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
