import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, Car, CheckCircle2, MessageSquare, PhoneCall, Download, Printer, Loader2 } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS, OFFICIAL_FLOOR_PLANS } from '../data/projectData';
import RohanEkamLogo from './RohanEkamLogo';
import { sendLeadToRealtor } from '../utils/leadService';

export default function VIPExperienceModal({ isOpen, onClose, initialConfig = '3bhk-type1' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    config: initialConfig,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    slot: '5:00 PM (Golden Hour River Sunset Tour)',
    chauffeurPickup: false,
    pickupLocation: 'Baner / Hinjawadi'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length < 10) return;

    setIsSubmitting(true);
    const ref = `EKAM-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    await sendLeadToRealtor({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      config: formData.config,
      date: formData.date,
      slot: formData.slot,
      chauffeurPickup: formData.chauffeurPickup,
      pickupLocation: formData.chauffeurPickup ? formData.pickupLocation : 'No Chauffeur Needed',
      bookingReference: ref,
      source: 'VIP Tour Experience Reservation Modal'
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xl flex items-center justify-center p-4">
      <div 
        className="relative max-w-xl w-full glass-panel-glow rounded-3xl border border-white/95 p-6 sm:p-8 shadow-2xl overflow-hidden glass-shimmer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drifting Glass Ambient Gradient Orbs inside modal */}
        <div className="glass-orb w-64 h-64 bg-[#E8D5C4] -top-16 -left-16 animate-blob" />
        <div className="glass-orb w-64 h-64 bg-[#C8DECE] -bottom-16 -right-16 animate-blob [animation-delay:4s]" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full glass-panel border border-stone-300 text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all duration-300 z-20 shadow-xs hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="relative z-10">
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 mb-3">
                <RohanEkamLogo variant="lockup" />
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-stone-800 text-[10px] font-mono uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>VIP Lounge</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Schedule Your VIP Site Tour
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Experience the 14th-floor sky mockups, cascading sloping lawns, and private Mula Riverfront boardwalk in Balewadi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-xs transition-all"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98220 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 shadow-xs transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Preferred Unit</label>
                  <select
                    value={formData.config}
                    onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                    className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800 shadow-xs font-medium"
                  >
                    {OFFICIAL_FLOOR_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.type} ({plan.priceStarting})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Tour Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800 shadow-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Preferred Experience Slot</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full glass-panel border border-white/90 rounded-2xl px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800 shadow-xs font-medium"
                >
                  <option>10:00 AM (Morning River Breeze Tour)</option>
                  <option>1:30 PM (Midday Solar & Light Test)</option>
                  <option>5:00 PM (Golden Hour River Sunset Tour - Recommended)</option>
                  <option>7:30 PM (Twilight Architecture & Skyline Tour)</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/90 space-y-2 shadow-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.chauffeurPickup}
                    onChange={(e) => setFormData({ ...formData, chauffeurPickup: e.target.checked })}
                    className="w-4 h-4 accent-stone-900 rounded cursor-pointer"
                  />
                  <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-amber-700" />
                    Request Chauffeur Pickup (Baner / Hinjawadi / Airport)
                  </span>
                </label>
                {formData.chauffeurPickup && (
                  <input
                    type="text"
                    placeholder="Enter pickup address"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full glass-panel border border-stone-300 rounded-xl px-3 py-2 text-stone-900 text-xs mt-2"
                  />
                )}
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-[11px] text-stone-600">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="w-4 h-4 accent-stone-900 rounded mt-0.5 shrink-0"
                  />
                  <span>
                    I authorize Propsmart Realty &amp; Rohan Builders to contact me via Call/WhatsApp regarding Rohan Ekam in accordance with the{' '}
                    <a href="/privacy-policy.html" target="_blank" rel="noreferrer" className="text-stone-900 font-semibold underline hover:text-amber-800">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms.html" target="_blank" rel="noreferrer" className="text-stone-900 font-semibold underline hover:text-amber-800">
                      Terms
                    </a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-stone-900/10 active:scale-98 glass-shimmer flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>CONFIRMING VIP RESERVATION...</span>
                  </>
                ) : (
                  <span>Confirm VIP Reservation</span>
                )}
              </button>

              <div className="pt-2 text-center">
                <a
                  href="https://wa.me/91774409295?text=Hello%20Rohan%20Builders,%20I%20would%20like%20to%20schedule%20a%20VIP%20visit%20for%20Rohan%20Ekam%20Balewadi."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-medium hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry (+91 774409295): Chat directly with Relationship Manager</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 relative z-10">
            <div className="w-16 h-16 rounded-full glass-panel border border-emerald-400 flex items-center justify-center mx-auto text-emerald-700 shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Welcome to Rohan Ekam, {formData.name}
              </h3>
              <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto">
                Your private tour has been locked for <strong>{formData.date}</strong> at <strong>{formData.slot}</strong>.
              </p>
            </div>

            <div className="glass-panel border border-white/90 rounded-2xl p-4 text-xs max-w-sm mx-auto text-left space-y-1.5 font-mono shadow-md">
              <div className="flex justify-between">
                <span className="text-stone-500">Booking Pass:</span>
                <strong className="text-stone-900">{bookingRef}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Selected Unit:</span>
                <span className="text-stone-900 font-semibold">{formData.config.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">WhatsApp Desk:</span>
                <a href="https://wa.me/91774409295" target="_blank" rel="noreferrer" className="text-emerald-800 font-bold hover:underline">
                  +91 774409295
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              Close & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
