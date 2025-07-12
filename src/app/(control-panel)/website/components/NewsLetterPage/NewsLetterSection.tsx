import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, TrendingUp, Users, Zap, Target } from 'lucide-react';

const NewsownSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Business & Tech');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const navigationTabs = [
    'Business & Tech',
    'Academy', 
    'Partners',
    'Developers',
    'Support',
    'Career',
    'Reviews'
  ];

  const newsletters = [
    {
      id: 1,
      title: 'Floworg All Newsletter',
      icon: Mail,
      color: 'bg-teal-500'
    },
    {
      id: 2,
      title: 'Business & Tech Newsletter',
      icon: TrendingUp,
      color: 'bg-teal-500'
    },
    {
      id: 3,
      title: 'Academy Newsletter',
      icon: Users,
      color: 'bg-teal-500'
    },
    {
      id: 4,
      title: 'Partners Newsletter',
      icon: Target,
      color: 'bg-teal-500'
    },
    {
      id: 5,
      title: 'Developers Newsletter',
      icon: Zap,
      color: 'bg-teal-500'
    },
    {
      id: 6,
      title: 'Support Newsletter',
      icon: Mail,
      color: 'bg-teal-500'
    }
  ];

  const features = [
    {
      title: 'Stay Ahead of the Game',
      description: 'Get exclusive insights on the latest industry trends, market & more.',
      icon: TrendingUp
    },
    {
      title: 'Expert Insights',
      description: 'Receive valuable tips and strategies to grow your business.',
      icon: Target
    },
    {
      title: 'Early Access',
      description: 'Be the first to know about features, tools, and special offers.',
      icon: Zap
    },
    {
      title: 'Inspiration & Success Stories',
      description: 'Get real business tips and inspiring real innovation solutions.',
      icon: Users
    }
  ];

  const handleSubscribe = () => {
    if (email && name) {
      alert(`Thank you ${name}! You've been subscribed with email: ${email}`);
      setEmail('');
      setName('');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-teal-500 rounded-t-lg overflow-hidden">
            <div className="flex flex-wrap">
              {navigationTabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-gray-800'
                      : 'bg-teal-500 text-white hover:bg-teal-400'
                  } ${index !== navigationTabs.length - 1 ? 'border-r border-teal-400' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-b-lg shadow-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-teal-600 font-medium">Discover new features and tools</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-teal-600 font-medium">Get expert tips to grow your business</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-teal-600 font-medium">Be the first to know about exclusive updates and opportunities</span>
            </div>
          </div>

          {/* Main Subscription Section */}
          <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Form */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Subscribe now and unlock smarter solutions with Floworg!
                </h2>
                
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-teal-400 font-medium">Floworg Newsletters</span>
                  </div>
                  <p className="text-white mb-6">
                    Stay updated.<br />
                    Join the <span className="text-teal-400 font-semibold">Floworg</span> Newsletters now.
                  </p>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <button
                        onClick={handleSubscribe}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Professional woman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Cards Grid */}
          <div className="p-8 bg-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {newsletters.map((newsletter) => (
                <motion.div
                  key={newsletter.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: newsletter.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-teal-500 rounded-lg p-6 text-center hover:bg-teal-600 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-all">
                    <newsletter.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {newsletter.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Features Section */}
          <div className="p-8 bg-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-center text-xs text-gray-500">
              Floworg Newsletters - Stay Updated on Innovation and Smart Business Solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsownSection;