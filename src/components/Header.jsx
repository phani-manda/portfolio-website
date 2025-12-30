import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (Date.now() - timeOfLastClick < 1000) return;

      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeOfLastClick]);

  const scrollToSection = useCallback((sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    setTimeOfLastClick(Date.now());
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[999]">
      {/* Water drop / glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/60 backdrop-blur-md border-b border-[#49108b]/10 shadow-[0_4px_30px_rgba(126,48,225,0.1)]" />
      
      <div className="relative max-w-2xl mx-auto px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-['Space_Mono',monospace] font-bold text-[#49108b] text-base tracking-tight hover:text-[#7e30e1] transition-colors duration-200"
          >
            {portfolioData.personal.name.split(' ')[0].toLowerCase()}
            <span className="text-[#7e30e1]">.</span>
          </button>

          {/* Nav Links */}
          <ul className="flex items-center gap-8">
            {navItems.map((link) => (
              <li key={link.id}>
                <a
                  className={`relative text-[13px] font-medium font-['Inter',sans-serif] tracking-wide transition-all duration-200 py-1 ${
                    activeSection === link.id
                      ? 'text-[#7e30e1]'
                      : 'text-[#49108b]/70 hover:text-[#7e30e1]'
                  }`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7e30e1] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between h-14">
          <button
            onClick={() => scrollToSection('home')}
            className="font-['Space_Mono',monospace] font-bold text-[#49108b] text-base tracking-tight"
          >
            {portfolioData.personal.name.split(' ')[0].toLowerCase()}
            <span className="text-[#7e30e1]">.</span>
          </button>
          <button
            className="p-2.5 rounded-lg bg-white/80 border-2 border-[#49108b] shadow-[2px_2px_0px_0px_#49108b] text-[#49108b] hover:bg-[#7e30e1] hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b-2 border-[#49108b] shadow-[0_4px_20px_rgba(126,48,225,0.15)]">
          <div className="max-w-2xl mx-auto px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-[15px] font-medium font-['Inter',sans-serif] transition-colors border-b border-[#49108b]/10 last:border-0 ${
                  activeSection === item.id ? 'text-[#7e30e1]' : 'text-[#49108b] hover:text-[#7e30e1]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);