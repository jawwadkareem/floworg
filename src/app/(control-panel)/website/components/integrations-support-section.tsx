"use client"

import type React from "react"
import { motion } from "framer-motion"
import IntegrationsSection from "./IntegrationsSection"

const IntegrationsSupportSection: React.FC = () => {
  const integrationIcons = [
    "🔗",
    "📊",
    "💬",
    "📧",
    "🛒",
    "📱",
    "💳",
    "🎯",
    "📈",
    "🔔",
    "⚡",
    "🎨",
    "📋",
    "🔒",
    "☁️",
    "🚀",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 w-full">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Over 9,000 Leading Integrations</h2>
          <p className="text-xl text-gray-600 mb-6">One-Click To Integration with Favorite Apps and Tools</p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Save time through integrations, streamlining processes and connecting all of your best applications.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1">
            Explore Integrations
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative w-96 h-96 mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold text-sm">Get Started</div>
              <div className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm mt-2">Customize</div>
            </div>

            {integrationIcons.map((icon, index) => {
              const angle = (index * 360) / integrationIcons.length
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {icon}
                </motion.div>
              )
            })}
          </div>
        </motion.div> */}
<IntegrationsSection/>
        {/* Remote Connection App */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Remote Connection App</h3>
          <p className="text-gray-600 mb-8">Need Assistance? We're Here for You!</p>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter Session ID"
              className="w-full px-6 py-4 border border-gray-300 rounded-full text-center text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
              CONNECT
            </button>
          </div>
        </motion.div>

        {/* Create Ticket Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Creat a New Ticket
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default IntegrationsSupportSection
