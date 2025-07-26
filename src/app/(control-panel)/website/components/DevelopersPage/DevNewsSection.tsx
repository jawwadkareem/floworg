"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const DevNewsSection: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const newsletterTypes = [
    {
      id: 1,
      title: "Floworg All Newsletter",
    },
    {
      id: 2,
      title: "Business & Tech Newsletter",
    },
    {
      id: 3,
      title: "Academy Newsletter",
    },
    {
      id: 4,
      title: "Partners Newsletter",
    },
    {
      id: 5,
      title: "Developers Newsletter",
    },
    {
      id: 6,
      title: "HR Newsletter",
    },
  ]

  const benefits = [
    {
      id: 1,
      title: "Stay Ahead of the Curve",
      description: "Get exclusive updates on the latest trends in automation, startups & more",
    },
    {
      id: 2,
      title: "Expert Insights",
      description: "Receive valuable tips and strategies to optimize and grow your business",
    },
    {
      id: 3,
      title: "Be the First to Know",
      description: "Be the first to know about new features, tools, and special offers",
    },
    {
      id: 4,
      title: "Comprehensive Stories",
      description: "Join Your Businesses like yours are thriving with innovative solutions",
    },
  ]

  const handleSubmit = () => {
    if (name && email) {
      alert(`Thank you ${name}! You've been subscribed with email: ${email}`)
      setName("")
      setEmail("")
    }
  }

  return (
    <section>
      {/* Three Benefit Points
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-4">
            {[
              "Discover new features and tools",
              "Get expert tips to grow your business",
              "Be the first to know about exclusive updates and opportunities",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1DD1A1" }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Top Section with Newsletter Signup */}
      <div style={{ backgroundColor: "#4A5568" }} className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-gray-300 text-2xl font-medium">
                Subscribe now and unlock smarter solutions with Floworg!
              </h2>
            </div>

            {/* Main Newsletter Card */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <div className="flex">
                {/* Left Side - Content */}
                <div className="flex-1 p-10" style={{ backgroundColor: "#2D3748" }}>
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base font-medium">
                      <span style={{ color: "#1DD1A1" }}>Floworg</span> Newsletters
                    </span>
                  </div>

                  {/* Main heading */}
                  <div className="mb-10">
                    <h3 className="text-white text-2xl leading-relaxed font-medium">
                      Stay updated,
                      <br />
                      Join the{" "}
                      <span style={{ color: "#1DD1A1" }} className="font-semibold">
                        Floworg
                      </span>{" "}
                      Newsletters now
                    </h3>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4 mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-3 focus:ring-teal-400 text-gray-800 placeholder-gray-500 text-base"
                    />
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-3 focus:ring-teal-400 text-gray-800 placeholder-gray-500 text-base"
                      />
                      <button
                        onClick={handleSubmit}
                        className="px-8 py-3 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "#1DD1A1" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="w-80 flex items-center justify-center p-8" style={{ backgroundColor: "#1DD1A1" }}>
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Professional woman with glasses"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Type Cards Grid */}
            <div className="grid grid-cols-3 gap-6">
              {newsletterTypes.map((newsletter, index) => (
                <motion.div
                  key={newsletter.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 cursor-pointer relative"
                  style={{ backgroundColor: "#1DD1A1" }}
                >
                  {/* White dot indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"></div>

                  {/* Icon container */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="relative">
                      {/* Document icon */}
                      <div className="w-8 h-10 bg-gray-100 rounded-sm shadow-sm relative border border-gray-200">
                        {/* Document lines */}
                        <div className="absolute top-2 left-1.5 right-1.5 space-y-1">
                          <div className="h-0.5 rounded" style={{ backgroundColor: "#1DD1A1" }}></div>
                          <div className="h-0.5 rounded w-3/4" style={{ backgroundColor: "#1DD1A1" }}></div>
                          <div className="h-0.5 rounded w-1/2" style={{ backgroundColor: "#1DD1A1" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-gray-800 font-bold text-sm leading-tight">{newsletter.title}</h4>
                </motion.div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Choosing Newsletters, Your Gateway to Newsletter and Smart Business Solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section with Benefits */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  {/* Check icon */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: "#1DD1A1" }}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DevNewsSection