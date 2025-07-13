"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Users, Share2, Headphones, MessageCircle } from "lucide-react"

const SupportBlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Screen Sharing")

  const categories = [
    { 
      name: "Instant Join", 
      icon: Users,
      content: {
        title: "Instant Join",
        description: "Join meetings instantly without any downloads or installations. Our seamless process allows you to connect with your team in seconds, making collaboration effortless and efficient.",
        features: [
          "No downloads required - join directly from your browser",
          "One-click access to meetings and conferences"
        ]
      }
    },
    { 
      name: "Screen Sharing", 
      icon: Share2,
      content: {
        title: "Screen Sharing",
        description: "Readability is of great importance but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        features: [
          "Share multiple screens at a time and get amazing experience in your team meeting",
          "No need for third-party plugins"
        ]
      }
    },
    { 
      name: "Team Chat", 
      icon: MessageCircle,
      content: {
        title: "Team Chat",
        description: "Stay connected with your team through our integrated chat system. Send messages, share files, and collaborate in real-time while maintaining the context of your conversations.",
        features: [
          "Real-time messaging with file sharing capabilities",
          "Integrated with video calls for seamless communication"
        ]
      }
    },
    { 
      name: "HD Audio & Video", 
      icon: Headphones,
      content: {
        title: "HD Audio & Video",
        description: "Experience crystal-clear audio and high-definition video quality that makes remote meetings feel like in-person conversations. Our advanced technology ensures optimal performance.",
        features: [
          "Crystal clear HD video quality up to 1080p resolution",
          "Advanced noise cancellation for professional audio"
        ]
      }
    },
  ]

  const activeContent = categories.find(cat => cat.name === activeCategory)?.content || categories[1].content

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-teal-500">Support</span> Blog
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category.name
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-teal-500 rounded-full"
                initial={{ x: "-100%" }}
                animate={{ 
                  x: activeCategory === category.name ? "0%" : "-100%" 
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {category.name}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Dynamic Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeCategory} // This ensures re-animation when content changes
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">{activeContent.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {activeContent.description}
            </p>

            <div className="space-y-4 mb-8">
              {activeContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1">
              Read more
            </button>
          </motion.div>

          <motion.div
            key={`${activeCategory}-visual`} // Re-animate visual when content changes
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SupportBlogSection