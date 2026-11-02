import React, { useState } from 'react';
import { ROHAN_PLUS_DATA } from '../data/projectData';
import { Wind, Sun, EyeOff, Maximize, Sliders, CheckCircle2, Sparkles, Activity } from 'lucide-react';

export default function PlusPhilosophySimulator() {
  const [activePillar, setActivePillar] = useState('ventilation'); // 'ventilation' | 'light' | 'privacy' | 'space'
  
  // Interactive Simulator Controls
  const [windSpeed, setWindSpeed] = useState(16); // km/h
  const [solarHour, setSolarHour] = useState(16); // 16 = 4:00 PM Golden hour
  const [privacyAngle, setPrivacyAngle] = useState(45); // degrees
  const [spaceEfficiencyMode, setSpaceEfficiencyMode] = useState('ekam'); // 'standard' | 'ekam'

  const currentPillarData = ROHAN_PLUS_DATA.pillars.find(p => p.id === activePillar);

  // Helper for solar time formatting
  const formatHour = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <section id="plus-philosophy" className="py-24 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      {/* Background Architectural Canvas Grid */}
      <div className="absolute inset-0 arch-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Architectural Science Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            The <span className="gold-gradient-text italic font-serif">Rohan PLUS</span> Physics Simulator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every apartment at Rohan Ekam is engineered around the physics of human comfort. Interact with the controls below to test ventilation flows, solar illumination, and spatial efficiency in real-time.
          </p>
        </div>

        {/* 4 PLUS Pillar Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {ROHAN_PLUS_DATA.pillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            const Icon = 
              pillar.id === 'ventilation' ? Wind :
              pillar.id === 'light' ? Sun :
              pillar.id === 'privacy' ? EyeOff : Maximize;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group ${
                  isSelected
                    ? 'bg-gold-500/15 border-gold-400 shadow-xl shadow-gold-500/10'
                    : 'bg-dark-950/70 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-serif font-black ${isSelected ? 'text-gold-400' : 'text-gray-500'}`}>
                    {pillar.letter}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-gold-400' : 'text-gray-500'}`} />
                </div>
                <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {pillar.name}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  {pillar.stat} {pillar.statLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* The Interactive Simulation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-glow rounded-3xl p-6 sm:p-10 border border-gold-500/30">
          {/* Left Column: Interactive Visual Canvas */}
          <div className="lg:col-span-7 bg-dark-950 rounded-2xl p-6 border border-white/10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            {/* Simulation Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">
                  Live Simulation: {currentPillarData.name}
                </span>
              </div>
              <span className="text-xs font-mono text-gold-400">
                Pillar [{currentPillarData.letter}]
              </span>
            </div>

            {/* Pillar 1: Ventilation Simulation Display */}
            {activePillar === 'ventilation' && (
              <div className="relative my-6 flex-1 flex flex-col items-center justify-center">
                {/* Simulated Apartment Layout Outline */}
                <div className="relative w-full max-w-md h-56 border-2 border-dashed border-emerald-500/40 rounded-xl bg-dark-900/60 p-4 flex flex-col justify-between overflow-hidden">
                  {/* Wind Particle Stream Lines */}
                  <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-80">
                    {[1, 2, 3, 4, 5].map((line) => (
                      <div
                        key={line}
                        className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-flowWind"
                        style={{
                          animationDuration: `${Math.max(1, 4 - windSpeed / 8)}s`,
                          animationDelay: `${line * 0.3}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-400 z-10">
                    <span className="bg-emerald-950/80 px-2 py-0.5 rounded text-emerald-300 border border-emerald-500/30">
                      ← River Wind Entry (Balcony Deck)
                    </span>
                    <span className="bg-dark-950/80 px-2 py-0.5 rounded text-gray-300">
                      Living & Dining Area
                    </span>
                  </div>

                  {/* Center Apartment Iconography */}
                  <div className="z-10 text-center my-auto">
                    <div className="text-3xl font-serif font-bold text-white tracking-tight">
                      {Math.round(windSpeed * 0.9 + 4)} ACH
                    </div>
                    <div className="text-xs text-emerald-400 font-mono">
                      Air Changes Per Hour (Stagnation = 0)
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-400 z-10">
                    <span className="bg-dark-950/80 px-2 py-0.5 rounded text-gray-300">
                      Master Suite
                    </span>
                    <span className="bg-emerald-950/80 px-2 py-0.5 rounded text-emerald-300 border border-emerald-500/30">
                      Cross-Vent Exhaust (Offset Window) →
                    </span>
                  </div>
                </div>

                {/* Ventilation Interactive Control Slider */}
                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-xs text-gray-300 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                      Adjust River Wind Velocity
                    </span>
                    <strong className="text-emerald-400 font-mono">{windSpeed} km/h (Pune River Breeze)</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>5 km/h (Calm)</span>
                    <span>16 km/h (Balewadi Average)</span>
                    <span>30 km/h (Monsoon Gust)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Pillar 2: Lively Light Simulation Display */}
            {activePillar === 'light' && (
              <div className="relative my-6 flex-1 flex flex-col items-center justify-center">
                <div 
                  className="relative w-full max-w-md h-56 rounded-xl border border-gold-500/40 p-4 flex flex-col justify-between overflow-hidden transition-all duration-700"
                  style={{
                    backgroundColor: 
                      solarHour <= 7 ? '#1a1829' :
                      solarHour <= 10 ? '#2d2218' :
                      solarHour <= 15 ? '#1f2533' :
                      solarHour <= 18 ? '#331d16' : '#0d1017'
                  }}
                >
                  {/* Dynamic Sun Ray Filter */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle at ${((solarHour - 6) / 12) * 100}% 20%, rgba(251, 191, 36, 0.35) 0%, transparent 70%)`
                    }}
                  />

                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-300 z-10">
                    <span className="bg-dark-950/80 px-2 py-0.5 rounded text-gold-300 border border-gold-500/30">
                      Sun Position: {formatHour(solarHour)}
                    </span>
                    <span className="text-gray-400">Balcony Overhang Shadow Protection</span>
                  </div>

                  <div className="z-10 text-center my-auto">
                    <div className="text-3xl font-serif font-bold text-gold-300">
                      {solarHour >= 8 && solarHour <= 17 ? '520 LUX' : '210 LUX'}
                    </div>
                    <div className="text-xs text-gold-400/90 font-mono">
                      {solarHour >= 7 && solarHour <= 18 ? 'Natural Ambient Glow (0 Artificial Lights)' : 'Golden Twilight Transition'}
                    </div>
                  </div>

                  <div className="text-[11px] text-center text-gray-300 z-10 bg-dark-950/70 py-1 rounded">
                    Saint-Gobain Low-E Glazing: 99.2% UV Blocked • 88% Direct Glare Deflected
                  </div>
                </div>

                {/* Solar Hour Slider */}
                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-xs text-gray-300 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-gold-400" />
                      Adjust Solar Time of Day
                    </span>
                    <strong className="text-gold-400 font-mono">{formatHour(solarHour)}</strong>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="19"
                    value={solarHour}
                    onChange={(e) => setSolarHour(Number(e.target.value))}
                    className="w-full accent-gold-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>6:00 AM (Dawn)</span>
                    <span>12:00 PM (Noon)</span>
                    <span>4:00 PM (Golden)</span>
                    <span>7:00 PM (Dusk)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Pillar 3: Utmost Privacy Simulation */}
            {activePillar === 'privacy' && (
              <div className="relative my-6 flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md h-56 rounded-xl border border-white/15 bg-dark-900 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between text-[11px] font-mono text-gray-400">
                    <span>Tower A Balcony</span>
                    <span className="text-gold-400">45° Staggered Angular Wing</span>
                    <span>Tower B Balcony</span>
                  </div>

                  {/* Sightline ray test */}
                  <div className="relative h-24 flex items-center justify-center">
                    <div className="w-full flex items-center justify-between px-6">
                      <div className="w-16 h-16 rounded-xl bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-center p-1 text-[10px] text-white">
                        Your Living Sanctuary
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                          0% Direct Overlook
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1">Sightline deflected towards river</span>
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-center p-1 text-[10px] text-gray-400">
                        Neighbor Tower
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-dark-950/80 text-[11px] text-center text-gray-300">
                    Sound Transmission Class STC 52 dB: Acoustic isolation between party walls
                  </div>
                </div>

                <div className="w-full max-w-md mt-6 text-center text-xs text-gray-400">
                  <span className="text-emerald-400 font-bold">Zero Visual Overlap:</span> Enjoy your morning coffee on your private balcony in complete intimacy.
                </div>
              </div>
            )}

            {/* Pillar 4: Smart Space Simulation */}
            {activePillar === 'space' && (
              <div className="relative my-6 flex-1 flex flex-col items-center justify-center">
                <div className="w-full max-w-md flex justify-center gap-3 mb-4">
                  <button
                    onClick={() => setSpaceEfficiencyMode('standard')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      spaceEfficiencyMode === 'standard'
                        ? 'bg-rose-950 text-rose-300 border border-rose-500/50'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Standard Builder Flat (18% Waste)
                  </button>
                  <button
                    onClick={() => setSpaceEfficiencyMode('ekam')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      spaceEfficiencyMode === 'ekam'
                        ? 'bg-gold-500 text-dark-950 font-bold'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Rohan PLUS Home (0% Waste)
                  </button>
                </div>

                <div className="relative w-full max-w-md h-52 rounded-xl border border-white/10 bg-dark-900 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Usable Living Carpet:</span>
                    <strong className={spaceEfficiencyMode === 'ekam' ? 'text-gold-400 text-base' : 'text-rose-400'}>
                      {spaceEfficiencyMode === 'ekam' ? '98.8% Usable Area' : '82.0% Usable Area'}
                    </strong>
                  </div>

                  <div className="w-full h-8 bg-dark-950 rounded-lg overflow-hidden flex border border-white/10">
                    <div
                      className={`h-full transition-all duration-500 flex items-center justify-center text-[10px] font-bold ${
                        spaceEfficiencyMode === 'ekam' ? 'bg-gold-500 text-dark-950 w-full' : 'bg-blue-600 text-white w-[82%]'
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

                  <div className="text-[11px] text-gray-300 bg-dark-950/70 p-2.5 rounded-lg">
                    {spaceEfficiencyMode === 'ekam'
                      ? '✓ Wardrobes fitted into architectural wall niches without consuming bedroom square footage.'
                      : '✕ Wardrobes protrude 2 feet into walking zones; long dark corridors connecting bedrooms waste lakhs.'}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Real-time Sensor HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10 text-xs">
              {Object.entries(currentPillarData.interactiveMetrics).map(([key, val]) => (
                <div key={key} className="bg-white/5 p-2 rounded-lg">
                  <span className="text-[10px] text-gray-400 uppercase block font-mono">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-white font-bold text-xs">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Pillar Manifesto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-serif font-black text-gold-400">
                [{currentPillarData.letter}]
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentPillarData.name}
                </h3>
                <span className="text-xs text-gold-300 font-mono">
                  {currentPillarData.subtitle}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {currentPillarData.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                Engineering Benefits:
              </span>
              {currentPillarData.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-300 font-mono block">Rohan Guarantee</span>
                  <span className="text-xs font-bold text-white">Certified PLUS Home Standards</span>
                </div>
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
