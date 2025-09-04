'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, MapPin, Phone, Mail, Award, Instagram, Facebook, Linkedin } from 'lucide-react';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid-responsive-2 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 badge"
            >
              <Award className="w-4 h-4" />
              <span>NEC Registered Civil Engineer #85377</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="heading-xl">
                <span className="block">Adarsh</span>
                <span className="block text-gradient">Mandal</span>
              </h1>
              <div className="w-20 h-1 accent-gradient rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Civil Engineer
              </h2>
              <p className="text-lead max-w-2xl mx-auto lg:mx-0">
                Recent Civil Engineering graduate passionate about sustainable infrastructure 
                development and innovative construction solutions. Ready to contribute to 
                Nepal's growth through engineering excellence.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Birgunj, Nepal</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">+977 9811272899</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Email</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleResumeDownload}
                className="btn-primary group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </button>
              <button
                onClick={scrollToAbout}
                className="btn-secondary"
              >
                View My Work
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.instagram.com/adarsh.mandal.143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://www.facebook.com/adarsh.mandal.143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/adarsh-mandal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <Linkedin className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center lg:items-start pt-8"
            >
              <p className="text-sm text-gray-500 font-medium mb-3">SCROLL TO EXPLORE</p>
              <button
                onClick={scrollToAbout}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <ArrowDown className="w-5 h-5 text-blue-600 animate-bounce" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20"></div>
                
                {/* Profile Card */}
                <div className="relative w-full h-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Award className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Photo</h3>
                      <p className="text-gray-600 text-sm">Add your image to<br />public/images/profile.jpg</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3"
              >
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
                  <div className="text-xs text-gray-600 font-medium">Graduate</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">B.E.</div>
                  <div className="text-xs text-gray-600 font-medium">Civil Eng.</div>
                </div>
              </motion.div>

              {/* NEC Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-sm">NEC Certified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;