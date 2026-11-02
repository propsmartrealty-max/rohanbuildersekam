import React from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import { Sparkles } from 'lucide-react';

export default function OfficialTilesBar({ onOpenMasterPlan, onOpenBuyingGuide }) {
  const tiles = OFFICIAL_PROJECT_DETAILS.hoverTiles;

  const handleClick = (e, tile) => {
    if (tile.id === 'masterPlan' && onOpenMasterPlan) {
      e.preventDefault();
      onOpenMasterPlan();
    } else if (tile.id === 'buyingGuide' && onOpenBuyingGuide) {
      e.preventDefault();
      onOpenBuyingGuide();
    }
  };

  return (
    <section className="relative z-20 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F2EB]/90 backdrop-blur-xl border-y border-stone-300/80 shadow-xs">
      {/* Ambient drifting glass orbs in background */}
      <div className="glass-orb w-64 h-32 bg-[#E8D5C4]/60 -top-10 left-1/4 animate-blob" />
      <div className="glass-orb w-64 h-32 bg-[#C8DECE]/50 -bottom-10 right-1/4 animate-blob [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {tiles.map((tile, idx) => (
            <a
              key={tile.id}
              href={`#${tile.id}`}
              onClick={(e) => handleClick(e, tile)}
              className="group relative overflow-hidden glass-panel glass-card-hover glass-shimmer rounded-2xl p-3.5 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-stone-900/60 hover:bg-white/95"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Subtle top indicator specular bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-stone-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-11 h-11 mb-2.5 flex items-center justify-center p-1.5 rounded-xl bg-white/70 group-hover:bg-stone-900 border border-stone-200/80 group-hover:border-stone-900 transition-all duration-300 group-hover:scale-110 shadow-xs">
                <img
                  src={tile.icon}
                  alt={tile.title}
                  className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>

              <span className="text-[11px] font-bold tracking-wider text-stone-800 group-hover:text-stone-950 transition-colors uppercase leading-tight font-sans">
                {tile.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
