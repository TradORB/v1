import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface NavigationProps {
  onContactClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(10,28,56,0.04)] py-3.5'
          : 'bg-[#F8FAFC]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: TradORB Logo (Original brand asset lockup) */}
        <a href="#" className="flex items-center py-1" aria-label="TradORB Home">
          <Logo size="sm" variant="original" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#334155]">
          <button
            onClick={() => scrollToSection('story')}
            className="hover:text-[#0F6AD7] transition-colors cursor-pointer"
          >
            Why TradORB
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            className="hover:text-[#0F6AD7] transition-colors cursor-pointer"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('vision')}
            className="hover:text-[#0F6AD7] transition-colors cursor-pointer"
          >
            Vision
          </button>
        </nav>

        {/* Right: Status & Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#0A1C38] text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
            <span>Launching soon</span>
          </div>

          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollToSection('contact');
            }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0A1C38] text-white font-semibold text-xs sm:text-sm hover:bg-[#0F6AD7] transition-colors shadow-xs"
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
