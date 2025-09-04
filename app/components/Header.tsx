'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Award, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800 transition-all duration-300"
    >
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center shadow-sm">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-white">
                Adarsh Mandal
              </div>
              <div className="text-sm text-gray-300">
                Civil Engineer
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-gray-300 hover:text-blue-400"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center gap-6">
            <a
              href="tel:+9779811272899"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+977 9811272899</span>
            </a>
            <div className="w-px h-6 bg-gray-600"></div>
            <a
              href="mailto:adarsh.mandal.143@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-medium py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <a
                href="tel:+9779811272899"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+977 9811272899</span>
              </a>
              <a
                href="mailto:adarsh.mandal.143@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">adarsh.mandal.143@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;