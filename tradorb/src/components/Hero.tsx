import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroTradeVisual } from './HeroTradeVisual';

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8FAFC] trade-grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Copy & Brand Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Launching Soon Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0A1C38] mb-8 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
              <span className="tracking-wide uppercase text-[11px] text-[#0A1C38]">
                TradORB
              </span>
              <span className="text-[#94A3B8]">·</span>
              <span className="text-[#64748B]">Launching soon</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-[#0A1C38] leading-[1.08] mb-6">
              Building the infrastructure for India’s next trade economy.
            </h1>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl mb-10 font-normal">
              Connecting Indian manufacturers with buyers, markets and opportunities — across India and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A1C38] text-white font-semibold text-sm hover:bg-[#0F6AD7] transition-all shadow-sm cursor-pointer"
              >
                <span>Stay connected</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0A1C38] font-semibold text-sm hover:bg-[#EFF6FF] hover:border-[#0F6AD7]/50 transition-all cursor-pointer"
              >
                Why TradORB
              </button>
            </div>

            {/* Grounded Commercial Baseline */}
            <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
              <span className="font-bold text-[#0A1C38]">Core Focus:</span>
              <span className="hover:text-[#0A1C38] transition-colors">Industrial Discovery</span>
              <span className="text-[#CBD5E1]">/</span>
              <span className="hover:text-[#0A1C38] transition-colors">Commercial Trust</span>
              <span className="text-[#CBD5E1]">/</span>
              <span className="hover:text-[#0A1C38] transition-colors">Global Market Expansion</span>
            </div>
          </div>

          {/* Commercial Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroTradeVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
