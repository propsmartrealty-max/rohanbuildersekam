import React, { useState } from 'react';
import { ArrowRight, Sparkles, Download, Layers, ShieldCheck, FileText, ChevronRight, Waves } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';

export default function Hero({ onOpenVipModal }) {
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const banners = OFFICIAL_PROJECT_DETAILS.heroBanners;
  const currentBanner = banners[activeBannerIdx];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-14 overflow-hidden bg-dark-950">
      {/* Dynamic 4K Architectural Background Carousel */}
      <div className="absolute inset-0 z-0">
        {banners.map((banner, idx) => (
          <div
            key={banner.url}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeBannerIdx === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${banner.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* High-Tech Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Curated Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-5 shadow-lg shadow-cyan-950/50">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Official Showcase • Rohan Builders & Ar. Sanjay Mohe</span>
        </div>

        {/* Monumental Headline (Cyan & Silver Gradients - Zero Beige) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl leading-[1.08] mb-5">
          Where the <span className="river-gradient-text italic font-medium">River</span> Meets the <span className="cyan-gradient-text italic font-medium">Sky</span>
        </h1>

        {/* Narrative Subhead with verified PMC & 13-acre riverfront details */}
        <p className="max-w-3xl text-sm sm:text-lg text-gray-300 font-light leading-relaxed mb-8">
          Spread across a pristine <strong className="text-white font-medium">13-acre riverside parcel</strong> on the Mula River in Balewadi, Pune. Introducing India's first residential masterwork featuring <span className="text-cyan-300 font-medium">"The Ground Floor in the Sky"</span> at Level 14.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-12 w-full sm:w-auto">
          <button
            onClick={onOpenVipModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Book Private VIP Tour</span>
            <ArrowRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={OFFICIAL_PROJECT_DETAILS.brochures[0].url}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider border border-white/15 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Official Brochure PDF (18MB)</span>
          </a>
        </div>

        {/* Perspective Switcher Controls (Scraped Banners) */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-3 mb-8 no-scrollbar">
          {banners.map((banner, bIdx) => (
            <button
              key={bIdx}
              onClick={() => setActiveBannerIdx(bIdx)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeBannerIdx === bIdx
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeBannerIdx === bIdx ? 'bg-dark-950' : 'bg-cyan-400'}`} />
              <span>{banner.title}</span>
            </button>
          ))}
        </div>

        {/* Core Project Data HUD Strip */}
        <div className="w-full max-w-5xl glass-panel-glow rounded-3xl p-5 sm:p-7 border border-cyan-500/25 arch-grid-pattern">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">13 Acres</span>
              <span className="text-xs font-semibold text-cyan-300 mt-0.5 uppercase tracking-wider">Riverfront Land</span>
              <span className="text-[11px] text-gray-400 mt-0.5">Along Mula River bend</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Level 14</span>
              <span className="text-xs font-semibold text-cyan-300 mt-0.5 uppercase tracking-wider">Sky Ground</span>
              <span className="text-[11px] text-gray-400 mt-0.5">Suspended 150 ft in air</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">PMC Limits</span>
              <span className="text-xs font-semibold text-cyan-300 mt-0.5 uppercase tracking-wider">Civic Jurisdiction</span>
              <span className="text-[11px] text-gray-400 mt-0.5">Pune Municipal Corp</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">36+ Curated</span>
              <span className="text-xs font-semibold text-cyan-300 mt-0.5 uppercase tracking-wider">World Amenities</span>
              <span className="text-[11px] text-gray-400 mt-0.5">Earth & Sky Realms</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 col-span-2 sm:col-span-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Dec 2027</span>
              <span className="text-xs font-semibold text-cyan-300 mt-0.5 uppercase tracking-wider">Possession Date</span>
              <span className="text-[11px] text-gray-400 mt-0.5">Phase 1 Delivery</span>
            </div>
          </div>

          {/* RERA and Official Status Bar */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>MahaRERA Reg: <strong className="text-white font-mono">P52100052298 (Phase 1)</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>CRISIL DA2+ Rated Developer</span>
              </span>
              <span className="text-gray-500">•</span>
              <span>Behind Balewadi High Street</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
