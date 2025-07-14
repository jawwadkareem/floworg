"use client"

import type React from "react"
import { motion } from "framer-motion"

export interface ProjectStat {
  id: string
  value: string
  label: string
  icon?: React.ReactNode
}

export interface ProjectStatsSectionProps {
  title?: string
  subtitle?: string
  stats?: ProjectStat[]
  className?: string
}

const ProjectStatsSection: React.FC<ProjectStatsSectionProps> = ({
  title = "Projects",
  subtitle = "Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International Standards",
  stats = [
    { id: "integrations", value: "9K+", label: "Integrations" },
    { id: "channels", value: "16+", label: "Communication Channels" },
    { id: "clients", value: "800+", label: "Enterprise Clients" },
    { id: "messages", value: "50M+", label: "Messages Per Month" },
    { id: "chats", value: "2K+", label: "Active Chats" },
  ],
  className = "",
}) => {
  return (
    <section className={`py-16 bg-linear-to-r from-teal-800 to-teal-600 text-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              {stat.icon && <div className="mb-4 flex justify-center">{stat.icon}</div>}
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-teal-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectStatsSection
