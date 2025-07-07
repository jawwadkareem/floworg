"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export interface ProjectBenefit {
  id: string
  text: string
  icon?: React.ReactNode
}

export interface ProjectBenefitsSectionProps {
  title?: string
  description?: string
  benefits?: ProjectBenefit[]
  images?: string[]
  className?: string
}

const ProjectBenefitsSection: React.FC<ProjectBenefitsSectionProps> = ({
  title = "Project Benefits And Solutions",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  benefits = [
    { id: "1", text: "We use the newest product for developing" },
    { id: "2", text: "Manage all systems to our experienced" },
    { id: "3", text: "Always ready to easy way in installing all" },
    { id: "4", text: "We use the newest product for developing" },
    { id: "5", text: "Manage all systems to our experienced" },
    { id: "6", text: "Always ready to easy way in installing all" },
    { id: "7", text: "We use the newest product for developing" },
    { id: "8", text: "Manage all systems to our experienced" },
    { id: "9", text: "Always ready to easy way in installing all" },
  ],
  images = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ],
  className = "",
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Project benefit ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">{description}</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {Array.from({ length: 3 }).map((_, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {benefits.slice(columnIndex * 3, (columnIndex + 1) * 3).map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (columnIndex * 3 + index) * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    {benefit.icon || <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectBenefitsSection
