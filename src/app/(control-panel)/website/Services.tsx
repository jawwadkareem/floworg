import * as React from "react";
import Footer from './components/Footer';
import TestimonialsSection from "./components/TestimonialsSection";

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
import GlobalAutomationSection from "./components/GlobalAutomationSection";
import LeadsForm from "./components/pricingPage/leads-form";

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
      <div className="bg-linear-to-r from-teal-800 to-teal-600  text-white">
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
      <GlobalAutomationSection/>

      <LeadsForm/>

      <LatestArticlesSection/>

    <TestimonialsSection/>

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

     {/* <NewsletterSection/> */}

<Footer/>
     
    </div>
  );
};

export default Services;
