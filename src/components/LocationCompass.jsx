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
    <section id="location" className="py-20 relative overflow-hidden bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Official Location Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
              The <span className="italic font-serif font-medium text-amber-800">Balewadi Network</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Strategically located in Balewadi behind Balewadi High Street, seamlessly connected to Mumbai-Pune Expressway, Hinjawadi Tech Park, Baner, and Aundh.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap bg-[#EFECE6] p-1.5 rounded-2xl border border-stone-300 gap-1 shadow-xs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat.key
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-white/60'
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
          {/* Left Column: Radar Canvas */}
          <div className="lg:col-span-6">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-stone-300 relative overflow-hidden min-h-[400px] flex flex-col justify-between shadow-sm">
              <div className="relative aspect-square max-h-[320px] w-full mx-auto my-auto flex items-center justify-center">
                {/* Sonar Rings */}
                <div className="absolute inset-0 rounded-full border border-stone-200" />
                <div className="absolute inset-10 rounded-full border border-stone-300" />
                <div className="absolute inset-20 rounded-full border border-stone-300" />
                <div className="absolute inset-28 rounded-full border border-amber-800/20" />
                <div className="absolute w-24 h-24 rounded-full bg-amber-600/10 radar-ring pointer-events-none" />

                {/* Center Epicenter */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-stone-900 p-[2px] shadow-lg">
                    <div className="w-full h-full bg-[#FAF8F5] rounded-2xl flex items-center justify-center">
                      <span className="font-serif font-black text-xl text-stone-900">EKAM</span>
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-300 shadow-xs">
                    MULA RIVERFRONT
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>Balewadi High Street: <strong>3 mins drive</strong></span>
                </span>
                <span className="text-amber-800 font-mono font-bold">PMC Limits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scraped Destination Directory */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-stone-300 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
                  {categories.find(c => c.key === activeCategory)?.label}
                </span>
                <span className="text-xs text-amber-800 font-mono font-semibold">Proximity from Rohan Ekam</span>
              </div>

              <div className="space-y-2">
                {currentList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition-all flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF8F5] text-stone-900 border border-stone-200">
                        <MapPin className="w-4 h-4 text-amber-700" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-900">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-900 bg-[#EFECE6] px-2.5 py-1 rounded-lg border border-stone-300">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other Rohan Projects in Pune */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <span className="text-[11px] font-mono uppercase text-stone-600 block mb-2 font-semibold">
                  Other Renowned Rohan Projects Nearby:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {OFFICIAL_LOCATION.nearbyRohanProjects.map((p, pIdx) => (
                    <div key={pIdx} className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 shadow-xs">
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
