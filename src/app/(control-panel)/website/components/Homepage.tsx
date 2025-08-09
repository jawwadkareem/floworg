import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ScalableSolutionsSection from "./ScalableSolutionsSection";
import AutomateSuccessSection from "./AutomateSuccessSection";
import ServicesSection from "./ServicesSection";
import ConnectSection from "./ConnectSection";
import SmartAISection from "./SmartAISection";
import IntegrationsSection from "./IntegrationsSection";

import FeaturesSection from "./FeatureSection";
import BenefitsSection from "./BenefitsSection";
import SolutionsSection, { Integration } from "./SolutionsSection";
import BusinessSolutionSection from "./BusinessSolutionSection";
import GetStartedSection from "./GetStartedSection";
import PricingSection, { PricingPlan } from "./PricingSection";
import NewsSection from "./NewsSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import GlobalAutomationSection from "./GlobalAutomationSection";
import BusinessSolutionsSection, { ProcessStep, SolutionOption } from "./pricingPage/business-solutions-section";
import SupportBlogSection from "./support-blog-section";
import Navbar from "./Navbar";
import StatsSection from "./StatsSection";
import LeadsForm from "./pricingPage/leads-form";

// Sample integrations data
const integrations: Integration[] = [
  {
    id: "gmail",
    name: "Google Mail",
    description:
      "Email and file sharing, enabling it to be effective and you can use",
    icon: "📧",
    category: "communication",
  },
  {
    id: "analytics",
    name: "Google Analytics",
    description:
      "Tracking and measuring marketing ROI as well as track your video, applications, social media",
    icon: "📊",
    category: "analytics",
  },
  {
    id: "meet",
    name: "Google Meet",
    description:
      "Video calling and screen sharing for development for Google Hangouts and Google Chat",
    icon: "📹",
    category: "communication",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description:
      "Customer relationship management in a way to boost the brand's following",
    icon: "☁️",
    category: "crm",
  },
  {
    id: "outlook",
    name: "Google Outlook",
    description:
      "Personal and file sharing, enabling it to be effective and you can use",
    icon: "📧",
    category: "communication",
  },
  {
    id: "chrome",
    name: "Chrome",
    description:
      "Using your browser's native push notifications with international and commerce",
    icon: "🌐",
    category: "browser",
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "Real-time messaging for teams and individuals with chat, voice calls and video calls",
    icon: "💬",
    category: "communication",
  },
  {
    id: "trello",
    name: "Trello",
    description:
      "Task and collaboration tool that brings the right people, information and tools together to get work",
    icon: "📋",
    category: "productivity",
  },
  {
    id: "webhooks",
    name: "Web Hooks",
    description:
      "Real-time messaging for teams and individuals with chat, voice calls and video calls",
    icon: "🔗",
    category: "automation",
  },
  {
    id: "facebook",
    name: "Facebook",
    description:
      "Business Pages allows to create a video marketing and reach that it leads to sales, reach friends",
    icon: "📘",
    category: "social",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description:
      "Communication and file sharing tool that brings the right people, information and tools together to get work",
    icon: "👥",
    category: "communication",
  },
  {
    id: "zapier",
    name: "Zapier",
    description:
      "Zapier lets you connect Google Meet with thousands of the most popular apps, so you can",
    icon: "⚡",
    category: "automation",
  },
  {
    id: "zoom",
    name: "Zoom",
    description:
      "Video Chat Meetings for personal or video Chat Meetings, offering integrated broadcasting for",
    icon: "📹",
    category: "communication",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description:
      "Business messaging and customer support through WhatsApp Business API integration",
    icon: "💬",
    category: "communication",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "Marketing automation and CRM integration for better customer relationship management",
    icon: "🎯",
    category: "crm",
  },
  {
    id: "shopify",
    name: "Shopify",
    description:
      "E-commerce platform integration for seamless online store management and automation",
    icon: "🛍️",
    category: "ecommerce",
  },
];

// Sample pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    businessType: "Small Businesses",
    monthlyPrice: 19.0,
    yearlyPrice: 159.6, // 30% discount
    icon: "✈️",
    color: "#6366F1",
    bgColor: "#E0E7FF",
    features: [
      { name: "Contact Management", included: true },
      { name: "Task and Activity Tracking", included: true },
      { name: "Automation Workflows", included: true },
      { name: "PayPal Mass Payout", included: true },
      { name: "Chat and Email Support", included: true },
      { name: "Customizable Dashboards", included: false },
      { name: "24/7 Priority Support", included: false },
    ],
    buttonText: "Start 14 day trial",
    buttonVariant: "outlined",
  },
  {
    id: "pro",
    name: "Pro Plan",
    businessType: "Growing Businesses",
    monthlyPrice: 59.0,
    yearlyPrice: 496.8, // 30% discount
    icon: "🐦",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
    features: [
      { name: "Contact Management", included: true },
      { name: "Task and Activity Tracking", included: true },
      { name: "Automation Workflows", included: true },
      { name: "PayPal Mass Payout", included: true },
      { name: "Chat and Email Support", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "24/7 Priority Support", included: false },
    ],
    buttonText: "Start for Free",
    buttonVariant: "contained",
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    businessType: "Large Businesses",
    monthlyPrice: 99.0,
    yearlyPrice: 831.6, // 30% discount
    icon: "🚀",
    color: "#8B5CF6",
    bgColor: "#F3E8FF",
    features: [
      { name: "Contact Management", included: true },
      { name: "Task and Activity Tracking", included: true },
      { name: "Automation Workflows", included: true },
      { name: "PayPal Mass Payout", included: true },
      { name: "Chat and Email Support", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
    buttonText: "Start 14 day trial",
    buttonVariant: "outlined",
  },
  {
    id: "premium",
    name: "Premium Plan",
    businessType: "Enterprise Teams",
    monthlyPrice: 149.0,
    yearlyPrice: 1251.6,
    icon: "🌟",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    features: [
      { name: "Contact Management", included: true },
      { name: "Task and Activity Tracking", included: true },
      { name: "Automation Workflows", included: true },
      { name: "PayPal Mass Payout", included: true },
      { name: "Chat and Email Support", included: true },
      { name: "Customizable Dashboards", included: true },
      { name: "24/7 Priority Support", included: true },
      { name: "Advanced Analytics", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  },
];

// Custom solution options
const customSolutionOptions: SolutionOption[] = [
  {
    id: "tutorials",
    title: "Watch Tutorials",
    description:
      "Learn at your own pace and implement automations on your own, no coding required.",
    type: "primary",
  },
  {
    id: "templates",
    title: "Browse Templates & Mini Apps",
    description:
      "Choose from proven automation flows and customize them to fit your needs.",
    type: "secondary",
  },
  {
    id: "consultation",
    title: "Schedule a Consultation",
    description:
      "Our experts will help you identify your needs, define a clear roadmap, and implement the right solution.",
    type: "secondary",
  },
];

// Custom process steps
const customProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in just a few clicks.",
  },
  {
    number: "02",
    title: "Customize Your Chatbot",
    description: "Tailor the chatbot to meet your business needs.",
  },
  {
    number: "03",
    title: "Train Chatbot",
    description: "Sync your resources and documentation, let AI learn it.",
  },
  {
    number: "04",
    title: "Deploy and Engage",
    description:
      "Activate your AI assistant and start conversing with customers.",
  },
];

const handleSolutionOptionClick = (optionId: string) => {
  switch (optionId) {
    case "tutorials":
      console.log("Redirecting to tutorials...");
      // Add your navigation logic here
      break;
    case "templates":
      console.log("Opening templates gallery...");
      // Add your navigation logic here
      break;
    case "consultation":
      console.log("Opening consultation booking...");
      // Add your navigation logic here
      break;
    default:
      console.log("Unknown option:", optionId);
  }
};

const handleAiServicesPrimaryClick = () => {
  console.log("Navigating to learn more page...");
  // Add your navigation logic here
};

const handleAiServicesSecondaryClick = () => {
  console.log("Opening sign up form...");
  // Add your sign up logic here
};

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const handleIntegrationToggle = (integrationId: string, enabled: boolean) => {
    console.log(
      `Integration ${integrationId} ${enabled ? "enabled" : "disabled"}`
    );
    // Add your integration logic here
  };

  const handleExploreClick = () => {
    console.log("Exploring use cases...");
    // Add your explore logic here
  };

  const handlePlanSelect = (
    planId: string,
    billingCycle: "monthly" | "yearly"
  ) => {
    console.log(`Selected plan: ${planId} with ${billingCycle} billing`);
     // Optional: Save plan to state, context, or localStorage
     localStorage.setItem("selectedPlanId", planId);
     localStorage.setItem("selectedBillingCycle", billingCycle);
 
     // Navigate to /payment route
     navigate("/workspace");
    // Add your plan selection logic here (redirect to checkout, etc.)
  };

  const handleReadMore = (planId: string) => {
    console.log(`Read more clicked for plan: ${planId}`);
    // Add your read more logic here (open modal, navigate to details page, etc.)
  };
  return (
    <>
      {/* <Header /> */}
     <Navbar/>
      <HeroSection />
      <ScalableSolutionsSection />
      <AutomateSuccessSection />
      <ServicesSection />
      <GlobalAutomationSection />/
      <ConnectSection />
      <SmartAISection />
      <IntegrationsSection />
      {/* <BannersSection /> */}
      {/* <ScreenSharingSection /> */}
      {/* <FeaturesSection /> */}
      <SupportBlogSection/>
      <BenefitsSection />
      <SolutionsSection
        title="Solutions"
        subtitle="Integrations"
        integrations={integrations}
        onIntegrationToggle={handleIntegrationToggle}
        onExploreClick={handleExploreClick}
        enabledByDefault={["gmail", "slack", "trello"]}
        showSearch={true}
        showCategoryFilter={true}
      />
      {/* <BusinessSolutionSection /> */}


      <BusinessSolutionsSection
        solutionOptions={customSolutionOptions}
        processSteps={customProcessSteps}
        onSolutionOptionClick={handleSolutionOptionClick}
        onAiServicesPrimaryClick={handleAiServicesPrimaryClick}
        onAiServicesSecondaryClick={handleAiServicesSecondaryClick}
      />
      <GetStartedSection />
      {/* Pricing Section */}
      <PricingSection
        plans={pricingPlans}
        onPlanSelect={handlePlanSelect}
        onReadMore={handleReadMore}
        yearlyDiscount={30}
        showYearlyToggle={true}
        currency="$"
      />
      <NewsSection />
      <LeadsForm/>  
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </>
  );
};

export default Homepage;
