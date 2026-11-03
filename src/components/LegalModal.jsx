import React, { useState } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, ExternalLink } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xl flex items-center justify-center p-4">
      <div 
        className="relative max-w-2xl w-full glass-panel-glow rounded-3xl border border-white/95 p-6 sm:p-8 shadow-2xl overflow-hidden text-stone-800 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full glass-panel border border-stone-300 text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all z-20 hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-200/80 pb-3 pr-10">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'privacy'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'glass-panel text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'terms'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'glass-panel text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Terms of Use</span>
          </button>

          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'disclaimer'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'glass-panel text-stone-600 hover:text-stone-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>MahaRERA Disclaimer</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="max-h-[65vh] overflow-y-auto pr-2 space-y-4 text-xs leading-relaxed text-stone-600">
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">Privacy Policy</h3>
                <a 
                  href="/privacy-policy.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[11px] font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open standalone page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p>
                <strong>Propsmart Realty</strong> (operating this marketing showcase for Rohan Ekam at rohanbuildersekam.com) is dedicated to protecting your personal data in accordance with India's <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> and <strong>Google Ads User Data Policies</strong>.
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">1. Information We Collect</h4>
              <p>
                We collect information you explicitly submit through our contact forms, VIP tour reservation forms, and WhatsApp inquiry links, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full Name</li>
                <li>Mobile Phone Number (WhatsApp enabled)</li>
                <li>Email Address (optional)</li>
                <li>Unit Interest (2, 3, or 4 BHK) and Site Visit Date/Slot</li>
              </ul>

              <h4 className="font-bold text-stone-900 text-xs mt-2">2. Usage of Personal Data</h4>
              <p>
                Your submitted details are used solely to share floor plans, pricing sheets, schedule private site tours, and provide advisory assistance regarding Rohan Ekam.
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">3. Zero Third-Party Selling Policy</h4>
              <p>
                We do not sell, rent, or lease your personal data to any external telemarketers or third-party lead aggregators. Your information is shared exclusively with the customer advisory team of Propsmart Realty and the sales team of Rohan Builders (India) Pvt. Ltd. to fulfill your inquiry.
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">4. User Consent &amp; Opt-Out</h4>
              <p>
                By providing your mobile number, you authorize Propsmart Realty and Rohan Builders to contact you regarding Rohan Ekam via call, SMS, WhatsApp, or email, overriding DND registries for this transaction. You may withdraw consent or request permanent data deletion at any time by emailing <strong>propsmartrealty@gmail.com</strong>.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">Terms of Use</h3>
                <a 
                  href="/terms.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[11px] font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open standalone page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p>
                By accessing this portal, you acknowledge that <strong>rohanbuildersekam.com</strong> is an informational real estate showcase operated by <strong>Propsmart Realty</strong> (MahaRERA Channel Partner Reg: <strong>A031262401295</strong>), an authorized real estate channel partner for <strong>Rohan Ekam</strong>, developed by <strong>Rohan Builders (India) Pvt. Ltd.</strong>
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">1. Informational Showcase Only</h4>
              <p>
                The drawings, 3D renderings, elevation plans, dimensions, square footages, and price ranges depicted on this website are conceptual in nature and intended strictly for informational guidance. They do not constitute an offer, warranty, or contractual commitment.
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">2. Pricing Disclaimers</h4>
              <p>
                Starting prices (e.g. ₹1.45 Cr*) refer to base sale considerations. Government taxes (GST), stamp duty, registration fees, society maintenance, and other statutory levies are applicable extra as per statutory norms. Prices are subject to revision without prior notice.
              </p>

              <h4 className="font-bold text-stone-900 text-xs mt-2">3. Intellectual Property Rights</h4>
              <p>
                All project logos, brand marks, and architectural concepts ("Ground Floor in the Sky", "Rohan PLUS") are exclusive intellectual properties of Rohan Builders (India) Pvt. Ltd. and Ar. Sanjay Mohe.
              </p>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">MahaRERA &amp; Marketing Disclaimer</h3>
                <a 
                  href="/disclaimer.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[11px] font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open standalone page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p>
                <strong>MahaRERA Compliance:</strong> Rohan Ekam is registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA):
              </p>
              <div className="p-3 rounded-xl glass-panel border border-stone-300 font-mono text-[11px] space-y-1">
                <div>Phase 1 Registration No: <strong className="text-stone-900">P52100052298</strong></div>
                <div>Phase 2 Registration No: <strong className="text-stone-900">PR1261012502532</strong></div>
                <div>Channel Partner Registration: <strong className="text-stone-900">A031262401295</strong> (Propsmart Realty)</div>
                <div>MahaRERA Portal: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-emerald-800 underline font-semibold">maharera.mahaonline.gov.in</a></div>
              </div>

              <h4 className="font-bold text-stone-900 text-xs mt-2">Channel Partner Disclosure</h4>
              <p>
                This website is operated by <strong>Propsmart Realty</strong> (MahaRERA Channel Partner Reg: <strong>A031262401295</strong>) as an authorized real estate channel partner. It is not the corporate website of Rohan Builders (India) Pvt. Ltd., but a dedicated project marketing portal designed to assist home buyers with verified project information, floor plans, and VIP tour bookings.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
          <div className="text-[11px] text-stone-500">
            Advisory Desk: <strong>Propsmart Realty (RERA: A031262401295)</strong> • <strong className="text-stone-900">propsmartrealty@gmail.com</strong> • <strong className="text-stone-900">+91 774409295</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
