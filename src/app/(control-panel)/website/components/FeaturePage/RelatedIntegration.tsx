"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const RelatedIntegrationsSection: React.FC = () => {
  const integrations = [
    {
      id: 1,
      name: "Floworg Integration",
      description: "Seamlessly integrate Floworg directly into your workflow for enhanced productivity.",
      icon: () => (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
      ),
      link: "View Integration",
    },
    {
      id: 2,
      name: "Slack Integration",
      description: "Connect your team by integrating directly with Slack for real-time updates.",
      icon: () => (
        <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
              fill="#E01E5A"
            />
            <path
              d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"
              fill="#36C5F0"
            />
            <path
              d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"
              fill="#2EB67D"
            />
            <path
              d="M18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834z"
              fill="#ECB22E"
            />
            <path
              d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52z"
              fill="#E01E5A"
            />
          </svg>
        </div>
      ),
      link: "View Integration",
    },
    {
      id: 3,
      name: "Google Drive Integration",
      description: "Sync and manage your files seamlessly with Google Drive integration for better collaboration.",
      icon: () => (
        <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12.01 2L22 20H2L12.01 2Z" fill="#0F9D58" />
            <path d="M12.01 2L22 20H2L12.01 2Z" fill="#0F9D58" />
            <path d="M12.01 2L22 20H2L12.01 2Z" fill="#0F9D58" />
          </svg>
        </div>
      ),
      link: "View Integration",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Integrations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect your tools, connect your teams. With over 120 apps already available in our directory, your team's
            favorite tools are just a click away.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-4">
                <integration.icon />
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{integration.description}</p>
              </div>

              {/* Link */}
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:underline flex items-center gap-2 text-sm">
                  {integration.link}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedIntegrationsSection
