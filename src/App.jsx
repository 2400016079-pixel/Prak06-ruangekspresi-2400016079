import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Pillars } from "./components/Pillars";
import { Schedule } from "./components/Schedule";
import { Showcase } from "./components/Showcase";
// 1. IMPORT TESTIMONIALS DI SINI
import { Testimonials } from "./components/Testimonials"; 
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <Pillars />
        <Schedule />
        <Showcase />
        {/* 2. PASANG DI BAWAH SHOWCASE */}
        <Testimonials /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;