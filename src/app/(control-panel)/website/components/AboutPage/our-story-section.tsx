"use client"

import type React from "react"
import { motion } from "framer-motion"

const OurStorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2020 in Jakarta, HAtchat was developed to simplify customer communication. Recognizing the need
              for intelligent chatbots, our founders aimed to create a solution that learns from interactions. Today,
              HAtchat is a trusted partner for businesses, enhancing customer experiences across various industries.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://t3.ftcdn.net/jpg/01/98/20/14/240_F_198201445_UNwLbr17cZEL2tbeeyBRwafaKtQ6rZ0C.jpg"
              alt="Modern building architecture"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStorySection
