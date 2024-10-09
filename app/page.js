"use client";

import { useEffect } from "react"; // Import useEffect
import Image from "next/image";
import luxy from "luxy.js"; // Import luxy.js
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import HowItWorks from "./components/HowItWorks";
import BusinessCard from "./components/BusinessCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="luxy" className="font-[family-name:var(--font-geist-sans)]">
      {" "}
      {/* Set ID here */}
      <HeroSection />
      <HeroSection2 />
      <HowItWorks />
      <BusinessCard />
      <FAQ />
      <Footer />
    </div>
  );
}
