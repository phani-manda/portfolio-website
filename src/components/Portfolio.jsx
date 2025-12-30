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
    <div className="relative min-h-screen bg-[#f3f8ff]">
      <SEO />
      {/* DotGrid background with cursor animation */}
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#a78bfa"
          activeColor="#7e30e1"
          proximity={200}
          shockRadius={120}
          shockStrength={15}
          resistance={200}
          returnDuration={1.5}
        />
      </div>
      <Header />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;