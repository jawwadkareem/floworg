"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Layers, Zap, ShoppingCart, Box, Database } from "lucide-react"

const FlowIntegrationsSection: React.FC = () => {
  const sidebarItems = [
    { icon: Layers, label: "Channels" },
    { icon: Zap, label: "Flow builder" },
    { icon: ShoppingCart, label: "Ecommerce" },
    { icon: Box, label: "Automation" },
    { icon: Database, label: "Integration" },
    { icon: Zap, label: "Flow builder" },
    { icon: ShoppingCart, label: "Ecommerce" },
    { icon: Box, label: "Automation" },
    { icon: Database, label: "Integration" },
  ]

  const integrations = [
    {
      id: 1,
      name: "Procreate integration",
      icon: "🎨",
      bgColor: "bg-gray-900",
    },
    {
      id: 2,
      name: "Github integration",
      icon: "🐙",
      bgColor: "bg-gray-900",
    },
    {
      id: 3,
      name: "Slack integration",
      icon: "💬",
      bgColor: "bg-blue-500",
    },
    {
      id: 4,
      name: "Intercom integration",
      icon: "💬",
      bgColor: "bg-blue-400",
    },
    {
      id: 5,
      name: "Google Drive integration",
      icon: "📁",
      bgColor: "bg-green-500",
    },
    {
      id: 6,
      name: "Jira integration",
      icon: "🔷",
      bgColor: "bg-blue-600",
    },
    {
      id: 7,
      name: "Invision integration",
      icon: "🎯",
      bgColor: "bg-pink-500",
    },
    {
      id: 8,
      name: "Dropbox integration",
      icon: "📦",
      bgColor: "bg-blue-700",
    },
    {
      id: 9,
      name: "Mailchimp integration",
      icon: "🐵",
      bgColor: "bg-yellow-500",
    },
    {
      id: 10,
      name: "Asana integration",
      icon: "⭐",
      bgColor: "bg-red-500",
    },
    {
      id: 11,
      name: "WordPress integration",
      icon: "📝",
      bgColor: "bg-blue-600",
    },
    {
      id: 12,
      name: "Figma integration",
      icon: "🎨",
      bgColor: "bg-purple-500",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-1">
              {sidebarItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <span style={{ color: "#1DD1A1" }}>Floworg</span> Integrations
              </h2>
            </motion.div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${integration.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white text-xl">{integration.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Work faster and smarter by integrating directly with procreate, right in the app.
                    </p>
                  </div>

                  {/* View Integration Link */}
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    View integration
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlowIntegrationsSection
