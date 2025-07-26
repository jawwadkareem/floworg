"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface SupportTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface SupportNavbarProps {
  tabs?: SupportTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const SupportNavbar: React.FC<SupportNavbarProps> = ({
  tabs = [
    { id: "support", name: "Support" },
    { id: "tutorial-videos", name: "Tutorial Videos" },
    { id: "knowledgebase", name: "KnowledgeBase" },
    { id: "features", name: "Features" },
    { id: "integrations", name: "Integrations" },
    { id: "api", name: "API" },
    { id: "developers", name: "Developers" },
    { id: "forum", name: "Forum" },
  ],
  onTabChange,
  defaultActiveTab = "developers",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active support tab changed to: ${tabId}`)
  }

  return (
    <header className={`relative overflow-hidden bg-gray-100 border-b border-gray-200 ${className}`}>
      {/* Support Navigation Tabs */}
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
                  layoutId="activeSupportTabIndicator"
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
  )
}

export default SupportNavbar
