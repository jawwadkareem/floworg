"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface AffiliateTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface AffiliateNavbarProps {
  tabs?: AffiliateTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const AffiliateNavbar: React.FC<AffiliateNavbarProps> = ({
  tabs = [
    { id: "overview", name: "Overview" },
    { id: "referral-program", name: "Referral Program" },
    { id: "developers-program", name: "Developers Program" },
    { id: "private-label", name: "Private Label" },
    { id: "partners-program", name: "Partners Program" },
  ],
  onTabChange,
  defaultActiveTab,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab || tabs[0]?.id || "")

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active affiliate tab changed to: ${tabId}`)
  }

  return (
    <header className={`relative overflow-hidden bg-white border-b border-gray-200 ${className}`}>
      {/* Affiliate Navigation Tabs */}
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
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 rounded-full border relative ${
                activeTab === tab.id
                  ? "bg-teal-500 text-white border-teal-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-teal-300 hover:text-teal-600"
              }`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                {activeTab === tab.id && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {tab.name}
              </motion.span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeAffiliateTabIndicator"
                  className="absolute inset-0 bg-teal-500 rounded-full -z-10"
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

export default AffiliateNavbar
