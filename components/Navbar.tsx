import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Início', href: 'hero' },
  { label: 'A Clínica', href: 'about' },
  { label: 'Tratamentos', href: 'classes' },
  { label: 'Profissional', href: 'team' },
  { label: 'Agendar', href: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-sand-200'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-3 group outline-none">
          <img 
            src="https://i.ibb.co/B2HKKKSn/Whats-App-Image-2025-11-23-at-12-50-20.jpg" 
            alt="Priscila Valongo - Pilates e Fisioterapia" 
            className={`${isScrolled ? 'h-20 md:h-24' : 'h-28 md:h-48'} w-auto object-contain transition-all duration-300 group-hover:scale-105`} 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors uppercase tracking-wider text-[11px] outline-none cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-6 py-2.5 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-brand-700 transition-all hover:shadow-lg outline-none cursor-pointer"
          >
            Marcação
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-sand-200 absolute w-full overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-serif text-slate-700 hover:text-brand-700 text-center border-b border-sand-100 pb-2 outline-none block cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;