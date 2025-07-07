"use client"

import type React from "react"
import { motion } from "framer-motion"

export interface ProjectInfo {
  client: string
  location: string
  date: string
  duration: string
  tags: string[]
}

export interface ProjectDetailContentProps {
  title?: string
  description?: string
  projectInfo?: ProjectInfo
  images?: string[]
  className?: string
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  title = "Digital Analysis",
  description = "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  projectInfo = {
    client: "Robert William",
    location: "7 Lake Street London",
    date: "30 Apr 2023",
    duration: "3 Month",
    tags: ["Consulting", "Business"],
  },
  images = ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  className = "",
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Project Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Sidebar - Project Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 sticky top-8"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Client:</label>
                  <p className="text-gray-900 font-semibold">{projectInfo.client}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Location:</label>
                  <p className="text-gray-900">{projectInfo.location}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Date:</label>
                  <p className="text-gray-900">{projectInfo.date}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Duration:</label>
                  <p className="text-gray-900">{projectInfo.duration}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Tags:</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projectInfo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailContent
