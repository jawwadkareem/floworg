"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqCategories = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]

  const faqs = [
    {
      question: "What is HAIchat?",
      answer:
        "HAIchat is an AI chatbot platform designed to automate customer interactions, streamline support, and enhance engagement across multiple channels.",
      category: "General",
    },
    {
      question: "How does HAIchat ensure data security?",
      answer:
        "We implement enterprise-grade security measures including encryption, secure data storage, and compliance with international privacy standards.",
      category: "Security",
    },
    {
      question: "Is there a trial period for HAIchat?",
      answer:
        "Yes, we offer a free trial period so you can explore all features and see how HAIchat fits your business needs.",
      category: "Pricing",
    },
    {
      question: "What support options are available if I need help?",
      answer:
        "We provide 24/7 support through multiple channels including live chat, email, phone support, and comprehensive documentation.",
      category: "Support",
    },
    {
      question: "How can I measure the performance of my HAIchat bot?",
      answer:
        "Our platform includes detailed analytics and reporting tools to track bot performance, user engagement, and conversion metrics.",
      category: "Analytics",
    },
    {
      question: "How customizable is the chatbot's design and functionality?",
      answer:
        "HAIchat offers extensive customization options including design themes, conversation flows, and integration capabilities to match your brand.",
      category: "Customization",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time through your account dashboard.",
      category: "Billing",
    },
    {
      question: "Does HAIchat integrate with other platforms?",
      answer:
        "Yes, HAIchat integrates with over 9,000 platforms and tools including CRMs, e-commerce platforms, and social media channels.",
      category: "Integrations",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

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
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-teal-500">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Click in to find quick answers and insights about how we can help your business.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 shadow-md"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-300 ${
                  openFAQ === index ? "bg-teal-500 text-white" : "hover:bg-gray-50"
                }`}
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
