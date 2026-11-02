import React, { useState } from 'react';
import { SPECIFICATIONS_DATA } from '../data/projectData';
import { Sparkles, Maximize2, X, Check, ShieldCheck, ChevronRight } from 'lucide-react';

export default function SpecificationsGallery() {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'specifications'
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      title: "Double-Height Living Salon Opening to River Deck",
      category: "Living Spaces",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Italian Botticino marble flooring with floor-to-ceiling Low-E glass curtains overlooking Mula River."
    },
    {
      title: "The 14th Floor Suspended Sky Deck",
      category: "The Sky Ground",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      caption: "Elevated sky garden bridges connecting residential towers 150 feet above Balewadi."
    },
    {
      title: "Presidential Master Suite with River Balcony",
      category: "Master Suites",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Engineered French oak parquet flooring with acoustic party walls (STC > 52 dB)."
    },
    {
      title: "Spa-Style Bathroom with Freestanding Soaking Tub",
      category: "Bathrooms",
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      caption: "Concealed Hansgrohe thermostatic diverters with rimless Duravit porcelain sanitaryware."
    },
    {
      title: "50m Olympic-Length Infinity Lap Pool",
      category: "Riverfront",
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      caption: "Water that visually merges into the Mula River with poolside timber cabanas."
    },
    {
      title: "Biophilic Clubhouse & Reflection Water Courtyard",
      category: "Clubhouse",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      caption: "25,000 sq.ft tri-level social retreat with private cinema and Ayurvedic spa."
    }
  ];

  const filteredGallery = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = ['All', 'Living Spaces', 'The Sky Ground', 'Master Suites', 'Riverfront', 'Clubhouse'];

  return (
    <section id="specifications" className="py-24 relative overflow-hidden bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Crafted Finishes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Materiality & <span className="gold-gradient-text italic font-serif">Visual Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every material chosen is an ode to timeless durability — from Italian marble quarried in Brescia to German engineered fixtures that endure generations.
          </p>

          {/* Master View Switcher: Gallery vs Specs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'bg-gold-500 text-dark-950 shadow-lg shadow-gold-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              Visual Walkthrough Gallery
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'specifications'
                  ? 'bg-gold-500 text-dark-950 shadow-lg shadow-gold-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              Architectural Specifications
            </button>
          </div>
        </div>

        {/* Tab 1: Visual Gallery */}
        {activeTab === 'gallery' && (
          <div>
            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {filters.map((fil) => (
                <button
                  key={fil}
                  onClick={() => setActiveFilter(fil)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                    activeFilter === fil
                      ? 'bg-white/20 text-white font-bold border border-gold-400'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {fil}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(item)}
                  className="group relative rounded-3xl overflow-hidden glass-panel-glow border border-white/10 cursor-pointer aspect-[4/3] transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-gold-300 text-[10px] font-mono border border-gold-500/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-1 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Architectural Specifications */}
        {activeTab === 'specifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIFICATIONS_DATA.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-gold-500/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <h3 className="font-serif text-lg font-bold text-white">
                    {spec.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {spec.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-dark-900 rounded-3xl overflow-hidden border border-gold-500/40 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-dark-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-gold-500 hover:text-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-2">
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-widest">
                  {lightboxImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2">
                  {lightboxImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
