import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  MessageSquare, 
  Bell, 
  Search,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  User
} from 'lucide-react';

const SocialDashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navigationItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'People Online', active: false },
    { icon: BarChart3, label: 'Events', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: MessageSquare, label: 'Notifications', active: false },
    { icon: Bell, label: 'Integrations', active: false },
    { icon: Search, label: 'API', active: false },
    { icon: MoreHorizontal, label: 'Extensions', active: false },
    { icon: User, label: 'Teams', active: false }
  ];

  const posts = [
    {
      id: 1,
      author: 'Floworg Solutions',
      handle: '@floworg',
      time: '2h',
      content: 'Excited to announce our latest AI automation features! Our new chatbot integration can handle complex customer inquiries with 95% accuracy.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 24,
      comments: 8,
      shares: 12
    },
    {
      id: 2,
      author: 'Samuel Rivera',
      handle: '@samuelr',
      time: '4h',
      content: 'Just finished implementing Floworg\'s automation system in our workflow. The productivity boost is incredible! Highly recommend for any business looking to streamline operations.',
      likes: 18,
      comments: 5,
      shares: 7
    },
    {
      id: 3,
      author: 'Jessica Martinez',
      handle: '@jessicam',
      time: '6h',
      content: 'The new dashboard analytics are game-changing. Real-time insights into customer behavior patterns have helped us increase conversion rates by 40%.',
      likes: 31,
      comments: 12,
      shares: 15
    },
    {
      id: 4,
      author: 'Alex Thompson',
      handle: '@alexthompson',
      time: '8h',
      content: 'Floworg\'s integration capabilities are outstanding. Seamlessly connected with our existing CRM and the data synchronization is flawless.',
      likes: 22,
      comments: 9,
      shares: 11
    },
    {
      id: 5,
      author: 'Maria Garcia',
      handle: '@mariagarcia',
      time: '12h',
      content: 'Customer support response time improved by 60% after implementing Floworg\'s automated ticketing system. Our clients are much happier!',
      likes: 28,
      comments: 14,
      shares: 18
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Community & Social Integration
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with our community, share experiences, and stay updated with the latest Floworg developments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          style={{ height: '600px' }}
        >
          {/* Top Navigation Bar */}
          <div className="bg-teal-500 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {['Home', 'People Online', 'Notifications', 'Settings', 'Integrations', 'API', 'Extensions', 'Teams'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`text-sm font-medium transition-colors ${
                      activeTab === item
                        ? 'text-white border-b-2 border-white pb-1'
                        : 'text-teal-100 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full">
            {/* Left Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* User Profile Section */}
              <div className="mt-8 p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">John Doe</p>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Activity Feed</h3>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Bell className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="p-6 space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.handle} · {post.time}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                    {/* Post Image (for first post) */}
                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                          <Share className="w-4 h-4" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialDashboardSection;