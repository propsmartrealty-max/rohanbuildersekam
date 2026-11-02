import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitecturalVision from './components/ArchitecturalVision';
import SkyGroundExplorer from './components/SkyGroundExplorer';
import PlusPhilosophySimulator from './components/PlusPhilosophySimulator';
import ResidencesFloorPlans from './components/ResidencesFloorPlans';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import LocationCompass from './components/LocationCompass';
import OfficialDocuments from './components/OfficialDocuments';
import OfficialFAQ from './components/OfficialFAQ';
import FinancialSuite from './components/FinancialSuite';
import SpecificationsGallery from './components/SpecificationsGallery';
import Footer from './components/Footer';
import VIPExperienceModal from './components/VIPExperienceModal';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState('3bhk-type1');

  const openVipModalWithConfig = (config = '3bhk-type1') => {
    setModalConfig(config);
    setIsVipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-stone-900 flex flex-col relative selection:bg-stone-900 selection:text-white">
      {/* Top Floating Navbar */}
      <Navbar onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

      {/* Main Showcase Sections on Warm Beige Canvas */}
      <main className="flex-1 bg-[#F5F2EB]">
        {/* 4K Hero with Background Carousel */}
        <Hero onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* Architect Ar. Sanjay Mohe Vision & Master Plan */}
        <ArchitecturalVision />

        {/* The 3-Realm Vertical Explorer (Ground Floor in the Sky) */}
        <SkyGroundExplorer onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* Rohan PLUS Physics Lab (Ventilation, Light, Privacy, Space) */}
        <PlusPhilosophySimulator />

        {/* Official Scraped Floor Plans & Room Specs */}
        <ResidencesFloorPlans onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* 36 Official Amenity Icons from rohanbuilders.com */}
        <AmenitiesShowcase onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* Official Balewadi Location Network */}
        <LocationCompass />

        {/* Official Legal Documents, EC Copy & MahaRERA QR Codes */}
        <OfficialDocuments />

        {/* Official FAQ Accordion from Rohan Builders */}
        <OfficialFAQ />

        {/* Cost Sheet & Mortgage Financial Suite */}
        <FinancialSuite onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* 4K Architectural Gallery */}
        <SpecificationsGallery />
      </main>

      {/* Official Footer with PMC Jurisdiction & Phase Details */}
      <Footer />

      {/* Floating Concierge Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/912071178899?text=Hello%20Rohan%20Builders,%20I%20am%20interested%20in%20Rohan%20Ekam%20Balewadi."
          target="_blank"
          rel="noreferrer"
          title="Chat with Rohan Ekam Concierge on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-stone-900/10 hover:scale-105 transition-all duration-300 group relative"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-full mr-3 hidden group-hover:block whitespace-nowrap bg-stone-900 text-white text-xs px-2.5 py-1 rounded-lg border border-stone-700 shadow-xl">
            WhatsApp Concierge
          </span>
        </a>

        {/* VIP Tour Pill */}
        <button
          onClick={() => openVipModalWithConfig('3bhk-type1')}
          className="px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-stone-900/15 flex items-center gap-2 group hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Book VIP Tour</span>
        </button>
      </div>

      {/* VIP Tour Booking Modal */}
      <VIPExperienceModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        initialConfig={modalConfig}
      />
    </div>
  );
}
