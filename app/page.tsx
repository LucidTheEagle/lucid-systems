import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { Creed } from "@/components/Creed";
import Problem from "@/components/Problem";
import Systems from "@/components/Systems";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/proof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
// import PerformanceMonitor from "@/components/PerformanceMonitor";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen antialiased selection:bg-lucid selection:text-obsidian">
      {/* Performance Monitor - Development Only */}
      {/* <PerformanceMonitor /> */}
      
      {/* NAVIGATION - Above the fold */}
      <Navigation />
      
      {/* HERO - Above the fold, highest priority */}
      <Hero />
      
      {/* CREED - First below-the-fold section */}
      <Creed />
      
      {/* PROBLEM - Lazy loaded */}
      <LazySection rootMargin="200px">
        <Problem />
      </LazySection>
      
      {/* SYSTEMS - Lazy loaded */}
      <LazySection rootMargin="200px">
        <Systems />
      </LazySection>
      
      {/* HOW IT WORKS - Lazy loaded */}
      <LazySection rootMargin="200px">
        <HowItWorks />
      </LazySection>
      
      {/* PRICING - Lazy loaded */}
      <LazySection rootMargin="200px">
        <Pricing />
      </LazySection>
      
      {/* PROOF - Lazy loaded */}
      <LazySection rootMargin="200px">
        <Proof />
      </LazySection>
      
      {/* FINAL CTA - Lazy loaded */}
      <LazySection rootMargin="100px">
        <FinalCTA />
      </LazySection>
      
      {/* FOOTER */}
      <Footer />
    </main>
  );
}