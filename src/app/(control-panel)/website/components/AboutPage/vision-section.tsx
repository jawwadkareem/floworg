"use client"

import type React from "react"
import { motion } from "framer-motion"

const VisionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-teal-600 to-green-500 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            "To empower businesses to achieve peak efficiency and profitability through innovative automation solutions"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection
