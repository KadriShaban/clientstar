import {
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Hotel,
  Monitor,
  Stethoscope,
} from "lucide-react";

const BusinessCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4">
      <Icon className="w-10 h-10 text-yellow-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function BusinessCategories() {
  const categories = [
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description:
        "Showcase product reviews to increase trust and drive more sales. Display customer experiences to highlight product quality and satisfaction.",
    },
    {
      icon: Briefcase,
      title: "B2B Services",
      description:
        "Highlight client success stories and testimonials to demonstrate expertise and build credibility with potential clients in your industry.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Feature student and parent testimonials to showcase the quality of your educational programs and attract more enrollments.",
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description:
        "Display guest reviews to highlight your excellent service and amenities, encouraging more bookings for your hotel or restaurant.",
    },
    {
      icon: Monitor,
      title: "SaaS",
      description:
        "Showcase user testimonials to demonstrate the value of your software, highlighting key features and benefits that drive user adoption.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Share patient testimonials to build trust in your healthcare services, emphasizing quality care and positive outcomes.",
    },
  ];

  return (
    <section id="use-cases" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          ClientWords for Every Business
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover how businesses across various industries leverage ClientWords
          to boost credibility and conversions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <BusinessCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
