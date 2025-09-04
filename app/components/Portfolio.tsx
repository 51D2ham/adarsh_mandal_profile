'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, DollarSign, Users, ExternalLink, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Hospital Construction Project',
      category: 'professional',
      description: 'Leading civil engineering aspects of healthcare facility construction with focus on structural design, safety compliance, and project coordination.',
      duration: 'Ongoing',
      team: 'Engineering Team',
      location: 'Kathmandu, Nepal',
      technologies: ['Structural Design', 'AutoCAD', 'Project Management', 'Safety Compliance'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 2,
      title: 'Resort Development Project',
      category: 'professional',
      description: 'Comprehensive infrastructure development for hospitality project including site planning, utilities design, and construction supervision.',
      duration: 'Ongoing',
      team: 'Development Team',
      location: 'Nepal',
      technologies: ['Site Planning', 'Infrastructure Design', 'Construction Management', 'AutoCAD'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 3,
      title: '108 KM Highway Construction',
      category: 'professional',
      description: 'Major highway infrastructure project involving design supervision, quality control, and construction management for large-scale transportation development.',
      duration: 'Ongoing',
      team: 'Highway Engineering Team',
      location: 'Nepal',
      technologies: ['Highway Design', 'Quality Control', 'Construction Supervision', 'Project Management'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 4,
      title: 'Detail Survey, Design and Cost Estimation of Rural Road',
      category: 'academic',
      description: 'Major project focusing on comprehensive rural road development including detailed surveying, geometric design, and accurate cost estimation for sustainable infrastructure.',
      duration: '8 months',
      team: 'Individual Project',
      location: 'Rural Area, Nepal',
      technologies: ['AutoCAD', 'Surveying', 'Cost Estimation', 'Smart Road Technology'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 5,
      title: 'Water Resource Management',
      category: 'academic',
      description: 'Minor project focused on water resource planning and management, including watershed analysis and sustainable water utilization strategies.',
      duration: '4 months',
      team: 'Group Project',
      location: 'Study Area, Nepal',
      technologies: ['ARC GIS', 'AutoCAD', 'Hydrological Analysis'],
      status: 'Completed',
      year: '2022'
    },
    {
      id: 6,
      title: 'Smart Road Design Internship',
      category: 'internship',
      description: 'Practical internship on "Design road on smart road" involving detailed survey, design calculations, and cost estimation of rural road infrastructure.',
      duration: '3 months',
      team: 'Engineering Team',
      location: 'Nepal',
      technologies: ['Smart Road Technology', 'Surveying', 'AutoCAD', 'Cost Analysis'],
      status: 'Completed',
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'professional', label: 'Professional Work' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'internship', label: 'Internship' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="portfolio" className="section bg-white">
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
            <Building2 className="w-4 h-4 mr-2" />
            Portfolio
          </div>
          
          <h2 className="heading-lg mb-6">
            Project <span className="text-gradient">Showcase</span>
          </h2>
          
          <p className="text-lead max-w-3xl mx-auto">
            Academic projects and practical experience demonstrating engineering 
            fundamentals, problem-solving skills, and technical proficiency.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-blue-600 font-semibold text-sm">{project.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600 font-medium text-sm">Total Projects</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600 font-medium text-sm">Ongoing Projects</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-gray-600 font-medium text-sm">Technologies Used</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
            <div className="text-gray-600 font-medium text-sm">Active Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;