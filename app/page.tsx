import { CircuitBackground } from "@/components/circuit-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TracksSection } from "@/components/tracks-section"
import { TimelineSection } from "@/components/timeline-section"
import { PrizesSection } from "@/components/prizes-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"
import Beams from "@/components/ui/beams"
import BlobCursor from "@/components/ui/BlobCursor"
import TargetCursor from "@/components/ui/TargetCursor"
// import { RegistrationSection } from "@/components/registration-section"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <BlobCursor fillColor="#323333ff" /> */}
      {/* <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      /> */}

      {/* Circuit board background */}
      <CircuitBackground />
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
  <Beams
    beamWidth={3.7}
    lightColor=""
    speed={5.7}
    scale={0.19}
    rotation={45}
  />
</div>

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
