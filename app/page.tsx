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

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen antialiased selection:bg-lucid selection:text-obsidian">
      {/* NAVIGATION */}
      <Navigation />
      
      {/* SECTIONS */}
      <Hero />
      <Creed />
      <Problem />
      <Systems />
      <HowItWorks />
      <Pricing />
      <Proof />
      <FinalCTA />
      <Footer />
    </main>
  );
}