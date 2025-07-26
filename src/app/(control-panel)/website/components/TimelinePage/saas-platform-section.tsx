"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Monitor, BarChart3, Palette } from "lucide-react"

const SaaSTemplateSection: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Extensible and powerful",
      description:
        "We use an filler text for layouts, non-readability is of great importance because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      benefits: ["Teamwork Webinar", "Chat & Channel", "Whiteboards"],
      image: "/placeholder.svg?height=300&width=400&text=Dashboard+Analytics",
      color: "bg-blue-500",
    },
    {
      icon: Monitor,
      title: "Simple and clean layout",
      description:
        "We use an filler text for layouts, non-readability is of great importance because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone",
      benefits: ["Share multiple screen at a time", "High quality screen", "No buffering"],
      image: "/placeholder.svg?height=300&width=400&text=Clean+Interface",
      color: "bg-teal-500",
    },
    {
      icon: Palette,
      title: "Create Beautiful Websites",
      description:
        "Rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?",
      benefits: ["Share multiple screen at a time", "High quality screen plugins", "No buffering"],
      image: "/placeholder.svg?height=300&width=400&text=Website+Builder",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            The most powerful SaaS
            <br />
            template ever
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">1000+ Big & Small business trusted us from 25 years</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-24"
            >
              {/* Image Side */}
              <div className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />

                  {/* Overlay UI Elements for Demo */}
                  {index === 0 && (
                    <div className="absolute top-12 right-12">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="w-24 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute top-12 left-12 right-12">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute bottom-12 left-12">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex gap-2 mb-2">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        </div>
                        <div className="w-20 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className={index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}>
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{feature.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{feature.description}</p>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            About Floworg
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default SaaSTemplateSection
