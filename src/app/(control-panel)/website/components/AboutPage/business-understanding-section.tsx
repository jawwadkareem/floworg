"use client"

import type React from "react"
import { motion } from "framer-motion"

const BusinessUnderstandingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-700 via-teal-600 to-green-600 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            We start with understanding business
            <br />
            only then comes the technology
          </h2>

          <p className="text-lg mb-8 font-medium">
            That's our main differentiator, and it's what leads to exceptional results.
          </p>

          <div className="mb-8 leading-relaxed text-base">
            <p className="mb-4">We don't simply implement technology – we first understand the business.</p>
            <p className="mb-4">
              At Floworg, everyone involved in the process brings rich business experience
              <br />
              and a deep understanding of business models, sales processes, marketing, customer service, and more.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg mb-2">So when asking – "Why Floworg?"</p>
            <p className="text-lg font-semibold">The bottom line is simple: results.</p>
          </div>

          {/* Statistics Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-700 bg-opacity-50 rounded-3xl p-8 mb-8 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="text-2xl md:text-3xl">
                <span className="text-green-400 font-bold">30%</span>
                <span className="text-white"> increase in sales revenue</span>
              </div>
              <div className="text-2xl md:text-3xl">
                <span className="text-green-400 font-bold">70%</span>
                <span className="text-white"> reduction in operational time</span>
              </div>
              <div className="text-2xl md:text-3xl">
                <span className="text-green-400 font-bold">98%</span>
                <span className="text-white"> customer satisfaction in projects</span>
              </div>
            </div>
          </motion.div>

          <div className="mb-8">
            <p className="text-lg mb-4">And that's just part of what sets us apart.</p>
            <p className="text-lg">All of this combined is what creates Floworg's unique edge in the market.</p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessUnderstandingSection
