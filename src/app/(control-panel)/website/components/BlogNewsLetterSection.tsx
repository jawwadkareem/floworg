import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogNewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Newsletter Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📧</span>
                </div>
                <span className="text-teal-400 font-semibold">Floworg Newsletter</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Stay updated on <span className="text-teal-400">Floworg</span> News,<br />
                Join the <span className="text-teal-400">Floworg</span> newsletter now.
              </h2>

              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white border-none focus:outline-none text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full p-4">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Newsletter Representative"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-400 rounded-full opacity-15"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyan-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default BlogNewsletterSection;