'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Lightbulb, MapPin, Calendar, User } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Education', value: 'B.E. Civil Engineering', icon: GraduationCap },
    { label: 'Registration', value: 'NEC #85377', icon: Award },
    { label: 'Location', value: 'Kathmandu, Nepal', icon: MapPin },
    { label: 'Year', value: '2024 Graduate', icon: Calendar }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Committed to accuracy in design and execution'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern construction technologies'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering excellence in every project'
    }
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
            <User className="w-4 h-4 mr-2" />
            Background
          </div>
          
          <h2 className="heading-lg mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Civil Engineering ready to contribute to infrastructure 
            development with modern techniques and sustainable practices.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid-responsive-2 mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="heading-md mb-6">Professional Summary</h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Civil Engineering graduate with comprehensive knowledge of structural 
                  design, construction management, and sustainable building practices. 
                </p>
                
                <p>
                  Equipped with modern engineering tools including AutoCAD, ARC GIS, and 
                  project management software. Passionate about contributing to Nepal's 
                  infrastructure development through innovative and sustainable solutions.
                </p>
                
                <p>
                  Ready to apply academic knowledge to real-world challenges while 
                  continuously learning from industry professionals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="heading-md mb-8">Core Values</h3>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card-featured p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mission</h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To contribute to infrastructure development through innovative engineering 
              solutions, sustainable practices, and continuous professional growth while 
              maintaining the highest standards of quality and integrity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="badge">Sustainable Design</span>
              <span className="badge">Quality Engineering</span>
              <span className="badge">Innovation</span>
              <span className="badge">Professional Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;