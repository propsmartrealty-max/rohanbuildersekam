import React, { useState } from 'react';
import { Compass, Quote, Ruler, Maximize2, X, ExternalLink, Sparkles } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

export default function ArchitecturalVision() {
  const [isMasterPlanOpen, setIsMasterPlanOpen] = useState(false);

  return (
    <section id="vision" className="py-20 relative overflow-hidden bg-[#EFECE6] border-t border-b border-stone-200">
      <div className="absolute inset-0 arch-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-mono tracking-widest uppercase mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Architectural Concept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Architect's <span className="italic font-serif font-medium text-amber-800">Vision & Note</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conceived by Ar. Sanjay Mohe (Mindspace Architects) for Rohan Builders across the natural bend of the Mula River in Balewadi.
          </p>
        </div>

        {/* Architect's Note Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left Column: Official Architect Portrait & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-stone-800 py-2">
              <Quote className="w-8 h-8 text-stone-300 absolute -top-3 -left-3" />
              <p className="font-serif text-lg sm:text-2xl text-stone-900 italic leading-snug">
                "{OFFICIAL_PROJECT_DETAILS.architectNote}"
              </p>
              
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={OFFICIAL_PROJECT_DETAILS.architectImage}
                  alt="Ar. Sanjay Mohe"
                  className="w-14 h-14 rounded-full object-cover border-2 border-stone-400 p-0.5 bg-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-stone-900">Ar. Sanjay Mohe</div>
                  <div className="text-xs text-amber-800 font-mono font-semibold">Principal Architect, Mindspace Architects</div>
                  <div className="text-[11px] text-stone-500">Chief Mastermind behind Rohan Ekam</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-4 rounded-2xl border border-stone-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900">13 Acres</div>
                <div className="text-xs text-stone-600 mt-0.5">Riverside Land Parcel</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-stone-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900">Level 14</div>
                <div className="text-xs text-stone-600 mt-0.5">Sky Ground in the Air</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-stone-200 shadow-xs col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900">PMC</div>
                <div className="text-xs text-stone-600 mt-0.5">Pune Municipal Limits</div>
              </div>
            </div>
          </div>

          {/* Right Column: Master Plan Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-stone-300 glass-panel-glow p-5 group shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-amber-800" />
                  <span className="text-xs font-mono text-stone-900 uppercase tracking-wider font-semibold">Official Master Plan</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 font-mono font-semibold border border-stone-300">
                  13-ACRE PARCEL
                </span>
              </div>

              {/* Master Plan Thumbnail */}
              <div 
                onClick={() => setIsMasterPlanOpen(true)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-stone-200 cursor-pointer group/img"
              >
                <img
                  src={OFFICIAL_PROJECT_DETAILS.masterPlanImage}
                  alt="Rohan Ekam Master Plan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-stone-950/40 backdrop-blur-xs">
                  <span className="px-5 py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>View High-Res Master Plan</span>
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-stone-600">
                <span>Cascading lawns & Mula River edge</span>
                <button
                  onClick={() => setIsMasterPlanOpen(true)}
                  className="text-stone-900 font-mono font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Enlarge Blueprint</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Master Plan Fullscreen Lightbox Modal */}
        {isMasterPlanOpen && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsMasterPlanOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl border border-stone-300 p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMasterPlanOpen(false)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[80vh] overflow-auto rounded-2xl flex items-center justify-center">
                <img
                  src={OFFICIAL_PROJECT_DETAILS.masterPlanImage}
                  alt="Rohan Ekam Master Plan High-Res"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-3 text-center text-xs text-stone-700 font-mono">
                Official Rohan Ekam 13-Acre Master Plan • Conceptualized by Mindspace Architects
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
