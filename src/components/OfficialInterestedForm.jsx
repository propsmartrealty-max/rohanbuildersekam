import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function OfficialInterestedForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    agreed: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block">Official Direct Inquiry</span>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-9">
              <p className="text-sm text-stone-600 mb-6">
                Share your phone number or email, our sales representative will contact you with floor plans and price sheets.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-600">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="w-4 h-4 accent-stone-900 rounded"
                      />
                      <span>I agree to the Terms & Conditions and Privacy Policy of Rohan Builders.</span>
                    </label>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 active:scale-95 glass-shimmer"
                    >
                      <span>SUBMIT</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-5 rounded-2xl glass-panel border border-emerald-500/40 flex items-center gap-3 text-emerald-800 shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Thank You for Inquiring!</div>
                    <div className="text-xs text-stone-600">A Senior Relationship Manager from Rohan Builders will reach out to {formData.mobile} shortly.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
