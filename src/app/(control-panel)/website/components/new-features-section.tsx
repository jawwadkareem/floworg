"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Globe, Brain, BarChart3, MessageCircle, Rocket, Shield, Zap, Users } from "lucide-react"
import { useState } from "react"

const NewFeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 3 // how many cards visible at once

  const features = [
    { icon: Globe, title: "Multi-Language Support", description: "Connect with global users with auto-translated messages, ensuring smooth conversations in multiple languages.", color: "bg-blue-500" },
    { icon: Brain, title: "AI Training Center", description: "Continuously improve your chatbot's intelligence, advanced AI from deployment for better interactions.", color: "bg-purple-500" },
    { icon: BarChart3, title: "Personal Customer Insights", description: "Gain valuable insights with AI that learns customer preferences, providing engaging support experiences.", color: "bg-teal-500" },
    { icon: MessageCircle, title: "Instant Messaging", description: "Engage in real-time chats with customers through integrated instant messaging tools.", color: "bg-green-500" },
    { icon: Rocket, title: "Fast Deployment", description: "Set up and deploy your chatbot in minutes, no coding required.", color: "bg-orange-500" },
    { icon: Shield, title: "Secure Conversations", description: "Protect customer data with end-to-end encryption for all messages.", color: "bg-red-500" },
    { icon: Zap, title: "Quick Responses", description: "Automate replies for frequently asked questions to improve response time.", color: "bg-yellow-500" },
    { icon: Users, title: "Team Collaboration", description: "Allow multiple agents to manage and respond to customer queries together.", color: "bg-pink-500" },
  ]

  const nextSlide = () => {
    if (currentIndex + cardsPerView < features.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-teal-500">New</span> Features
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Refine chatbot intelligence through continuous learning and customization options
          </p>
        </motion.div>

        {/* Carousel with arrows */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full shadow-md shrink-0 ${currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            ◀
          </button>

          {/* Visible Cards */}
          <div className="flex gap-6 flex-1">
            {features.slice(currentIndex, currentIndex + cardsPerView).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white flex-1 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex + cardsPerView >= features.length}
            className={`p-3 rounded-full shadow-md shrink-0 ${currentIndex + cardsPerView >= features.length ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            ▶
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Explore Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewFeaturesSection
