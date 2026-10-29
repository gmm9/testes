import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
