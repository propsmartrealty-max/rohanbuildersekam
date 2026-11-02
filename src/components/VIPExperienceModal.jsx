import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, Car, CheckCircle2, MessageSquare, PhoneCall, Download, Printer } from 'lucide-react';
import { OFFICIAL_PROJECT_DETAILS, OFFICIAL_FLOOR_PLANS } from '../data/projectData';

export default function VIPExperienceModal({ isOpen, onClose, initialConfig = '3bhk-type1' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    config: initialConfig,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    slot: '5:00 PM (Golden Hour River Sunset Tour)',
    chauffeurPickup: false,
    pickupLocation: 'Baner / Hinjawadi'
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `EKAM-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div 
        className="relative max-w-xl w-full bg-dark-900 rounded-3xl border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rohan Ekam Experience Center</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Schedule Your VIP Site Tour
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Experience the 14th-floor sky mockups, cascading sloping lawns, and private Mula Riverfront boardwalk in Balewadi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98220 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@executive.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Preferred Unit</label>
                  <select
                    value={formData.config}
                    onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                  >
                    {OFFICIAL_FLOOR_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.type} ({plan.priceStarting})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Tour Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">Preferred Experience Slot</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option>10:00 AM (Morning River Breeze Tour)</option>
                  <option>1:30 PM (Midday Solar & Light Test)</option>
                  <option>5:00 PM (Golden Hour River Sunset Tour - Recommended)</option>
                  <option>7:30 PM (Twilight Architecture & Skyline Tour)</option>
                </select>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.chauffeurPickup}
                    onChange={(e) => setFormData({ ...formData, chauffeurPickup: e.target.checked })}
                    className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
                  />
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-cyan-400" />
                    Request Chauffeur Pickup (Baner / Hinjawadi / Airport)
                  </span>
                </label>
                {formData.chauffeurPickup && (
                  <input
                    type="text"
                    placeholder="Enter pickup address"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-dark-950 border border-cyan-500/30 rounded-xl px-3 py-2 text-white text-xs mt-2"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/20 active:scale-98"
              >
                Confirm VIP Reservation
              </button>

              <div className="pt-2 text-center">
                <a
                  href="https://wa.me/912071178899?text=Hello%20Rohan%20Builders,%20I%20would%20like%20to%20schedule%20a%20VIP%20visit%20for%20Rohan%20Ekam%20Balewadi."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Prefer WhatsApp? Chat directly with Rohan Relationship Manager</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Welcome to Rohan Ekam, {formData.name}
              </h3>
              <p className="text-xs text-gray-300 mt-2 max-w-md mx-auto">
                Your private tour has been locked for <strong>{formData.date}</strong> at <strong>{formData.slot}</strong>.
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/30 rounded-2xl p-4 text-xs max-w-sm mx-auto text-left space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-gray-400">Booking Pass:</span>
                <strong className="text-cyan-400">{bookingRef}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Selected Unit:</span>
                <span className="text-white">{formData.config.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Desk Support:</span>
                <span className="text-cyan-300">+91 20 7117 8899</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-cyan-400 text-dark-950 font-bold text-xs uppercase tracking-wider"
            >
              Close & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
