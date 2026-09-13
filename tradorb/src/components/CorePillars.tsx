import React from 'react';

interface Pillar {
  number: string;
  title: string;
  statement: string;
  subtext: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'MANUFACTURING',
    statement: 'Making Indian manufacturing easier to discover, access and connect with demand.',
    subtext:
      'India’s industrial base spans precision engineering, textiles, chemicals, electrical equipment, and advanced fabrication. We help bridge the gap between production capacity and commercial demand.',
  },
  {
    number: '02',
    title: 'TRADE',
    statement: 'Creating better pathways between businesses, products, markets and opportunities.',
    subtext:
      'Replacing friction and fragmentation with streamlined commercial interactions. We build reliable rails that allow businesses to transact with greater confidence, speed, and transparency.',
  },
  {
    number: '03',
    title: 'GLOBAL',
    statement: 'Building bridges that help Indian businesses participate in a larger global trade network.',
    subtext:
      'Connecting domestic manufacturing capability with international commercial buyers, establishing direct relationships that help Indian enterprises scale across borders.',
  },
];

export const CorePillars: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
            <span className="text-xs font-bold tracking-widest text-[#0F6AD7] uppercase">
              Three Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#0A1C38]">
            Designed for commercial clarity, connectivity, and scale.
          </h2>
        </div>

        {/* Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between transition-all duration-300 hover:border-[#0F6AD7]/50 hover:shadow-sm"
            >
              <div>
                {/* Number & Accent */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F1F5F9] mb-8">
                  <span className="text-sm font-extrabold text-[#0F6AD7]">
                    {pillar.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#64748B]">
                    {pillar.title}
                  </span>
                </div>

                {/* Primary Statement */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C38] tracking-[-0.02em] leading-snug mb-5">
                  {pillar.statement}
                </h3>

                {/* Grounded Business Subtext */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {pillar.subtext}
                </p>
              </div>

              {/* Bottom Indicator */}
              <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-medium text-[#0A1C38]">TradORB Infrastructure</span>
                <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
