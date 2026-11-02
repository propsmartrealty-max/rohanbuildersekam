import React, { useState } from 'react';
import { OFFICIAL_AMENITIES } from '../data/projectData';
import { Sparkles, Search, Layers } from 'lucide-react';

export default function AmenitiesShowcase({ onOpenVipModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Sky Ground (14th Fl)', 'Riverfront & Earth', 'Clubhouse & Fitness', 'Sports', 'Kids & Family', 'Eco Infrastructure'];

  const filteredAmenities = OFFICIAL_AMENITIES.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="amenities" className="py-20 relative overflow-hidden bg-[#F5F2EB] border-t border-b border-stone-300/80">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-96 h-96 bg-[#E8D5C4] -top-20 left-10 animate-blob" />
      <div className="glass-orb w-[420px] h-[420px] bg-[#C8DECE] -bottom-20 right-10 animate-blob [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs glass-shimmer">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>36+ Curated Lifestyle Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Official <span className="italic font-serif font-medium text-amber-800">Project Amenities</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Directly from Rohan Builders' masterplan — spanning the riverfront promenade, multi-level clubhouse, and the 14th-floor Sky Ground.
          </p>

          {/* Search Bar in Frosted Glass */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search official amenities (e.g. pool, yoga, squash, co-working)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-panel border border-white/90 rounded-full pl-11 pr-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900 text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-md shadow-stone-900/10 scale-102'
                  : 'glass-panel text-stone-700 hover:text-stone-950 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Official Amenity Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-hover glass-shimmer p-4 rounded-2xl border border-white/90 transition-all duration-300 group flex flex-col items-center text-center justify-between min-h-[145px] shadow-sm hover:border-amber-700/30 hover:bg-white/90"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/70 border border-stone-200/80 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xs">
                <img
                  src={amenity.iconUrl}
                  alt={amenity.name}
                  className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-xs font-semibold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                  {amenity.name}
                </h3>
                <span className="text-[10px] text-stone-500 font-mono mt-1 block">
                  {amenity.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout in Frosted Glass */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-panel-glow border border-white/90 shadow-xl shadow-stone-900/5 glass-shimmer">
            <span className="text-xs text-stone-700 font-medium">
              Want the complete official amenity specifications and schedules?
            </span>
            <button
              onClick={onOpenVipModal}
              className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Download Full Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
