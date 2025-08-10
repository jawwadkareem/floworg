"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Star } from "lucide-react"

const GettingStartedSection: React.FC = () => {
  const tags = [
    "Productivity",
    "Automation",
    "Performance",
    "Integration",
    "Security",
    "Insights",
    "Support",
    "Efficiency",
  ]

  const benefits = [
    {
      title: "Enhanced Productivity",
      description:
        "Streamline tasks and workflows with automation, allowing teams to focus on high-value work and achieve better efficiency.",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily connect with your favorite tools and apps, ensuring smooth data flow and improved operational efficiency.",
    },
    {
      title: "Robust Security",
      description:
        "Protect sensitive data with advanced encryption, multi-layer security protocols, and real-time monitoring.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "Grow your business without limitations – our solutions adapt to your needs as you expand.",
    },
    {
      title: "Real-Time Insights",
      description:
        "Gain valuable data-driven insights instantly to make informed decisions and improve strategy.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce operational expenses with optimized processes and automation, maximizing your return on investment.",
    },
  ]

  return (
    <section className="py-16" style={{ backgroundColor: "#F6F6E7" }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Haven’t Started Yet? <br />
              Here’s Your Step-by-Step <br />
              Guide to Independent Setup
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed font-medium">
              If you haven’t started yet – this is the perfect time to begin smart, simple, and strong.
              At Flowguy AI, we believe in the power of accessible automation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
              That’s why we created an independent setup path that lets you launch at your own pace without
              compromising on quality, results, or support.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-white rounded-full border border-gray-300 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative star at top right */}
            <Star className="w-6 h-6 text-green-700 absolute -top-8 right-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GettingStartedSection
