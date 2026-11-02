import React from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, ArrowUp, Download } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-cyan-500/20 text-gray-400 text-xs relative overflow-hidden">
      {/* Top Banner: Official MahaRERA Compliance */}
      <div className="bg-dark-900 border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                MahaRERA Registered Project • Pune Municipal Corporation (PMC) Limits
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                Phase 1: <strong className="text-cyan-400">P52100052298</strong> | Phase 2: <strong className="text-cyan-400">PR1261012502532</strong>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OFFICIAL_PROJECT_DETAILS.brochures[0].url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Official Brochure</span>
            </a>
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs transition-colors"
            >
              <span>Verify on MahaRERA</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-cyan-300 p-[1.5px]">
                <div className="w-full h-full bg-dark-950 rounded-full flex items-center justify-center">
                  <span className="font-serif font-black text-lg text-cyan-400">E</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-widest text-white">
                  ROHAN EKAM
                </span>
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                  Mula Riverfront • Balewadi, Pune
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Rohan Ekam’s design fully utilizes the 13-acre riverside parcel of land along the Mula River. Conceptualized by Ar. Sanjay Mohe (Mindspace Architects) featuring India's first 14th-floor Ground Floor in the Sky.
            </p>

            <div className="text-[11px] text-gray-400 space-y-1">
              <div><strong className="text-white">Developer:</strong> Rohan Builders (India) Pvt. Ltd.</div>
              <div><strong className="text-white">Track Record:</strong> 30+ Years • CRISIL DA2+ Rated</div>
              <div><strong className="text-white">Possession:</strong> December 2027 onwards (Phase 1)</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Architecture & Living
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#vision" className="hover:text-cyan-400 transition-colors">Architect's Note</a></li>
              <li><a href="#sky-ground" className="hover:text-cyan-400 transition-colors">The 14th Fl Sky Ground</a></li>
              <li><a href="#plus-philosophy" className="hover:text-cyan-400 transition-colors">Rohan PLUS Science</a></li>
              <li><a href="#residences" className="hover:text-cyan-400 transition-colors">Official Floor Plans</a></li>
              <li><a href="#amenities" className="hover:text-cyan-400 transition-colors">36+ Curated Amenities</a></li>
            </ul>
          </div>

          {/* Official Documents & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Legal & Documents
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#documents" className="hover:text-cyan-400 transition-colors">MahaRERA Phase QR Codes</a></li>
              <li><a href="#documents" className="hover:text-cyan-400 transition-colors">Environmental Clearance (EC)</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Official FAQ Section</a></li>
              <li><a href="#location" className="hover:text-cyan-400 transition-colors">Balewadi High Street Network</a></li>
              <li><a href="#financial-suite" className="hover:text-cyan-400 transition-colors">Cost Sheet & Stamp Duty</a></li>
            </ul>
          </div>

          {/* Site Office */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Site Experience Center
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Rohan Ekam, Behind Balewadi High Street, On Mula Riverfront, Balewadi, Pune - 411045</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+912071178899" className="hover:text-cyan-400 transition-colors font-mono">
                  +91 20 7117 8899
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:ekam.concierge@rohanbuilders.com" className="hover:text-cyan-400 transition-colors">
                  ekam.concierge@rohanbuilders.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/5 text-[10px] leading-relaxed text-gray-500 space-y-1.5">
          <p>
            <strong>Disclaimer:</strong> The artistic impressions, specifications, floor plans, dimensions, and amenities presented on this page are sourced directly from the official project details of Rohan Ekam by Rohan Builders. Subject to approvals by authorities.
          </p>
          <p>
            MahaRERA Registration Numbers: Phase 1: <strong>P52100052298</strong> | Phase 2: <strong>PR1261012502532</strong>. Details accessible at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-cyan-400 underline">maharera.mahaonline.gov.in</a>.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            © {new Date().getFullYear()} Rohan Builders (India) Pvt. Ltd. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
