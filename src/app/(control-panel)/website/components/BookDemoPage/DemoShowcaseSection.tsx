import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, SkipForward } from 'lucide-react';

const DemoShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('floworg-omni-360');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: 'floworg-omni-360',
      title: 'Floworg OmniAI 360',
      description: 'Complete AI-powered automation platform with advanced chatbot capabilities and multi-channel integration.',
      thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 'floworg-sys-360',
      title: 'Floworg SYS 360',
      description: 'All-in-one business management system with CRM, project management, and analytics dashboard.',
      thumbnailUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 'more-services',
      title: 'More Services',
      description: 'Explore additional services including consulting, custom development, and enterprise solutions.',
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSkipForward = () => {
    setCurrentTime(prev => Math.min(prev + 10, duration));
  };

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = Math.floor(clickPosition * duration);
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience Floworg in Action
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch live demos of our powerful automation platforms and see how they can transform your business operations.
          </p>
        </motion.div>

        {/* Tab Navigation - Exact match to screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-0"
        >
          <div className="bg-teal-500 rounded-t-lg overflow-hidden">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-800'
                      : 'bg-teal-500 text-white hover:bg-teal-400'
                  } ${index !== tabs.length - 1 ? 'border-r border-teal-400' : ''}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Player Section - Exact match to screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          ref={videoContainerRef}
          className="bg-gray-900 rounded-b-lg overflow-hidden shadow-2xl"
        >
          {/* Video Container - Matching screenshot proportions */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900" style={{ aspectRatio: '16/9' }}>
            {/* Video Content - Simulated website preview matching screenshot */}
            <div className="absolute inset-0 bg-gray-100">
              {/* Simulated Website Preview matching the screenshot */}
              <div className="h-full flex">
                {/* Left side - Website mockup */}
                <div className="flex-1 bg-white relative">
                  {/* Website content matching screenshot */}
                  <div 
                    className="h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${activeTabData?.thumbnailUrl})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    
                    {/* Website mockup overlay */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-2xl overflow-hidden">
                      {/* Header */}
                      <div className="bg-gray-50 border-b border-gray-200 p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <div className="ml-4 bg-gray-200 rounded px-3 py-1 text-xs text-gray-600">
                            floworg.com
                          </div>
                        </div>
                      </div>
                      
                      {/* Website content */}
                      <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">Floworg</h3>
                          <p className="text-sm text-gray-600">AI-Powered Business Automation</p>
                        </div>
                        
                        {/* Feature grid */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-white rounded p-2 shadow-sm">
                            <div className="w-full h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded mb-1"></div>
                            <div className="text-xs text-gray-600">Dashboard</div>
                          </div>
                          <div className="bg-white rounded p-2 shadow-sm">
                            <div className="w-full h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded mb-1"></div>
                            <div className="text-xs text-gray-600">Analytics</div>
                          </div>
                          <div className="bg-white rounded p-2 shadow-sm">
                            <div className="w-full h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded mb-1"></div>
                            <div className="text-xs text-gray-600">Automation</div>
                          </div>
                          <div className="bg-white rounded p-2 shadow-sm">
                            <div className="w-full h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded mb-1"></div>
                            <div className="text-xs text-gray-600">Reports</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <button
                        onClick={handlePlayPause}
                        className="w-16 h-16 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 group"
                      >
                        <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right side - Description text matching screenshot */}
                <div className="w-80 bg-gray-100 p-6 flex flex-col justify-center">
                  <div className="text-gray-700">
                    <p className="text-sm leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                      cupidatat non proident, sunt in culpa qui officia deserunt.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste 
                      natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Controls Overlay - Matching screenshot style */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Progress Bar */}
              <div className="mb-3">
                <div 
                  className="w-full bg-white bg-opacity-20 rounded-full h-1 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="bg-white h-1 rounded-full transition-all duration-100 relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Control Buttons - Exact match to screenshot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  
                  <button 
                    onClick={handleRestart}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={handleSkipForward}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleVolumeToggle}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-12 h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <span className="text-white text-xs">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleFullscreen}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Description */}
          <div className="p-6 bg-gray-800">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {activeTabData?.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {activeTabData?.description}
                </p>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white hover:border-gray-500 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to see how Floworg can transform your business? Book a personalized demo with our experts.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Schedule Your Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoShowcaseSection;