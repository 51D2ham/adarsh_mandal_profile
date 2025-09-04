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
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="container py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Adarsh Mandal</div>
                <div className="text-gray-400 text-sm">Civil Engineer • NEC Registration #85377</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Passionate Civil Engineer dedicated to sustainable infrastructure development 
              and innovative construction solutions in Nepal.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:+9779811272899" 
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+977 9811272899</span>
              </a>
              <a 
                href="mailto:adarsh.mandal.143@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>adarsh.mandal.143@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/adarsh.mandal.143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/adarsh.mandal.143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adarsh-mandal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Adarsh Mandal. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Made with ❤️ in Nepal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;