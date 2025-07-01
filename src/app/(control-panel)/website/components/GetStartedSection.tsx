import React from "react";
import { motion } from "framer-motion";

const GetStartedSection: React.FC = () => {
  const handleGetStartedClick = () => {
    console.log("Get Started clicked");
  };
  return (
    <section className="py-16 bg-purple-50 relative overflow-hidden min-h-96">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative z-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight max-w-4xl mx-auto">
            Get Started with UpSoft Today & Take Your Business to New Heights
          </h2>

          <p className="text-base leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? UpSoft provides
            powerful automation, advanced analytics, and seamless cloud
            solutions to help you scale faster, work smarter.
          </p>

          <button
            onClick={handleGetStartedClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {"Contact Us"}
          </button>
        </motion.div>

        {/* Left Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <div className="w-72 h-48 bg-white rounded-2xl shadow-xl p-6 transform -rotate-3">
            {/* Dashboard Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            {/* Chart Area */}
            <div className="mb-4">
              <p className="text-gray-600 text-xs mb-1">Wade Warren</p>
              <p className="text-gray-400 text-xs">CEO, Co-Founder</p>
            </div>

            {/* Mock Chart */}
            <div className="h-16 bg-gray-100 rounded-lg relative mb-4">
              <svg width="100%" height="100%" viewBox="0 0 240 64">
                <path
                  d="M 20 48 Q 60 32 100 36 T 180 28 T 220 20"
                  stroke="#4A90E2"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="220" cy="20" r="3" fill="#4A90E2" />
              </svg>
            </div>

            {/* Action Button */}
            <div className="bg-orange-500 text-white px-4 py-2 rounded text-xs font-semibold inline-block">
              Download
            </div>
          </div>
        </motion.div>

        {/* Right Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute right-[5%] top-[30%] z-10"
        >
          <div className="w-48 bg-white rounded-2xl shadow-xl p-4 transform rotate-3">
            {/* Profile Card 1 */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-3">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                👤
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">$981.00</p>
                <p className="text-gray-600 text-xs">+8.2%</p>
              </div>
            </div>

            {/* Profile Card 2 */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                👤
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">
                  Thomas Edward
                </p>
                <p className="text-gray-600 text-xs">Manager</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute top-[10%] left-[20%] w-24 h-24 rounded-full bg-blue-200 opacity-30"></div>
        <div className="absolute bottom-[20%] right-[25%] w-20 h-20 rounded-full bg-purple-200 opacity-20"></div>
      </div>
    </section>
  );
};

export default GetStartedSection;
