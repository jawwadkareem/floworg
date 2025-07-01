import React from 'react';
import { motion } from 'framer-motion';

const BlogGridSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "HEALTH",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation", 
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "HEALTH",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.", 
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "BUSINESS",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "HEALTH", 
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "BUSINESS",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "HEALTH",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "BUSINESS",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation", 
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "BUSINESS",
      categoryColor: "bg-teal-500"
    },
    {
      title: "Course Automation",
      description: "A professional course for building no-code business automations easily and efficiently.",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "BUSINESS",
      categoryColor: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${post.categoryColor} text-white px-3 py-1 rounded text-xs font-semibold`}>
                  {post.category}
                </div>
                {/* Navigation Arrows */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <span className="text-gray-600">‹</span>
                  </button>
                  <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <span className="text-gray-600">›</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                
                {/* CTA Button */}
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <span className="text-2xl">📚</span>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2"
        >
          <button className="w-10 h-10 rounded bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors">
            ›
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGridSection;