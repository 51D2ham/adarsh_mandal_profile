'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, MapPin } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      id: 1,
      title: 'Bachelor of Civil Engineering',
      institution: 'Cosmos College of Management and Technology, PU',
      location: 'Kathmandu, Nepal',
      period: '2019 - 2023',
      type: 'Full-time',
      description: 'Comprehensive civil engineering program with major project on rural road design and active participation in student organizations.',
      achievements: [
        'Major Project: Rural Road Design & Cost Estimation',
        'Executive Member - Cosmos CESS',
        'Participant - Hult Prize 2020/21'
      ]
    },
    {
      id: 2,
      title: 'Higher Secondary Education (+2)',
      institution: 'Nepal Mega College, Babarmahal',
      location: 'Kathmandu, Nepal',
      period: '2016 - 2018',
      type: 'Science Stream',
      description: 'Science stream education with strong foundation in Mathematics and Physics, preparing for engineering studies.',
      achievements: [
        'Science background with Mathematics & Physics focus',
        'Engineering entrance preparation'
      ]
    },
    {
      id: 3,
      title: 'School Leaving Certificate (SLC)',
      institution: 'Gyan Vatika Boarding English School',
      location: 'Birgunj, Nepal',
      period: '2014',
      type: 'Secondary Education',
      description: 'Secondary education with strong academic performance and active participation in school activities.',
      achievements: [
        'Strong foundation in core subjects',
        'Active in school activities'
      ]
    }
  ];

  const experiences = [
    {
      id: 1,
      title: 'Civil Engineer',
      company: 'Abash Multinational Pvt Ltd',
      location: 'Kathmandu, Nepal',
      period: '2024 - Present',
      type: 'Professional',
      description: 'Working as a civil engineer on diverse infrastructure projects including healthcare facilities, hospitality developments, and major highway construction.',
      achievements: [
        'Hospital construction project management',
        'Resort development planning and execution',
        '108 km highway construction supervision',
        'Infrastructure design and quality control'
      ]
    },
    {
      id: 2,
      title: 'Smart Road Design Intern',
      company: 'Engineering Consultancy',
      location: 'Nepal',
      period: '2023',
      type: 'Internship',
      description: 'Specialized internship in smart road technology with focus on rural road development and modern infrastructure solutions.',
      achievements: [
        'Rural road alignment surveys and analysis',
        'Technical drawings and design calculations',
        'Cost estimation and project documentation',
        'Smart road technology implementation'
      ]
    }
  ];



  return (
    <section id="experience" className="section bg-gray-50">
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
            <GraduationCap className="w-4 h-4 mr-2" />
            Background
          </div>
          
          <h2 className="heading-lg mb-6">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Academic foundation and practical experience in civil engineering, 
            preparing for a successful career in infrastructure development.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-md mb-12 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{edu.title}</h4>
                      <span className="text-blue-600 font-semibold text-sm">{edu.period}</span>
                    </div>
                    <div className="text-gray-600 font-medium mb-1">{edu.institution}</div>
                    <div className="text-gray-500 text-sm">{edu.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Practical Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-md mb-12 flex items-center gap-3"
          >
            <Users className="w-8 h-8 text-blue-600" />
            Practical Experience
          </motion.h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <span className="text-blue-600 font-semibold text-sm">{exp.period}</span>
                    </div>
                    <div className="text-gray-600 font-medium mb-1">{exp.company}</div>
                    <div className="text-gray-500 text-sm mb-3">{exp.location}</div>
                    <p className="text-gray-700 text-sm mb-3">{exp.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;