import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ExperienceShowcase } from "@/components/ExperienceShowcase";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_1200px_at_30%_-20%,rgba(60,153,200,0.28),transparent)]">
      <Header />
      <Hero />
      <FeatureGrid />
      <ExperienceShowcase />
      <div id="reviews">
        <Testimonials />
      </div>
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
