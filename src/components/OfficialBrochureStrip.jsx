import React from 'react';
import { Download, FileText, Sparkles } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

export default function OfficialBrochureStrip() {
  const brochureUrl = OFFICIAL_PROJECT_DETAILS.brochures[0].url;

  return (
    <section className="relative py-8 bg-[#F5F2EB] border-t border-b border-stone-300/80 overflow-hidden">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-64 h-24 bg-[#E8D5C4] top-0 right-1/4 animate-blob" />
      <div className="glass-orb w-64 h-24 bg-[#C8DECE] bottom-0 left-1/4 animate-blob [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 border border-white/90 shadow-xl shadow-stone-900/5 flex flex-col sm:flex-row items-center justify-between gap-5 glass-shimmer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl glass-panel border border-white/80 flex items-center justify-center text-amber-800 shadow-sm">
              <FileText className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-stone-900">
                  DETAILED BROCHURE
                </h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full glass-panel border border-stone-300 font-mono text-stone-700">
                  18.4 MB PDF
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Download the complete high-resolution project brochure with complete floor plans, elevation renders, and specifications.
              </p>
            </div>
          </div>

          <a
            href={brochureUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md shadow-stone-900/10 shrink-0 group active:scale-95 glass-shimmer"
          >
            <Download className="w-4 h-4 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>DOWNLOAD NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
}
