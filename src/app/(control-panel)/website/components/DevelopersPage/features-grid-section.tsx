"use client"

import type React from "react"
import { motion } from "framer-motion"
import WaveCircle from "../WaveLogo"
const FeaturesGridSection: React.FC = () => {
  const features = [
    {
      title: "Enhanced AI Chatbot Capabilities",
      description: "Smarter responses and deeper integration with advanced NLP tools.",
      highlighted: false,
    },
    {
      title: "Seamless Omni-Channel Communication",
      description: "Connect effortlessly across all customer touchpoints in real time.",
      highlighted: false,
    },
    {
      title: "Advanced CRM Tools",
      description: "Improved lead tracking, customer segmentation, and pipeline management.",
      highlighted: false,
    },
    {
      title: "Custom Automation Templates",
      description: "Pre-built workflows to save time and optimize operations.",
      highlighted: false,
    },
    {
      title: "Interactive Analytics Dashboard",
      description: "Get actionable insights with real-time data visualization.",
      highlighted: false,
    },
    {
      title: "Mobile App Launch",
      description: "Manage your business on the go with our new app for iOS and Android.",
      highlighted: false,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                  feature.highlighted
                    ? "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white"
                    : "bg-white text-gray-900 hover:bg-gradient-to-br hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 hover:text-white border border-gray-100"
                } ${index === 4 ? "md:col-start-2 md:row-start-2" : ""}`}
              >
                {/* Wave Logo Icon */}
                <div className="mb-4">
                  <WaveCircle />
                </div>

                <h3
                  className={`text-lg font-semibold mb-3 transition-colors ${
                    feature.highlighted ? "text-white" : "text-gray-900 group-hover:text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors ${
                    feature.highlighted ? "text-purple-100" : "text-gray-600 group-hover:text-purple-100"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Join the Floworg Devs Community
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesGridSection
