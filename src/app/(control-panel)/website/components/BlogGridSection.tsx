import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BACKEND_URL from '../constants';
import { title } from 'process';

interface Blog{
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
}
const BlogGridSection: React.FC = () => {
 const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

 useEffect(() => {

    const fetchBlogs = async () => {
      try{
      const res = await fetch(BACKEND_URL + '/blogs?tag=');
      const json = await res.json();

      const transformed = json.map((item: any) => ({
          title: item.Title,
          description: item.Content,
          image: item.Image,
          category: item.Category,
          categoryColor: 'bg-teal-500' // Default color, can be customized based on category
      }));

      setBlogPosts(transformed);
    }catch(error){
      console.error("Error fetching blog posts:", error);
    }
  }
  fetchBlogs();

 }, []);
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