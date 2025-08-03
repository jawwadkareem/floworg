"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface AboutTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface AboutNavbarProps {
  tabs?: AboutTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const AboutNavbar: React.FC<AboutNavbarProps> = ({
  tabs = [
    { id: "about", name: "About" },
    { id: "our-vision", name: "Our Vision" },
    { id: "our-core-values", name: "Our Core Values" },
    { id: "business-first", name: "Business First" },
    { id: "faq", name: "FAQ" },
  ],
  onTabChange,
  defaultActiveTab = "about",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active about tab changed to: ${tabId}`)
  }

  return (
    <header className={`relative overflow-hidden ${className}`}>
      {/* About Navigation Tabs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-0"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-4 font-medium text-sm md:text-base transition-all duration-300 border-b-2 hover:bg-white/50 ${
                  activeTab === tab.id
                    ? "bg-white text-teal-600 border-teal-500 shadow-sm"
                    : "bg-transparent text-gray-600 border-transparent hover:text-gray-800"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {tab.name}
                </motion.span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeAboutTabIndicator"
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

      {/* Active Tab Content Indicator */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4">
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
  )
}

export default AboutNavbar