"use client"

import { motion } from "framer-motion"

export default function Education() {
  const educationItems = [
    {
      degree: "B.E-Electronic and Communication Engineering",
      school: "Vel Tech Multi Tech Dr.Rangajan Dr.Sakunthala Engineering College",
      period: "Oct 2021 – May 2025",
      grade: "GPA: 6.8/10",
    },
    {
      degree: "Higher Secondary Education",
      school: "Govt ADW HIGHER SECONDARY SCHOOL",
      period: "Jun 2020 – March 2021",
      grade: "Percentage: 72%",
    },
    {
      degree: "Secondary Education",
      school: "Govt ADW HIGHER SECONDARY SCHOOL",
      period: "Jun 2018 – March 2019",
      grade: "Percentage: 64%",
    },
  ]

  return (
    <motion.section
      className="mb-16 bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Education</h2>
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-blue-600 pl-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-gray-600">{item.school}</p>
            <p className="text-gray-500">{item.period}</p>
            <p className="text-blue-600 font-medium">{item.grade}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
