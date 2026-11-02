import React, { useState } from 'react';
import { LOCATION_LANDMARKS } from '../data/projectData';
import { 
  Compass, MapPin, Navigation, Clock, Utensils, ShoppingBag, 
  Store, Briefcase, Building2, Cpu, Network, Train, Plane, 
  TrainFront, GraduationCap, School, Cross, HeartPulse, Car, 
  ExternalLink, Sparkles 
} from 'lucide-react';

const ICON_RESOLVER = {
  Utensils, ShoppingBag, Store, Briefcase, Building2, Cpu, Network, 
  Train, Navigation, Plane, TrainFront, GraduationCap, School, 
  Cross, HeartPulse
};

export default function LocationCompass() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(LOCATION_LANDMARKS[0].items[0]);

  const activeCategory = LOCATION_LANDMARKS[selectedCategoryIndex];

  return (
    <section id="location" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Ambience */}
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Epicenter of Western Pune</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              The <span className="gold-gradient-text italic font-serif">Balewadi Radar</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Direct access to Balewadi High Street’s Michelin-worthy culinary corridor, rapid expressway connectivity to Mumbai, and a straight 12-minute commute to Hinjawadi IT Park.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap bg-dark-900 p-1.5 rounded-2xl border border-white/10 gap-1">
            {LOCATION_LANDMARKS.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => {
                  setSelectedCategoryIndex(idx);
                  setSelectedLandmark(cat.items[0]);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  selectedCategoryIndex === idx
                    ? 'bg-gold-500 text-dark-950 font-bold shadow-lg shadow-gold-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* The Radar & Commute Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Visual Radar Map */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-6 border border-gold-500/30 relative overflow-hidden min-h-[440px] flex flex-col justify-between">
              {/* Radar Grid Graphic */}
              <div className="relative aspect-square max-h-[380px] w-full mx-auto my-auto flex items-center justify-center">
                {/* Concentric Radar Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-20 rounded-full border border-gold-500/20" />
                <div className="absolute inset-32 rounded-full border border-emerald-500/30" />

                {/* Animated Pulsing Ring */}
                <div className="absolute w-28 h-28 rounded-full bg-gold-500/20 radar-ring pointer-events-none" />

                {/* Center Epicenter: Rohan Ekam */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-[2px] shadow-2xl shadow-gold-500/40">
                    <div className="w-full h-full bg-dark-950 rounded-2xl flex items-center justify-center">
                      <span className="font-serif font-black text-xl text-gold-400">EKAM</span>
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] font-mono font-bold text-white bg-dark-950/90 px-2 py-0.5 rounded border border-gold-500/40">
                    MULA RIVERFRONT
                  </span>
                </div>

                {/* Surrounding Landmark Nodes */}
                {activeCategory.items.map((item, idx) => {
                  const angles = [45, 135, 225, 315];
                  const angle = angles[idx % angles.length];
                  const rad = (angle * Math.PI) / 180;
                  const radius = 120; // px
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  const isSelected = selectedLandmark.name === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedLandmark(item)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className={`absolute z-30 p-2 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                        isSelected
                          ? 'bg-gold-500 text-dark-950 ring-4 ring-gold-500/30 scale-110 shadow-xl'
                          : 'bg-dark-900/90 text-white border border-white/10 hover:border-gold-400 hover:scale-105'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-dark-950' : 'text-gold-400'}`} />
                      <div className="text-left whitespace-nowrap">
                        <div className="text-[11px] font-semibold leading-tight">{item.name.split('(')[0]}</div>
                        <div className={`text-[9px] font-mono ${isSelected ? 'text-dark-900 font-bold' : 'text-gray-400'}`}>
                          {item.time} ({item.distance})
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Radar Indicator */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Riverfront serenity with immediate city arterial access</span>
                </div>
                <span className="text-gold-400 font-mono">Pune Smart City Zone</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commute Analyzer & Landmark Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Selected Landmark Highlight Box */}
            <div className="glass-panel-glow p-6 rounded-3xl border border-gold-500/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30">
                  Commute Route Inspector
                </span>
                <span className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedLandmark.time}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                {selectedLandmark.name}
              </h4>
              <p className="text-xs text-gold-300 font-mono mb-4">
                {selectedLandmark.highlight}
              </p>

              <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-white/10 text-xs my-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-gray-400 text-[10px] block uppercase font-mono">Road Distance</span>
                  <strong className="text-white text-base font-serif">{selectedLandmark.distance}</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-gray-400 text-[10px] block uppercase font-mono">Peak Drive Time</span>
                  <strong className="text-gold-400 text-base font-serif">{selectedLandmark.time}</strong>
                </div>
              </div>

              <div className="text-xs text-gray-300 leading-relaxed mb-6">
                Connected via the wide Balewadi River Road directly connecting to Baner Main Road and Mumbai-Pune Bypass without getting stuck in inner-city bottlenecks.
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=Rohan+Ekam+Balewadi+Pune`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>

            {/* Complete Category Landmark List */}
            <div className="glass-panel p-5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 px-2 pb-2 border-b border-white/10">
                Key Destinations in {activeCategory.category}:
              </div>
              <div className="space-y-1.5">
                {activeCategory.items.map((dest) => {
                  const Icon = ICON_RESOLVER[dest.icon] || MapPin;
                  const isSelected = selectedLandmark.name === dest.name;

                  return (
                    <button
                      key={dest.name}
                      onClick={() => setSelectedLandmark(dest)}
                      className={`w-full text-left p-3 rounded-2xl text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-gold-500/20 border border-gold-400 text-white'
                          : 'hover:bg-white/5 text-gray-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-gold-500 text-dark-950' : 'bg-white/5 text-gray-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{dest.name}</div>
                          <div className="text-[11px] text-gray-400">{dest.highlight}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-gold-400 font-mono">{dest.time}</div>
                        <div className="text-[10px] text-gray-500 font-mono">{dest.distance}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
