"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Shield, Check } from "lucide-react"

export interface TrustBadgeSectionProps {
  icon?: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
}

const TrustBadgeSection: React.FC<TrustBadgeSectionProps> = ({
  icon,
  title = "Trusted & Secure",
  subtitle = "Your data and privacy are our top priority",
  className = "",
}) => {
  return (
    <section className={`py-12 bg-gradient-to-r from-teal-500 to-green-500 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            {icon || (
              <div className="relative">
                <Shield className="w-10 h-10 text-white" />
                <Check className="w-6 h-6 text-white absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1" />
              </div>
            )}
          </div>
          {title && <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>}
          {subtitle && <p className="text-white/90">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBadgeSection
