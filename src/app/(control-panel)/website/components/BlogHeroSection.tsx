import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Apple } from 'lucide-react';

const BlogHeroSection: React.FC = () => {
  const navItems = ["Home", "Services", "Pricing", "Projects", "Academy", "Blog", "Support"];
  const socialIcons = ["🎵", "📘", "📷", "💬", "📺"];

  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 relative overflow-hidden">
      {/* Navigation Header */}
      <nav className="bg-gray-800 shadow-none py-4">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex gap-2">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-base text-white">{icon}</span>
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">
              Flo
              <span className="text-teal-400">✓</span>
              org
            </h1>
            <span className="text-xs text-gray-300 ml-2">
              Automate your Success
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-white text-sm font-medium hover:text-teal-400 transition-colors duration-300 ${
                  item === 'Blog' ? 'text-teal-400' : ''
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4 text-white">
            <Search className="w-4 h-4" />
            <Globe className="w-4 h-4" />
            <Apple className="w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="py-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Floworg Blog
          </h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International Standards
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogHeroSection;