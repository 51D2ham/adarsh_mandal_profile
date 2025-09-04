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
    { name: 'Structural Analysis', level: 85, icon: Building2 },
    { name: 'AutoCAD Design', level: 90, icon: Compass },
    { name: 'Project Planning', level: 80, icon: Target },
    { name: 'Cost Estimation', level: 75, icon: Calculator },
    { name: 'Quality Control', level: 85, icon: Shield },
    { name: 'Site Management', level: 70, icon: Settings }
  ];

  const softSkills = [
    { name: 'Team Collaboration', level: 90, icon: Users },
    { name: 'Communication', level: 85, icon: FileText },
    { name: 'Problem Solving', level: 88, icon: Target },
    { name: 'Leadership', level: 75, icon: BarChart3 }
  ];

  const software = [
    { name: 'AutoCAD', proficiency: 'Advanced', icon: Compass },
    { name: 'STAAD Pro', proficiency: 'Intermediate', icon: Layers },
    { name: 'MS Project', proficiency: 'Intermediate', icon: FileText },
    { name: 'ETABS', proficiency: 'Basic', icon: Building2 },
    { name: 'MS Office', proficiency: 'Advanced', icon: Settings },
    { name: 'SketchUp', proficiency: 'Intermediate', icon: Wrench }
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

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card p-8">
            <h3 className="heading-md mb-8 text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Software & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card p-8">
            <h3 className="heading-md mb-8 text-center">Software & Tools</h3>
            
            <div className="grid-responsive">
              {software.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{tool.name}</h4>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(tool.proficiency)}`}>
                    {tool.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card p-8">
            <h3 className="heading-md mb-8 text-center">Professional Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card p-8">
            <h3 className="heading-md mb-8 text-center">Certifications & Licenses</h3>
            
            <div className="grid-responsive">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-featured p-6 text-center"
                >
                  <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{cert.credential}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Year: {cert.year}</span>
                    <span className="badge-success">{cert.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;