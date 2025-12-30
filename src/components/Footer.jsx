import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data';

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
    <footer className="relative py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="p-6 bg-white border-2 border-[#49108b] rounded-xl shadow-[4px_4px_0px_0px_#49108b]">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Left Side */}
            <div className="text-center sm:text-left">
              <button
                onClick={scrollToTop}
                className="text-lg font-bold tracking-tight text-[#49108b] hover:text-[#7e30e1] transition-colors duration-200 font-['Space_Mono',monospace]"
              >
                {portfolioData.personal.name}
              </button>
              <p className="text-[13px] text-[#49108b]/60 font-['Inter',sans-serif] mt-1">
                {portfolioData.personal.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border-2 border-[#49108b] bg-white text-[#49108b] shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#7e30e1] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#49108b]/20 mt-5 pt-5">
            <p className="text-[11px] text-[#49108b]/60 font-['Inter',sans-serif] text-center flex items-center justify-center gap-1">
              © {currentYear} {portfolioData.personal.name}. Built with
              <Heart size={12} className="text-[#e26ee5]" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;