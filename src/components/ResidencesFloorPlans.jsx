import React, { useState } from 'react';
import { OFFICIAL_FLOOR_PLANS } from '../data/projectData';
import { Maximize2, Compass, Layers, Check, Sparkles, ArrowRight, Eye, X, Download } from 'lucide-react';

export default function ResidencesFloorPlans({ onOpenVipModal }) {
  const [selectedPlanId, setSelectedPlanId] = useState(OFFICIAL_FLOOR_PLANS[0].id);
  const [isBlueprintLightboxOpen, setIsBlueprintLightboxOpen] = useState(false);

  const activePlan = OFFICIAL_FLOOR_PLANS.find(p => p.id === selectedPlanId) || OFFICIAL_FLOOR_PLANS[0];

  return (
    <section id="residences" className="py-20 relative overflow-hidden bg-[#F5F2EB]">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-96 h-96 bg-[#E8D5C4] top-10 -right-20 animate-blob" />
      <div className="glass-orb w-80 h-80 bg-[#C8DECE] -bottom-10 left-10 animate-blob [animation-delay:5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs glass-shimmer">
              <Layers className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Curated Architectural Plans</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
              Curated <span className="italic font-serif font-medium text-amber-800">Floor Plans</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Spacious 2, 3 &amp; 4 BHK layouts from Rohan Builders. Planned with zero corridor wastage and maximum usable carpet area.
            </p>
          </div>

          {/* Configuration Selection Tabs in Frosted Glass */}
          <div className="flex flex-wrap glass-panel p-1.5 rounded-2xl border border-white/90 gap-1.5 shadow-sm">
            {OFFICIAL_FLOOR_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  selectedPlanId === plan.id
                    ? 'bg-stone-900 text-white shadow-md shadow-stone-900/10 scale-102'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-white/70'
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Viewer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Plan Drawing */}
          <div className="lg:col-span-8 space-y-4">
            <div className="glass-panel-glow rounded-3xl p-6 border border-white/90 relative overflow-hidden shadow-xl shadow-stone-900/5 glass-card-hover">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <span>{activePlan.type}</span>
                    <span className="text-xs font-mono font-semibold text-amber-800 px-3 py-0.5 rounded-full glass-panel border border-amber-300/60 shadow-xs">
                      Rohan PLUS Certified
                    </span>
                  </h3>
                  <div className="text-xs text-stone-600 mt-1">
                    Carpet Area: <strong className="text-stone-900 font-semibold">{activePlan.carpetArea}</strong>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-mono">Starting Price</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-amber-800">
                    {activePlan.priceStarting}
                  </div>
                </div>
              </div>

              {/* Floor Plan Image Frame */}
              <div 
                onClick={() => setIsBlueprintLightboxOpen(true)}
                className="relative rounded-2xl bg-white/90 p-4 sm:p-6 flex items-center justify-center cursor-pointer group/plan overflow-hidden min-h-[380px] border border-stone-200/80 shadow-xs glass-shimmer"
              >
                <img
                  src={activePlan.image}
                  alt={activePlan.type}
                  className="max-h-[440px] w-auto object-contain transition-transform duration-500 group-hover/plan:scale-105"
                />

                {/* Hover Click to Enlarge Overlay */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover/plan:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-5 py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl glass-shimmer">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                    <span>Enlarge Full Resolution Blueprint</span>
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>{activePlan.description}</span>
                </span>
                <button
                  onClick={() => setIsBlueprintLightboxOpen(true)}
                  className="text-stone-900 font-mono font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Zoom Drawing</span>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Room Specification Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel-glow p-6 rounded-3xl border border-white/90 shadow-xl shadow-stone-900/5 glass-card-hover glass-shimmer">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-800 glass-panel px-3 py-1 rounded-full border border-white/80 font-semibold shadow-xs">
                Dimensions & Schedule
              </span>

              <h4 className="font-serif text-2xl font-bold text-stone-900 mt-3 mb-1">
                Room Breakdown
              </h4>
              <p className="text-xs text-stone-600 mb-4">
                Verified room dimensions for {activePlan.type}.
              </p>

              <div className="space-y-2 py-3 border-t border-b border-stone-200/80 text-xs">
                {activePlan.specs.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-stone-100/60 last:border-b-0">
                    <span className="text-stone-700 font-medium">{item.room}</span>
                    <strong className="text-stone-900 font-mono">{item.dimension}</strong>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 mt-5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>100% Cross-Ventilated (Wind-Tested)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Deep sun-shading overhang balconies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Zero direct sightlines to adjacent towers</span>
                </div>
              </div>

              <button
                onClick={onOpenVipModal}
                className="w-full mt-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 active:scale-95 glass-shimmer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Enquire For {activePlan.type}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Lightbox Modal in Frosted Glass */}
        {isBlueprintLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setIsBlueprintLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full glass-panel-glow border border-white/90 rounded-3xl p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsBlueprintLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-2 rounded-2xl bg-white/70">
                <img
                  src={activePlan.image}
                  alt={activePlan.type}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-700 font-mono">
                <span>{activePlan.type} • Rohan Ekam Architectural Drawing</span>
                <a
                  href={activePlan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-900 font-bold underline flex items-center gap-1"
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
