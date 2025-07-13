"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, CheckCircle } from "lucide-react"

const AcademyNewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("")

  const features = [
    {
      id: 1,
      title: "Certification of Completion",
    },
    {
      id: 2,
      title: "Hands-On Practical Learning",
    },
    {
      id: 3,
      title: "Community-Based Support",
    },
    {
      id: 4,
      title: "Full Access to Updated Courses",
    },
    {
      id: 5,
      title: "Q&A Webinars with Experts",
    },
    {
      id: 6,
      title: "High-Quality Digital Lessons",
    },
  ]

  const handleSubmit = () => {
    if (email) {
      alert(`Thank you! You've been subscribed with email: ${email}`)
      setEmail("")
    }
  }

  return (
    <section className="py-16" style={{ backgroundColor: "#4A5568" }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Newsletter Card */}
          <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <div className="flex">
              {/* Left Side - Content */}
              <div className="flex-1 p-10" style={{ backgroundColor: "#2D3748" }}>
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#1DD1A1" }}
                  >
                    <FileText className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white text-base font-medium">
                    <span style={{ color: "#1DD1A1" }}>Floworg</span> Academy Newsletter
                  </span>
                </div>

                {/* Main heading */}
                <div className="mb-10">
                  <h2 className="text-white text-3xl leading-relaxed font-medium">
                    Stay updated on new courses,
                    <br />
                    Join the{" "}
                    <span style={{ color: "#1DD1A1" }} className="font-semibold">
                      Floworg
                    </span>{" "}
                    Academy newsletter now.
                  </h2>
                </div>

                {/* Decorative Arrow */}
                <div className="relative mb-6">
                  <svg className="absolute -top-8 left-8" width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <path
                      d="M10 30 Q20 10 40 20 L35 15 M40 20 L35 25"
                      stroke="#1DD1A1"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Email form */}
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-3 focus:ring-teal-400 text-gray-800 placeholder-gray-500 text-base"
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "#1DD1A1" }}
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="w-96 flex items-center justify-center p-10" style={{ backgroundColor: "#1DD1A1" }}>
                <div className="w-56 h-56 rounded-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Professional woman with glasses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1DD1A1" }}
              >
                {/* Icon container */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="relative">
                    {/* Document icon */}
                    <div className="w-10 h-12 bg-gray-100 rounded-sm shadow-sm relative border border-gray-200">
                      {/* Document lines */}
                      <div className="absolute top-2 left-1.5 right-1.5 space-y-1">
                        <div className="h-0.5 rounded" style={{ backgroundColor: "#1DD1A1" }}></div>
                        <div className="h-0.5 rounded w-3/4" style={{ backgroundColor: "#1DD1A1" }}></div>
                        <div className="h-0.5 rounded w-1/2" style={{ backgroundColor: "#1DD1A1" }}></div>
                        <div className="h-0.5 rounded w-2/3" style={{ backgroundColor: "#1DD1A1" }}></div>
                      </div>
                    </div>
                    {/* Check circle */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 font-bold text-base leading-tight">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademyNewsletterSection
