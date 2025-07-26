"use client"

import type React from "react"
import { motion } from "framer-motion"

const PowerfulFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "📊",
      title: "Unlimited Dashboard",
      description:
        "Our offer of unlimited dashboard will help you to manage your page exactly the way you can think of.",
    },
    {
      icon: "✏️",
      title: "Easily Add New Projects",
      description:
        "You can easily add a clean and beautifully designed project to match your corporate visual identity.",
    },
    {
      icon: "🎯",
      title: "Track Anything",
      description:
        "The tracking facility gives you the clue what you should do and what you should not do in terms of growing your online business.",
    },
    {
      icon: "⚙️",
      title: "Manage Complex Workflows",
      description:
        "Well organized and powerful admin panel gives you a simple way to manage complex workflows and increases lucidity on projects.",
    },
    {
      icon: "🔒",
      title: "Secure Your Data",
      description: "Index can comply with the best data securing plugins that are available on the market.",
    },
    {
      icon: "📈",
      title: "See Progress Across Projects",
      description: "You can easily use any kind of analytical tools to analyze data about your Web traffic.",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            For easier product marketing campaign Index comes with 4 different, stunning product landing pages that can
            be used as marketing, sales or the front page of a product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PowerfulFeaturesSection
