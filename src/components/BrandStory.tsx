import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#F1F5F9] border-y border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Understated Section Header */}
        <div className="mb-10 sm:mb-14 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
          <span className="text-xs font-bold tracking-widest text-[#0F6AD7] uppercase">
            Why TradORB
          </span>
        </div>

        {/* Primary Statement - Breathing, Visually Powerful */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#0A1C38] leading-[1.14]">
          India has the manufacturing strength.
          <span className="block mt-4 text-[#0F6AD7]">
            TradORB is building the infrastructure to connect that strength with the world.
          </span>
        </blockquote>

        {/* Editorial Subtext */}
        <div className="mt-14 pt-10 border-t border-[#CBD5E1] grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-base font-bold text-[#0A1C38]">The Commercial Opportunity</h3>
            <p className="text-sm text-[#64748B] mt-1">
              Industrial depth meets modern trade connectivity.
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="text-lg text-[#334155] leading-relaxed">
              India has enormous manufacturing capability, but the opportunity is to make that manufacturing
              easier to discover, connect, transact with, and take into wider markets. TradORB is building the
              practical B2B trade infrastructure that transforms Indian industrial production into an accessible
              global engine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
