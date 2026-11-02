import React, { useState } from 'react';
import { OFFICIAL_FAQS_COMPLETE } from '../data/projectData';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

export default function OfficialFAQ() {
  const categories = Object.keys(OFFICIAL_FAQS_COMPLETE);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openQuestionIdx, setOpenQuestionIdx] = useState(0);

  const currentQuestions = OFFICIAL_FAQS_COMPLETE[activeCategory] || [];

  const toggleQuestion = (idx) => {
    setOpenQuestionIdx(openQuestionIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Title Column (Width ~250px pattern) */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
              FAQ
            </h2>
            <div className="w-12 h-0.5 bg-amber-800 mt-2 mb-6"></div>

            {/* 8 Official Category Tabs */}
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenQuestionIdx(0);
                  }}
                  className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between ${
                    activeCategory === cat
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${activeCategory === cat ? 'bg-white/20 text-white' : 'text-stone-500'}`}>
                    {OFFICIAL_FAQS_COMPLETE[cat].length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area: Nested Child Questions */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                {activeCategory}
              </h3>
              <span className="text-xs font-mono text-stone-500">
                {currentQuestions.length} Questions Answered
              </span>
            </div>

            <div className="space-y-2.5">
              {currentQuestions.map((item, idx) => {
                const isOpen = openQuestionIdx === idx;

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleQuestion(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        {item.q}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'}`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-[#FCFAF7]">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
