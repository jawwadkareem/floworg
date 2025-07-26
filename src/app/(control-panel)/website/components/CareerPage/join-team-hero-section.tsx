"use client"

import type React from "react"
import { motion } from "framer-motion"

const JoinTeamHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative">
          {/* Decorative Wave Icon */}
          <div className="absolute top-0 right-8 opacity-20">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-white">
              <path
                d="M20 40C20 40 40 20 60 40C80 60 100 40 100 40"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M30 50C30 50 50 30 70 50C90 70 110 50 110 50"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Join the{" "}
              <span className="text-teal-300 bg-gradient-to-r from-teal-300 to-teal-200 bg-clip-text text-transparent">
                Floworg Team
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium mb-8 text-teal-100">Where Innovation Meets Opportunity</h2>

            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-teal-50">
              <p className="font-medium">Looking for an exciting career with a global impact?</p>
              <p>
                At Floworg, we're shaping the future of business with cutting-edge technological solutions in
                automation, CRM, AI, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JoinTeamHeroSection
