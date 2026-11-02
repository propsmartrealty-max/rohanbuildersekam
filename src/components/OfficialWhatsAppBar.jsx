import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { sendLeadToRealtor } from '../utils/leadService';

export default function OfficialWhatsAppBar() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      // Fire lead dispatch to propsmartrealty@gmail.com
      sendLeadToRealtor({
        name: 'Direct WhatsApp Inquirer',
        mobile: mobileNumber,
        source: 'Bottom Sticky WhatsApp Bar'
      });

      window.open(
        `https://wa.me/91774409295?text=Hello%20Rohan%20Builders,%20my%20mobile%20number%20is%20${mobileNumber}.%20Please%20send%20me%20details%20for%20Rohan%20Ekam%20Balewadi.`,
        '_blank'
      );
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed bottom-3 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-4 z-40 max-w-xl glass-panel-glow border border-white/95 rounded-3xl sm:rounded-full px-5 py-3 shadow-2xl backdrop-blur-2xl glass-shimmer">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left message & official WhatsApp icon */}
        <a 
          href="https://wa.me/91774409295?text=Hello%20Rohan%20Builders,%20I%20would%20like%20to%20enquire%20about%20Rohan%20Ekam%20Balewadi."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 group/link hover:opacity-95 transition-opacity"
        >
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 animate-ping" />
            <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center p-1.5 shadow-md shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.576 1.77.884 2.801.884 3.179 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.778-5.77zm0 10.373c-.927 0-1.637-.282-2.457-.768l-.176-.105-1.579.414.422-1.539-.115-.184c-.535-.851-.817-1.472-.816-2.425.001-2.54 2.068-4.607 4.61-4.607 2.541 0 4.608 2.068 4.608 4.608 0 2.54-2.067 4.606-4.612 4.606zm3.11-3.468c-.17-.085-1.008-.497-1.164-.554-.156-.057-.27-.085-.383.085s-.44 1.164-.539 1.277c-.099.113-.198.128-.368.043-.17-.085-.718-.265-1.368-.844-.506-.451-.848-1.007-.947-1.177-.099-.17-.01-.262.075-.347.077-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.213-.014-.297-.042-.085-.383-.922-.525-1.263-.138-.33-.278-.285-.383-.29-.099-.005-.213-.006-.327-.006s-.297.043-.453.213c-.156.17-.595.582-.595 1.419 0 .837.609 1.646.694 1.759.085.113 1.2 1.831 2.906 2.569.406.175.723.279.97.358.408.13.779.112 1.072.068.327-.049 1.008-.412 1.15-.809.142-.397.142-.738.099-.809-.043-.071-.157-.113-.327-.198z"/>
              </svg>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-stone-900 leading-tight block">
              WhatsApp Enquiry: <strong className="font-mono text-emerald-800">+91 774409295</strong>
            </span>
            <span className="text-[10px] text-stone-500 block">Click to chat or enter your number</span>
          </div>
        </a>

        {/* Right input form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="tel"
              required
              maxLength="10"
              placeholder="Enter Mobile No."
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
              className="glass-panel border border-stone-300 rounded-full px-4 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] w-full sm:w-44 shadow-xs"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-stone-900 hover:bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md transition-all duration-300 active:scale-95 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Connecting you on WhatsApp...</span>
          </div>
        )}
      </div>
    </div>
  );
}
