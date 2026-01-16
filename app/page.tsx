import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { Creed } from "@/components/Creed";
import Problem from "@/components/Problem";
import Systems from "@/components/Systems";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen antialiased selection:bg-lucid selection:text-obsidian">
      <Navigation />
    
      <TracingBeam>
        <Hero /> {/* Hero should be full-width */}
        <Creed /> {/* Creed should be full-width */}
        <Problem />
        <Systems /> {/* Systems should be full-width */}
        <Pricing />
        <HowItWorks />
        <FinalCTA />
        <Footer />
      </TracingBeam>
    </main>
  );
}