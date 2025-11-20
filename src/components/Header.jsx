import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' }
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-light tracking-tight text-foreground hover:scale-105 transition-transform duration-200"
          >
            Phani Manda
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 justify-right">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-normal text-foreground hover:-translate-y-0.5 transition-transform duration-200 hover:text-muted-foreground"
              >
                {item.label}
              </button>
            ))}
            {/* Theme toggle removed */}

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 transition-colors duration-200 shadow-md"
              size="sm"
            >
              Contact
            </Button>
          </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 px-6 pb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-base font-normal text-foreground/90 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 mt-2"
                size="sm"
              >
                Contact
              </Button>
            </div>
          )}
        </div>
    </header>
  );
};

export default Header;