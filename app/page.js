import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import HowItWorks from "./components/HowItWorks";
import BusinessCard from "./components/BusinessCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroSection2 />
      <HowItWorks />
      <BusinessCard />
      <FAQ />
      <Footer />
    </div>
  );
}
