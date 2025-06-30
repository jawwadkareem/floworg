"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

const NewsUpdatesSection: React.FC = () => {
  const technicalNews = [
    {
      title: "Great News Most Exciting Updates Coming Soon!",
      description: "Feature: add filters in live chat messages, allow to filter by message type and sent by",
      date: "FEATURES • 6 HOURS AGO",
      status: "new",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Feature: add an endpoint to list installed mini apps and update api key for installed mini app",
      date: "API • 1 DAYS AGO",
      status: "updated",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Feature: add trial_days in partner create workspace api",
      date: "API • 1 DAYS AGO",
      status: "new",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Feature: add WhatsApp Reaction Trigger",
      date: "BOT • 1 DAYS AGO 23:30",
      status: "new",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Feature: add Facebook, Instagram Reaction Trigger",
      date: "BOT • 1 DAYS AGO 23:30",
      status: "new",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ]

  const issueLog = [
    {
      title: "Great News! Unknown Issue",
      description: "Feature: add filters in live chat messages, allow to filter by message type and sent by",
      date: "FEATURES • 6 HOURS AGO",
      status: "resolved",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Feature: add an endpoint to list installed mini apps and update api key for installed mini app",
      date: "API • 1 DAYS AGO",
      status: "investigating",
      icon: AlertCircle,
      color: "text-red-500",
    },
    {
      title: "Feature: add trial_days in partner create workspace api",
      date: "API • 1 DAYS AGO",
      status: "monitoring",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Feature: add WhatsApp Reaction Trigger",
      date: "BOT • 1 DAYS AGO 23:30",
      status: "resolved",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical News */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical News</h2>
              <p className="text-gray-600 mb-8">Great News Most Exciting Updates Coming Soon!</p>

              <div className="space-y-4">
                {technicalNews.map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <news.icon className={`w-5 h-5 ${news.color} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{news.title}</h4>
                      {news.description && <p className="text-gray-600 text-xs mb-2">{news.description}</p>}
                      <p className="text-gray-400 text-xs">{news.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Issue Log */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Issue Log</h2>
              <p className="text-gray-600 mb-8">Great News! Unknown Issue</p>

              <div className="space-y-4">
                {issueLog.map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <issue.icon className={`w-5 h-5 ${issue.color} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{issue.title}</h4>
                      {issue.description && <p className="text-gray-600 text-xs mb-2">{issue.description}</p>}
                      <p className="text-gray-400 text-xs">{issue.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdatesSection
