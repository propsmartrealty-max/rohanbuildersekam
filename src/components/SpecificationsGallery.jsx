import React, { useState } from 'react';
import { OFFICIAL_GALLERY } from '../data/projectData';
import { Sparkles, Maximize2, X, Check, ShieldCheck, ChevronRight } from 'lucide-react';

export default function SpecificationsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filters = ['All', 'Architecture', 'Landscape', 'Sky Ground', 'Amenities', 'Clubhouse', 'Interiors'];

  const filteredGallery = activeFilter === 'All' 
    ? OFFICIAL_GALLERY 
    : OFFICIAL_GALLERY.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Visual Monograph</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            4K <span className="river-gradient-text italic font-serif">Visual Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            High-resolution architectural renders from Rohan Builders showcasing the Mula Riverfront, 14th-floor Sky Ground, and biophilic clubhouse.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mt-6 no-scrollbar">
            {filters.map((fil) => (
              <button
                key={fil}
                onClick={() => setActiveFilter(fil)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                  activeFilter === fil
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer aspect-[16/10] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2 py-0.5 rounded-full bg-dark-950/80 backdrop-blur-md text-cyan-300 text-[9px] font-mono border border-cyan-400/30">
                  {item.category}
                </span>
              </div>

              {/* Zoom Button */}
              <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3 h-3" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-dark-900 rounded-3xl overflow-hidden border border-cyan-500/40 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-dark-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                  {lightboxImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2">
                  {lightboxImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
