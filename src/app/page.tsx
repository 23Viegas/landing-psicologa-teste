import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollReveal } from "./components/ScrollReveal";
import { Specialties } from "./components/Specialties";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-text">
      <Navbar />
      <ScrollReveal delay={0}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Specialties />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
