import React, { useCallback, useMemo } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data';

const Hero = () => {
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
    <section id="hero" className="relative pt-28 pb-16 px-5 justify-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="p-8 bg-white border-2 border-[#49108b] rounded-xl shadow-[4px_4px_0px_0px_#49108b]">
        {/* Main Hero Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-2 border-[#49108b] shadow-[4px_4px_0px_0px_#49108b] bg-gradient-to-br from-[#7e30e1] to-[#e26ee5] flex items-center justify-center overflow-hidden">
              <span className="text-4xl sm:text-5xl font-bold text-white font-['Space_Mono',monospace]">
                {portfolioData.personal.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#49108b] font-['Space_Mono',monospace] mb-2 tracking-tight">
              {portfolioData.personal.name}
            </h1>

            <p className="text-sm font-semibold text-[#7e30e1] font-['Inter',sans-serif] mb-3 tracking-wide">
              {portfolioData.personal.subtitle}
            </p>

            <p className="text-[13px] text-[#49108b]/70 leading-relaxed font-['Inter',sans-serif] mb-5">
              {portfolioData.personal.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-5">
              <Button
                onClick={scrollToAbout}
                className="bg-[#7e30e1] text-white border-2 border-[#49108b] rounded-lg shadow-[3px_3px_0px_0px_#49108b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-[13px] py-2 px-4 h-auto"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-lg shadow-[3px_3px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-[13px] py-2 px-4 h-auto"
                onClick={handleDownloadResume}
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white text-[#49108b] border-2 border-[#49108b] rounded-lg shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#7e30e1] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);