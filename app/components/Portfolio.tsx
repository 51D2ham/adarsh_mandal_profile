'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, DollarSign, Users, ExternalLink, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Residential Building Design',
      category: 'academic',
      description: 'Final year project: Structural design of a 5-story residential building with modern amenities and earthquake-resistant features.',
      duration: '6 months',
      budget: 'Academic Project',
      team: '4 students',
      location: 'Kathmandu, Nepal',
      technologies: ['AutoCAD', 'STAAD Pro', 'Manual Calculations'],
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Highway Alignment Study',
      category: 'academic',
      description: 'Transportation engineering project focusing on optimal highway alignment design considering topography and environmental factors.',
      duration: '4 months',
      budget: 'Academic Project',
      team: '3 students',
      location: 'Birgunj-Kathmandu Route',
      technologies: ['Civil 3D', 'Surveying', 'GIS'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 3,
      title: 'Water Supply System Design',
      category: 'academic',
      description: 'Design of water distribution system for a small community including pipe network analysis and pump station design.',
      duration: '3 months',
      budget: 'Academic Project',
      team: '2 students',
      location: 'Rural Community Study',
      technologies: ['EPANET', 'AutoCAD', 'Hydraulic Analysis'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 4,
      title: 'Construction Site Internship',
      category: 'internship',
      description: 'Hands-on experience in construction management, quality control, and site supervision during summer internship.',
      duration: '2 months',
      budget: 'Internship',
      team: 'Site Team',
      location: 'Birgunj, Nepal',
      technologies: ['Site Management', 'Quality Testing', 'Progress Monitoring'],
      status: 'Completed',
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'internship', label: 'Internship' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'badge-success';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-600">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-6">
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Duration</div>
                      <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Users className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Team</div>
                      <div className="text-sm font-semibold text-gray-900">{project.team}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg col-span-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Location</div>
                      <div className="text-sm font-semibold text-gray-900">{project.location}</div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  View Project Details
                </button>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-8">Portfolio Summary</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-blue-100 font-medium text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100 font-medium text-sm">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-blue-100 font-medium text-sm">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100 font-medium text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;