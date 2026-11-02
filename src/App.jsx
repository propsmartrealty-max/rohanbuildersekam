import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitecturalVision from './components/ArchitecturalVision';
import SkyGroundExplorer from './components/SkyGroundExplorer';
import PlusPhilosophySimulator from './components/PlusPhilosophySimulator';
import ResidencesFloorPlans from './components/ResidencesFloorPlans';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import LocationCompass from './components/LocationCompass';
import FinancialSuite from './components/FinancialSuite';
import SpecificationsGallery from './components/SpecificationsGallery';
import Footer from './components/Footer';
import VIPExperienceModal from './components/VIPExperienceModal';
import { MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from './data/projectData';

export default function App() {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState('3bhk');

  const openVipModalWithConfig = (config = '3bhk') => {
    setModalConfig(config);
    setIsVipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 flex flex-col relative selection:bg-gold-500 selection:text-dark-950">
      {/* Top Navbar */}
      <Navbar onOpenVipModal={() => openVipModalWithConfig('3bhk')} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenVipModal={() => openVipModalWithConfig('3bhk')} 
        />

        {/* Architectural Visionary Showcase (Ar. Sanjay Mohe) */}
        <ArchitecturalVision />

        {/* The 3-Realm Interactive Vertical Explorer (Ground Floor in the Sky) */}
        <SkyGroundExplorer 
          onOpenVipModal={() => openVipModalWithConfig('3bhk')} 
        />

        {/* Rohan PLUS Physics & Architectural Simulator */}
        <PlusPhilosophySimulator />

        {/* Residences & Interactive Floor Plans Studio */}
        <ResidencesFloorPlans 
          onOpenVipModal={() => openVipModalWithConfig('3bhk')} 
        />

        {/* Curated 45+ Amenities Catalog */}
        <AmenitiesShowcase 
          onOpenVipModal={() => openVipModalWithConfig('3bhk')} 
        />

        {/* Balewadi 360° Neighborhood Radar */}
        <LocationCompass />

        {/* Financial & Mortgage Planner Suite */}
        <FinancialSuite 
          onOpenVipModal={() => openVipModalWithConfig('3bhk')} 
        />

        {/* Materiality Specifications & Visual Lightbox Gallery */}
        <SpecificationsGallery />
      </main>

      {/* Footer & MahaRERA Compliance */}
      <Footer />

      {/* Floating Concierge Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Direct WhatsApp Concierge Button */}
        <a
          href="https://wa.me/912071178899?text=Hello%20Rohan%20Builders,%20I%20am%20interested%20in%20Rohan%20Ekam%20Balewadi."
          target="_blank"
          rel="noreferrer"
          title="Chat with Rohan Ekam Concierge on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-110 transition-all duration-300 group relative"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-full mr-3 hidden group-hover:block whitespace-nowrap bg-dark-900 text-white text-xs px-2.5 py-1 rounded-lg border border-white/10 shadow-xl">
            WhatsApp Concierge
          </span>
        </a>

        {/* VIP Site Visit Floating Pill */}
        <button
          onClick={() => openVipModalWithConfig('3bhk')}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-2xl shadow-gold-500/30 flex items-center gap-2 group hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-dark-950" />
          <span className="hidden sm:inline">Book VIP Tour</span>
        </button>
      </div>

      {/* VIP Tour Booking & Brochure Modal */}
      <VIPExperienceModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        initialConfig={modalConfig}
      />
    </div>
  );
}
