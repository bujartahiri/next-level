"use client";

import React, { useState } from "react";
import OpeningLoader from "@/components/OpeningLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import { GalleryProject } from "@/types/gallery";

export default function HomePage() {
  const [loaderKey, setLoaderKey] = useState(0);
  const [forcePlayLoader, setForcePlayLoader] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Keramikversiegelung (9H Langzeitschutz)");
  const [selectedCar, setSelectedCar] = useState("");

  const handleOpenBooking = (service?: string, car?: string) => {
    if (service) setSelectedService(service);
    if (car) setSelectedCar(car);
    setIsBookingOpen(true);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem("nextlevel_intro_seen");
    setForcePlayLoader(true);
    setLoaderKey((prev) => prev + 1);
  };

  const handleSelectProjectBooking = (project: GalleryProject) => {
    handleOpenBooking(project.serviceCategory, project.carModel);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#EDEDED] overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Strict Storyboard Opening Loader */}
      <OpeningLoader
        key={loaderKey}
        forcePlay={forcePlayLoader}
        onComplete={() => setForcePlayLoader(false)}
      />

      {/* 2. Fixed Luxury Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onReplayIntro={handleReplayIntro}
      />

      {/* 3. Hero Section */}
      <main>
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onReplayIntro={handleReplayIntro}
        />

        {/* 4. Core Services (5 Services as specified) */}
        <ServicesSection
          onSelectService={(srv) => handleOpenBooking(srv)}
        />

        {/* 5. Interactive Before/After Gallery with Sliders */}
        <GallerySection
          onSelectBooking={handleSelectProjectBooking}
        />

        {/* 6. Process & Philosophy */}
        <ProcessSection />

        {/* 7. Pricing & Packages */}
        <PricingSection
          onSelectPackage={(pkg) => handleOpenBooking(pkg)}
        />

        {/* 8. Contact, Location & Hours */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* 9. Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* 10. Sticky Direct WhatsApp Action */}
      <StickyWhatsApp onOpenBookingModal={() => handleOpenBooking()} />

      {/* 11. Interactive Booking & WhatsApp Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
        preselectedCar={selectedCar}
      />
    </div>
  );
}
