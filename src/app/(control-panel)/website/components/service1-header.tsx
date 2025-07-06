"use client";

import type React from "react";
import { motion } from "framer-motion";

export interface Service1HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Service1Header: React.FC<Service1HeaderProps> = ({
  title = "Floworg OmniAI.360",
  subtitle = "Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International Standards",
  className = "",
}) => {
  return (
    <header className={`relative overflow-hidden ${className}`}>
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-green-200 relative">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Service1Header;
