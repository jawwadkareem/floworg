"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"

const TrustStatisticsSection: React.FC = () => {
  const statistics = [
    { number: "465k", label: "Social Followers", color: "bg-blue-200" },
    { number: "5000+", label: "Happy Clients", color: "bg-pink-200" },
    { number: "756+", label: "Project Done", color: "bg-yellow-200" },
    { number: "100%", label: "Data Satisfaction", color: "bg-blue-300" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">Why Choose us?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-6 leading-tight">
              See why we are trusted the world over
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Streamline workflows with plugins. Fully managed campaigns that support industry benchmarks. Take your
              online content. Build. Apply to our platform and use your annual as required. We integrate strongly with
              your existing systems. Streamline workflows with plugins. Fully managed campaigns that support industry
              benchmarks. Take your online content. Build. Apply to our platform and use your annual as required. We
              integrate strongly with your existing systems. Streamline workflows with plugins. Fully managed campaigns
              that support industry benchmarks. Take your online content. Build. Apply to our platform and use your
              annual as required. We integrate strongly with your existing systems.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                <Download className="w-5 h-5" />
                Download App
              </button>
              <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className={`${stat.color} rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustStatisticsSection
