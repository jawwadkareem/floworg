"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Our Goal")

  const tabs = ["Our Mission", "Our Vision", "Our Goal"]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-12">
            <span className="text-blue-500 text-sm font-medium tracking-wide uppercase mb-4 block">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Most useful <span className="bg-yellow-300 px-2 py-1 rounded">features</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">You must need</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-blue-100 text-blue-600 border border-blue-200"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Goal</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We use as filler text for layouts, non-readability is of great importancebut because those who do not
                  know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is
                  there anyone who loves or pursues or desires to obtain. combined with a handful of model sentence
                  structures, to generate.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Responsibility and</h4>
                      <h4 className="font-semibold text-gray-900">Sustainability</h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Competitive</h4>
                      <h4 className="font-semibold text-gray-900">Intelligence</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image with Statistics */}
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/two-young-businessman-having-successful-meeting-restaurant_158595-5247.jpg?t=st=1753520488~exp=1753524088~hmac=4f929620232c705a999637982d46340b386177a20761e628a4b6697f9b4a1178&w=1380"
                alt="Business meeting with statistics"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />

              {/* Statistics Overlays - positioned exactly as in image */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-gray-900">0%</div>
                  <div className="w-4 h-4 bg-pink-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-pink-500 transform rotate-45"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Reduction in time</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white rounded-full p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">92%</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
                {/* Circular progress indicator */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    strokeDasharray="283"
                    strokeDashoffset="28"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
