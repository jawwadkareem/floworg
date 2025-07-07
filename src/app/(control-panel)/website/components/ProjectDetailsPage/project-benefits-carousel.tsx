"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface ProjectBenefit {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface ProjectBenefitsCarouselProps {
  title?: string
  benefits: ProjectBenefit[]
  itemsPerView?: number
  className?: string
}

const ProjectBenefitsCarousel: React.FC<ProjectBenefitsCarouselProps> = ({
  title = "Best Benefits of Project",
  benefits,
  itemsPerView = 3,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, benefits.length - itemsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              canGoPrevious
                ? "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              canGoNext
                ? "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex-shrink-0 px-3`}
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-teal-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectBenefitsCarousel
