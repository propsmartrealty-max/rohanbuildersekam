import React, { useState } from 'react';
import { OFFICIAL_FAQS } from '../data/projectData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function OfficialFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Due Diligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Official <span className="river-gradient-text italic font-serif">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Verified answers on PMC municipal limits, possession timelines, and RERA registration directly from Rohan Builders.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {OFFICIAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 transition-transform ${isOpen ? 'rotate-180 bg-cyan-950/80 border border-cyan-400/30' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                    <p>{faq.a}</p>
                    <div className="mt-3 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      Verified by Rohan Builders Customer Support
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
