import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { sendLeadToRealtor } from '../utils/leadService';
import LegalModal from './LegalModal';

export default function OfficialInterestedForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    agreed: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'privacy' });

  const openLegal = (tab, e) => {
    if (e) e.preventDefault();
    setLegalModal({ isOpen: true, tab });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.mobile.length < 10) return;

    setIsSubmitting(true);
    await sendLeadToRealtor({
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      source: 'Interested Form (Balewadi Page)'
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="interested" className="py-16 bg-[#F5F2EB] border-t border-b border-stone-300/80 relative overflow-hidden">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-80 h-80 bg-[#E8D5C4] -top-10 -left-10 animate-blob" />
      <div className="glass-orb w-72 h-72 bg-[#C8DECE] -bottom-10 -right-10 animate-blob [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-white/90 shadow-xl shadow-stone-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Title Column (Width ~250px pattern) */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
                Interested?
              </h2>
              <div className="w-12 h-0.5 bg-amber-800 mt-2 mb-2"></div>
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block">Direct Project Inquiry</span>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-9">
              <p className="text-sm text-stone-600 mb-6">
                Share your mobile number, our sales representative will contact you with floor plans and price sheets.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-xs transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        maxLength="10"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <label className="flex items-start sm:items-center gap-2 cursor-pointer text-xs text-stone-600">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="w-4 h-4 accent-stone-900 rounded mt-0.5 sm:mt-0"
                      />
                      <span>
                        I agree to the{' '}
                        <button 
                          type="button" 
                          onClick={(e) => openLegal('terms', e)} 
                          className="text-stone-900 font-semibold underline hover:text-amber-800"
                        >
                          Terms &amp; Conditions
                        </button>{' '}
                        and{' '}
                        <button 
                          type="button" 
                          onClick={(e) => openLegal('privacy', e)} 
                          className="text-stone-900 font-semibold underline hover:text-amber-800"
                        >
                          Privacy Policy
                        </button>
                        . Authorized marketing by Propsmart Realty.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 active:scale-95 glass-shimmer cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>SENDING LEAD...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-5 rounded-2xl glass-panel border border-emerald-500/40 flex items-center gap-3 text-emerald-800 shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Thank You for Inquiring, {formData.name}!</div>
                    <div className="text-xs text-stone-600">Your inquiry has been successfully dispatched to our advisory desk (Propsmart Realty). Our Senior Relationship Manager will connect with you at <strong className="text-stone-900">{formData.mobile}</strong> shortly with floor plans and pricing.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        initialTab={legalModal.tab}
      />
    </section>
  );
}
