import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  Video, 
  Book, 
  Settings, 
  Zap, 
  Code, 
  Users, 
  MessageSquare,
  Search,
  ExternalLink
} from 'lucide-react';
import KnowledgeBaseNavbarHeader from './KnowldegeBaseNavbarHeader';

const DocumentationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('knowledgebase');
  const [expandedItems, setExpandedItems] = useState<string[]>(['getting-started']);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const sidebarItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: FileText,
      children: [
        'Quick Start Guide',
        'Installation',
        'Basic Setup',
        'First Steps'
      ]
    },
    {
      id: 'features',
      title: 'Features',
      icon: Settings,
      children: [
        'Dashboard Overview',
        'User Management',
        'Automation Tools',
        'Analytics'
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Zap,
      children: [
        'Slack Integration',
        'Google Drive',
        'Microsoft Teams',
        'Zapier',
        'Custom APIs'
      ]
    },
    {
      id: 'api',
      title: 'API Documentation',
      icon: Code,
      children: [
        'Authentication',
        'Endpoints',
        'Rate Limits',
        'Examples'
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: Video,
      children: [
        'Video Guides',
        'Step by Step',
        'Best Practices',
        'Use Cases'
      ]
    },
    {
      id: 'support',
      title: 'Support',
      icon: Users,
      children: [
        'Contact Us',
        'FAQ',
        'Troubleshooting',
        'Community'
      ]
    }
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Knowledge Base Navbar Header */}
        <KnowledgeBaseNavbarHeader
          onTabChange={handleTabChange}
          defaultActiveTab={activeTab}
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg"
        >
          <div className="flex min-h-[600px]">
            {/* Left Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 p-4">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Navigation Tree */}
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {expandedItems.includes(item.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.title}</span>
                    </button>
                    
                    {expandedItems.includes(item.id) && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          >
                            {child}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span>Documentation</span>
                <ChevronRight className="w-4 h-4" />
                <span>Getting Started</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-800">Your own mobile App</span>
              </div>

              {/* Content Header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Your own mobile App</h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This page shows all other options. If you want to see more about central program, you can 
                  see more information.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800 text-sm">
                    We will talk about the other most mobile modules for this platform.
                  </p>
                </div>

                <div className="space-y-3 text-gray-700">
                  <p>• What other modules are</p>
                  <p>• How to use them</p>
                  <p>• Sort of a planning mobile apps under your control</p>
                  <p>• Quick & fast to help you control the mobile apps under your control from</p>
                  <p>• How to use them</p>
                </div>

                <p className="text-gray-600 mt-6 mb-4">
                  Go to one of your custom apps on the sharing, or receive a push notification for this specific flow of 
                  a messaging client system.
                </p>

                <p className="text-gray-600 mb-6">
                  Once your business is ready to get new advice, our advisors to easily manage what they do when 
                  connected with your phone.
                </p>

                <p className="text-gray-600 mb-8">
                  So, without any effort, you can control members who have gathered to use.
                </p>
              </div>

              {/* Mobile App Screenshots */}
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 aspect-[9/16] flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-white rounded-lg w-full h-full p-2 shadow-inner">
                      <div className="bg-gray-100 rounded w-full h-full flex flex-col">
                        {/* Phone header */}
                        <div className="bg-gray-800 rounded-t h-6 flex items-center justify-center">
                          <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                        
                        {/* Phone content */}
                        <div className="flex-1 p-2 space-y-2">
                          <div className="bg-blue-500 h-3 rounded"></div>
                          <div className="bg-gray-300 h-2 rounded w-3/4"></div>
                          <div className="bg-gray-300 h-2 rounded w-1/2"></div>
                          <div className="grid grid-cols-2 gap-1 mt-2">
                            <div className="bg-green-400 h-4 rounded"></div>
                            <div className="bg-purple-400 h-4 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Try Demo
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Download SDK
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentationSection;