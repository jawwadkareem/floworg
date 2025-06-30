"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Star } from "lucide-react"

const GettingStartedSection: React.FC = () => {
  const benefits = [
    {
      title: "Enhanced Productivity",
      description:
        "Streamline tasks and workflows with automation, allowing teams to focus on high-value work and achieve better efficiency.",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily connect with your favorite tools and apps ensuring smooth data flow and improved operational efficiency.",
    },
    {
      title: "Robust Security",
      description:
        "Protect sensitive data with advanced encryption, multi-layer security protocols, and real-time monitoring.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "Grow your business with solutions that adapt to your needs as you scale, with a leader set for the demands.",
    },
    {
      title: "Real-Time Insights",
      description:
        "Gain valuable data-driven insights instantly to make informed decisions and improve strategic that feel a reader will be distracted.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce operational expenses with optimized processes and automation, maximizing your return on investment.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Getting Started Guide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-yellow-50 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">Haven't Started Yet?</h2>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Here's Your Step-by-Step Guide to Independent Setup
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you haven't started yet – this is the perfect time to begin smart, simple, and strong. Planning is a
              brilliant start to the power of accessible automation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              That's why we created an independent setup guide that lets you launch at your own pace without
              compromising on quality, results, or support.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">Resources</div>
                <div className="text-sm text-gray-500">Available</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">Guides</div>
                <div className="text-sm text-gray-500">Step-by-step</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">Support</div>
                <div className="text-sm text-gray-500">24/7 Available</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">Updates</div>
                <div className="text-sm text-gray-500">Regular</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GettingStartedSection
