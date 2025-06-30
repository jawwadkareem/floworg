"use client"

import type React from "react"
import { motion } from "framer-motion"

const SupportHeroSection: React.FC = () => {
  const navigationTabs = [
    { name: "Support", active: true },
    { name: "Tutorial Videos", active: false },
    { name: "KnowledgeBase", active: false },
    { name: "Features", active: false },
    { name: "Integrations", active: false },
    { name: "API", active: false },
    { name: "Developers", active: false },
    { name: "Forum", active: false },
  ]

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto">
            Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International
            Standards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4"
        >
          {navigationTabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tab.active
                  ? "bg-white text-teal-600 shadow-lg"
                  : "bg-teal-400 text-white hover:bg-white hover:text-teal-600"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SupportHeroSection
