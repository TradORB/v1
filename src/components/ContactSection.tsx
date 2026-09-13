import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#0A1C38] text-xs font-semibold uppercase tracking-wider mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
          <span>TradORB is coming soon</span>
        </div>

        {/* Primary Headline & Sub-headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#0A1C38] leading-tight mb-4">
          Building the future of Indian trade.
        </h2>
        <p className="text-lg sm:text-xl text-[#64748B] max-w-xl mx-auto mb-12">
          We’re preparing for our initial rollout. Get in touch or stay connected to hear when we launch.
        </p>

        {/* Minimal, Welcoming Contact Box */}
        <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_16px_40px_rgba(10,28,56,0.06)] text-left">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A1C38] uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A1C38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F6AD7] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A1C38] uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A1C38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F6AD7] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1C38] uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A1C38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F6AD7] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A1C38] uppercase tracking-wider mb-2">
                  Message or Inquiries (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we collaborate, or what capabilities are you looking to connect?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A1C38] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F6AD7] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1C38] text-white font-semibold text-sm hover:bg-[#0F6AD7] transition-all shadow-sm cursor-pointer"
              >
                <span>Stay connected</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#0F6AD7] flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1C38]">Thank you for reaching out</h3>
              <p className="text-sm text-[#64748B] max-w-sm mx-auto">
                We have received your message. We look forward to sharing our launch updates with you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#0F6AD7] hover:underline underline-offset-4 mt-4 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
