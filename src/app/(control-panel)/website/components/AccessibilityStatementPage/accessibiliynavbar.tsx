"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export interface FeatureTab {
  id: string
  name: string
  description?: string
  active?: boolean
}

export interface AccessibilityNavbarProps {
  tabs?: FeatureTab[]
  onTabChange?: (tabId: string) => void
  defaultActiveTab?: string
  className?: string
}

const AccessibilityNavbar: React.FC<AccessibilityNavbarProps> = ({
  tabs = [
    { id: "introduction", name: "Introduction" },
    { id: "website-use", name: "Website Use" },
    { id: "privacy-ip", name: "Privacy & IP" },
    { id: "payments", name: "Payments" },
    { id: "liability-updates", name: "Liability & Updates" },
    { id: "contact-law", name: "Contact & Law" },
    { id: "faq", name: "FAQ" },
  ],
  onTabChange,
  defaultActiveTab,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab || tabs[0]?.id || "")

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
    console.log(`Active accessibility tab changed to: ${tabId}`)
  }

  return (
    <header className={`relative overflow-hidden bg-white border-b border-gray-200 ${className}`}>
      {/* Accessibility Navigation Tabs */}
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
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 rounded-full border ${
                activeTab === tab.id
                  ? "bg-teal-500 text-white border-teal-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-teal-300 hover:text-teal-600"
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
                  layoutId="activeAccessibilityTabIndicator"
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

export default AccessibilityNavbar
