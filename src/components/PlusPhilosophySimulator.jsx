import React, { useState } from 'react';
import { Wind, Sun, EyeOff, Maximize, Sliders, CheckCircle2, Sparkles, Activity } from 'lucide-react';

export default function PlusPhilosophySimulator() {
  const [activePillar, setActivePillar] = useState('ventilation'); // 'ventilation' | 'light' | 'privacy' | 'space'
  
  // Interactive Controls
  const [windSpeed, setWindSpeed] = useState(16); // km/h
  const [solarHour, setSolarHour] = useState(16); // 4:00 PM Golden hour
  const [spaceEfficiencyMode, setSpaceEfficiencyMode] = useState('ekam'); // 'standard' | 'ekam'

  const pillars = [
    {
      id: "ventilation",
      letter: "P",
      name: "Perfect Ventilation",
      subtitle: "Wind-Tunnel Tested Cross-Breeze Circulation",
      stat: "100%",
      statLabel: "Cross-Ventilated Residences",
      description: "Unlike conventional apartments with stagnant pockets, every Rohan Ekam home features strategically offset openings aligned with prevailing micro-climatic wind patterns off the Mula River.",
      benefits: [
        "Natural air changes up to 14 times per hour",
        "Reduces air conditioning dependency by up to 35%",
        "Rapid kitchen & bathroom moisture exhaust via pressure differentials",
        "Cool river breeze channeled directly through living and master suites"
      ]
    },
    {
      id: "light",
      letter: "L",
      name: "Lively Light",
      subtitle: "Sun-Path Simulated Glare-Free Illumination",
      stat: "92%",
      statLabel: "Daylit Living Area During Daytime",
      description: "We modeled the sun's trajectory across all 365 days. Deep balcony overhangs block harsh noon heat while infusing interiors with warm, indirect daylight from morning till twilight.",
      benefits: [
        "Zero artificial lighting required from 7:00 AM to 5:30 PM",
        "Deep sun-shading cantilevers reduce solar heat gain",
        "Optimal circadian rhythm alignment for better wellness",
        "Saint-Gobain Low-E glass blocking 99.2% UV rays"
      ]
    },
    {
      id: "privacy",
      letter: "U",
      name: "Utmost Privacy",
      subtitle: "Zero Direct Overlook Between Living Realms",
      stat: "0%",
      statLabel: "Sightline Overlap Between Balconies",
      description: "Towers are staggered with proprietary angular offsets. When you step out onto your balcony, you gaze upon the river or landscaped gardens — never into your neighbor's living room.",
      benefits: [
        "45° staggered angular balcony geometry prevents intrusive sightlines",
        "Acoustic buffering between shared wall assemblies (>52 dB STC)",
        "Private entrance vestibules shield internal rooms from common lobby",
        "Master suites isolated from high-traffic corridors"
      ]
    },
    {
      id: "space",
      letter: "S",
      name: "Smart Space",
      subtitle: "Zero Wasted Corridors & 100% Usable Carpet",
      stat: "0 sq.ft",
      statLabel: "Wasted Passageway Dead Space",
      description: "Standard apartments waste 12% to 18% of paid carpet area on useless internal hallways. At Rohan Ekam, every square foot is purposeful with recessed niches for wardrobes and appliances.",
      benefits: [
        "Recessed wardrobe niches that don't consume bedroom square footage",
        "Direct kitchen-to-utility balcony flow with discrete service access",
        "Furniture-ready layouts planned around real ergonomic dimensions",
        "Continuous living and dining salons creating immense visual depth"
      ]
    }
  ];

  const currentPillarData = pillars.find(p => p.id === activePillar) || pillars[0];

  const formatHour = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <section id="plus-philosophy" className="py-20 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      <div className="absolute inset-0 arch-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Architectural Science Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            The <span className="river-gradient-text italic font-serif">Rohan PLUS</span> Physics Simulator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Interact with live simulation controls to test ventilation airflow, solar illumination, and spatial efficiency in real-time.
          </p>
        </div>

        {/* 4 PLUS Pillar Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {pillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            const Icon = 
              pillar.id === 'ventilation' ? Wind :
              pillar.id === 'light' ? Sun :
              pillar.id === 'privacy' ? EyeOff : Maximize;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-xl shadow-cyan-500/10'
                    : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-serif font-black ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`}>
                    {pillar.letter}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} />
                </div>
                <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {pillar.name}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  {pillar.stat} {pillar.statLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Simulation Canvas Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/30">
          {/* Left: Simulation Canvas */}
          <div className="lg:col-span-7 bg-dark-950 rounded-2xl p-6 border border-white/10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                  Live Simulation: {currentPillarData.name}
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-400 font-bold">
                Pillar [{currentPillarData.letter}]
              </span>
            </div>

            {/* Ventilation Mode */}
            {activePillar === 'ventilation' && (
              <div className="my-6 flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md h-52 border-2 border-dashed border-cyan-500/40 rounded-xl bg-dark-900/60 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-80">
                    {[1, 2, 3, 4, 5].map((line) => (
                      <div
                        key={line}
                        className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-flowWind"
                        style={{
                          animationDuration: `${Math.max(1, 4 - windSpeed / 8)}s`,
                          animationDelay: `${line * 0.3}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 z-10">
                    <span className="bg-cyan-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/30">
                      ← River Wind Inflow
                    </span>
                    <span className="text-gray-300">Living Salon</span>
                  </div>

                  <div className="z-10 text-center my-auto">
                    <div className="text-3xl font-serif font-bold text-white tracking-tight">
                      {Math.round(windSpeed * 0.9 + 4)} ACH
                    </div>
                    <div className="text-xs text-cyan-400 font-mono">
                      Air Changes Per Hour (Stagnation = 0)
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 z-10">
                    <span className="text-gray-300">Master Bedroom</span>
                    <span className="bg-cyan-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/30">
                      Cross-Vent Exhaust →
                    </span>
                  </div>
                </div>

                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-xs text-gray-300 mb-2">
                    <span>Adjust River Wind Velocity</span>
                    <strong className="text-cyan-400 font-mono">{windSpeed} km/h (Pune River Breeze)</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Light Mode */}
            {activePillar === 'light' && (
              <div className="my-6 flex-1 flex flex-col items-center justify-center">
                <div 
                  className="relative w-full max-w-md h-52 rounded-xl border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden transition-all duration-700"
                  style={{
                    backgroundColor: 
                      solarHour <= 7 ? '#0b1329' :
                      solarHour <= 10 ? '#102236' :
                      solarHour <= 15 ? '#162b45' :
                      solarHour <= 18 ? '#1f2b38' : '#030712'
                  }}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-300 z-10">
                    <span className="bg-dark-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/30">
                      Sun Position: {formatHour(solarHour)}
                    </span>
                    <span className="text-gray-400">Deep Overhang Protection</span>
                  </div>

                  <div className="z-10 text-center my-auto">
                    <div className="text-3xl font-serif font-bold text-white">
                      {solarHour >= 8 && solarHour <= 17 ? '520 LUX' : '210 LUX'}
                    </div>
                    <div className="text-xs text-cyan-400 font-mono">
                      {solarHour >= 7 && solarHour <= 18 ? 'Natural Daylight (0 Bulbs Required)' : 'Dusk Ambient Glow'}
                    </div>
                  </div>

                  <div className="text-[10px] text-center text-gray-300 z-10 bg-dark-950/80 py-1 rounded">
                    Saint-Gobain Low-E Glazing: 99.2% UV Blocked • 88% Direct Glare Deflected
                  </div>
                </div>

                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-xs text-gray-300 mb-2">
                    <span>Adjust Solar Time</span>
                    <strong className="text-cyan-400 font-mono">{formatHour(solarHour)}</strong>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="19"
                    value={solarHour}
                    onChange={(e) => setSolarHour(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Privacy Mode */}
            {activePillar === 'privacy' && (
              <div className="my-6 flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md h-52 rounded-xl border border-white/10 bg-dark-900 p-4 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>Tower 1 Balcony</span>
                    <span className="text-cyan-400">45° Staggered Angular Offset</span>
                    <span>Tower 2 Balcony</span>
                  </div>

                  <div className="relative h-20 flex items-center justify-center">
                    <div className="w-full flex items-center justify-between px-6">
                      <div className="w-16 h-16 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-center p-1 text-[10px] text-white">
                        Your River Living Deck
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
                          0% Direct Overlook
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1">Sightlines deflect outward</span>
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-center p-1 text-[10px] text-gray-400">
                        Neighbor Tower
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-dark-950/80 text-[10px] text-center text-gray-300">
                    Sound Transmission Class STC 52 dB: Acoustic isolation between shared walls
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-400 text-center">
                  Enjoy complete intimacy on your riverfront deck with zero visual intrusion.
                </div>
              </div>
            )}

            {/* Space Mode */}
            {activePillar === 'space' && (
              <div className="my-6 flex-1 flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex justify-center gap-3 mb-4">
                  <button
                    onClick={() => setSpaceEfficiencyMode('standard')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      spaceEfficiencyMode === 'standard'
                        ? 'bg-rose-950 text-rose-300 border border-rose-500/50'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Standard Flat (18% Waste)
                  </button>
                  <button
                    onClick={() => setSpaceEfficiencyMode('ekam')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      spaceEfficiencyMode === 'ekam'
                        ? 'bg-cyan-500 text-dark-950 font-bold'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Rohan PLUS Home (0% Waste)
                  </button>
                </div>

                <div className="relative w-full max-w-md h-48 rounded-xl border border-white/10 bg-dark-900 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Usable Carpet:</span>
                    <strong className={spaceEfficiencyMode === 'ekam' ? 'text-cyan-400 text-base' : 'text-rose-400'}>
                      {spaceEfficiencyMode === 'ekam' ? '98.8% Usable Living Area' : '82.0% Usable Area'}
                    </strong>
                  </div>

                  <div className="w-full h-8 bg-dark-950 rounded-lg overflow-hidden flex border border-white/10">
                    <div
                      className={`h-full transition-all duration-500 flex items-center justify-center text-[10px] font-bold ${
                        spaceEfficiencyMode === 'ekam' ? 'bg-cyan-500 text-dark-950 w-full' : 'bg-blue-600 text-white w-[82%]'
                      }`}
                    >
                      {spaceEfficiencyMode === 'ekam' ? '100% Purposeful Living Space' : '82% Living Area'}
                    </div>
                    {spaceEfficiencyMode === 'standard' && (
                      <div className="w-[18%] bg-rose-600/70 h-full flex items-center justify-center text-[10px] text-white">
                        18% Dead Hallways
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-gray-300 bg-dark-950/80 p-2 rounded">
                    {spaceEfficiencyMode === 'ekam'
                      ? '✓ Wardrobes fitted into architectural wall niches without eating into bedroom square footage.'
                      : '✕ Wardrobes protrude 2 feet into room space; long dark corridors waste lakhs.'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Description & Benefits */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-serif font-black text-cyan-400">
                [{currentPillarData.letter}]
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentPillarData.name}
                </h3>
                <span className="text-xs text-cyan-300 font-mono">
                  {currentPillarData.subtitle}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {currentPillarData.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                Engineering Benefits:
              </span>
              {currentPillarData.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-mono block">Rohan Guarantee</span>
                  <span className="text-xs font-bold text-white">Certified PLUS Home Standards</span>
                </div>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
