import React, { useState } from 'react';
import { OFFICIAL_FLOOR_PLANS } from '../data/projectData';
import { Maximize2, Compass, Layers, Check, Sparkles, ArrowRight, Eye, X, Download } from 'lucide-react';

export default function ResidencesFloorPlans({ onOpenVipModal }) {
  const [selectedPlanId, setSelectedPlanId] = useState(OFFICIAL_FLOOR_PLANS[0].id);
  const [isBlueprintLightboxOpen, setIsBlueprintLightboxOpen] = useState(false);

  const activePlan = OFFICIAL_FLOOR_PLANS.find(p => p.id === selectedPlanId) || OFFICIAL_FLOOR_PLANS[0];

  return (
    <section id="residences" className="py-20 relative overflow-hidden bg-dark-950">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Official Architectural Plans</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Curated <span className="river-gradient-text italic font-serif">Floor Plans</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Official 2, 3 & 4 BHK layouts from Rohan Builders. Planned with zero corridor wastage and maximum usable carpet area.
            </p>
          </div>

          {/* Configuration Selection Tabs */}
          <div className="flex flex-wrap bg-dark-900 p-1.5 rounded-2xl border border-white/10 gap-1">
            {OFFICIAL_FLOOR_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  selectedPlanId === plan.id
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Viewer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Plan Drawing from Rohan Builders */}
          <div className="lg:col-span-8 space-y-4">
            <div className="glass-panel-glow rounded-3xl p-6 border border-cyan-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <span>{activePlan.type}</span>
                    <span className="text-xs font-mono font-normal text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                      Rohan PLUS Certified
                    </span>
                  </h3>
                  <div className="text-xs text-gray-400 mt-1">
                    Carpet Area: <strong className="text-white">{activePlan.carpetArea}</strong>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Starting Price</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-cyan-400">
                    {activePlan.priceStarting}
                  </div>
                </div>
              </div>

              {/* Floor Plan Image Frame */}
              <div 
                onClick={() => setIsBlueprintLightboxOpen(true)}
                className="relative rounded-2xl bg-white p-4 sm:p-6 flex items-center justify-center cursor-pointer group/plan overflow-hidden min-h-[380px]"
              >
                <img
                  src={activePlan.image}
                  alt={activePlan.type}
                  className="max-h-[440px] w-auto object-contain transition-transform duration-500 group-hover/plan:scale-105"
                />

                {/* Hover Click to Enlarge Overlay */}
                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover/plan:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-5 py-2.5 rounded-full bg-cyan-500 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                    <Maximize2 className="w-4 h-4" />
                    <span>Enlarge Full Resolution Blueprint</span>
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>{activePlan.description}</span>
                </span>
                <button
                  onClick={() => setIsBlueprintLightboxOpen(true)}
                  className="text-cyan-400 font-mono hover:underline flex items-center gap-1"
                >
                  <span>Zoom Drawing</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Room Specification Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/40">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                Dimensions & Schedule
              </span>

              <h4 className="font-serif text-2xl font-bold text-white mt-3 mb-1">
                Room Breakdown
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Official room dimensions for {activePlan.type}.
              </p>

              <div className="space-y-2 py-3 border-t border-b border-white/10 text-xs">
                {activePlan.specs.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-b-0">
                    <span className="text-gray-300">{item.room}</span>
                    <strong className="text-cyan-300 font-mono">{item.dimension}</strong>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 mt-5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>100% Cross-Ventilated (Wind-Tested)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Deep sun-shading overhang balconies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Zero direct sightlines to adjacent towers</span>
                </div>
              </div>

              <button
                onClick={onOpenVipModal}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-dark-950" />
                <span>Enquire For {activePlan.type}</span>
                <ArrowRight className="w-4 h-4 text-dark-950" />
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Lightbox Modal */}
        {isBlueprintLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsBlueprintLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsBlueprintLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-950 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[80vh] overflow-auto flex items-center justify-center">
                <img
                  src={activePlan.image}
                  alt={activePlan.type}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-700 font-mono">
                <span>{activePlan.type} • Official Rohan Ekam Architectural Drawing</span>
                <a
                  href={activePlan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 font-bold underline flex items-center gap-1"
                >
                  <span>Open Full Size Image</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
