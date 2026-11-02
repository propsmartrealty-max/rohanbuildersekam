import React from 'react';
import { ArrowRight, Sparkles, Building, Layers, Wind, Compass, ShieldCheck } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

export default function Hero({ onOpenVipModal, onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Architectural Canvas & River Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-950/60 to-dark-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Curated Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 shadow-lg shadow-gold-500/5 animate-pulseGlow">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Architect Sanjay Mohe & Rohan Builders Masterpiece</span>
        </div>

        {/* Monumental Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          Where the <span className="gold-gradient-text italic font-normal">River</span> Meets the <span className="gold-gradient-text italic font-normal">Sky</span>
        </h1>

        {/* Narrative Subhead */}
        <p className="max-w-3xl text-base sm:text-xl text-gray-300 font-light leading-relaxed mb-10">
          Nestled along 13 pristine riverfront acres in Balewadi, Pune. Introducing India's first residential wonder featuring <span className="text-gold-300 font-medium">"The Ground Floor in the Sky"</span> — a lush community realm suspended at Level 14.
        </p>

        {/* Quick CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <button
            onClick={onOpenVipModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 text-dark-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Experience VIP Site Tour</span>
            <ArrowRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#sky-ground"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm tracking-wider uppercase border border-gold-500/30 hover:border-gold-400 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Layers className="w-4 h-4 text-gold-400" />
            <span>Explore Level 14 Sky Ground</span>
          </a>
        </div>

        {/* Interactive Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full mb-14">
          <a
            href="#sky-ground"
            className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-1 text-gold-400">
              <Building className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Level 14</span>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
              The Sky Ground
            </div>
            <div className="text-xs text-gray-400">Bridges, pods & gardens</div>
          </a>

          <a
            href="#plus-philosophy"
            className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-1 text-emerald-400">
              <Wind className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">PLUS Physics</span>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Ventilation & Light
            </div>
            <div className="text-xs text-gray-400">Interactive live simulation</div>
          </a>

          <a
            href="#residences"
            className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-1 text-gold-400">
              <Layers className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">2, 3 & 4 BHK</span>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
              Interactive Plans
            </div>
            <div className="text-xs text-gray-400">869 - 2,158 sq.ft carpet</div>
          </a>

          <a
            href="#location"
            className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-1 text-gold-400">
              <Compass className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Balewadi Radar</span>
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
              Prime Connectivity
            </div>
            <div className="text-xs text-gray-400">4m to High St • 12m to IT</div>
          </a>
        </div>

        {/* Key Real Estate Stats Counter Strip */}
        <div className="w-full max-w-6xl glass-panel-glow rounded-3xl p-6 sm:p-8 border border-gold-500/25 arch-grid-pattern">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {PROJECT_DETAILS.stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 pt-4 sm:pt-0 first:pt-0">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-gold-400 mt-1 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5 max-w-[140px] leading-tight hidden sm:block">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Micro Footer Bar with RERA & River Climate */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MahaRERA Registration No: <strong className="text-white font-mono">{PROJECT_DETAILS.reraNumber}</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Balewadi Microclimate: <strong>26°C Cool River Breeze</strong></span>
              </span>
              <span className="hidden md:inline text-gold-400/80">• High Street Corridor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
