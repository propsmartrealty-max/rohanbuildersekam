import React, { useState } from 'react';
import { Layers, Sparkles, Compass, Eye, Check, ArrowUpRight, Volume2 } from 'lucide-react';

export default function SkyGroundExplorer({ onOpenVipModal }) {
  const [activeRealmIndex, setActiveRealmIndex] = useState(0); // 0 is Level 14 Sky Ground
  const [selectedHotspot, setSelectedHotspot] = useState(0);

  const officialRealms = [
    {
      id: "realm-sky",
      level: "Level 14",
      altitude: "150 Feet Elevation",
      name: "The Ground Floor in the Sky",
      subtitle: "A suspended community earth connecting the towers",
      description: "Conceived by Ar. Sanjay Mohe to reconnect high-rise dwellers with the soul of the ground. Level 14 bridges across the towers to form an open-air suspended sanctuary with cloud co-working pods, yoga decks, reading nooks, and panoramic river frames.",
      badge: "Architectural Breakthrough",
      image: "https://rohanbuilders.com/wp-content/uploads/2023/09/3840x1694-px-09-1-scaled.jpg",
      features: [
        {
          title: "Inter-Tower Sky Bridges",
          description: "Elevated skyways connecting residential towers 150 ft in the air.",
          tag: "Connectivity"
        },
        {
          title: "Cloud Co-Working Spaces",
          description: "High-speed Wi-Fi work cabins with natural breezes and river vistas.",
          tag: "Productivity"
        },
        {
          title: "Elevated Yoga Decks",
          description: "Oriented towards the sunrise for open-air morning meditation.",
          tag: "Wellness"
        },
        {
          title: "Hammock Terrace & Reading Nooks",
          description: "Shaded green canopies suspended above the urban hustle.",
          tag: "Recreation"
        }
      ]
    },
    {
      id: "realm-river",
      level: "Ground & River Level",
      altitude: "Mula River Edge",
      name: "Cascading Lawns & Riverfront",
      subtitle: "13 acres of sloping landscape touching the river",
      description: "As you enter the central plaza, vast cascading lawns open up before you, culminating in an elevated frame with serene views of the Mula River. Features an Olympic-length infinity lap pool, sports courts, and reflecting water bodies in a 100% vehicle-free surface.",
      badge: "13-Acre Ecosystem",
      image: "https://rohanbuilders.com/wp-content/uploads/2023/09/3840x1694-px-10-scaled.jpg",
      features: [
        {
          title: "Lap Pool with Deck",
          description: "Olympic-length temperature-controlled pool merging into the river panorama.",
          tag: "Aquatics"
        },
        {
          title: "Sloped Amphitheatre Lawn",
          description: "Natural terraced green seating for evening cultural performances.",
          tag: "Community"
        },
        {
          title: "Sports Pavilion & Courts",
          description: "Badminton, squash, clay volleyball, and mini putt golf.",
          tag: "Sports"
        },
        {
          title: "Biophilic Clubhouse (G+3)",
          description: "25,000 sq.ft social retreat with indoor games, library, and gym.",
          tag: "Club"
        }
      ]
    },
    {
      id: "realm-crown",
      level: "Levels 28 - 32",
      altitude: "Summit Horizon",
      name: "The Crown & Penthouses",
      subtitle: "Double-height living volumes with 270° vistas",
      description: "Double-height grand living salons with floor-to-ceiling glass curtains, cantilevered river viewing decks, and panoramic vistas of the Sahyadri hill ranges and Balewadi skyline.",
      badge: "Signature Living",
      image: "https://rohanbuilders.com/wp-content/uploads/2023/09/3840x1694-px-06-scaled.jpg",
      features: [
        {
          title: "Double-Height Living Salons",
          description: "Monumental vertical ceiling heights with cross-ventilation.",
          tag: "Architecture"
        },
        {
          title: "Riverbend Panoramic Decks",
          description: "Wrap-around balconies capturing Sahyadri sunsets.",
          tag: "Panoramic"
        },
        {
          title: "Presidential Master Suites",
          description: "French oak parquet flooring with walk-in dressing rooms.",
          tag: "Luxury"
        },
        {
          title: "Private Keycard Access",
          description: "Direct elevator vestibule opening into your residence.",
          tag: "Privacy"
        }
      ]
    }
  ];

  const currentRealm = officialRealms[activeRealmIndex];

  return (
    <section id="sky-ground" className="py-20 relative overflow-hidden bg-dark-950">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Tier Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
              The Three Realms of <span className="river-gradient-text italic font-serif">Rohan Ekam</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Explore how everyday living unfolds across three elevations — from the banks of the Mula River to the 14th-floor suspended Ground Floor in the Sky.
            </p>
          </div>

          {/* Level Switcher */}
          <div className="flex bg-dark-900 p-1.5 rounded-2xl border border-white/10 self-start">
            {officialRealms.map((realm, idx) => (
              <button
                key={realm.id}
                onClick={() => {
                  setActiveRealmIndex(idx);
                  setSelectedHotspot(0);
                }}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeRealmIndex === idx
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{realm.level}</span>
                {idx === 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-dark-950 animate-ping"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Realm Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official 4K Rendering & Interactive Hotspots */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 glass-panel-glow shadow-2xl group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-900">
                <img
                  src={currentRealm.image}
                  alt={currentRealm.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                {/* Altitude Tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentRealm.altitude}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-medium border border-cyan-500/30 backdrop-blur-sm">
                    {currentRealm.badge}
                  </span>
                </div>

                {/* Hotspot Markers */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {currentRealm.features.map((feat, fIdx) => {
                    const coords = [
                      { top: '35%', left: '30%' },
                      { top: '55%', left: '70%' },
                      { top: '70%', left: '40%' },
                      { top: '30%', left: '75%' }
                    ][fIdx];

                    const isSelected = selectedHotspot === fIdx;

                    return (
                      <button
                        key={fIdx}
                        onClick={() => setSelectedHotspot(fIdx)}
                        style={{ top: coords.top, left: coords.left }}
                        className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                          isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                        }`}
                      >
                        <div className="relative">
                          <span className={`absolute -inset-2 rounded-full opacity-75 animate-ping ${
                            isSelected ? 'bg-cyan-400' : 'bg-teal-400'
                          }`} />
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-all ${
                            isSelected
                              ? 'bg-cyan-400 text-dark-950 ring-4 ring-cyan-400/30'
                              : 'bg-dark-950/90 text-white border border-cyan-400 hover:bg-cyan-500 hover:text-dark-950'
                          }`}>
                            {fIdx + 1}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-dark-950/80 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-gray-300">Click numbered hotspots to preview features</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">{currentRealm.level}</span>
                </div>
              </div>

              {/* Realm Descriptive Strip */}
              <div className="p-6 bg-dark-900 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {currentRealm.name}
                  </h3>
                  <span className="text-xs text-cyan-400 font-mono italic">
                    {currentRealm.subtitle}
                  </span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {currentRealm.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Active Zone Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            {currentRealm.features[selectedHotspot] && (
              <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/40 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 font-mono text-[11px] border border-cyan-500/30">
                    FEATURE {selectedHotspot + 1} OF {currentRealm.features.length}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {currentRealm.features[selectedHotspot].tag}
                  </span>
                </div>

                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  {currentRealm.features[selectedHotspot].title}
                </h4>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {currentRealm.features[selectedHotspot].description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-[10px] uppercase">Access</span>
                    <strong className="text-white">All Residents</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-400 block text-[10px] uppercase">Ambiance</span>
                    <strong className="text-cyan-300">Open-Air River Breeze</strong>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={onOpenVipModal}
                    className="text-xs font-bold uppercase tracking-wider text-dark-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Tour this realm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>River breeze audible</span>
                  </span>
                </div>
              </div>
            )}

            {/* Complete Realm Feature List */}
            <div className="glass-panel p-5 rounded-3xl border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 px-2 pb-2 border-b border-white/10 flex justify-between">
                <span>Features in {currentRealm.level}</span>
                <span className="text-cyan-400 font-bold">{currentRealm.features.length} Designed Zones</span>
              </div>
              <div className="space-y-1.5">
                {currentRealm.features.map((feat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHotspot(idx)}
                    className={`w-full text-left p-3 rounded-2xl text-xs transition-all flex items-start justify-between gap-3 ${
                      selectedHotspot === idx
                        ? 'bg-cyan-500/15 border border-cyan-400/50 text-white'
                        : 'hover:bg-white/5 text-gray-300 border border-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-white flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${selectedHotspot === idx ? 'bg-cyan-400' : 'bg-gray-500'}`} />
                        <span>{feat.title}</span>
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{feat.description}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 whitespace-nowrap">
                      {feat.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
