"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface CareerTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface CareerApplicationNavbarProps {
  tabs?: CareerTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const CareerApplicationNavbar: React.FC<CareerApplicationNavbarProps> = ({
  tabs = [
    { id: "careers-at-floworg", name: "Careers at Floworg" },
    { id: "open-positions", name: "Open Positions" },
    { id: "career-application", name: "Career Application" },
    { id: "careers-newsletter", name: "Careers Newsletter" },
    { id: "faq", name: "FAQ" },
  ],
  onTabChange,
  defaultActiveTab = "career-application",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active career tab changed to: ${tabId}`)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Navigation Header */}
      <header className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-6 py-3 font-medium text-sm transition-all duration-300 rounded-full border ${
                  activeTab === tab.id
                    ? "bg-white text-gray-700 border-gray-400 shadow-sm"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  {tab.name}
                  {activeTab === tab.id && <span className="w-2 h-2 bg-teal-500 rounded-full"></span>}
                </motion.span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeCareerTabIndicator"
                    className="absolute inset-0 bg-white border-gray-400 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Instruction Background Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gray-700 text-white py-4"
      >
        <div className="container mx-auto px-4">
          <p className="text-sm leading-relaxed">
            <span className="font-medium">Application Instructions:</span> Please fill out all relevant sections of the
            application form in English only. The more details you provide, the better we can assess your suitability
            for the position. Highlight your skills, experiences, and achievements to strengthen your application.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default CareerApplicationNavbar
