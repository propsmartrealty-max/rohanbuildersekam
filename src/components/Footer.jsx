import React from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, MapPin, ExternalLink, ArrowUp, Download, Clock } from 'lucide-react';
import RohanEkamLogo from './RohanEkamLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFECE6] border-t border-stone-300 text-stone-600 text-xs relative overflow-hidden">
      {/* Top Banner: Official MahaRERA Compliance */}
      <div className="bg-[#FAF8F5] border-b border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-300 flex items-center justify-center text-emerald-700 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold text-stone-900 text-sm">
                MahaRERA Registered Project • Pune Municipal Corporation (PMC) Limits
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                Phase 1: <strong className="text-stone-900">P52100052298</strong> | Phase 2: <strong className="text-stone-900">PR1261012502532</strong>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OFFICIAL_PROJECT_DETAILS.brochures[0].url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
              <span>Official Brochure</span>
            </a>
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <span>Verify on MahaRERA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="mb-2">
              <RohanEkamLogo variant="lockup" />
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Rohan Ekam’s design fully utilizes the 13-acre riverside parcel of land along the Mula River. Conceptualized by Ar. Sanjay Mohe (Mindspace Architects) featuring India's first 14th-floor Ground Floor in the Sky.
            </p>

            <div className="text-[11px] text-stone-600 space-y-1">
              <div><strong className="text-stone-900">Developer:</strong> Rohan Builders (India) Pvt. Ltd.</div>
              <div><strong className="text-stone-900">Track Record:</strong> 30+ Years • CRISIL DA2+ Rated</div>
              <div><strong className="text-stone-900">Possession:</strong> December 2027 onwards (Phase 1)</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
              Architecture & Living
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#vision" className="hover:text-stone-950 transition-colors">Architect's Note</a></li>
              <li><a href="#sky-ground" className="hover:text-stone-950 transition-colors">The 14th Fl Sky Ground</a></li>
              <li><a href="#plus-philosophy" className="hover:text-stone-950 transition-colors">Rohan PLUS Science</a></li>
              <li><a href="#residences" className="hover:text-stone-950 transition-colors">Official Floor Plans</a></li>
              <li><a href="#amenities" className="hover:text-stone-950 transition-colors">36+ Curated Amenities</a></li>
            </ul>
          </div>

          {/* Legal Documents */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
              Legal & Documents
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#documents" className="hover:text-stone-950 transition-colors">MahaRERA Phase QR Codes</a></li>
              <li><a href="#documents" className="hover:text-stone-950 transition-colors">Environmental Clearance (EC)</a></li>
              <li><a href="#faq" className="hover:text-stone-950 transition-colors">Official FAQ Section</a></li>
              <li><a href="#location" className="hover:text-stone-950 transition-colors">Balewadi High Street Network</a></li>
              <li><a href="#financial-suite" className="hover:text-stone-950 transition-colors">Cost Sheet & Stamp Duty</a></li>
            </ul>
          </div>

          {/* Site Office */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
              Site Experience Center
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Rohan Ekam, Behind Balewadi High Street, On Mula Riverfront, Balewadi, Pune - 411045</span>
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.576 1.77.884 2.801.884 3.179 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.778-5.77zm0 10.373c-.927 0-1.637-.282-2.457-.768l-.176-.105-1.579.414.422-1.539-.115-.184c-.535-.851-.817-1.472-.816-2.425.001-2.54 2.068-4.607 4.61-4.607 2.541 0 4.608 2.068 4.608 4.608 0 2.54-2.067 4.606-4.612 4.606zm3.11-3.468c-.17-.085-1.008-.497-1.164-.554-.156-.057-.27-.085-.383.085s-.44 1.164-.539 1.277c-.099.113-.198.128-.368.043-.17-.085-.718-.265-1.368-.844-.506-.451-.848-1.007-.947-1.177-.099-.17-.01-.262.075-.347.077-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.213-.014-.297-.042-.085-.383-.922-.525-1.263-.138-.33-.278-.285-.383-.29-.099-.005-.213-.006-.327-.006s-.297.043-.453.213c-.156.17-.595.582-.595 1.419 0 .837.609 1.646.694 1.759.085.113 1.2 1.831 2.906 2.569.406.175.723.279.97.358.408.13.779.112 1.072.068.327-.049 1.008-.412 1.15-.809.142-.397.142-.738.099-.809-.043-.071-.157-.113-.327-.198z"/>
                </svg>
                <a
                  href="https://wa.me/91774409295?text=Hello%20Rohan%20Builders,%20I%20would%20like%20to%20enquire%20about%20Rohan%20Ekam%20Balewadi."
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  WhatsApp: +91 774409295
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Mon – Sun: 9:30 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-stone-300 text-[10px] leading-relaxed text-stone-500 space-y-1.5">
          <p>
            <strong>Disclaimer:</strong> The artistic impressions, specifications, floor plans, dimensions, and amenities presented on this page are sourced directly from the official project details of Rohan Ekam by Rohan Builders. Subject to approvals by authorities.
          </p>
          <p>
            MahaRERA Registration Numbers: Phase 1: <strong>P52100052298</strong> | Phase 2: <strong>PR1261012502532</strong>. Details accessible at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-stone-900 underline font-medium">maharera.mahaonline.gov.in</a>.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            © {new Date().getFullYear()} Rohan Builders (India) Pvt. Ltd. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-stone-800 hover:text-stone-950 font-medium transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
