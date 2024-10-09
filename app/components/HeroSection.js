import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Transform your client's feedback into compelling
          <br />
          Impactful <span className="bg-yellow-300 px-2">social proof.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortlessly gather, organize, and display genuine client testimonials
          to boost trust and drive conversions.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>User-friendly interface</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Seamless integration</span>
          </div>
        </div>
        <button className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition duration-300">
          Start your Free Trial
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
