"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is HAIchat?",
      answer:
        "HAIchat is an AI chatbot platform designed to automate customer interactions, streamline support, and enhance engagement across multiple channels.",
    },
    {
      question: "How does HAIchat ensure data security?",
      answer:
        "We implement enterprise-grade security measures including encryption, secure data storage, and compliance with international privacy standards.",
    },
    {
      question: "Is there a trial period for HAIchat?",
      answer:
        "Yes, we offer a free trial period so you can explore all features and see how HAIchat fits your business needs.",
    },
    {
      question: "What support options are available if I need help?",
      answer:
        "We provide 24/7 support through multiple channels including live chat, email, phone support, and comprehensive documentation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-teal-500">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Click to find quick answers and insights about how we can help your business.
          </p>
        </div>

        {/* 👇 Main Flex Layout instead of Grid 👇 */}
        <div className="flex flex-wrap -mx-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-300 ${
                      isOpen
                        ? "bg-teal-500 text-white"
                        : "hover:bg-gray-50 text-gray-800"
                    }`}
                  >
                    <h3 className="font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>

                  {/* Animated Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
