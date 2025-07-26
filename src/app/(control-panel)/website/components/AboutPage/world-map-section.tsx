"use client"

import type React from "react"
import { motion } from "framer-motion"

const WorldMapSection: React.FC = () => {
  const locations = [
    { name: "Canada", x: "20%", y: "25%" },
    { name: "United States", x: "18%", y: "40%" },
    { name: "Brazil", x: "30%", y: "70%" },
    { name: "Russia", x: "70%", y: "20%" },
    { name: "China", x: "75%", y: "45%" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* World Map Background */}
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zl1eU3ECyTh05Adr8xmBlppAKZeEuL.png"
              alt="World Map"
              className="w-full h-full object-cover opacity-60"
            />

            {/* Location Markers */}
            
               
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorldMapSection
