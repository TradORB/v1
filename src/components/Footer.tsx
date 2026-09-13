import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tradorb',
      icon: Linkedin,
      label: 'Connect with TradORB on LinkedIn',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/tradorb_official',
      icon: Instagram,
      label: 'Follow TradORB on Instagram',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/Tradorb/61594563591054/',
      icon: Facebook,
      label: 'Follow TradORB on Facebook',
    },
  ];

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2E8F0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#F1F5F9]">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Logo size="md" variant="original" />
            <p className="text-xs text-[#64748B] mt-2 max-w-sm">
              Connecting Indian manufacturers with buyers, markets and opportunities.
            </p>
          </div>

          {/* Center/Right: Social Connections */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1C38]">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A1C38] flex items-center justify-center transition-all duration-200 hover:text-[#0F6AD7] hover:border-[#0F6AD7] hover:bg-[#EFF6FF] hover:scale-105 shadow-2xs"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Status Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <span>© 2026 TradORB. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
            <span className="font-semibold text-[#0A1C38]">TradORB Trade Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

