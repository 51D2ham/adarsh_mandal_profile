'use client';

import { motion } from 'framer-motion';
import { Award, Mail, Phone, MapPin, ExternalLink, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Structural Design',
    'Project Planning',
    'CAD Drafting',
    'Site Supervision',
    'Quality Control'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Adarsh Mandal</div>
                <div className="text-gray-400">Civil Engineer</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Fresh Civil Engineering graduate passionate about sustainable infrastructure 
              development and innovative construction solutions. Ready to contribute to 
              meaningful projects.
            </p>
            
            <div className="flex items-center gap-2 text-blue-400">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">NEC Registration: 85377</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 py-8 border-t border-gray-800"
        >
          <a
            href="https://www.instagram.com/adarsh.mandal.143"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="https://www.facebook.com/adarsh.mandal.143"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
          >
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-mandal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800"
        >
          <a
            href="tel:+9779811272899"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Phone</div>
              <div className="font-semibold">+977 9811272899</div>
            </div>
          </a>
          
          <a
            href="mailto:adarsh.mandal.143@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-semibold">adarsh.mandal.143@gmail.com</div>
            </div>
          </a>
          
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Birgunj, Nepal</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Adarsh Mandal. All rights reserved. | 
            <span className="text-blue-400 ml-1">Professional Civil Engineer</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;