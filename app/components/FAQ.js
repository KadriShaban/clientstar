"use client";
import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="FAQ" className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center hover:text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 mb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can easily upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a long-term contract?",
      answer:
        "No, we don't require any long-term contracts. Our services are provided on a month-to-month basis, giving you full flexibility.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all our plans. No credit card required to start your trial.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Mail className="w-4 h-4 mr-2" />
          Email Support
        </button>
      </div>
    </div>
  );
}
