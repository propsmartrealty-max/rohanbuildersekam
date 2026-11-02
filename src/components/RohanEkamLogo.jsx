import React from 'react';

/**
 * RohanEkamLogo Component
 * Based directly on user-uploaded logo with vibrant colorful gradients,
 * high-contrast Didone typography, and interactive glass shimmer.
 * 
 * Variants:
 * - 'lockup': Horizontal lockup (Icon Badge + Multi-line Typography)
 * - 'stacked': Centered vertical lockup matching the exact uploaded image
 * - 'badge': Icon emblem badge (ideal for compact spaces & favicons)
 */
export default function RohanEkamLogo({ 
  variant = 'lockup', 
  size = 'md', 
  className = '',
  showBadge = true 
}) {
  if (variant === 'badge') {
    return (
      <div className={`relative group inline-flex items-center justify-center ${className}`}>
        {/* Ambient colorful glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-rose-500 via-amber-500 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
        
        {/* Core Badge */}
        <div className="relative w-10 h-10 rounded-2xl bg-stone-950 p-[1.5px] shadow-lg overflow-hidden">
          <div className="w-full h-full rounded-[14px] bg-[#181614] flex flex-col items-center justify-center relative overflow-hidden">
            <span className="font-serif font-bold text-xl bg-gradient-to-br from-rose-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent tracking-widest leading-none">
              E
            </span>
            <span className="text-[7px] font-sans font-extrabold uppercase tracking-widest text-stone-300 mt-0.5">
              EKAM
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none group ${className}`}>
        {/* 1. ROHAN */}
        <span className="font-sans font-extrabold text-[13px] sm:text-[15px] tracking-[0.42em] uppercase bg-gradient-to-r from-rose-500 via-amber-500 to-amber-600 bg-clip-text text-transparent transition-all duration-300">
          ROHAN
        </span>

        {/* 2. EKAM (High-Contrast Serif Centerpiece) */}
        <span className="font-serif text-3xl sm:text-5xl font-medium tracking-[0.24em] bg-gradient-to-r from-rose-500 via-amber-400 to-teal-500 bg-clip-text text-transparent my-[-4px] sm:my-[-6px] transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)] group-hover:scale-105">
          EKAM
        </span>

        {/* 3. BALEWADI */}
        <span className="font-sans font-bold text-[9px] sm:text-[11px] tracking-[0.62em] uppercase bg-gradient-to-r from-amber-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent mt-0.5 sm:mt-1">
          BALEWADI
        </span>
      </div>
    );
  }

  // Default: 'lockup' (Responsive Navbar & Header Lockup)
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {showBadge && (
        <div className="relative">
          {/* Ambient Colorful Aurora Backlight */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-rose-500 via-amber-400 to-cyan-500 opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
          
          {/* Icon Badge with E monogram */}
          <div className="relative w-10 h-10 rounded-2xl bg-stone-900 p-[1.5px] shadow-md transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-[14px] bg-[#181614] flex items-center justify-center relative overflow-hidden">
              <span className="font-serif font-black text-xl bg-gradient-to-br from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent tracking-wider">
                E
              </span>
            </div>
          </div>
        </div>
      )}

      {/* The Exact Typographic Hierarchy */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-sans font-extrabold text-[10px] tracking-[0.38em] uppercase text-stone-800 group-hover:text-amber-800 transition-colors">
            ROHAN
          </span>
          <span className="w-1 h-1 rounded-full bg-amber-500" />
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">
            PUNE
          </span>
        </div>

        {/* EKAM in Radiant Vibrant Gradient */}
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-[0.22em] bg-gradient-to-r from-rose-600 via-amber-500 to-teal-600 bg-clip-text text-transparent leading-none drop-shadow-xs group-hover:scale-102 transition-transform">
            EKAM
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50 to-emerald-50 text-stone-800 font-sans font-bold tracking-[0.2em] uppercase shadow-xs">
            BALEWADI
          </span>
        </div>
      </div>
    </div>
  );
}