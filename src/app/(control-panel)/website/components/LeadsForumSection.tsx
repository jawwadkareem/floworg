import React from 'react';
import { motion } from 'framer-motion';

const LeadsForumSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Leads Forum
              </h1>

              <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="text-purple-500">✨</span>
                Unlock AI For Smarter Businesses
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your{' '}
                <span className="text-green-500">Business</span>{' '}
                with{' '}
                <span className="text-orange-500">AI</span>
              </h2>

              <p className="text-gray-700 leading-relaxed text-base mb-8 max-w-md">
                Experience the power of AI-driven software that transforms your workflow, automates repetitive tasks.
              </p>

              {/* Form */}
              <div className="space-y-4 mb-8">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 placeholder-gray-500"
                  />
                  <span className="absolute left-4 top-3 text-gray-400">📧</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:shadow-lg">
                  Request Demo
                </button>
              </div>

              {/* Customer Stats */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=32" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-lg">25K</span>
                    <p className="text-gray-700 text-sm">Customer Trust Us</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <div>
                    <span className="text-gray-900 font-bold">4.5/5</span>
                    <p className="text-gray-700 text-sm">10k Reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Dashboard Mockups */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 flex items-center justify-center">
                {/* Main Form Card */}
                <div 
                  className="absolute w-80 h-64 bg-white rounded-2xl shadow-2xl z-30 overflow-hidden p-6"
                  style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}
                >
                  {/* Decorative star */}
                  <div className="absolute top-4 right-4 text-purple-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Full Name<br />
                      Company<br />
                      Mobile + code are<br />
                      Email
                    </h3>
                  </div>

                  {/* Chart visualization */}
                  <div className="h-16 relative">
                    <svg width="100%" height="100%" viewBox="0 0 300 64">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                      <path d="M 20 50 Q 80 20 150 30 T 280 15" stroke="url(#chartGradient)" strokeWidth="3" fill="none" />
                      <circle cx="280" cy="15" r="4" fill="#06B6D4" />
                    </svg>
                    <div className="absolute bottom-0 left-4 text-sm font-semibold text-gray-700">
                      714.52K
                    </div>
                  </div>
                </div>

                {/* Bitcoin Card - Top Right */}
                <div 
                  className="absolute -right-4 top-4 w-48 h-32 bg-white rounded-xl shadow-xl z-20 p-4"
                  style={{ transform: 'perspective(1000px) rotateY(-20deg)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-500 text-2xl">₿</span>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">USDT 5.75</p>
                      <p className="text-xs text-green-500">$19,405.12</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">Bitcoin</p>
                  <p className="text-xs text-gray-500">BTC 0.75</p>
                  <p className="text-xs text-green-500">$19,405.12</p>
                </div>

                {/* Tether Card - Middle Right */}
                <div 
                  className="absolute right-8 top-20 w-40 h-24 bg-white rounded-xl shadow-lg z-15 p-3"
                  style={{ transform: 'perspective(1000px) rotateY(-25deg)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-sm font-semibold">Tether</span>
                  </div>
                  <p className="text-xs text-gray-500">USDT</p>
                </div>

                {/* Total Software Card - Bottom Right */}
                <div 
                  className="absolute right-0 bottom-8 w-52 h-36 bg-white rounded-xl shadow-xl z-10 p-4"
                  style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
                >
                  <p className="text-sm text-gray-600 mb-2">Total Software</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">526,45.00</p>
                  <p className="text-xs text-green-500 mb-3">+8% vs. previous month</p>
                  
                  {/* Mini chart */}
                  <div className="h-12 bg-gray-50 rounded p-2">
                    <svg width="100%" height="100%" viewBox="0 0 180 32">
                      <path d="M 10 25 Q 45 15 90 18 T 170 10" stroke="#8B5CF6" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Review Notes Card - Bottom */}
                <div 
                  className="absolute right-12 bottom-0 w-44 h-28 bg-white rounded-xl shadow-lg z-5 p-3"
                  style={{ transform: 'perspective(1000px) rotateY(-10deg)' }}
                >
                  <p className="text-xs text-gray-600 font-semibold mb-2">Review Notes</p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-orange-200 rounded"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>👁</span>
                    <span>3</span>
                    <span>💬</span>
                    <span>2</span>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-8 left-8 text-purple-400 opacity-60">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>

                {/* Background decorative circles */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-40 blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsForumSection;