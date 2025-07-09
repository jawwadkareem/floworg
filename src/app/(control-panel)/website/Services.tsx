import * as React from "react";
import Footer from './components/Footer';

import {
  Menu,
  X,
  Key,
  Bell,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Testimonials from "./components/Testimonials";
import NewsletterSection from "./components/NewsletterSection";
import LatestArticlesSection from "./components/latest-articles-section";
import LeadsForumSection from "./components/LeadsForumSection";
import ServicesSection from "./components/ServicesSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      icon: Key,
      title: "Authentication",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Bell,
      title: "Voice",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Bell,
      title: "Voice",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: FileText,
      title: "API",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Key,
      title: "Gated Flow",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Key,
      title: "Gated Flow",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Key,
      title: "Gated Flow",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Key,
      title: "Gated Flow",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Key,
      title: "Gated Flow",
      description:
        "Many packages and web page editors now Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const testimonials = [
    {
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      name: "Hanna Donin",
      title: "General Expert",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      text: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
      name: "Hanna Donin",
      title: "General Expert",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const navItems = [
    "Home",
    "Services",
    "Pricing",
    "Projects",
    "Academy",
    "Blog",
    "Support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Services
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization,
              and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>

      <ServicesSection/>

      {/* AI Automation Section */}
      <div className="bg-slate-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Floworg AI Powers Global Automation – Across Channels, Devices &
              Data
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Flowing 360 powers global automation – connecting systems,
              channels, and data across platforms.
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

      <LeadsForumSection/>

      <LatestArticlesSection/>

    <Testimonials/>

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

     <NewsletterSection/>

<Footer/>
     
    </div>
  );
};

export default Services;
