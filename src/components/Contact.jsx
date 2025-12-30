import React, { useMemo } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: null
    }
  ], []);

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '50px',
  });

  return (
    <section id="contact" className="relative py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="p-8 bg-white border-2 border-[#49108b] rounded-xl shadow-[4px_4px_0px_0px_#49108b]">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-[#49108b] mb-2 font-['Space_Mono',monospace]">
              Get in Touch
            </h2>
            <div className="w-12 h-1 bg-[#7e30e1] rounded-full"></div>
          </div>

          <div
            ref={ref}
            className={`space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Contact Details - Stacked */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl border-2 border-[#49108b] bg-[#f3f8ff] shadow-[2px_2px_0px_0px_#49108b] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200">
                  <div className="p-2 bg-[#7e30e1] rounded-lg text-white">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#7e30e1] font-['Inter',sans-serif] uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[14px] text-[#49108b] hover:text-[#e26ee5] transition-colors duration-200 font-['Inter',sans-serif] font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[14px] text-[#49108b] font-['Inter',sans-serif] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-xl shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#7e30e1] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-[13px] py-2.5"
                onClick={() => window.open(portfolioData.personal.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-white border-2 border-[#49108b] text-[#7e30e1] rounded-xl shadow-[2px_2px_0px_0px_#49108b] hover:bg-[#e26ee5] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#49108b] transition-all duration-200 font-['Inter',sans-serif] font-semibold text-[13px] py-2.5"
                onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            <p className="text-[13px] text-[#49108b]/60 leading-relaxed font-['Inter',sans-serif] text-center">
              Feel free to connect for project inquiries or professional opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);