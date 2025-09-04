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
        <div className="grid-responsive mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-featured p-6 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{project.year}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Award className="w-4 h-4" />
                    <span>{project.budget}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full btn-secondary group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  View Details
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
          <div className="card-featured p-12">
            <h3 className="heading-md mb-6">Academic Achievements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">B.E.</div>
                <div className="text-gray-600 font-medium">Civil Engineering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                <div className="text-gray-600 font-medium">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">NEC</div>
                <div className="text-gray-600 font-medium">Registered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;