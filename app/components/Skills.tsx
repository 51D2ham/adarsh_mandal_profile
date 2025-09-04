'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Calculator, 
  Compass, 
  Layers, 
  Settings, 
  Users, 
  FileText, 
  Award,
  Shield,
  Target,
  BarChart3,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Structural Analysis', icon: Building2 },
    { name: 'AutoCAD Design', icon: Compass },
    { name: 'Project Planning', icon: Target },
    { name: 'Cost Estimation', icon: Calculator },
    { name: 'Quality Control', icon: Shield },
    { name: 'Site Management', icon: Settings }
  ];

  const softSkills = [
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: FileText },
    { name: 'Problem Solving', icon: Target },
    { name: 'Leadership', icon: BarChart3 }
  ];

  const software = [
    { name: 'AutoCAD', proficiency: 'Advanced', icon: Compass },
    { name: 'ARC GIS', proficiency: 'Intermediate', icon: Layers },
    { name: 'Surveying', proficiency: 'Advanced', icon: Target },
    { name: 'Soil Testing', proficiency: 'Intermediate', icon: Building2 },
    { name: 'Smart Road', proficiency: 'Intermediate', icon: Settings },
    { name: 'MS Office Suite', proficiency: 'Advanced', icon: FileText }
  ];

  const languages = [
    { name: 'Nepali', proficiency: 'Native' },
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'Maithili', proficiency: 'Proficient' }
  ];

  const otherSkills = [
    'Leadership',
    'Team Building',
    'Critical Thinking',
    'Adaptability'
  ];

  const certifications = [
    {
      title: 'Nepal Engineering Council',
      credential: 'NEC Registration #85377',
      year: '2024',
      icon: Shield,
      status: 'Active'
    },
    {
      title: 'AutoCAD Certification',
      credential: 'Autodesk Certified',
      year: '2023',
      icon: Compass,
      status: 'Certified'
    },
    {
      title: 'Construction Safety',
      credential: 'Safety Training Certificate',
      year: '2023',
      icon: Award,
      status: 'Completed'
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Advanced': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Basic': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="skills" className="section bg-gradient-to-br from-gray-50 to-blue-50">
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
            <Target className="w-4 h-4 mr-2" />
            Skills & Expertise
          </div>
          
          <h2 className="heading-lg mb-6">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Comprehensive skill set spanning civil engineering fundamentals, 
            modern software tools, and essential professional competencies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Software & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {software.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">{tool.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-4">Additional Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold text-gray-900">{language.name}</span>
                    <span className="text-blue-600 font-medium text-sm">{language.proficiency}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;