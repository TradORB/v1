import React from 'react';

export const Vision: React.FC = () => {
  const focusAreas = [
    {
      title: 'Manufacturing',
      description: 'Highlighting India’s deep industrial capacity, from specialized machining to large-scale production.',
    },
    {
      title: 'Discovery',
      description: 'Making reliable manufacturers easy to find, evaluate, and engage with clear specifications.',
    },
    {
      title: 'Connectivity',
      description: 'Bridging the distance between domestic factories and commercial enterprises seeking dependable supply.',
    },
    {
      title: 'Trade',
      description: 'Building predictable, standardized commercial pathways that remove unnecessary trade friction.',
    },
    {
      title: 'Markets',
      description: 'Expanding reach across regional industrial hubs and opening broader domestic channels.',
    },
    {
      title: 'Global Opportunity',
      description: 'Enabling Indian manufacturers to participate directly in worldwide B2B commercial networks.',
    },
  ];

  return (
    <section id="vision" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
            <span className="text-xs font-bold tracking-widest text-[#0F6AD7] uppercase">
              Our Vision
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#0A1C38] mt-2 leading-tight">
            Infrastructure, not just another marketplace.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] mt-5 leading-relaxed">
            TradORB is building the foundational B2B infrastructure that helps Indian manufacturers connect with
            businesses and markets more directly, transparently, and efficiently.
          </p>
        </div>

        {/* 6 Clean Business Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:border-[#0F6AD7]/50 hover:bg-white hover:shadow-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#0A1C38]">{area.title}</h3>
                <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clarifying Commercial Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-[#0A1C38]">
              Committed to durable commercial partnerships
            </h4>
            <p className="text-sm text-[#334155] mt-1">
              We are focused on long-term trade relationships and sustainable industrial growth across India.
            </p>
          </div>
          <div className="shrink-0 text-xs font-bold px-4 py-2 rounded-xl bg-[#0A1C38] text-white">
            B2B Trade Infrastructure
          </div>
        </div>
      </div>
    </section>
  );
};
