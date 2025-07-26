"use client"

import type React from "react"
import { motion } from "framer-motion"

const TrustedCompaniesSection: React.FC = () => {
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Trusted by Leading Companies</h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Amazon Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
             <span className="text-2xl font-normal text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                Amazon
              </span>
            </motion.div>

            {/* Google Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <span className="text-2xl font-normal text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                Google
              </span>
            </motion.div>

            {/* Lenovo Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <span className="text-2xl font-normal text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                Lenovo
              </span>
            </motion.div>

            {/* PayPal Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <div className="w-6 h-6 mr-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a.641.641 0 0 1 .633.74l-2.107 13.696a.641.641 0 0 1-.633.547h-4.606a.641.641 0 0 1-.633-.74l2.107-13.696a.641.641 0 0 1 .633-.547h4.606z" />
                  </svg>
                </div>
                <span className="text-xl font-normal">PayPal</span>
              </div>
            </motion.div>

            {/* Shopify Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <div className="w-5 h-5 mr-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.337 2.368c-.332-.066-.663-.066-.995 0-1.328.265-2.656.795-3.651 1.59-.995.795-1.658 1.855-1.658 3.18v.265c-1.328.265-2.323 1.325-2.323 2.65v9.54c0 1.325.995 2.385 2.323 2.65h9.54c1.328-.265 2.323-1.325 2.323-2.65v-9.54c0-1.325-.995-2.385-2.323-2.65v-.265c0-1.325-.663-2.385-1.658-3.18-.995-.795-2.323-1.325-3.651-1.59z" />
                  </svg>
                </div>
                <span className="text-xl font-normal">shopify</span>
              </div>
            </motion.div>

            {/* Spotify Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <div className="w-6 h-6 mr-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <span className="text-xl font-normal">Spotify</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedCompaniesSection
