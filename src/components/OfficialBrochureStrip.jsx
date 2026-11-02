import React from 'react';
import { Download, FileText, Sparkles } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

export default function OfficialBrochureStrip() {
  const brochureUrl = OFFICIAL_PROJECT_DETAILS.brochures[0].url;

  return (
    <section className="bg-stone-900 py-6 text-white border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              DETAILED BROCHURE
            </h3>
            <p className="text-xs text-stone-400">
              Download the official 18.4 MB high-resolution project brochure with complete floor plans and specifications.
            </p>
          </div>
        </div>

        <a
          href={brochureUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <Download className="w-4 h-4 text-amber-700" />
          <span>DOWNLOAD</span>
        </a>
      </div>
    </section>
  );
}
