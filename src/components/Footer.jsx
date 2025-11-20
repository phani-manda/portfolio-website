import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data';
import GlassPanel from './GlassPanel';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="max-w-6xl mx-auto px-6">
        <GlassPanel className="px-6 py-10 sm:px-10 lg:px-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-200 mb-4"
              >
                {portfolioData.personal.name}
              </button>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Computer Science student passionate about building innovative software solutions.
                Always excited to take on new challenges and learn cutting-edge technologies.
              </p>
              <p className="text-muted-foreground/80 text-xs">
                Available for internships and full-time SDE opportunities.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:text-right">
              <div className="flex md:justify-end space-x-4 mb-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 text-foreground"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                {portfolioData.personal.location}
              </p>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p className="flex items-center">
                © {currentYear} {portfolioData.personal.name}. Built with
                <Heart size={14} className="mx-1 text-red-500" />
                using React & Tailwind CSS.
              </p>
              <p className="mt-2 md:mt-0">
                Designed for performance and accessibility.
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
    </footer>
  );
};

export default Footer;