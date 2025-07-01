import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogNavigationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('SHOW ALL');

  const categories = ['SHOW ALL', 'BUSINESS', 'COACHING', 'LIFE', 'WEB'];

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNavigationSection;