import React from "react";
import HeroSection from "./hero-section";
import FeaturesSection from "./features-section";
import DiscoverSection from "./discover-section";
import CallToActionSection from "./call-to-action-section";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
    </div>
  );
}
