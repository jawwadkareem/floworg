"use client"

import type React from "react"
import { motion } from "framer-motion"
import WaveCircle from "../WaveLogo"
const FloworgSuppliers: React.FC = () => {
  return (
    <section className="py-16 w-full">
      <div className="w-full px-4">
        <div 
          className="rounded-2xl p-8 lg:p-12 w-full"
          style={{
            background: "linear-gradient(135deg, #0f766e, #10b981)",
          }}
        >
          <div className="flex justify-between items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Join the <span className="text-emerald-300">Floworg Suppliers</span>
                </h1>
                <p className="text-lg text-white font-medium">
                  Where Innovation Meets Opportunity
                </p>
              </div>

              <div className="space-y-4 max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white text-base leading-relaxed"
                >
                  Ensure your proposal includes all required details as specified in the tender.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white text-base leading-relaxed"
                >
                  Before submitting, complete the Supplier Registration Form available at the link at the bottom of this page.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white text-base leading-relaxed"
                >
                  Join us in creating efficient, innovative partnerships. Start your submission process today!
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-shrink-0 ml-8"
            >
              <WaveCircle />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloworgSuppliers