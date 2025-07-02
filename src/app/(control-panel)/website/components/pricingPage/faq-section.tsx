"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQ[];
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  categories: FAQCategory[];
  defaultActiveCategory?: string;
  defaultOpenFAQ?: number | null;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "Dive in to find quick answers and insights about how we can help your business.",
  categories,
  defaultActiveCategory,
  defaultOpenFAQ = null,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    defaultActiveCategory || categories[0]?.id || ""
  );
  const [openFAQ, setOpenFAQ] = useState<number | null>(defaultOpenFAQ);

  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const currentFAQs = currentCategory?.faqs || [];

  const handleTabChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenFAQ(null); // Reset to null instead of 0
  };

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-teal-500 font-semibold text-sm">
              {subtitle}
            </span>
            <h2 className="text-4xl font-bold mb-4">
              {title.split(" ").map((word, index) =>
                word === "Questions" ? (
                  <span key={index} className="text-teal-500">
                    {word}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`font-medium pb-2 border-b-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? "text-gray-800 border-teal-500"
                      : "text-gray-600 border-transparent hover:text-gray-800 hover:border-teal-500"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="grid lg:grid-cols-2 gap-6">
            {currentFAQs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  openFAQ === index
                    ? "bg-teal-500 text-white shadow-lg"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
                onClick={() => handleFAQToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`font-semibold ${openFAQ === index ? "text-white" : "text-gray-800"}`}
                  >
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-white flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 ml-4" />
                  )}
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {openFAQ === index && (
                    <p
                      className={`mt-4 ${openFAQ === index ? "text-white" : "text-gray-600"}`}
                    >
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
