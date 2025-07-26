"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const JobOpeningsSection = () => {
  const [startIndex, setStartIndex] = useState(0)

  const jobs = [
    {
      id: 1,
      title: "UI / UX Designer fulltime",
      description: "Design intuitive user interfaces and experiences for our cutting-edge applications.",
      icon: "👨‍💻",
      bgColor: "bg-teal-50",
    },
    {
      id: 2,
      title: "Java Software Engineer",
      description: "Develop robust backend systems using Java and Spring framework.",
      icon: "☕",
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      title: "Senior System Engineer",
      description: "Architect and maintain high-availability infrastructure systems.",
      icon: "🔧",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "Data Scientist",
      description: "Analyze complex datasets to drive business insights and predictions.",
      icon: "📊",
      bgColor: "bg-purple-50",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      description: "Implement CI/CD pipelines and manage cloud infrastructure.",
      icon: "⚙️",
      bgColor: "bg-green-50",
    },
    {
      id: 6,
      title: "Frontend Developer",
      description: "Build responsive web applications using React and modern JavaScript.",
      icon: "🌐",
      bgColor: "bg-pink-50",
    },
    {
      id: 7,
      title: "Product Manager",
      description: "Lead product development and coordinate cross-functional teams.",
      icon: "📋",
      bgColor: "bg-orange-50",
    },
  ]

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 3, jobs.length - 3))
  }

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 3, 0))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-teal-600 mb-2">More Job Openings</h2>
              <p className="text-gray-600">We regularly recruit at many positions.</p>
              <p className="text-gray-600">See related jobs here</p>
            </div>
            <div className="text-sm text-gray-500">View all →</div>
          </div>

          {/* Job Cards */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= jobs.length - 3}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow ${
                startIndex >= jobs.length - 3 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {jobs.slice(startIndex, startIndex + 3).map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${job.bgColor} rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {job.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{job.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JobOpeningsSection