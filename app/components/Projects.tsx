"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      title: "Arduino LCD Game",
      technology: "Embedded C",
      description: "Designed and implemented a simple game on an LCD screen using an Arduino microcontroller",
      tools: "Proteus",
    },
    {
      title: "SMART ROBOTIC ANIMAL REPELLENT SYSTEM",
      technology: "Robotics",
      description: "An IoT and AI Solution for Agricultural Protection",
      tools: "RASPBERRY PI 3, EMBEDDED C",
    },
  ]

  const [activeProject, setActiveProject] = useState(0)

  return (
    <motion.section
      className="mb-16 bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Projects</h2>
      <div className="flex space-x-4 mb-4">
        {projects.map((project, index) => (
          <button
            key={project.title}
            className={`px-4 py-2 rounded-full ${
              activeProject === index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveProject(index)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <motion.div
        key={activeProject}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold">{projects[activeProject].title}</h3>
        <p className="text-gray-600">Technology: {projects[activeProject].technology}</p>
        <p className="mt-2">{projects[activeProject].description}</p>
        <p className="mt-2 text-blue-600">Tools Used: {projects[activeProject].tools}</p>
      </motion.div>
    </motion.section>
  )
}
