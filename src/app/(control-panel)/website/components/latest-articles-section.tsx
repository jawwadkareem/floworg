"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const LatestArticlesSection: React.FC = () => {
  const articles = [
    {
      category: "AI Guides",
      badge: "COMMENTS",
      title: "Pre and post launch mobile app marketing pitfalls to avoid",
      excerpt:
        "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      category: "Social Media",
      badge: "TRENDING",
      title: "Social currency high performance keywords or phrases",
      excerpt:
        "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      category: "Business",
      badge: "POPULAR",
      title: "Promote these line items quarterly sales are at",
      excerpt:
        "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
      readTime: "4 min read",
      date: "Dec 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Check out our latest
            <br />
            news & articles.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-teal-500 text-sm font-semibold">{article.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{article.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm flex items-center gap-1 transition-colors duration-300">
                    READ MORE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestArticlesSection
