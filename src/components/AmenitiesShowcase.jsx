import React, { useState } from 'react';
import { AMENITIES_CATALOG } from '../data/projectData';
import { 
  Sparkles, Search, Waves, Droplets, Laptop, Sun, Coffee, Activity, 
  Compass, BookOpen, GlassWater, Film, Shield, Feather, Anchor, Building, 
  HeartPulse, Dumbbell, Tv, Users, Award, Target, CircleDot, Flag, Disc, 
  Layers, Smile, CloudRain, ShieldCheck, Footprints, Heart, Car, Zap, 
  Repeat, SunMedium, Lock, Milestone
} from 'lucide-react';

// Icon Map Resolver
const ICON_MAP = {
  Waves, Droplets, Laptop, Sun, Coffee, Activity, Compass, BookOpen, 
  GlassWater, Film, Shield, Feather, Anchor, Building, HeartPulse, 
  Dumbbell, Tv, Users, Award, Target, CircleDot, Flag, Disc, Layers, 
  Smile, CloudRain, ShieldCheck, Footprints, Heart, Car, Zap, Repeat, 
  SunMedium, Lock, Milestone, Sparkles
};

export default function AmenitiesShowcase({ onOpenVipModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all amenities flattened
  const allAmenities = AMENITIES_CATALOG.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category, categoryBadge: cat.badge }))
  );

  // Filter based on active category and search
  const filteredAmenities = allAmenities.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...AMENITIES_CATALOG.map(c => c.category)];

  return (
    <section id="amenities" className="py-24 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>45+ Curated Lifestyle Features</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Curated <span className="gold-gradient-text italic font-serif">World Amenities</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Spanning the 500-meter Mula River waterfront promenade, the 25,000 sq.ft Grand Biophilic Clubhouse, and the revolutionary 14th-Floor Sky Ground.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search amenities (e.g. pool, sky bridge, squash, gym)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-950/80 border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
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
                  ? 'bg-gold-500 text-dark-950 font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAmenities.map((amenity, idx) => {
            const IconComponent = ICON_MAP[amenity.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                    {amenity.categoryBadge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                  {amenity.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  {amenity.desc}
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>{amenity.category.split(' ')[0]} {amenity.category.split(' ')[1]}</span>
                  <span className="text-emerald-400">Verified Spec</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAmenities.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl max-w-md mx-auto">
            <Search className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-300 text-sm">No amenities found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs text-gold-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs text-gray-300">
              Want to see all 45+ amenities in high-definition video walkthrough?
            </span>
            <button
              onClick={onOpenVipModal}
              className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Request Walkthrough Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
