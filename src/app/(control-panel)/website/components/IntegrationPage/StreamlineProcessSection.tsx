"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import IntegrationNavbarHeader from "./IntegrationNavbarHeader"

const StreamlineProcessesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("integrations")

  const platformIcons = [
    {
      name: "Google",
      icon: "https://api.iconify.design/logos:google-icon.svg",
      color: "#4285F4",
    },
    {
      name: "Microsoft",
      icon: "https://api.iconify.design/logos:microsoft-icon.svg",
      color: "#00A4EF",
    },
    {
      name: "Apple",
      icon: "https://api.iconify.design/logos:apple.svg",
      color: "#000000",
    },
    {
      name: "Slack",
      icon: "https://api.iconify.design/logos:slack-icon.svg",
      color: "#4A154B",
    },
    {
      name: "Sketch",
      icon: "https://api.iconify.design/logos:sketch.svg",
      color: "#F7B500",
    },
    {
      name: "Swift",
      icon: "https://api.iconify.design/logos:swift.svg",
      color: "#FA7343",
    },
    {
      name: "Zapier",
      icon: "https://api.iconify.design/logos:zapier-icon.svg",
      color: "#FF4A00",
    },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      {/* Integration Navbar Header */}
      <IntegrationNavbarHeader
        onTabChange={handleTabChange}
        defaultActiveTab={activeTab}
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Content */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Streamline your processes with
                <br />
                integrated <span style={{ color: "#4F46E5" }}>solutions</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Connect your favorite tools and automate workflows to boost productivity. Our
                <br />
                integrated solutions enhance efficiency and productivity by connecting your
                <br />
                favorite tools effortlessly. Get started today.
              </p>
            </div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8 flex-wrap"
            >
              {platformIcons.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={platform.icon || "/placeholder.svg"} alt={platform.name} className="w-10 h-10" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StreamlineProcessesSection