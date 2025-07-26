"use client"

import type React from "react"
import { motion } from "framer-motion"

const MarketingToolsSection: React.FC = () => {
  const topFeatures = [
    {
      icon: "📢",
      title: "AI Marketing Automation",
      description:
        "Save time and boost efficiency with AI-driven automation that optimizes your marketing campaigns, streamlines workflows.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: "📊",
      title: "Real-Time Data & Analytics",
      description:
        "Gain deep insights into your marketing performance with real-time tracking & detailed analytics, helping you make data-driven decisions to improve results.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  const bottomFeatures = [
    {
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect easily with your favorite tools, including CRM, email platforms, social media.",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: "📈",
      title: "User-Friendly & Scalable",
      description: "Whether you're a beginner or an expert, our intuitive is designed to grow with your business.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: "🏆",
      title: "Proven Results & High ROI",
      description: "Our tools have helped thousands of businesses increase leads, improve conversions.",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Provide Powerful, Easy-to-use Marketing Tools for All
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our powerful yet easy-to-use platform helps you automate campaigns, analyze performance, and drive better
            results—effortlessly. Unlock the full potential of your business.
          </p>
        </motion.div>

        {/* Top Row - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {topFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-2xl p-8 relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center ${feature.iconColor} text-2xl mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-2 p-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {bottomFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-2xl p-8 relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center ${feature.iconColor} text-2xl mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="grid grid-cols-3 gap-2 p-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketingToolsSection
