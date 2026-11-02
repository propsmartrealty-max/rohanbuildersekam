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
    <section id="amenities" className="py-20 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>36+ Curated Lifestyle Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Official <span className="river-gradient-text italic font-serif">Project Amenities</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Directly from Rohan Builders' masterplan — spanning the riverfront promenade, multi-level clubhouse, and the 14th-floor Sky Ground.
          </p>

          {/* Search Bar */}
          <div className="mt-7 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search official amenities (e.g. pool, yoga, squash, co-working)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-950/90 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Official Amenity Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center justify-between min-h-[140px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:bg-cyan-950/60 group-hover:border-cyan-400/40 transition-all duration-300">
                <img
                  src={amenity.iconUrl}
                  alt={amenity.name}
                  className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {amenity.name}
                </h3>
                <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                  {amenity.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs text-gray-300">
              Want the complete official amenity specifications and schedules?
            </span>
            <button
              onClick={onOpenVipModal}
              className="px-5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-dark-950 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Download Full Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
