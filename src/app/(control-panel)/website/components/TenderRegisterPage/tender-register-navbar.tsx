"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface TenderTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface TenderApplicationNavbarProps {
  tabs?: TenderTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const TenderApplicationNavbar: React.FC<TenderApplicationNavbarProps> = ({
  tabs = [
    { id: "floworg-services", name: "Floworg Services" },
    { id: "active-tender", name: "Active Tender" },
    { id: "supplier-registration", name: "Supplier Registration" },
    { id: "tenders-newsletter", name: "Tenders Newsletter" },
    { id: "faq", name: "FAQ" },
  ],
  onTabChange,
  defaultActiveTab = "active-tender",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active tender tab changed to: ${tabId}`)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Tender Navigation Tabs */}
      <header className="relative overflow-hidden">
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
                      layoutId="activeTenderTabIndicator"
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
            tender application form in English only. The more details you provide, the better we can assess your suitability
            for the tender. Highlight your qualifications, experience, and relevant documentation to strengthen your application.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default TenderApplicationNavbar