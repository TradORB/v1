import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export const HeroTradeVisual: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-[0_16px_40px_rgba(10,28,56,0.06)] overflow-hidden">
      {/* Editorial Header Bar */}
      <div className="flex items-center justify-between pb-5 border-b border-[#F1F5F9] mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0F6AD7]" />
          <span className="text-xs font-bold tracking-wider text-[#0A1C38] uppercase">
            B2B Trade Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21]" />
          <span>India ⇄ Global Markets</span>
        </div>
      </div>

      {/* Main Visual: 3 Interconnected Stages of Commerce */}
      <div className="space-y-4">
        {/* Step 1: Indian Manufacturing */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:border-[#0F6AD7]/50 hover:shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#0F6AD7] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A1C38]">Indian Manufacturing Base</h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Industrial clusters, specialized tooling & production capacity
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#0F6AD7]">
              Origin
            </span>
          </div>

          <div className="mt-3.5 pt-3 border-t border-[#E2E8F0]/80 flex flex-wrap gap-2 text-[11px] text-[#475569]">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">Precision Machining</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">Textiles & Fabrics</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">Specialty Fabrication</span>
          </div>
        </div>

        {/* Dynamic Connector with TradORB Brand Colors */}
        <div className="flex items-center justify-center py-0.5">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0A1C38] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
            <span>TradORB Trade Rails</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0F6AD7]" />
          </div>
        </div>

        {/* Step 2: Commercial Pathways & Direct Trade Rails */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:border-[#0A1C38]/50 hover:shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] text-[#F36F21] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A1C38]">Direct Commercial Connection</h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Clear specifications, verified capabilities & reliable trade terms
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FFF7ED] text-[#F36F21]">
              Trade Rail
            </span>
          </div>

          <div className="mt-3.5 pt-3 border-t border-[#E2E8F0]/80 flex items-center justify-between text-xs text-[#334155]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0F6AD7]" />
              Frictionless discovery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0A1C38]" />
              Counterparty trust
            </span>
          </div>
        </div>

        {/* Dynamic Connector */}
        <div className="flex items-center justify-center py-0.5">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0A1C38] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0F6AD7]" />
            <span>Pan-India & International Distribution</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0F6AD7]" />
          </div>
        </div>

        {/* Step 3: Global Markets & Buyers */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:border-[#0F6AD7]/50 hover:shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] text-[#0F6AD7] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A1C38]">Global Markets & Opportunities</h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Institutional buyers, distributors and enterprises worldwide
                </p>
              </div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#EFF6FF] text-[#0F6AD7]">
              Destination
            </span>
          </div>

          <div className="mt-3.5 pt-3 border-t border-[#E2E8F0]/80 flex flex-wrap gap-2 text-[11px] text-[#475569]">
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">Domestic Enterprises</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">International Buyers</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0]">Export Corridors</span>
          </div>
        </div>
      </div>

      {/* Grounded Summary Footer */}
      <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
        <span>Building for serious commercial scale</span>
        <span className="font-bold text-[#0A1C38]">TradORB Infrastructure</span>
      </div>
    </div>
  );
};
