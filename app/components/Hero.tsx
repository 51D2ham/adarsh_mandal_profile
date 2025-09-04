'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, MapPin, Phone, Mail, Award, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProfileImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/001.jpg', '/images/002.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative group">
      <motion.div 
        className="relative w-96 h-96 sm:w-[450px] sm:h-[450px] lg:w-[480px] lg:h-[480px]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer decorative ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-300/20 blur-xl" />
        
        {/* Main frame */}
        <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
          {/* Inner shadow for depth */}
          <div className="absolute inset-2 rounded-2xl shadow-inner bg-gradient-to-br from-gray-50/50 to-white" />
          
          {/* Image container */}
          <div className="relative w-full h-full p-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 1.1
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-4 rounded-2xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`Adarsh Mandal - Photo ${index + 1}`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? 'bg-blue-600 scale-125 shadow-md' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute right-16 top-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64"
          >
            <h3 className="font-semibold text-gray-900 mb-3">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+9779811272899"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">+977 9811272899</span>
              </a>
              <a
                href="mailto:adarsh.mandal.143@gmail.com"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Email Me</span>
              </a>
              <button
                onClick={scrollToContact}
                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700">Send Message</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

const FloatingElements = () => {
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30"
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 bg-blue-100 rounded-full opacity-25"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleResumeDownload = () => {
    const fileId = process.env.NEXT_PUBLIC_RESUME_FILE_ID;
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      alert('Resume download is currently unavailable. Please contact me directly.');
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <ContactSlider />
      <FloatingElements />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20" />
      
      <div className="container relative z-10">
        <div className="grid-responsive-2 items-center min-h-screen py-12 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="badge"
            >
              <Award className="w-4 h-4" />
              <span>NEC Registered Civil Engineer #85377</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <h1 className="heading-xl">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Adarsh
                </motion.span>
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Mandal
                </motion.span>
              </h1>
              <motion.div 
                className="w-20 h-1 accent-gradient rounded-full mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Civil Engineer
              </motion.h2>
              <motion.p 
                className="text-lead max-w-2xl mx-auto lg:mx-0 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Civil Engineering graduate passionate about sustainable infrastructure 
                development and innovative construction solutions. Ready to contribute to 
                growth through engineering excellence and modern design principles.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0"
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                  <div className="text-sm font-medium text-gray-800">Birgunj, Nepal</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Phone</div>
                  <div className="text-sm font-medium text-gray-800">+977 9811272899</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                  <div className="text-sm font-medium text-gray-800 break-all">adarsh.mandal.143@gmail.com</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleResumeDownload}
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  animate={isHovered ? { y: [-2, 2, -2] } : { y: 0 }}
                  transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                </motion.div>
                Download Resume
              </motion.button>
              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { href: 'https://www.instagram.com/adarsh.mandal.143', icon: Instagram, color: 'text-pink-600' },
                { href: 'https://www.facebook.com/adarsh.mandal.143', icon: Facebook, color: 'text-blue-600' },
                { href: 'https://www.linkedin.com/in/adarsh-mandal', icon: Linkedin, color: 'text-blue-700' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileImageSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;