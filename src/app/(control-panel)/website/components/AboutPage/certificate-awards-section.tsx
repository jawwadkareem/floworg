"use client"

import type React from "react"
import { motion } from "framer-motion"

const CertificatesAwardsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="inline-block border-2 border-blue-300 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              WHY HAICHAT?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Certificates & <span className="text-blue-500">Awards</span>
          </h2>
          <p className="text-gray-600 mb-12">HAtchat's achievements reflect our commitment to quality.</p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Gold Most Trusted 2023 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex flex-col items-center justify-center text-white text-center p-2 shadow-lg">
                <div className="text-xs font-bold mb-1">GOLD</div>
                <div className="text-xs font-bold leading-tight">MOST</div>
                <div className="text-xs font-bold leading-tight">TRUSTED</div>
                <div className="text-xs mt-1">2023</div>
              </div>
            </motion.div>

            {/* Top Service Engage 2024 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Top Service</div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold mb-2">ENGAGE</div>
                  <div className="text-2xl font-bold text-orange-500">2024</div>
                </div>
              </div>
            </motion.div>

            {/* Top Support 2023 - Diamond Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700 transform rotate-45 rounded-lg shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white transform -rotate-45">
                    <div className="text-xs font-bold leading-tight">TOP</div>
                    <div className="text-xs font-bold leading-tight">SUPPORT</div>
                    <div className="text-xs mt-1">2023</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Business Growth 2024 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Top Business</div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold mb-2">GROWTH</div>
                  <div className="text-2xl font-bold text-blue-500">2024</div>
                </div>
              </div>
            </motion.div>

            {/* Gold Client Centric 2024 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex flex-col items-center justify-center text-white text-center p-2 shadow-lg">
                <div className="text-xs font-bold mb-1">GOLD</div>
                <div className="text-xs font-bold leading-tight">CLIENT</div>
                <div className="text-xs font-bold leading-tight">CENTRIC</div>
                <div className="text-xs mt-1">2024</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificatesAwardsSection
