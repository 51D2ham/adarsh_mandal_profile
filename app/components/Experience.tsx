'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, MapPin } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      id: 1,
      title: 'Bachelor of Engineering (Civil)',
      institution: 'Tribhuvan University',
      location: 'Kathmandu, Nepal',
      period: '2020 - 2024',
      type: 'Full-time',
      description: 'Comprehensive civil engineering program covering structural design, construction management, and infrastructure development.',
      achievements: [
        'Graduated with distinction in structural engineering courses',
        'Completed major project on sustainable construction materials',
        'Active member of Civil Engineering Students Association',
        'Participated in national engineering competitions'
      ]
    }
  ];

  const internships = [
    {
      id: 1,
      title: 'Civil Engineering Intern',
      company: 'Local Construction Company',
      location: 'Birgunj, Nepal',
      period: 'Summer 2023',
      type: 'Internship',
      description: 'Gained hands-on experience in construction site management and quality control processes.',
      achievements: [
        'Assisted in site surveying and layout planning',
        'Learned concrete testing and quality assurance procedures',
        'Observed project management and coordination activities',
        'Prepared daily progress reports and documentation'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Nepal Engineering Council Registration',
      issuer: 'NEC',
      date: '2024',
      credential: '#85377'
    },
    {
      title: 'AutoCAD Certification',
      issuer: 'Autodesk',
      date: '2023',
      credential: 'Verified'
    },
    {
      title: 'Construction Safety Training',
      issuer: 'Safety Institute',
      date: '2023',
      credential: 'Completed'
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

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 mb-8"
            >
              <div className="grid-responsive-2 gap-8">
                {/* Left - Timeline */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-600 font-bold text-xl">{edu.period}</div>
                    <div className="text-gray-600 font-medium">{edu.type}</div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-3xl font-bold text-blue-600 mb-4">{edu.title}</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-800 text-lg">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600">{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{edu.description}</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold text-blue-600 mb-4">Key Achievements</h5>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-lg leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internship Section */}
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

          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 mb-8"
            >
              <div className="grid-responsive-2 gap-8">
                {/* Left - Timeline */}
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-600 font-bold text-xl">{intern.period}</div>
                    <div className="text-gray-600 font-medium">{intern.type}</div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-3xl font-bold text-blue-600 mb-4">{intern.title}</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-800 text-lg">{intern.company}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600">{intern.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{intern.description}</p>
                  </div>

                  <div>
                    <h5 className="text-xl font-bold text-blue-600 mb-4">Learning Outcomes</h5>
                    <ul className="space-y-3">
                      {intern.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-lg leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            Certifications & Licenses
          </h3>
          
          <div className="grid-responsive gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-featured p-8 text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                
                <h4 className="text-xl font-bold text-blue-600 mb-3">{cert.title}</h4>
                <p className="text-gray-600 font-semibold text-lg mb-4">{cert.issuer}</p>
                <div className="space-y-2">
                  <div className="text-gray-800 font-medium">{cert.date}</div>
                  <div className="text-blue-600 font-bold">{cert.credential}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;