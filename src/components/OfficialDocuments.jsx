import React from 'react';
import { OFFICIAL_PROJECT_DETAILS } from '../data/projectData';
import { ShieldCheck, Download, FileText, ExternalLink, QrCode } from 'lucide-react';

export default function OfficialDocuments() {
  return (
    <section id="documents" className="py-20 relative overflow-hidden bg-[#EFECE6] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Transparency & Compliance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Official <span className="italic font-serif font-medium text-amber-800">Legal Documents</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Download certified project brochures, environmental clearances, and verify MahaRERA registration QR codes directly from Rohan Builders.
          </p>
        </div>

        {/* 2 Columns: Downloadable PDF Documents & MahaRERA Phase QR Codes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Downloads */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-stone-300 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-800" />
                <span>Certified Official Brochures & Approvals</span>
              </h3>

              <div className="space-y-3">
                {OFFICIAL_PROJECT_DETAILS.brochures.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition-all flex items-center justify-between group shadow-xs"
                  >
                    <div>
                      <div className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {doc.title}
                      </div>
                      <div className="text-xs text-stone-500 font-mono mt-0.5">
                        {doc.type} • {doc.size}
                      </div>
                    </div>

                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                      <span>Download</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-stone-600 bg-white/70 p-3 rounded-xl border border-stone-200">
                Note: Environmental Clearance (EC) Copy granted under State Level Environment Impact Assessment Authority (SEIAA), Maharashtra.
              </div>
            </div>
          </div>

          {/* Right Column: MahaRERA QR Codes */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-stone-300 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <QrCode className="w-5 h-5 text-amber-800" />
                <span>MahaRERA Phase Registrations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {OFFICIAL_PROJECT_DETAILS.reraPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center text-center justify-between shadow-xs"
                  >
                    <div className="w-24 h-24 bg-white rounded-xl p-1 mb-3 border border-stone-200 shadow-xs flex items-center justify-center">
                      <img
                        src={phase.qrCode}
                        alt={phase.phase}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="text-xs font-bold text-stone-900 mb-1">
                      {phase.phase}
                    </div>

                    <div className="text-[11px] font-mono text-stone-900 bg-[#EFECE6] px-2 py-0.5 rounded border border-stone-300 font-semibold">
                      {phase.number}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span>Verify all documents online:</span>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-900 font-bold underline font-mono flex items-center gap-1"
                >
                  <span>maharera.mahaonline.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
