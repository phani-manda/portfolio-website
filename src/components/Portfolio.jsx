import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import DotGrid from './DotGrid';
import SEO from './SEO';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SEO />
      <Header />
      <div className="relative isolate">
        {/* Full screen fixed DotGrid background */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#333"
            activeColor="#5227FF"
            proximity={200}
            shockRadius={100}
            shockStrength={15}
            resistance={200}
            returnDuration={2}
          />
          <div className="absolute inset-0 bg-background/30 pointer-events-none" />
        </div>

        <main className="relative z-10 flex flex-col gap-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;