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
    <section id="amenities" className="py-20 relative overflow-hidden bg-[#EFECE6] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>36+ Curated Lifestyle Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Official <span className="italic font-serif font-medium text-amber-800">Project Amenities</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Directly from Rohan Builders' masterplan — spanning the riverfront promenade, multi-level clubhouse, and the 14th-floor Sky Ground.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search official amenities (e.g. pool, yoga, squash, co-working)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-full pl-11 pr-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900 text-xs"
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
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
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
              className="glass-panel p-4 rounded-2xl border border-stone-200 hover:border-stone-400 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center justify-between min-h-[140px] shadow-xs"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:bg-white transition-all duration-300">
                <img
                  src={amenity.iconUrl}
                  alt={amenity.name}
                  className="w-full h-full object-contain opacity-85 group-hover:opacity-100"
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

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-stone-300 shadow-xs">
            <span className="text-xs text-stone-700 font-medium">
              Want the complete official amenity specifications and schedules?
            </span>
            <button
              onClick={onOpenVipModal}
              className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Download Full Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
