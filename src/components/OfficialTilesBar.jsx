import React from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

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
    <section className="bg-[#EFECE6] border-b border-stone-300 py-3 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {tiles.map((tile) => (
            <a
              key={tile.id}
              href={`#${tile.id}`}
              onClick={(e) => handleClick(e, tile)}
              className="group bg-white hover:bg-stone-900 border border-stone-200 hover:border-stone-900 rounded-2xl p-3 flex flex-col items-center text-center justify-between transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 mb-2 flex items-center justify-center p-1">
                <img
                  src={tile.icon}
                  alt={tile.title}
                  className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-stone-800 group-hover:text-white transition-colors uppercase leading-tight font-sans">
                {tile.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
