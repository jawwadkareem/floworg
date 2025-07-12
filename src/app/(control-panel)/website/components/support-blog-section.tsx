"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Play, Users, Share2, Headphones } from "lucide-react"

const SupportBlogSection: React.FC = () => {
  const categories = [
    { name: "Instant Join", active: false, icon: Users },
    { name: "Screen Sharing", active: true, icon: Share2 },
    { name: "Team Chat", active: false, icon: Users },
    { name: "HD Audio & Video", active: false, icon: Headphones },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            Floworg Tutorial Videos
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-teal-500">Support</span> Blog
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.active
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Screen Sharing Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Screen Sharing</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Readability is of great importance but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or
              desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in
              which toil and pain can procure him some great pleasure.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Share multiple screens at a time and get amazing experience in your team meeting
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">No need for third-party plugins</p>
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1">
              Read more
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SupportBlogSection
