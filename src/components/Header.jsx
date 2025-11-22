import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default to home
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Don't update if user recently clicked (within 1 second)
      if (Date.now() - timeOfLastClick < 1000) {
        return;
      }

      // If at top of page, set to home
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Throttle scroll event for better performance
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

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
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="relative z-[999]">
      {/* Desktop Floating Pill Navigation with Glassy Effect */}
      <div className="hidden md:block">
        <motion.div
          className="fixed left-1/2 top-6 h-[3.25rem] w-[42rem] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(8,8,20,0.5)]"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="fixed left-1/2 top-[1.7rem] flex h-[initial] -translate-x-1/2 py-0">
          <ul className="flex w-[initial] flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium transition-colors">
            {navItems.map((link) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center text-foreground"
                key={link.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  className={`flex w-full items-center justify-center px-3 py-3 uppercase transition hover:text-purple-400 ${activeSection === link.id ? 'text-white' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}

                  {link.id === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-purple-300 dark:bg-purple-600"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4 md:hidden">
        <button
          className="pointer-events-auto p-2 rounded-md bg-white/5 backdrop-blur-xl border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] z-40 md:hidden border-t border-white/10 px-6 pb-6 bg-background/95 backdrop-blur-xl shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 text-base font-normal text-foreground/90 hover:text-purple-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);