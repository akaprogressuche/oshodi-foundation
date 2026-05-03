import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { MissionSection } from "./components/sections/MissionSection";
import { VisionSection } from "./components/sections/VisionSection";
import { InitiativesSection } from "./components/sections/InitiativesSection";
import { ImpactSection } from "./components/sections/ImpactSection";
import { CTASection } from "./components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <InitiativesSection />
      <ImpactSection />
      <CTASection />
    </>
  );
}
