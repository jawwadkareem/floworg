import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AcademyNavbarHeader from './AcademyPage/AcademyNavbarHeader';

const BlogNavigationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('show-all');

  const handleTabChange = (tabId: string) => {
    setActiveCategory(tabId);
  };

  return (
    <div>
      {/* Academy Navbar Header */}
      <AcademyNavbarHeader
        onTabChange={handleTabChange}
        defaultActiveTab={activeCategory}
      />

      {/* Additional content can be added here */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* <p className="text-gray-600">
              Currently viewing: <span className="font-semibold text-teal-600">{activeCategory}</span>
            </p> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogNavigationSection;