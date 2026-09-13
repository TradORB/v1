import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { CorePillars } from './components/CorePillars';
import { Vision } from './components/Vision';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A1C38] flex flex-col selection:bg-[#0A1C38] selection:text-white">
      {/* 1. Header Navigation */}
      <Navigation onContactClick={scrollToContact} />

      {/* 2. Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero: TRADORB, India's B2B Trade Infrastructure, Launching soon */}
        <Hero onContactClick={scrollToContact} onExploreClick={scrollToStory} />

        {/* 2. Why TradORB: Powerful statement of manufacturing strength + world connectivity */}
        <BrandStory />

        {/* 3. Three Capabilities: 01 Manufacturing, 02 Trade, 03 Global */}
        <CorePillars />

        {/* 4. Vision: Infrastructure rather than just another marketplace */}
        <Vision />

        {/* 5. Launch / Contact: Building the future of Indian trade. TradORB is coming soon. */}
        <ContactSection />
      </main>

      {/* 6. Footer: Minimal, clean, compliant */}
      <Footer />
    </div>
  );
}
