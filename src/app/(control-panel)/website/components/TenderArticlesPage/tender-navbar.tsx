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

export interface TenderNavbarProps {
  tabs?: TenderTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const TenderNavbar: React.FC<TenderNavbarProps> = ({
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
                    layoutId="activeTenderTabIndicator"
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
    </div>
  )
}

export default TenderNavbar