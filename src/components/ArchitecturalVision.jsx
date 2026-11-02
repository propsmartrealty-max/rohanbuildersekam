import React, { useState } from 'react';
import { Compass, CheckCircle2, XCircle, Sparkles, Quote, Ruler } from 'lucide-react';

export default function ArchitecturalVision() {
  const [activeComparison, setActiveComparison] = useState('ekam');

  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 arch-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Mastermind Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Conceived by <span className="gold-gradient-text italic">Ar. Sanjay Mohe</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Mindspace Architects and Rohan Builders join forces to rethink high-density vertical living. Moving beyond conventional tower boxes to weave nature, air, and earth through every level.
          </p>
        </div>

        {/* Narrative & Blueprint Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left Column: Architectural Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-gold-500/60 py-2">
              <Quote className="w-8 h-8 text-gold-500/30 absolute -top-3 -left-3" />
              <p className="font-serif text-xl sm:text-2xl text-gray-200 italic leading-snug">
                "As towers climb higher into the sky, people get increasingly detached from the ground, trees, and serendipitous neighborly greetings. With Rohan Ekam, we asked: Why can't we simply lift the ground 140 feet into the air?"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center font-serif font-bold text-gold-400">
                  SM
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Ar. Sanjay Mohe</div>
                  <div className="text-xs text-gold-400/90">Principal Architect, Mindspace Architects</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Situated right where the Mula River makes its graceful bend in Balewadi, the orientation of all 9 towers was tested in wind tunnels. Instead of flat monolithic facades that trap heat and create wind shears, the buildings are contoured like sculptural river stones, channeling fresh cool currents directly through the central podium and residences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-serif font-bold text-gold-400">14th Fl</div>
                <div className="text-xs text-gray-400 mt-1">Ground in the Sky Altitude</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-serif font-bold text-gold-400">500 M</div>
                <div className="text-xs text-gray-400 mt-1">Direct Riverfront Edge</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-2xl font-serif font-bold text-gold-400">100%</div>
                <div className="text-xs text-gray-400 mt-1">Vehicle-Free Surface Realm</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Drawing / Isometric Concept */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 glass-panel-glow p-6 group">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Section Elevation Model</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono">CAD REV. 2026</span>
              </div>

              {/* Conceptual Section Graphic */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-950 flex flex-col justify-between p-4 border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                  alt="Architectural Riverfront Concept"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/30" />

                {/* Annotation overlays */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono bg-dark-950/80 px-2 py-1 rounded text-gold-300 border border-gold-500/30">
                    LEVEL 32 • THE CROWN
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">+330 FT</span>
                </div>

                <div className="relative z-10 my-auto py-2 px-3 rounded-lg bg-gold-500/20 border border-gold-500/50 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-300 font-serif">LEVEL 14 • THE SKY GROUND</span>
                    <span className="text-[10px] font-mono text-gold-400">+150 FT</span>
                  </div>
                  <div className="text-[10px] text-gray-300 mt-0.5">Sky bridges, outdoor pods & elevated lawns</div>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <span className="text-[10px] font-mono bg-dark-950/80 px-2 py-1 rounded text-emerald-400 border border-emerald-500/30">
                    LEVEL 0 • MULA RIVER PROMENADE
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">GROUND LEVEL</span>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-400 flex items-center justify-between">
                <span>Contour responsive structural zoning</span>
                <span className="text-gold-400 font-mono">13 ACRE MASTERPLAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Architectural Paradigm Shift Comparison */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl text-white">The High-Rise Paradigm Shift</h3>
              <p className="text-xs text-gray-400 mt-1">See how Rohan Ekam dismantles standard skyscraper compromises</p>
            </div>
            <div className="flex rounded-full bg-dark-950 p-1 border border-white/10">
              <button
                onClick={() => setActiveComparison('standard')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeComparison === 'standard'
                    ? 'bg-rose-950/60 text-rose-300 border border-rose-500/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Standard Skyscrapers
              </button>
              <button
                onClick={() => setActiveComparison('ekam')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeComparison === 'ekam'
                    ? 'bg-gold-500 text-dark-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Rohan Ekam Masterstroke
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              activeComparison === 'ekam'
                ? 'bg-gold-500/10 border-gold-500/40 shadow-lg shadow-gold-500/5'
                : 'bg-dark-950/60 border-white/5 opacity-60'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                {activeComparison === 'ekam' ? (
                  <CheckCircle2 className="w-5 h-5 text-gold-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <span className="font-serif text-lg font-bold text-white">
                  {activeComparison === 'ekam' ? 'Dual-Level Earth' : 'Single Ground Clutter'}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {activeComparison === 'ekam'
                  ? 'Residents on higher floors never need to take an elevator all the way down to touch grass or stroll under trees. A complete 14th-floor park floats right midway.'
                  : 'All amenities crowded at the base. Higher floor residents suffer long elevator waits and feel isolated from community greenery.'}
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              activeComparison === 'ekam'
                ? 'bg-gold-500/10 border-gold-500/40 shadow-lg shadow-gold-500/5'
                : 'bg-dark-950/60 border-white/5 opacity-60'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                {activeComparison === 'ekam' ? (
                  <CheckCircle2 className="w-5 h-5 text-gold-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <span className="font-serif text-lg font-bold text-white">
                  {activeComparison === 'ekam' ? 'Inter-Tower Sky Bridges' : 'Isolated Tower Silos'}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {activeComparison === 'ekam'
                  ? 'Suspended walkways connect the towers into an integrated vertical neighborhood. Walk over to your friend’s wing in open air 150 ft above ground.'
                  : 'Towers function as separate vertical boxes with zero interconnectivity except downstairs in the dark basement or parking.'}
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              activeComparison === 'ekam'
                ? 'bg-gold-500/10 border-gold-500/40 shadow-lg shadow-gold-500/5'
                : 'bg-dark-950/60 border-white/5 opacity-60'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                {activeComparison === 'ekam' ? (
                  <CheckCircle2 className="w-5 h-5 text-gold-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <span className="font-serif text-lg font-bold text-white">
                  {activeComparison === 'ekam' ? 'River Breeze Venturi' : 'Stifling Concrete Trap'}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {activeComparison === 'ekam'
                  ? 'The gap at Level 14 allows river winds to freely flow through the towers, lowering ambient building temperature by over 3°C naturally.'
                  : 'Monolithic towers act as a giant wall, trapping heat, blocking air currents, and creating uncomfortable ground wind turbulence.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
