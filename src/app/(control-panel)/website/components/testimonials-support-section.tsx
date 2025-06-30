"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialsSupportSection: React.FC = () => {
  const testimonials = [
    {
      name: "Hanna Donin",
      role: "Creative Expert",
      rating: 5,
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
    {
      name: "Hanna Donin",
      role: "Business Expert",
      rating: 5,
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONIAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our
            <br />
            <span className="text-gray-400">Customer Says</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            "It is a long established fact content of a page when looking at its layout."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-between"
        >
          <div className="flex gap-2">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex gap-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSupportSection
