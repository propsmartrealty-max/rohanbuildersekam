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
    <section id="interested" className="py-16 bg-[#FAF8F5] border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Title Column (Width ~250px pattern) */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 uppercase tracking-tight">
              Interested?
            </h2>
            <div className="w-12 h-0.5 bg-amber-800 mt-2"></div>
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
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 shadow-xs"
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
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 shadow-xs"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 shadow-xs"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
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
                    className="px-8 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-5 rounded-2xl bg-white border border-emerald-300 flex items-center gap-3 text-emerald-800 shadow-xs">
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
    </section>
  );
}
