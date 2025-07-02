"use client"

import type React from "react"
import { motion } from "framer-motion"

export interface SolutionCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  buttonText: string
  onButtonClick: () => void
  variant?: "primary" | "secondary"
  className?: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  onButtonClick,
  variant = "secondary",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <button
        onClick={onButtonClick}
        className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
          variant === "primary"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  )
}

export default SolutionCard
