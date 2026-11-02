import React, { useState } from 'react';
import { OFFICIAL_LOCATION } from '../data/projectData';
import { 
  Compass, MapPin, Navigation, Clock, GraduationCap, 
  School, Building2, Cross, ShoppingBag, ExternalLink, Sparkles 
} from 'lucide-react';

export default function LocationCompass() {
  const [activeCategory, setActiveCategory] = useState('schools');

  const categories = [
    { key: 'schools', label: 'Schools', icon: GraduationCap },
    { key: 'colleges', label: 'Colleges & Universities', icon: School },
    { key: 'hospitals', label: 'Healthcare & Hospitals', icon: Cross },
    { key: 'malls', label: 'Shopping & High Street', icon: ShoppingBag },
  ];

  const currentList = OFFICIAL_LOCATION[activeCategory] || OFFICIAL_LOCATION.schools;

  return (
    <section id="location" className="py-20 relative overflow-hidden bg-dark-950">
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Official Location Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              The <span className="river-gradient-text italic font-serif">Balewadi Network</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Strategically located in Balewadi behind Balewadi High Street, seamlessly connected to Mumbai-Pune Expressway, Hinjawadi Tech Park, Baner, and Aundh.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap bg-dark-900 p-1.5 rounded-2xl border border-white/10 gap-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat.key
                      ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Display Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Radar Canvas */}
          <div className="lg:col-span-6">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div className="relative aspect-square max-h-[340px] w-full mx-auto my-auto flex items-center justify-center">
                {/* Sonar Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="absolute inset-10 rounded-full border border-white/10" />
                <div className="absolute inset-20 rounded-full border border-cyan-500/20" />
                <div className="absolute inset-28 rounded-full border border-teal-500/30" />
                <div className="absolute w-24 h-24 rounded-full bg-cyan-500/20 radar-ring pointer-events-none" />

                {/* Center Epicenter */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-cyan-300 p-[2px] shadow-2xl shadow-cyan-500/40">
                    <div className="w-full h-full bg-dark-950 rounded-2xl flex items-center justify-center">
                      <span className="font-serif font-black text-xl text-cyan-400">EKAM</span>
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] font-mono font-bold text-white bg-dark-950/90 px-2 py-0.5 rounded border border-cyan-400/40">
                    MULA RIVERFRONT
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Balewadi High Street: <strong>3 mins drive</strong></span>
                </span>
                <span className="text-cyan-400 font-mono">PMC Limits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scraped Destination Directory */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  {categories.find(c => c.key === activeCategory)?.label}
                </span>
                <span className="text-xs text-cyan-400 font-mono">Proximity from Rohan Ekam</span>
              </div>

              <div className="space-y-2">
                {currentList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other Rohan Projects in Pune */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase text-gray-400 block mb-2">
                  Other Renowned Rohan Projects Nearby:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {OFFICIAL_LOCATION.nearbyRohanProjects.map((p, pIdx) => (
                    <div key={pIdx} className="p-2 rounded-xl bg-white/5 border border-white/5 text-gray-300">
                      • {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
