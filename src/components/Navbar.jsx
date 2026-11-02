import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Compass } from 'lucide-react';
import { ambientSound } from '../utils/audioGenerator';

export default function Navbar({ onOpenVipModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = ambientSound.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { name: 'Sky Ground', href: '#sky-ground' },
    { name: 'Rohan PLUS', href: '#plus-philosophy' },
    { name: 'Residences', href: '#residences' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Balewadi Radar', href: '#location' },
    { name: 'Cost Planner', href: '#financial-suite' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
            isScrolled
              ? 'bg-dark-900/85 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/40'
              : 'bg-dark-950/60 backdrop-blur-xl border border-white/10'
          }`}
        >
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-cyan-300 p-[1.5px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center group-hover:bg-dark-900 transition-colors">
                <span className="font-serif font-black text-lg text-cyan-400 tracking-wider">E</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors">
                  ROHAN EKAM
                </span>
                <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-300/90 font-mono tracking-wider">
                  BALEWADI
                </span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                Mula Riverfront • Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2.5">
            {/* Ambient River Breeze Generator */}
            <button
              onClick={handleAudioToggle}
              title={isPlayingAudio ? 'Mute river soundscape' : 'Play procedural river breeze & birds'}
              className={`hidden md:flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                isPlayingAudio
                  ? 'border-cyan-400/60 bg-cyan-950/50 text-cyan-300 shadow-md shadow-cyan-900/30'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-medium tracking-wide">River Flow</span>
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-2 bg-cyan-400 animate-pulse"></span>
                    <span className="w-0.5 h-3 bg-cyan-400 animate-pulse delay-75"></span>
                    <span className="w-0.5 h-1.5 bg-cyan-400 animate-pulse delay-150"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium tracking-wide">Soundscape</span>
                </>
              )}
            </button>

            {/* MahaRERA Badge */}
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-gray-300 border border-white/10 px-3 py-1 rounded-full bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-mono text-gray-300">P52100052298</span>
            </div>

            {/* VIP Site Visit Button */}
            <button
              onClick={onOpenVipModal}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-dark-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-dark-950" />
                <span>VIP Site Tour</span>
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/5"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-dark-950/95 backdrop-blur-2xl border border-cyan-500/20 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400">MAHARERA: P52100052298</span>
              <button
                onClick={handleAudioToggle}
                className="flex items-center gap-1.5 text-xs text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30"
              >
                {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{isPlayingAudio ? 'Audio ON' : 'Audio OFF'}</span>
              </button>
            </div>
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenVipModal();
                }}
                className="w-full py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
              >
                Schedule Private VIP Tour
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
