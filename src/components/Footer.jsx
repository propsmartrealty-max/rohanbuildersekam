import React, { useState } from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, MapPin, ExternalLink, ArrowUp, Download, Clock, Lock, Scale } from 'lucide-react';
import RohanEkamLogo from './RohanEkamLogo';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'privacy' });

  const openLegal = (tab, e) => {
    if (e) e.preventDefault();
    setLegalModal({ isOpen: true, tab });
  };

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

        {/* Search Engine Ecosystem & Knowledge Directory (Engineered for Google Rank #1) */}
        <div className="mt-12 pt-10 border-t border-stone-300/80">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block mb-1">
              Rohan Builders Ekam Ecosystem &amp; Pune Real Estate Knowledge Directory
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              Rohan Ekam, Balewadi • Official Project Overview &amp; Specifications
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-4xl leading-relaxed">
              Rohan Ekam is a landmark 13-acre riverfront luxury residential enclave conceptualized by <strong>Rohan Builders (India) Pvt. Ltd.</strong> and master-architect <strong>Ar. Sanjay Mohe</strong> (Mindspace Architects). Situated directly along the serene Mula River in Balewadi, Pune (PIN 411045), this development introduces India’s first <em>Ground Floor in the Sky</em> at Level 14, seamlessly connecting 14-storey towers with elevated lawns, sky walkways, co-working lounges, and 50+ curated lifestyle amenities. Engineered with Rohan's proprietary <strong>PLUS Homes</strong> philosophy (Perfect Ventilation, Lively Light, Utmost Privacy, Smart Space), Rohan Ekam offers zero-corridor wastage 2, 3 &amp; 4 BHK residences starting ₹1.45 Cr*. Registered under MahaRERA: <strong>P52100052298</strong> (Phase 1) &amp; <strong>PR1261012502532</strong> (Phase 2).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs pt-4 border-t border-stone-200">
            {/* Cluster 1: Configurations & Commercials */}
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider mb-2.5">
                Residences &amp; Configurations
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li><a href="#residences" className="hover:text-stone-900 transition-colors">Rohan Ekam 2 BHK Luxury Flats (₹1.45 Cr*)</a></li>
                <li><a href="#residences" className="hover:text-stone-900 transition-colors">Rohan Ekam 3 BHK Residences - Type 1 (₹1.95 Cr*)</a></li>
                <li><a href="#residences" className="hover:text-stone-900 transition-colors">Rohan Ekam 3 BHK Grand Layout - Type 2 (₹2.15 Cr*)</a></li>
                <li><a href="#residences" className="hover:text-stone-900 transition-colors">Rohan Ekam 4 BHK Sky Suite Penthouses (₹2.75 Cr*)</a></li>
                <li><a href="#residences" className="hover:text-stone-900 transition-colors">Official Rohan Ekam Floor Plans PDF Download</a></li>
                <li><a href="#financialSuite" className="hover:text-stone-900 transition-colors">Rohan Ekam Cost Sheet &amp; Stamp Duty Calculator</a></li>
                <li><a href="#financialSuite" className="hover:text-stone-900 transition-colors">SBI, HDFC, ICICI Bank Approved Home Loans</a></li>
              </ul>
            </div>

            {/* Cluster 2: Architectural Innovations & PLUS Science */}
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider mb-2.5">
                Rohan PLUS Science &amp; Architecture
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li><a href="#architectNote" className="hover:text-stone-900 transition-colors">Ar. Sanjay Mohe (Mindspace Architects) Design</a></li>
                <li><a href="#skyGround" className="hover:text-stone-900 transition-colors">Level 14 Ground Floor in the Sky Concept</a></li>
                <li><a href="#plusPhilosophy" className="hover:text-stone-900 transition-colors">Rohan PLUS Science (Ventilation, Light, Privacy, Space)</a></li>
                <li><a href="#plusPhilosophy" className="hover:text-stone-900 transition-colors">Zero Corridor Wastage &amp; Usable Carpet Area</a></li>
                <li><a href="#skyGround" className="hover:text-stone-900 transition-colors">Cascading Sloping Lawns &amp; Sky Walkways</a></li>
                <li><a href="#amenities" className="hover:text-stone-900 transition-colors">1.2 km Mula Riverfront Boardwalk Promenade</a></li>
                <li><a href="#amenities" className="hover:text-stone-900 transition-colors">50m Olympic-Length Swimming Lap Pool</a></li>
              </ul>
            </div>

            {/* Cluster 3: Balewadi & Pune Micro-Market */}
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider mb-2.5">
                Location &amp; Connectivity (Pune 411045)
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Behind Balewadi High Street (5 mins)</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Baner &amp; Baner-Pashan Link Road (7 mins)</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Hinjawadi IT Park Phase 1 &amp; 2 (12-15 mins)</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Mumbai-Pune Expressway Connectivity (5 mins)</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Upcoming Balewadi Metro Station Line 3</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Shree Shiv Chhatrapati Sports Complex</a></li>
                <li><a href="#location" className="hover:text-stone-900 transition-colors">Near The Orchid School, Jupiter &amp; Manipal Hospital</a></li>
              </ul>
            </div>

            {/* Cluster 4: MahaRERA & Approvals */}
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider mb-2.5">
                MahaRERA &amp; Approvals Compliance
              </h4>
              <ul className="space-y-1.5 text-[11px] text-stone-600">
                <li><a href="#documents" className="hover:text-stone-900 transition-colors">MahaRERA Registration No: P52100052298</a></li>
                <li><a href="#documents" className="hover:text-stone-900 transition-colors">MahaRERA Phase 2: PR1261012502532</a></li>
                <li><a href="#faq" className="hover:text-stone-900 transition-colors">Official Possession Date: Dec 2027 – Dec 2028</a></li>
                <li><a href="#documents" className="hover:text-stone-900 transition-colors">SEIAA State Environmental Clearance (EC)</a></li>
                <li><a href="#documents" className="hover:text-stone-900 transition-colors">PMC Sanctioned Layout &amp; Commencement Certificate</a></li>
                <li><a href="#interested" className="hover:text-stone-900 transition-colors">Authorized Advisory Desk: Propsmart Realty</a></li>
                <li><a href="https://wa.me/91774409295" className="hover:text-emerald-800 font-semibold transition-colors">WhatsApp Enquiry Desk: +91 774409295</a></li>
              </ul>
            </div>
          </div>

          {/* Quick-Hop Keyword Pills for Instant Anchor Traversal */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-2.5">
              Popular Search Topics for Rohan Ekam Balewadi
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'Rohan Ekam', href: '#' },
                { label: 'Rohan Builders Ekam Balewadi', href: '#architectNote' },
                { label: 'Rohan Ekam Price', href: '#residences' },
                { label: 'Rohan Ekam Floor Plans', href: '#residences' },
                { label: 'Rohan Ekam 2 BHK', href: '#residences' },
                { label: 'Rohan Ekam 3 BHK', href: '#residences' },
                { label: 'Rohan Ekam 4 BHK Sky Suite', href: '#residences' },
                { label: 'Ground Floor in the Sky L14', href: '#skyGround' },
                { label: 'Rohan PLUS Homes', href: '#plusPhilosophy' },
                { label: 'Rohan Ekam Brochure PDF', href: OFFICIAL_PROJECT_DETAILS.brochures[0].url },
                { label: 'MahaRERA P52100052298', href: '#documents' },
                { label: 'Rohan Ekam Possession Date', href: '#faq' },
                { label: 'Flats near Balewadi High Street', href: '#location' },
                { label: 'Apartments along Mula River', href: '#location' },
                { label: 'Rohan Ekam Cost Sheet', href: '#financialSuite' },
                { label: 'Propsmart Realty Advisory', href: '#interested' },
                { label: 'Rohan Ekam WhatsApp Desk +91 774409295', href: 'https://wa.me/91774409295' }
              ].map((tag, i) => (
                <a
                  key={i}
                  href={tag.href}
                  className="px-2.5 py-1 rounded-lg bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-300 text-[10px] font-medium transition-all shadow-2xs hover:shadow-xs"
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Ads & MahaRERA Statutory Compliance & Channel Partner Disclosure */}
        <div className="mt-10 p-5 rounded-2xl bg-white/70 border border-stone-300 text-[11px] leading-relaxed text-stone-600 space-y-2.5 shadow-2xs">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-xs uppercase tracking-wider">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>MahaRERA Statutory Compliance &amp; Channel Partner Disclosure</span>
          </div>
          <p>
            <strong>Disclaimer:</strong> This website is an informational marketing showcase operated by <strong>Propsmart Realty</strong>, an authorized real estate channel partner for <strong>Rohan Ekam</strong>, developed by <strong>Rohan Builders (India) Pvt. Ltd.</strong> (MahaRERA Registration: Phase 1: <strong>P52100052298</strong> | Phase 2: <strong>PR1261012502532</strong>). Official project details, sanction plans, and certificates are verifiable at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-emerald-800 underline font-semibold">maharera.mahaonline.gov.in</a> under registered projects.
          </p>
          <p>
            All artistic impressions, 3D elevation renders, floor plan dimensions, square footages, and price quotes (e.g. Starting ₹1.45 Cr*) are purely conceptual and subject to change without notice at the promoter's sole discretion. Government taxes (GST), stamp duty, and registration charges are extra. This website does not constitute an offer, warranty, or legal contract.
          </p>

          {/* Legal Compliance Quick Links */}
          <div className="pt-2 border-t border-stone-200/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-stone-800">
            <button 
              type="button" 
              onClick={(e) => openLegal('privacy', e)} 
              className="hover:text-amber-800 underline flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-emerald-700" />
              <span>Privacy Policy</span>
            </button>
            <a 
              href="/privacy-policy.html" 
              target="_blank" 
              rel="noreferrer" 
              className="text-stone-500 hover:text-stone-800 text-[10px]"
            >
              (Standalone)
            </a>

            <button 
              type="button" 
              onClick={(e) => openLegal('terms', e)} 
              className="hover:text-amber-800 underline"
            >
              Terms &amp; Conditions
            </button>
            <a 
              href="/terms.html" 
              target="_blank" 
              rel="noreferrer" 
              className="text-stone-500 hover:text-stone-800 text-[10px]"
            >
              (Standalone)
            </a>

            <button 
              type="button" 
              onClick={(e) => openLegal('disclaimer', e)} 
              className="hover:text-amber-800 underline"
            >
              MahaRERA Disclaimer
            </button>

            <a 
              href="mailto:propsmartrealty@gmail.com?subject=Data%20Opt-Out%20Request" 
              className="hover:text-amber-800 underline text-stone-600"
            >
              Data Privacy Opt-Out
            </a>
          </div>
        </div>

        {/* Copyright & Channel Partner Attribution */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-stone-600 text-[11px]">
            © {new Date().getFullYear()} <strong>Propsmart Realty</strong> &amp; <strong>Rohan Builders (India) Pvt. Ltd.</strong> All Rights Reserved. • Project MahaRERA: <strong>P52100052298</strong>
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

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        initialTab={legalModal.tab}
      />
    </footer>
  );
}
