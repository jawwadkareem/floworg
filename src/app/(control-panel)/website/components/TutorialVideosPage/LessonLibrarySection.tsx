import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Play } from 'lucide-react';

const LessonLibrarySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tutorial Videos');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'Playlists': true,
    'Channels': false,
    'Flow builder': false,
    'E-commerce': false,
    'Automation': false,
    'Integration': false
  });

  const tabs = [
    'Support',
    'Tutorial Videos',
    'KnowledgeBase', 
    'Features',
    'Integrations',
    'API',
    'Developers',
    'Forum'
  ];

  const sidebarSections = [
    {
      title: 'Playlists',
      icon: '🎵',
      items: [
        '1. Introduction about UChat',
        '2. Reach customer wherever they are',
        '3. Easy to use flow builder',
        '4. Unique Voice Chat System',
        '5. Google Business Messenger Channel',
        '6. Built-in Ecommerce Support',
        '7. Integration with everything'
      ]
    },
    {
      title: 'Channels',
      icon: '📺',
      items: []
    },
    {
      title: 'Flow builder',
      icon: '⚡',
      items: []
    },
    {
      title: 'E-commerce',
      icon: '🛒',
      items: []
    },
    {
      title: 'Automation',
      icon: '⚙️',
      items: []
    },
    {
      title: 'Integration',
      icon: '🔗',
      items: []
    }
  ];

  const featuredLessons = [
    {
      title: 'Built-in Ecommerce Support',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-orange-500'
    },
    {
      title: 'Multiple Channel Support',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-blue-500'
    },
    {
      title: 'Introduction about UChat',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-purple-500'
    },
    {
      title: 'Google Business Messenger Channel',
      subtitle: 'Channels',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-blue-600'
    },
    {
      title: 'Build your first IVR',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-purple-600'
    },
    {
      title: 'Integration with everything',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-gray-600'
    },
    {
      title: 'Easy to use flow builder',
      subtitle: 'Automation',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-green-600'
    }
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              } ${tab === 'Tutorial Videos' ? 'relative' : ''}`}
            >
              {tab}
              {tab === 'Tutorial Videos' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            {/* Lesson Library Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Lesson library
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Dig into hundreds of videos and articles to help you learn UChat. Let's 
                automate your business without coding.
              </p>
            </div>

            {/* Selected Topics & Lessons */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Selected topics & lessons
              </h3>

              {/* Sidebar Sections */}
              <div className="space-y-2">
                {sidebarSections.map((section, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="flex-1 font-medium text-gray-700">
                        {section.title}
                      </span>
                      {expandedSections[section.title] ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </button>

                    {/* Expanded Items */}
                    {expandedSections[section.title] && section.items.length > 0 && (
                      <div className="ml-10 space-y-2 mt-2">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="text-sm text-gray-600 py-1 hover:text-teal-600 cursor-pointer transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            {/* Featured Lessons Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured lessons
              </h2>
              <p className="text-gray-600">
                Check out the most-read and most-shared lessons from UChat University.
              </p>
            </div>

            {/* Featured Lessons Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className={`relative h-40 ${lesson.color} flex items-center justify-center`}>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-800 ml-1" />
                      </div>
                    </div>
                    
                    {/* Lesson Preview Image/Icon */}
                    <div className="text-white text-6xl opacity-80">
                      {index === 0 && '🛒'}
                      {index === 1 && '💬'}
                      {index === 2 && '🚀'}
                      {index === 3 && '📱'}
                      {index === 4 && '🎤'}
                      {index === 5 && '🔗'}
                      {index === 6 && '⚡'}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {lesson.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonLibrarySection;