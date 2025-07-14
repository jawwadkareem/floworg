import type React from "react"
import Service1Header from "./service1-header"
import ScalableSolutionsSection from "./ScalableSolutionsSection"
import AutomateSuccessSection from "./AutomateSuccessSection"
import ConnectSection from "./ConnectSection"
import SmartAISection from "./SmartAISection"
import IntegrationsSection from "./IntegrationsSection"
import FeaturesSection from "./FeatureSection"
import BenefitsSection from "./BenefitsSection"
import SolutionsSection, { Integration } from "./SolutionsSection";
import TestimonialsSection from "./TestimonialsSection"
import Footer from "./Footer"
import NewsletterSection from "./NewsletterSection"
import ProcessTimelineSection from "./ProcessTimelineSection"
import FAQSection from "./faq-section"
import LeadsForumSection from "./LeadsForumSection"
import NewsSection from "./NewsSection"
import BusinessSolutionSection from "./BusinessSolutionSection"
import GetStartedSection from "./GetStartedSection"
import PricingSection, { PricingPlan } from "./PricingSection";
import PricingComparisonSection from "./PricingComparisonSection"
import ProBuilderSection from "./ProBuilderSection"
import EnterpriseSection from "./pricingPage/EnterpriseSection"
import Navbar from "./Navbar"

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
];
const Service1page: React.FC = () => {
  return (
    <>
    <Navbar/>
      <Service1Header />
      <ScalableSolutionsSection />
      <AutomateSuccessSection />
      <ConnectSection />
      <SmartAISection />
      <IntegrationsSection />
      <FeaturesSection />
      <BenefitsSection />
      <SolutionsSection
        title="Solutions"
        subtitle="Integrations"
        integrations={integrations}
      
        enabledByDefault={["gmail", "slack", "trello"]}
        showSearch={true}
        showCategoryFilter={true}
      />
      
      <FAQSection />
      <LeadsForumSection />
      <BusinessSolutionSection />
      <GetStartedSection />
      <PricingSection
        plans={pricingPlans}
        
        yearlyDiscount={30}
        showYearlyToggle={true}
        currency="$"
      />
      <PricingComparisonSection />
      <ProBuilderSection />
    <ProcessTimelineSection />

      <EnterpriseSection />
      <NewsSection />
    
      <TestimonialsSection />
      <NewsletterSection />

      <Footer />
    </>
  )
}

export default Service1page;
