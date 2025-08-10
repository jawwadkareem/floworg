"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const SupportHeroSection: React.FC = () => {
  const tabs = [
    { id: "support", name: "Support" },
    { id: "tutorials", name: "Tutorial Videos" },
    { id: "knowledge", name: "KnowledgeBase" },
    { id: "features", name: "Features" },
    { id: "integrations", name: "Integrations" },
    { id: "api", name: "API" },
    { id: "devs", name: "Developers" },
    { id: "forum", name: "Forum" },
  ]

  const [activeTab, setActiveTab] = useState("support")

  return (
    <>
      {/* Top Teal Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Support Center</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto">
              Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International
              Standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Submenu Navigation */}
      <header className="relative overflow-hidden">
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-0"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-4 font-medium text-sm md:text-base transition-all duration-300 border-b-2 hover:bg-white/50 ${
                    activeTab === tab.id
                      ? "bg-white text-teal-600 border-teal-500 shadow-sm"
                      : "bg-transparent text-gray-600 border-transparent hover:text-gray-800"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tab.name}
                  </motion.span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeSupportTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Active Tab Info */}
        <div className="bg-white py-2">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <span className="text-sm text-gray-500">
                Currently viewing:{" "}
                <span className="font-semibold text-teal-600">
                  {tabs.find((tab) => tab.id === activeTab)?.name}
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  )
}

export default SupportHeroSection
