"use client"

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotateLogo {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    if (orbitRef.current) {
      orbitRef.current.style.animation = `rotateLogo 25s linear infinite`;
    }

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Headings */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Over 9,000 Leading Integrations
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-600 leading-tight">
                One-Click To Integration with Favorite Apps and Tools
              </h3>
            </motion.div>
          </div>

          {/* Right Side - Description and Button */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-base mb-8 mt-4">
                Achieve seamless integration with your favorite apps and tools through a single click, enhancing
                efficiency and functionality of our SaaS-based project.
              </p>

              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Start Your Automation Journey
              </button>
            </motion.div>
          </div>
        </div>

        {/* Rotating Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 flex items-center justify-center">
          <div
  ref={orbitRef}
  className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] max-w-full"

  style={{
    animation: 'rotateLogo 25s linear infinite',
  }}
>
  <img
    src="https://softivus.com/wp/upsoft/wp-content/uploads/2025/04/logo-circle.png"
    alt="Rotating Logo"
    className="w-full h-full object-contain"
  />
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
