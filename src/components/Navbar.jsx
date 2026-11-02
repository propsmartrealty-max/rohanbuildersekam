import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, PhoneCall, Sparkles, Compass } from 'lucide-react';
import { ambientSound } from '../utils/audioGenerator';

export default function Navbar({ onOpenVipModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = ambientSound.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { name: 'Sky Ground (14th Fl)', href: '#sky-ground' },
    { name: 'Rohan PLUS', href: '#plus-philosophy' },
    { name: 'Residences', href: '#residences' },
    { name: 'Amenities (45+)', href: '#amenities' },
    { name: 'Balewadi Radar', href: '#location' },
    { name: 'Financials', href: '#financial-suite' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 via-gold-600 to-gold-700 p-[1px] shadow-lg shadow-gold-500/10">
                <div className="w-full h-full bg-dark-950 rounded-lg flex items-center justify-center group-hover:bg-dark-900 transition-colors">
                  <span className="font-serif font-bold text-xl text-gold-400 tracking-wider">E</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-white group-hover:text-gold-400 transition-colors">
                    ROHAN EKAM
                  </span>
                  <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded border border-gold-500/40 text-gold-400/90 font-mono tracking-tighter">
                    BALEWADI
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Mula Riverfront • Pune
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Procedural Audio Generator Button */}
              <button
                onClick={handleAudioToggle}
                title={isPlayingAudio ? 'Mute river & nature breeze' : 'Play ambient river breeze & birds'}
                className={`hidden md:flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  isPlayingAudio
                    ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 shadow-md shadow-emerald-900/30'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-gold-500/30'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-medium tracking-wide">River Breeze</span>
                    <span className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 h-2 bg-emerald-400 animate-pulse"></span>
                      <span className="w-0.5 h-3 bg-emerald-400 animate-pulse delay-75"></span>
                      <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse delay-150"></span>
                    </span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium tracking-wide">Soundscape</span>
                  </>
                )}
              </button>

              {/* RERA Pill */}
              <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-gray-400 border border-white/10 px-2.5 py-1 rounded-full bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
                <span className="font-mono text-gray-300">RERA: P52100052298</span>
              </div>

              {/* VIP Tour CTA */}
              <button
                onClick={onOpenVipModal}
                className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-dark-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-dark-950" />
                  VIP Site Visit
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-dark-950/98 border-b border-gold-500/20 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-gold-400">MAHARERA: P52100052298</span>
              <button
                onClick={handleAudioToggle}
                className="flex items-center gap-1.5 text-xs text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30"
              >
                {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{isPlayingAudio ? 'Audio ON' : 'Audio OFF'}</span>
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-gold-400 transition-colors py-1"
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
                className="w-full py-3 rounded-xl bg-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg"
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
