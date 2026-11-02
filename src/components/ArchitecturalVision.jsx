import React, { useState } from 'react';
import { Compass, Quote, Ruler, Maximize2, X, ExternalLink, Sparkles } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

export default function ArchitecturalVision() {
  const [isMasterPlanOpen, setIsMasterPlanOpen] = useState(false);

  return (
    <section id="vision" className="py-20 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      <div className="absolute inset-0 arch-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Architectural Concept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Architect's <span className="river-gradient-text italic font-serif">Vision & Note</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Conceived by Ar. Sanjay Mohe (Mindspace Architects) for Rohan Builders across the natural bend of the Mula River in Balewadi.
          </p>
        </div>

        {/* Architect's Note Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left Column: Official Architect Portrait & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-cyan-400/70 py-2">
              <Quote className="w-8 h-8 text-cyan-500/20 absolute -top-3 -left-3" />
              <p className="font-serif text-lg sm:text-2xl text-gray-100 italic leading-snug">
                "{OFFICIAL_PROJECT_DETAILS.architectNote}"
              </p>
              
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={OFFICIAL_PROJECT_DETAILS.architectImage}
                  alt="Ar. Sanjay Mohe"
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/40 p-0.5 bg-dark-950"
                />
                <div>
                  <div className="text-sm font-bold text-white">Ar. Sanjay Mohe</div>
                  <div className="text-xs text-cyan-300/90 font-mono">Principal Architect, Mindspace Architects</div>
                  <div className="text-[11px] text-gray-400">Chief Mastermind behind Rohan Ekam</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5">
                <div className="text-xl sm:text-2xl font-serif font-bold text-cyan-400">13 Acres</div>
                <div className="text-xs text-gray-400 mt-0.5">Riverside Land Parcel</div>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5">
                <div className="text-xl sm:text-2xl font-serif font-bold text-cyan-400">Level 14</div>
                <div className="text-xs text-gray-400 mt-0.5">Sky Ground in the Air</div>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-serif font-bold text-cyan-400">PMC</div>
                <div className="text-xs text-gray-400 mt-0.5">Pune Municipal Limits</div>
              </div>
            </div>
          </div>

          {/* Right Column: Master Plan Card with Zoom Lightbox */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 glass-panel-glow p-5 group">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-gray-200 uppercase tracking-wider">Official Master Plan</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-mono">
                  13-ACRE PARCEL
                </span>
              </div>

              {/* Master Plan Thumbnail */}
              <div 
                onClick={() => setIsMasterPlanOpen(true)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-950 border border-white/10 cursor-pointer group/img"
              >
                <img
                  src={OFFICIAL_PROJECT_DETAILS.masterPlanImage}
                  alt="Rohan Ekam Master Plan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-dark-950/40 backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-full bg-cyan-500 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View High-Res Master Plan</span>
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                <span>Cascading lawns & Mula River edge</span>
                <button
                  onClick={() => setIsMasterPlanOpen(true)}
                  className="text-cyan-400 font-mono hover:underline flex items-center gap-1"
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsMasterPlanOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-dark-900 rounded-3xl border border-cyan-500/40 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMasterPlanOpen(false)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-dark-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[80vh] overflow-auto rounded-2xl">
                <img
                  src={OFFICIAL_PROJECT_DETAILS.masterPlanImage}
                  alt="Rohan Ekam Master Plan High-Res"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-3 text-center text-xs text-gray-300">
                Official Rohan Ekam 13-Acre Master Plan • Conceptualized by Mindspace Architects
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
