import React, { useState } from 'react';
import { ArrowRight, Sparkles, Download, Layers, ShieldCheck, FileText, ChevronRight, Waves } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import RohanEkamLogo from './RohanEkamLogo';

export default function Hero({ onOpenVipModal }) {
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  const banners = OFFICIAL_PROJECT_DETAILS.heroBanners;
  const currentBanner = banners[activeBannerIdx];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#F5F2EB]">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-96 h-96 bg-[#E8D5C4] top-10 -left-20 animate-blob" />
      <div className="glass-orb w-[420px] h-[420px] bg-[#C8DECE] top-1/3 -right-24 animate-blob [animation-delay:4s]" />
      <div className="glass-orb w-80 h-80 bg-[#DDD4C4] -bottom-10 left-1/3 animate-blob [animation-delay:8s]" />

      {/* Background Carousel with Warm Beige Architectural Blends */}
      <div className="absolute inset-0 z-0">
        {banners.map((banner, idx) => (
          <div
            key={banner.url}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeBannerIdx === idx ? 'opacity-25 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${banner.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Soft Warm Vignette Gradients transitioning to Beige */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB] via-[#F5F2EB]/70 to-[#F5F2EB]/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Curated Eyebrow Badge in Frosted Glass */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-stone-800 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-xs glass-shimmer">
          <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
          <span>Official Showcase • Rohan Builders & Ar. Sanjay Mohe</span>
        </div>

        {/* Colorful Brand Insignia (Exact User Typography) */}
        <div className="mb-5 p-3 rounded-3xl glass-panel-glow border border-white/90 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:scale-105 glass-shimmer">
          <RohanEkamLogo variant="stacked" />
        </div>

        {/* Monumental Headline in Deep Charcoal / Espresso with Semantic SEO Anchoring */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-stone-900 max-w-5xl leading-[1.08] mb-5">
          <span className="block text-xs sm:text-sm font-sans font-bold tracking-[0.25em] text-amber-900/80 uppercase mb-3">
            Rohan Ekam Balewadi, Pune • 2, 3 &amp; 4 BHK Luxury Residences
          </span>
          Where the <span className="italic font-serif font-medium text-amber-800">River</span> Meets the <span className="italic font-serif font-medium text-stone-700">Sky</span>
        </h1>

        {/* Narrative Subhead */}
        <p className="max-w-3xl text-sm sm:text-lg text-stone-700 font-light leading-relaxed mb-8">
          Spread across a pristine <strong className="text-stone-950 font-semibold">13-acre riverside parcel</strong> along the Mula River in Balewadi, Pune. Introducing India's first residential wonder featuring <span className="text-stone-950 font-semibold">"The Ground Floor in the Sky"</span> at Level 14.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto">
          <button
            onClick={onOpenVipModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2 group active:scale-95 glass-shimmer"
          >
            <span>Book Private VIP Tour</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={OFFICIAL_PROJECT_DETAILS.brochures[0].url}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel hover:bg-white/95 text-stone-900 font-semibold text-xs uppercase tracking-wider border border-white/90 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 glass-shimmer"
          >
            <Download className="w-4 h-4 text-amber-700" />
            <span>Official Brochure PDF (18MB)</span>
          </a>
        </div>

        {/* Perspective Switcher Controls in Frosted Glass */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-3 mb-8 no-scrollbar">
          {banners.map((banner, bIdx) => (
            <button
              key={bIdx}
              onClick={() => setActiveBannerIdx(bIdx)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all whitespace-nowrap flex items-center gap-2 ${
                activeBannerIdx === bIdx
                  ? 'bg-stone-900 text-white font-bold shadow-md shadow-stone-900/10 scale-105'
                  : 'glass-panel text-stone-700 hover:text-stone-950 hover:bg-white/90'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeBannerIdx === bIdx ? 'bg-amber-400' : 'bg-stone-400'}`} />
              <span>{banner.title}</span>
            </button>
          ))}
        </div>

        {/* Core Project Data HUD Strip on Warm Frosted Glass Panel */}
        <div className="w-full max-w-5xl glass-panel-glow rounded-3xl p-5 sm:p-7 border border-white/90 arch-grid-pattern relative overflow-hidden shadow-xl shadow-stone-900/5">
          {/* Subtle specular sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80">
            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 group cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">13 Acres</span>
              <span className="text-xs font-semibold text-amber-800 mt-0.5 uppercase tracking-wider">Riverfront Land</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Along Mula River bend</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 group cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">Level 14</span>
              <span className="text-xs font-semibold text-amber-800 mt-0.5 uppercase tracking-wider">Sky Ground</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Suspended 150 ft in air</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 group cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">PMC Limits</span>
              <span className="text-xs font-semibold text-amber-800 mt-0.5 uppercase tracking-wider">Civic Body</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Pune Municipal Corp</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 group cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">36+ Curated</span>
              <span className="text-xs font-semibold text-amber-800 mt-0.5 uppercase tracking-wider">World Amenities</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Earth & Sky Realms</span>
            </div>

            <div className="flex flex-col items-center text-center px-2 pt-3 sm:pt-0 col-span-2 sm:col-span-1 group cursor-default">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">Dec 2027</span>
              <span className="text-xs font-semibold text-amber-800 mt-0.5 uppercase tracking-wider">Possession Date</span>
              <span className="text-[11px] text-stone-500 mt-0.5">Phase 1 Delivery</span>
            </div>
          </div>

          {/* RERA and Official Status Bar */}
          <div className="relative z-10 mt-5 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>MahaRERA Registration No: <strong className="text-stone-900 font-mono">P52100052298 (Phase 1)</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>CRISIL DA2+ Rated Developer</span>
              </span>
              <span className="text-stone-300">•</span>
              <span>Behind Balewadi High Street</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
