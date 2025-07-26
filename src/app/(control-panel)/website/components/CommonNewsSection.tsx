"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const CommonNewsSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    if (name && email) {
      alert(`Thank you ${name}! You've been subscribed with email: ${email}`)
      setName("")
      setEmail("")
    }
  }

  return (
    <section style={{ backgroundColor: "#4A5568" }} className="py-16">
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
          <div className="rounded-2xl overflow-hidden shadow-2xl">
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
        </motion.div>
      </div>
    </section>
  )
}

export default CommonNewsSection