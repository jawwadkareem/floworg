import * as React from 'react';
import { Menu, X, Key, Bell, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

       const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      icon: Key,
      title: "Authentication",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Bell,
      title: "Voice",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Bell,
      title: "Voice",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: FileText,
      title: "API",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Key,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Key,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Key,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Key,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    },
    {
      icon: Key,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur."
    }
  ];

  const testimonials = [
    {
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      name: "Hanna Donin",
      title: "General Expert",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      name: "Hanna Donin",
      title: "General Expert",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const navItems = ['Home', 'Services', 'Pricing', 'Projects', 'Academy', 'Blog', 'Support'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                Flo<span className="text-teal-500">✓</span>org
              </span>
              <span className="text-xs text-gray-500 ml-2 hidden sm:inline">Commerce and Service</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-fade-in z-50">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block text-gray-700 hover:text-teal-600 transition-colors duration-200 py-2 text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors duration-200 mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-scale group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Automation Section */}
      <div className="bg-slate-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Floworg AI Powers Global Automation – Across Channels, Devices & Data
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Flowing 360 powers global automation – connecting systems, channels, and data across platforms.
            </p>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
              {/* Globe with orbiting elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 opacity-20"></div>
              <div className="absolute inset-4 rounded-full border border-teal-400 opacity-30"></div>
              <div className="absolute inset-8 rounded-full border border-teal-400 opacity-50"></div>
              
              {/* Orbiting icons */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📱</span>
              </div>
              <div className="absolute bottom-4 right-8 w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🌐</span>
              </div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <div className="absolute right-4 bottom-16 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🔧</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors duration-200">
              Start Automating Now
            </button>
          </div>
        </div>
      </div>

      {/* Leads Forum Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-semibold text-purple-600 mb-2">Leads Forum</h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transform Your<br />
                <span className="text-teal-600">Business</span> with AI
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Leverage cutting-edge artificial intelligence to revolutionize your business processes, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dashboard</h4>
                      <p className="text-xs text-gray-500">Real-time analytics</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-500">348.2K+</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="text-sm font-medium">12.5K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm font-medium text-green-500">+23.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News & Articles Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Check out our latest<br />
              news & articles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-4xl">📱</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Pre and post launch mobile app marketing pitfalls to avoid
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn about common mistakes in mobile app marketing and how to avoid them for successful launches.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <span>Marketing • 5 min read</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-4xl">🤝</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Social commerce high performance frameworks at scale
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover proven frameworks for scaling social commerce operations and maximizing performance.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <span>Commerce • 7 min read</span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-200 rounded-lg h-48 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-4xl">📊</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Prioritize these top items quarterly sales are at risk
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Essential priorities to focus on each quarter to maintain and boost your sales performance.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <span>Sales • 4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">Testimonials</h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What Our<br />
              Customer Says
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-40">
            <span className="text-lg font-semibold text-gray-400">QUOTRAX</span>
            <span className="text-lg font-semibold text-gray-400">Marshk</span>
            <span className="text-lg font-semibold text-gray-400">PILOT</span>
            <span className="text-lg font-semibold text-gray-400">UPWARE</span>
            <span className="text-lg font-semibold text-gray-400">uprise</span>
            <span className="text-lg font-semibold text-gray-400">Lookout</span>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to our newsletter for<br />
              the latest updates
            </h2>
            <div className="space-y-3">
              
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-gray-900">
                Flo<span className="text-teal-500">✓</span>org
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Automate your business</p>
            <div className="flex justify-center space-x-4">
              <span className="text-sm text-gray-600">More Link</span>
              <span className="text-sm text-gray-600">UpSoft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Exclusive Updates</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 bg-slate-700 text-white rounded-md text-sm"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-700 text-white rounded-md text-sm"
                />
                <button className="w-full bg-teal-500 text-white py-2 rounded-md text-sm hover:bg-teal-600 transition-colors">
                  Agree to updates
                </button>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold">
                    Flo<span className="text-teal-400">✓</span>org
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Build Smart, Scale Success</p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-xs">in</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-xs">@</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-xs">yt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floworg */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Floworg</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Timeline</a></li>
                <li><a href="#" className="hover:text-white">Awards</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Tenders</a></li>
                <li><a href="#" className="hover:text-white">Partners Area</a></li>
                <li><a href="#" className="hover:text-white">Employee Area</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white">Show more</a></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Book a Demo</a></li>
                <li><a href="#" className="hover:text-white">Floworg ProBuilder</a></li>
                <li><a href="#" className="hover:text-white">Floworg Consulting</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
                <li><a href="#" className="hover:text-white">Academy</a></li>
                <li><a href="#" className="hover:text-white">Blog & News</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Loyalty Programs</a></li>
                <li><a href="#" className="hover:text-white">Show more</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Developers</a></li>
                <li><a href="#" className="hover:text-white">Integration</a></li>
                <li><a href="#" className="hover:text-white">Documentation API</a></li>
                <li><a href="#" className="hover:text-white">Forum & Community</a></li>
                <li><a href="#" className="hover:text-white">Website Terms</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Accessibility Statement</a></li>
                <li><a href="#" className="hover:text-white">Show more</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Floworg OmniAI 360</a></li>
                <li><a href="#" className="hover:text-white">Floworg SVS 360 - All in One</a></li>
                <li><a href="#" className="hover:text-white">Automate your Business (RPA)</a></li>
                <li><a href="#" className="hover:text-white">Comprehensible of CRM & ERP</a></li>
                <li><a href="#" className="hover:text-white">Dashboards, Smart Excel & BI</a></li>
                <li><a href="#" className="hover:text-white">Device Management & Configurations</a></li>
                <li><a href="#" className="hover:text-white">Product Management & Strategy</a></li>
                <li><a href="#" className="hover:text-white">Projects Management</a></li>
                <li><a href="#" className="hover:text-white">Digital, Branding & Media</a></li>
                <li><a href="#" className="hover:text-white">Show more</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm text-gray-400">© Floworg LTD 2024</span>
                <span className="text-sm text-gray-400">All rights reserved</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Help & Support</span>
                <span className="text-sm text-gray-400">Privacy policy</span>
                <span className="text-sm text-gray-400">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

    


export default Services;