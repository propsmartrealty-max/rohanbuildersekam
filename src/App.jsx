import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfficialTilesBar from './components/OfficialTilesBar';
import ArchitecturalVision from './components/ArchitecturalVision';
import SkyGroundExplorer from './components/SkyGroundExplorer';
import PlusPhilosophySimulator from './components/PlusPhilosophySimulator';
import ResidencesFloorPlans from './components/ResidencesFloorPlans';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import LocationCompass from './components/LocationCompass';
import OfficialGallerySection from './components/OfficialGallerySection';
import OfficialInterestedForm from './components/OfficialInterestedForm';
import OfficialBrochureStrip from './components/OfficialBrochureStrip';
import OfficialDocuments from './components/OfficialDocuments';
import OfficialFAQ from './components/OfficialFAQ';
import FinancialSuite from './components/FinancialSuite';
import Footer from './components/Footer';
import OfficialWhatsAppBar from './components/OfficialWhatsAppBar';
import VIPExperienceModal from './components/VIPExperienceModal';
import { OFFICIAL_PROJECT_DETAILS } from './data/projectData';

export default function App() {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState('3bhk-type1');
  const [isMasterPlanModalOpen, setIsMasterPlanModalOpen] = useState(false);

  const openVipModalWithConfig = (config = '3bhk-type1') => {
    setModalConfig(config);
    setIsVipModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-stone-900 flex flex-col relative selection:bg-stone-900 selection:text-white pb-14">
      {/* Top Floating Navbar */}
      <Navbar onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

      {/* Main Container */}
      <main className="flex-1 bg-[#F5F2EB]">
        {/* 1. Official 4K Hero Carousel */}
        <Hero onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

        {/* 2. Signature 7 Hover Tiles Bar (Directly beneath Hero) */}
        <OfficialTilesBar 
          onOpenMasterPlan={() => scrollToSection('vision')}
          onOpenBuyingGuide={() => scrollToSection('faq')}
        />

        {/* 3. Official Architect's Note (Ar. Sanjay Mohe) & Master Plan */}
        <div id="architectNote">
          <ArchitecturalVision />
        </div>

        {/* 4. The 3-Realm Living & 14th Floor Ground in the Sky */}
        <div id="skyGround">
          <SkyGroundExplorer onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
        </div>

        {/* 5. Rohan PLUS Science & Physics Lab */}
        <div id="plusPhilosophy">
          <PlusPhilosophySimulator />
        </div>

        {/* 6. Official Floor Plans (Typical 2, 3 & 4 BHK with 6 Tabs) */}
        <div id="floorPlan">
          <ResidencesFloorPlans onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
        </div>

        {/* 7. Official 36 Amenities with Real Scraped Icons */}
        <div id="amenities">
          <AmenitiesShowcase onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
        </div>

        {/* 8. Official Location (Schools, Colleges, Hospitals, Malls) */}
        <div id="location">
          <LocationCompass />
        </div>

        {/* 9. Official Gallery (Sub-Tabs: IMAGES & VIDEOS/360 Walkthroughs) */}
        <div id="gallery">
          <OfficialGallerySection />
        </div>

        {/* 10. Official "Interested?" Lead Capture Form */}
        <OfficialInterestedForm />

        {/* 11. Official Detailed Brochure Download Strip */}
        <OfficialBrochureStrip />

        {/* 12. Legal Documents (EC Copy, Compliance & MahaRERA Phase QR Codes) */}
        <div id="documents">
          <OfficialDocuments />
        </div>

        {/* 13. Official FAQ Accordion (8 Categories, 55 Questions) */}
        <div id="faq">
          <OfficialFAQ />
        </div>

        {/* 14. Financial & Mortgage Planner Suite */}
        <div id="financialSuite">
          <FinancialSuite onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
        </div>
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Official Sticky WhatsApp Bar (Bottom of Screen) */}
      <OfficialWhatsAppBar />

      {/* VIP Tour Booking Modal */}
      <VIPExperienceModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        initialConfig={modalConfig}
      />
    </div>
  );
}
