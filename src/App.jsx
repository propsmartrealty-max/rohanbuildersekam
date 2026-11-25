import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfficialTilesBar from './components/OfficialTilesBar';
import ArchitecturalVision from './components/ArchitecturalVision';
import OfficialWhatsAppBar from './components/OfficialWhatsAppBar';

const SkyGroundExplorer = lazy(() => import('./components/SkyGroundExplorer'));
const PlusPhilosophySimulator = lazy(() => import('./components/PlusPhilosophySimulator'));
const ResidencesFloorPlans = lazy(() => import('./components/ResidencesFloorPlans'));
const AmenitiesShowcase = lazy(() => import('./components/AmenitiesShowcase'));
const LocationCompass = lazy(() => import('./components/LocationCompass'));
const OfficialGallerySection = lazy(() => import('./components/OfficialGallerySection'));
const OfficialInterestedForm = lazy(() => import('./components/OfficialInterestedForm'));
const OfficialBrochureStrip = lazy(() => import('./components/OfficialBrochureStrip'));
const OfficialDocuments = lazy(() => import('./components/OfficialDocuments'));
const OfficialFAQ = lazy(() => import('./components/OfficialFAQ'));
const FinancialSuite = lazy(() => import('./components/FinancialSuite'));
const Footer = lazy(() => import('./components/Footer'));
const VIPExperienceModal = lazy(() => import('./components/VIPExperienceModal'));

const SectionPlaceholder = ({ minHeight = 'min-h-[320px]' }) => (
  <div className={`${minHeight} w-full bg-[#F5F2EB]`} aria-hidden="true" />
);

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
    <div className="min-h-screen bg-[#F5F2EB] text-stone-900 flex flex-col relative selection:bg-stone-900 selection:text-white pb-14 overflow-x-hidden">
      {/* Accessible Skip to Content for Assistive Tech */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-stone-900 focus:text-white focus:rounded-xl focus:shadow-xl focus:font-semibold focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Top Floating Navbar */}
      <Navbar onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />

      {/* Main Semantic Landmark Container */}
      <main id="main-content" role="main" tabIndex="-1" className="flex-1 bg-transparent relative z-10 focus:outline-none">
        {/* 1. Official Hero Showcase */}
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
          <Suspense fallback={<SectionPlaceholder minHeight="min-h-[560px]" />}>
            <SkyGroundExplorer onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
          </Suspense>
        </div>

        {/* 5. Rohan PLUS Science & Physics Lab */}
        <div id="plusPhilosophy">
          <Suspense fallback={<SectionPlaceholder minHeight="min-h-[480px]" />}>
            <PlusPhilosophySimulator />
          </Suspense>
        </div>

        {/* 6. Official Floor Plans (Typical 2, 3 & 4 BHK with 6 Tabs) */}
        <div id="floorPlan">
          <Suspense fallback={<SectionPlaceholder minHeight="min-h-[560px]" />}>
            <ResidencesFloorPlans onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
          </Suspense>
        </div>

        {/* 7. Official 36 Amenities with Real Scraped Icons */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[520px]" />}>
          <AmenitiesShowcase onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
        </Suspense>

        {/* 8. Official Location (Schools, Colleges, Hospitals, Malls) */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[480px]" />}>
          <LocationCompass />
        </Suspense>

        {/* 9. Official Gallery (Sub-Tabs: IMAGES & VIDEOS/360 Walkthroughs) */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[480px]" />}>
          <OfficialGallerySection />
        </Suspense>

        {/* 10. Official "Interested?" Lead Capture Form */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[420px]" />}>
          <OfficialInterestedForm />
        </Suspense>

        {/* 11. Official Detailed Brochure Download Strip */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[220px]" />}>
          <OfficialBrochureStrip />
        </Suspense>

        {/* 12. Legal Documents (EC Copy, Compliance & MahaRERA Phase QR Codes) */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[380px]" />}>
          <OfficialDocuments />
        </Suspense>

        {/* 13. Official FAQ Accordion (8 Categories, 55 Questions) */}
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-[520px]" />}>
          <OfficialFAQ />
        </Suspense>

        {/* 14. Financial & Mortgage Planner Suite */}
        <div id="financialSuite">
          <Suspense fallback={<SectionPlaceholder minHeight="min-h-[480px]" />}>
            <FinancialSuite onOpenVipModal={() => openVipModalWithConfig('3bhk-type1')} />
          </Suspense>
        </div>
      </main>

      {/* Official Footer */}
      <Suspense fallback={<SectionPlaceholder minHeight="min-h-[420px]" />}>
        <Footer />
      </Suspense>

      {/* Official Sticky WhatsApp Bar (Bottom of Screen) */}
      <OfficialWhatsAppBar />

      {/* VIP Tour Booking Modal */}
      {isVipModalOpen && (
        <Suspense fallback={null}>
          <VIPExperienceModal
            isOpen={isVipModalOpen}
            onClose={() => setIsVipModalOpen(false)}
            initialConfig={modalConfig}
          />
        </Suspense>
      )}
    </div>
  );
}
