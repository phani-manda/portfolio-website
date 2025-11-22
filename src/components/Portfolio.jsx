import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import UpcomingProjects from './UpcomingProjects';
import Contact from './Contact';
import Footer from './Footer';
import Silk from './Silk';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Silk
            className="w-full h-full"
            speed={2}
            scale={1.8}
            color="#8B5CF6"
            noiseIntensity={1.0}
            rotation={0.45}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background pointer-events-none" />
        </div>
        <main className="relative z-10 flex flex-col gap-16 pt-28">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <UpcomingProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;