"use client"

import type React from "react"
import { motion } from "framer-motion"

const HebrewTimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      year: "2014",
      title: "When first launched our Level 1",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      year: "2015",
      title: "Launched our first business that can be counted in millions to build meaningful relationships",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      year: "2016",
      title: "Opened our new office in Toronto, CA",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      year: "2019",
      title: "Moved to a Silicon Valley whereas now we can focus on building our 10 help our employees",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      year: "2020",
      title: "Opened a new office in London, UK",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      year: "Today",
      title: "Top-rated software solution for service anywhere",
      image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ]

  const hebrewBoxes = [
    { title: "חדשנות", color: "bg-teal-100", textColor: "text-teal-700" },
    { title: "התמחות אישית", color: "bg-teal-200", textColor: "text-teal-800" },
    { title: "איכות", color: "bg-pink-100", textColor: "text-pink-700" },
    { title: "חדשנות", color: "bg-teal-300", textColor: "text-teal-900" },
    { title: "מקצועיות", color: "bg-teal-400", textColor: "text-white" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Hebrew Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">צעד קדימה</h2>
            <h3 className="text-3xl font-bold text-teal-500 mb-4">את הפעילות שלנו מובילים 5 ערכי יסוד:</h3>
            <p className="text-gray-600 text-center">בכל משימה, פעילות והחלטה – אנו מונחים על ידי ערכי היסוד שלנו.</p>
          </div>

          {/* Hebrew Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {hebrewBoxes.map((box, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${box.color} rounded-lg p-6 text-center`}
              >
                <h4 className={`font-bold text-lg ${box.textColor}`}>{box.title}</h4>
                <p className={`text-sm mt-2 ${box.textColor} opacity-80`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{event.year}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HebrewTimelineSection
