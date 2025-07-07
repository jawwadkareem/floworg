"use client"

import type React from "react"
import { motion } from "framer-motion"

export interface ProjectDetailHeaderProps {
  projectTitle?: string
  brandName?: string
  brandLogo?: string
  ctaButtonText?: string
  onGetOffer?: () => void
  className?: string
}

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({
  projectTitle = "Canva - Project",
  brandName = "Canva",
  brandLogo,
  ctaButtonText = "Get a Personalized Offer",
  onGetOffer,
  className = "",
}) => {
  const handleGetOffer = () => {
    onGetOffer?.()
    console.log("Get personalized offer clicked")
  }

  return (
    <header className={`bg-gradient-to-r from-teal-500 to-teal-600 text-white py-8 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left Side - Brand Logo and Title */}
          <div className="flex items-center gap-6">
            {brandLogo ? (
              <img
                src={brandLogo || "/placeholder.svg"}
                alt={brandName}
                className="w-16 h-16 rounded-lg bg-white p-2"
              />
            ) : (
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{brandName?.charAt(0)}</span>
              </div>
            )}

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-4xl font-bold">{projectTitle}</h1>
            </motion.div>
          </div>

          {/* Right Side - CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetOffer}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {ctaButtonText}
          </motion.button>
        </div>
      </div>
    </header>
  )
}

export default ProjectDetailHeader
