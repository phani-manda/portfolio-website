import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data';
import GlassPanel from './GlassPanel';

const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (!circleRef.current || frameId) return;

      frameId = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.35;
        circleRef.current.style.transform = `rotate(${rate}deg)`;
        frameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToAbout = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = portfolioData.personal.resume;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const socialLinks = useMemo(() => [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" }
  ], []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Circle */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.3"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10 pt-24 w-full">
        <GlassPanel className="px-6 py-10 sm:px-12 sm:py-14 lg:py-16 animate-fade-in space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-tight">
            {portfolioData.personal.name}
          </h1>

          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.subtitle}
          </p>

          <p className="text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.personal.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-200"
              size="lg"
              onClick={handleDownloadResume}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-muted-foreground hover:-translate-y-1 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </GlassPanel>
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="mt-12 inline-flex animate-bounce"
        >
          <ChevronDown size={32} className="text-foreground opacity-60" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default React.memo(Hero);