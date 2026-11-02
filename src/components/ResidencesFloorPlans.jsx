import React, { useState } from 'react';
import { RESIDENCE_CONFIGS } from '../data/projectData';
import { Maximize2, Compass, Layers, Check, Sparkles, ArrowRight, Eye } from 'lucide-react';

export default function ResidencesFloorPlans({ onOpenVipModal }) {
  const [selectedConfigId, setSelectedConfigId] = useState('3bhk');
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const activeConfig = RESIDENCE_CONFIGS.find(c => c.id === selectedConfigId) || RESIDENCE_CONFIGS[1];
  const activeRoom = activeConfig.roomSpecs[selectedRoomIndex] || activeConfig.roomSpecs[0];

  return (
    <section id="residences" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Residences Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Curated <span className="gold-gradient-text italic font-serif">Living Suites</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Designed with zero wasted hallways, double-aspect river balconies, and master suites buffered for ultimate serenity.
            </p>
          </div>

          {/* Configuration Selection Pills */}
          <div className="flex flex-wrap bg-dark-900 p-1.5 rounded-2xl border border-white/10 gap-1">
            {RESIDENCE_CONFIGS.map((config) => (
              <button
                key={config.id}
                onClick={() => {
                  setSelectedConfigId(config.id);
                  setSelectedRoomIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedConfigId === config.id
                    ? 'bg-gold-500 text-dark-950 font-bold shadow-lg shadow-gold-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{config.type.split(' ')[0]} {config.type.split(' ')[1]}</span>
                {config.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                    selectedConfigId === config.id ? 'bg-dark-950/20 text-dark-950' : 'bg-gold-500/20 text-gold-300'
                  }`}>
                    {config.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* The Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Architectural Floor Plan Blueprint */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-panel-glow rounded-3xl p-6 border border-gold-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <span>{activeConfig.type}</span>
                    <span className="text-xs font-mono font-normal text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                      {activeConfig.series}
                    </span>
                  </h3>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Carpet Area: <strong className="text-white">{activeConfig.carpetArea}</strong> ({activeConfig.carpetAreaMetric})
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">Starting At</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">
                    {activeConfig.priceStarting}
                  </div>
                </div>
              </div>

              {/* Architectural CAD Vector Schematic Representation */}
              <div className="relative aspect-[4/3] rounded-2xl bg-dark-950 border border-white/10 p-5 flex flex-col justify-between overflow-hidden group">
                <div className="absolute inset-0 arch-grid-pattern opacity-60 pointer-events-none" />

                {/* Wind & Sun Orientation Compass in Corner */}
                <div className="absolute top-4 right-4 z-10 flex flex-col items-center bg-dark-900/90 border border-white/10 px-2.5 py-1.5 rounded-xl">
                  <div className="text-[10px] font-mono text-gold-400 font-bold">N</div>
                  <Compass className="w-4 h-4 text-gray-400 animate-spin" style={{ animationDuration: '30s' }} />
                  <div className="text-[9px] text-emerald-400 font-mono mt-0.5">River Breeze ↑</div>
                </div>

                {/* Interactive Schematic Room Grid */}
                <div className="relative z-10 flex-1 grid grid-cols-6 grid-rows-4 gap-2 my-2">
                  {/* Living Room Area */}
                  <button
                    onClick={() => setSelectedRoomIndex(0)}
                    className={`col-span-4 row-span-2 rounded-xl p-3 border text-left transition-all relative overflow-hidden ${
                      selectedRoomIndex === 0
                        ? 'bg-gold-500/25 border-gold-400 shadow-lg shadow-gold-500/20'
                        : 'bg-white/5 border-white/10 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-serif">Grand Living & Dining</span>
                      <span className="text-[10px] font-mono text-gold-400">{activeConfig.roomSpecs[0]?.dimensions}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">Cross-Ventilated Double-Aspect</div>
                    <div className="absolute bottom-2 right-2 text-[9px] text-emerald-400 font-mono">Italian Marble</div>
                  </button>

                  {/* River Deck Balcony */}
                  <button
                    onClick={() => setSelectedRoomIndex(activeConfig.roomSpecs.findIndex(r => r.name.includes('Deck') || r.name.includes('Balcony')))}
                    className={`col-span-2 row-span-2 rounded-xl p-2.5 border text-left transition-all ${
                      selectedRoomIndex === activeConfig.roomSpecs.findIndex(r => r.name.includes('Deck') || r.name.includes('Balcony'))
                        ? 'bg-emerald-500/25 border-emerald-400 shadow-lg'
                        : 'bg-emerald-950/20 border-emerald-500/20 hover:border-emerald-400'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-emerald-300 block">River Deck</span>
                    <span className="text-[9px] font-mono text-gray-400 block mt-0.5">500m Riverfront Vista</span>
                    <span className="text-[9px] text-emerald-400 font-mono mt-2 block">Teak Deck Finish</span>
                  </button>

                  {/* Master Suite */}
                  <button
                    onClick={() => setSelectedRoomIndex(1)}
                    className={`col-span-3 row-span-2 rounded-xl p-3 border text-left transition-all ${
                      selectedRoomIndex === 1
                        ? 'bg-gold-500/25 border-gold-400 shadow-lg shadow-gold-500/20'
                        : 'bg-white/5 border-white/10 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-serif">Master Suite</span>
                      <span className="text-[10px] font-mono text-gold-400">{activeConfig.roomSpecs[1]?.dimensions}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">French Oak Parquet Flooring</div>
                    <span className="text-[9px] text-gold-400 font-mono mt-2 block">Private Walk-in Niche</span>
                  </button>

                  {/* Bedroom 2 / Guest */}
                  <button
                    onClick={() => setSelectedRoomIndex(3)}
                    className={`col-span-3 row-span-2 rounded-xl p-3 border text-left transition-all ${
                      selectedRoomIndex === 3
                        ? 'bg-gold-500/25 border-gold-400 shadow-lg shadow-gold-500/20'
                        : 'bg-white/5 border-white/10 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-serif">Bedroom 2</span>
                      <span className="text-[10px] font-mono text-gold-400">{activeConfig.roomSpecs[3]?.dimensions}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1">En-suite Bath Access</div>
                    <span className="text-[9px] text-gray-400 font-mono mt-2 block">Large Format Slabs</span>
                  </button>
                </div>

                {/* Interactive Prompt Footer */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
                    <span>Click on any room in the schematic to inspect dimensions & finishes</span>
                  </div>
                  <span className="text-gold-400 font-mono font-medium">100% PLUS Compliant</span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeConfig.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Room Inspector & Reservation CTA */}
          <div className="lg:col-span-5 space-y-4">
            {/* Active Room Inspector Card */}
            <div className="glass-panel-glow p-6 rounded-3xl border border-gold-500/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30">
                  Room Inspector
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {activeRoom?.area}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                {activeRoom?.name}
              </h4>
              <div className="text-sm font-mono text-gold-300 mb-4">
                Clear Internal Dimensions: {activeRoom?.dimensions}
              </div>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Ventilation Vector:</span>
                  <strong className="text-emerald-400">Direct River Cross-Breeze</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Daylight Coefficient:</span>
                  <strong className="text-gold-300">520 Lux (Sun-Path Optimized)</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">Sound Insulation:</span>
                  <strong className="text-white">STC 52 dB Acoustic Glass</strong>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-400">Ceiling Height:</span>
                  <strong className="text-white font-mono">10' 6" Clear Height</strong>
                </div>
              </div>

              {/* Complete Room Specification List Selector */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-gray-400 mb-2">
                  All Room Dimensions ({activeConfig.type}):
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                  {activeConfig.roomSpecs.map((room, rIdx) => (
                    <button
                      key={rIdx}
                      onClick={() => setSelectedRoomIndex(rIdx)}
                      className={`p-2 rounded-xl text-left text-xs transition-all border ${
                        selectedRoomIndex === rIdx
                          ? 'bg-gold-500/20 border-gold-400 text-white'
                          : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-semibold truncate">{room.name}</div>
                      <div className="text-[10px] text-gold-400/90 font-mono">{room.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reservation & Cost Breakdown CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>Estimated Monthly EMI:</span>
                  <strong className="text-white font-mono">{activeConfig.emiStarting}</strong>
                </div>

                <button
                  onClick={onOpenVipModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 group active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-dark-950" />
                  <span>Enquire For {activeConfig.type}</span>
                  <ArrowRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
