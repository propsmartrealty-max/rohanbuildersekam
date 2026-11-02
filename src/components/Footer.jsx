import React from 'react';
import { PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-gold-500/20 text-gray-400 text-xs relative overflow-hidden">
      {/* Top Footer Strip: RERA Compliance Banner */}
      <div className="bg-dark-900 border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                MahaRERA Registered Development
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                Project Registration Number: <strong className="text-gold-400">{PROJECT_DETAILS.reraNumber}</strong>
              </div>
            </div>
          </div>

          <a
            href={PROJECT_DETAILS.reraWebsite}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs transition-colors"
          >
            <span>Verify on MahaRERA Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
          </a>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Developer Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 p-[1px]">
                <div className="w-full h-full bg-dark-950 rounded-lg flex items-center justify-center">
                  <span className="font-serif font-bold text-xl text-gold-400">E</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-white">
                  ROHAN EKAM
                </span>
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest">
                  Balewadi • Pune
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Conceived by Ar. Sanjay Mohe (Mindspace Architects) and crafted by Rohan Builders. Featuring India's first 14th-floor suspended "Ground Floor in the Sky" across 13 serene riverfront acres in Balewadi, Pune.
            </p>

            <div className="pt-2 text-[11px] text-gray-400 space-y-1">
              <div><strong className="text-white">Developer:</strong> Rohan Builders (India) Pvt. Ltd.</div>
              <div><strong className="text-white">Rating:</strong> CRISIL DA2+ Rated Real Estate Developer</div>
              <div><strong className="text-white">Track Record:</strong> 30+ Years • 15+ Million Sq.Ft Delivered</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Architecture & Living
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sky-ground" className="hover:text-gold-400 transition-colors">The 14th Fl Sky Ground</a></li>
              <li><a href="#plus-philosophy" className="hover:text-gold-400 transition-colors">Rohan PLUS Science</a></li>
              <li><a href="#residences" className="hover:text-gold-400 transition-colors">2, 3 & 4 BHK Residences</a></li>
              <li><a href="#amenities" className="hover:text-gold-400 transition-colors">45+ Curated Amenities</a></li>
              <li><a href="#specifications" className="hover:text-gold-400 transition-colors">Finishes & Specifications</a></li>
            </ul>
          </div>

          {/* Location & Commute */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Balewadi Connectivity
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Balewadi High Street (4 mins)</a></li>
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Hinjawadi IT Park (12 mins)</a></li>
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Mumbai-Pune Expressway (8 mins)</a></li>
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Metro Line 3 Station (4 mins)</a></li>
              <li><a href="#financial-suite" className="hover:text-gold-400 transition-colors">Cost Sheet & EMI Planner</a></li>
            </ul>
          </div>

          {/* Contact & Site Office */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Site Experience Center
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Rohan Ekam, Behind Balewadi High Street, On Mula Riverfront, Balewadi, Pune - 411045</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${PROJECT_DETAILS.contactPhone}`} className="hover:text-gold-400 transition-colors font-mono">
                  {PROJECT_DETAILS.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${PROJECT_DETAILS.contactEmail}`} className="hover:text-gold-400 transition-colors">
                  {PROJECT_DETAILS.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-white/5 text-[10px] leading-relaxed text-gray-400 space-y-2">
          <p>
            <strong>Disclaimer:</strong> The artistic renderings, visual representations, floor plans, dimensions, specifications, and images shown on this website are indicative and conceptual in nature and subject to change as may be required by authorities or developers without prior notice. This website does not constitute an offer, contract, or invitation for booking of any unit. All dimensions are approximate and measured from internal unfinished walls.
          </p>
          <p>
            MahaRERA Project Registration No.: <strong>{PROJECT_DETAILS.reraNumber}</strong>. Details available on the official website: <a href={PROJECT_DETAILS.reraWebsite} target="_blank" rel="noreferrer" className="text-gold-400 underline">maharera.mahaonline.gov.in</a>.
          </p>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Rohan Builders (India) Pvt. Ltd. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
