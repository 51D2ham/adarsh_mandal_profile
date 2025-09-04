'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Target, BookOpen, Award, Users, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduate',
      description: 'Bachelor of Engineering in Civil Engineering with strong academic foundation'
    },
    {
      icon: Award,
      title: 'NEC Registered',
      description: 'Licensed Civil Engineer with Nepal Engineering Council Registration #85377'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on sustainable infrastructure development and innovative construction'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Minded',
      description: 'Passionate about modern construction techniques and green building practices'
    }
  ];

  const strengths = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Strong theoretical foundation in structural analysis and design principles',
      percentage: 95
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent communication skills and ability to work in multidisciplinary teams',
      percentage: 88
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical mindset with focus on practical and cost-effective solutions',
      percentage: 92
    }
  ];

  const objectives = [
    'Apply academic knowledge to real-world infrastructure projects',
    'Contribute to sustainable construction and green building practices',
    'Develop expertise in project management and team leadership',
    'Support Nepal\'s infrastructure development and modernization'
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-4">
            <Award className="w-4 h-4 mr-2" />
            About Me
          </div>
          
          <h2 className="heading-lg mb-6">
            Professional <span className="text-gradient">Profile</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Recent Civil Engineering graduate with passion for infrastructure development, 
            sustainable construction practices, and innovative engineering solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid-responsive-2 mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-content"
          >
            <div className="card p-8">
              <h3 className="heading-md mb-6">My Journey</h3>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  As a recent graduate in Civil Engineering, I bring fresh perspectives and 
                  up-to-date knowledge of modern construction techniques, sustainable practices, 
                  and digital tools used in today's engineering industry.
                </p>
                
                <p className="leading-relaxed">
                  During my academic journey, I developed strong foundations in structural analysis, 
                  project management, and construction materials. I'm particularly interested in 
                  sustainable infrastructure development and green building technologies.
                </p>
                
                <p className="leading-relaxed">
                  I'm eager to apply my theoretical knowledge to real-world projects and contribute 
                  to Nepal's infrastructure development while learning from experienced professionals.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Career Objectives</h4>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right - Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-content"
          >
            <div className="card p-8">
              <h3 className="heading-md mb-8">Core Strengths</h3>
              
              <div className="space-y-8">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                        <strength.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{strength.title}</h4>
                        <p className="text-gray-600 text-sm">{strength.description}</p>
                      </div>
                      <div className="text-xl font-bold text-blue-600">{strength.percentage}%</div>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${strength.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid-responsive mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-featured p-8 text-center group"
            >
              <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card-featured p-12 max-w-4xl mx-auto">
            <h3 className="heading-md mb-6">Professional Commitment</h3>
            
            <p className="text-lead mb-8">
              I am committed to applying engineering principles with integrity, contributing to 
              sustainable development, and continuously learning to become a valuable asset to 
              any organization while serving the broader community through quality infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="badge">Infrastructure Development</span>
              <span className="badge">Sustainable Construction</span>
              <span className="badge">Project Management</span>
              <span className="badge">Team Collaboration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;