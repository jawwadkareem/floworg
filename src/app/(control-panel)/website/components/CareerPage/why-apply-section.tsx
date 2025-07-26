"use client"

import type React from "react"
import { motion } from "framer-motion"

const WhyApplySection: React.FC = () => {
  const features = [
    {
      icon: "🔗",
      title: "Connected",
      description:
        "We connect with our clients across multiple time zones, ensuring seamless communication and collaboration. Our team is available to support your business needs and objectives.",
      bgColor: "bg-teal-50",
    },
    {
      icon: "🤝",
      title: "Inclusive",
      description:
        "Our diverse culture embraces diversity of our people and perspectives. We believe that different backgrounds and experiences lead to better solutions and innovation.",
      bgColor: "bg-blue-50",
    },
    {
      icon: "⚡",
      title: "Flexible",
      description:
        "We believe in work-life balance to deliver better and faster results. Our flexible work arrangements allow you to perform at your best while maintaining personal well-being.",
      bgColor: "bg-green-50",
    },
    {
      icon: "🎯",
      title: "Persuasion",
      description:
        "We have the ability to influence and persuade others through compelling communication. Our team excels at presenting ideas and solutions that drive positive outcomes.",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
            Why You Should Consider Applying
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're lively, not corporate. We have the energy and boldness of a start-up and the expertise and pragmatism
            of a scale-up. All in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyApplySection
