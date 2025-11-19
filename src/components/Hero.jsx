import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        circleRef.current.style.transform = `rotate(${rate}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
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
            stroke="#000000"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#000000"
            strokeWidth="0.3"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="#000000"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10 pt-20">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none">
            {portfolioData.personal.name}
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.subtitle}
          </p>
          
          <p className="text-lg font-normal text-gray-500 max-w-2xl mx-auto">
            {portfolioData.personal.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
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
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
              { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black hover:text-gray-600 hover:-translate-y-1 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-black opacity-60" />
        </button>
      </div>

      <style jsx>{`
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

export default Hero;