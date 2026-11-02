import React, { useState } from 'react';
import { OFFICIAL_FAQS } from '../data/projectData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function OfficialFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-[#F5F2EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Buyer Due Diligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Official <span className="italic font-serif font-medium text-amber-800">Frequently Asked Questions</span>
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
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
                className="glass-panel rounded-2xl border border-stone-200 overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-800 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-stone-900">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-stone-700 transition-transform ${isOpen ? 'rotate-180 bg-stone-900 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-[#FAF8F5]/60">
                    <p>{faq.a}</p>
                    <div className="mt-3 text-[10px] font-mono text-amber-800 uppercase tracking-wider font-semibold">
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
