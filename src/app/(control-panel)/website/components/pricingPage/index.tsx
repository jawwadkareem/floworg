import React from "react";
import EnterpriseSection, { EnterprisePlan } from "./EnterpriseSection";
import PricingTiersSection, { PricingTier } from "./PricingTiersSection";
import NewsSection from "../NewsSection";
import TestimonialsSection from "../TestimonialsSection";
import NewsletterSection from "../NewsletterSection";
import Footer from "../Footer";
import FAQSection, { FAQCategory } from "./faq-section";
import LeadsForm, { LeadsFormData } from "./leads-form";
import BusinessSolutionsSection, {
  ProcessStep,
  SolutionOption,
} from "./business-solutions-section";
import SolutionsSection, { Integration } from "../SolutionsSection";
import PricingPageSection from "./pricing-page";
import Navbar from "../Navbar";

const faqCategories: FAQCategory[] = [
  {
    id: "general",
    name: "General",
    faqs: [
      {
        question: "What is HAIchat?",
        answer:
          "HAIchat is an AI chatbot platform designed to automate customer interactions, streamline support, and enhance engagement across various channels.",
      },
      {
        question: "How does HAIchat ensure data security?",
        answer:
          "We implement enterprise-grade security measures including encryption, secure data storage, and compliance with industry standards.",
      },
      {
        question: "Is there a trial period for HAIchat?",
        answer:
          "Yes, we offer a free trial period so you can test all features before making a commitment.",
      },
      {
        question: "What support options are available if I need help?",
        answer:
          "We provide 24/7 customer support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients.",
      },
      {
        question: "How can I measure the performance of my HAIchat bot?",
        answer:
          "Our platform includes detailed analytics and reporting tools to track conversations, user satisfaction, and performance metrics.",
      },
      {
        question: "How customizable is the chatbot's design and functionality?",
        answer:
          "HAIchat offers extensive customization options for both design and functionality to match your brand and business needs.",
      },
    ],
  },
  {
    id: "technical",
    name: "Technical",
    faqs: [
      {
        question: "What programming languages does HAIchat support?",
        answer:
          "HAIchat supports integration with multiple programming languages including JavaScript, Python, PHP, and more through our REST API.",
      },
      {
        question: "Can I integrate HAIchat with my existing CRM?",
        answer:
          "Yes, HAIchat offers seamless integration with popular CRM systems like Salesforce, HubSpot, and Zendesk.",
      },
      {
        question: "What are the system requirements for HAIchat?",
        answer:
          "HAIchat is cloud-based and works with any modern web browser. No special hardware or software installation is required.",
      },
      {
        question: "How do I backup my chatbot data?",
        answer:
          "We provide automated daily backups and you can also export your data at any time through our dashboard.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    faqs: [
      {
        question: "What pricing plans are available?",
        answer:
          "We offer Starter, Professional, and Enterprise plans with different features and conversation limits to suit businesses of all sizes.",
      },
      {
        question: "Is there a free plan available?",
        answer:
          "Yes, we offer a free plan with basic features and limited conversations per month, perfect for small businesses getting started.",
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
          "You can change your plan at any time from your account dashboard. Changes take effect immediately.",
      },
      {
        question: "Do you offer custom enterprise pricing?",
        answer:
          "Yes, we provide custom pricing for enterprise clients with specific requirements and high-volume usage needs.",
      },
    ],
  },
  {
    id: "support",
    name: "Support",
    faqs: [
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our support team via live chat, email, or phone. We're available 24/7 to help you.",
      },
      {
        question: "Do you provide training for new users?",
        answer:
          "Yes, we offer comprehensive onboarding sessions, video tutorials, and documentation to help you get started quickly.",
      },
      {
        question: "What is your average response time for support tickets?",
        answer:
          "We typically respond to support tickets within 2 hours during business hours and within 24 hours on weekends.",
      },
      {
        question: "Do you offer phone support?",
        answer:
          "Phone support is available for Professional and Enterprise plan subscribers during business hours.",
      },
    ],
  },
];

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

const pricingTiers: PricingTier[] = [
  {
    id: "standing-orders",
    title: "Standing Orders",
    description:
      "Automatic bank account debiting for recurring payments and subscription management",
    price: 50,
    currency: "$",
    period: "per month + tax",
    icon: "🏦",
    bgColor: "bg-gray-50",
    iconBgColor: "bg-gradient-to-br from-gray-400 to-gray-600",
    enabled: false,
    hasSettings: true,
  },
  {
    id: "customer-notifications",
    title: "Customer Notifications",
    description:
      "SMS and email notifications to customers about business updates and order status",
    price: 0,
    currency: "$",
    period: "CRM only",
    icon: "📱",
    bgColor: "bg-purple-50",
    iconBgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    enabled: true,
    hasSettings: false,
  },
  {
    id: "crm-system",
    title: "CRM System",
    description:
      "Complete customer relationship management with lead tracking and order processing",
    price: 69,
    currency: "$",
    period: "per month",
    icon: "👥",
    bgColor: "bg-blue-50",
    iconBgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    enabled: true,
    hasSettings: true,
  },
  {
    id: "advanced-reports",
    title: "Advanced Reports",
    description:
      "Detailed analytics and reporting with custom dashboards and data insights",
    price: 0,
    currency: "$",
    period: "included with CRM",
    icon: "📊",
    bgColor: "bg-white",
    iconBgColor: "bg-gradient-to-br from-green-400 to-green-600",
    enabled: true,
    hasSettings: true,
  },
  {
    id: "permission-management",
    title: "Permission Management",
    description:
      "Role-based access control and user permission management system",
    price: 0,
    currency: "$",
    period: "included with CRM",
    icon: "🔐",
    bgColor: "bg-white",
    iconBgColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    enabled: true,
    hasSettings: false,
  },
  {
    id: "time-management",
    title: "Time Management",
    description:
      "Employee time tracking, scheduling, and productivity monitoring tools",
    price: 45,
    currency: "$",
    period: "per month",
    icon: "⏰",
    bgColor: "bg-white",
    iconBgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
    enabled: false,
    hasSettings: true,
  },
  {
    id: "backup-service",
    title: "Backup Service",
    description:
      "Automated data backup and recovery with cloud storage integration",
    price: 25,
    currency: "$",
    period: "per month",
    icon: "💾",
    bgColor: "bg-white",
    iconBgColor: "bg-gradient-to-br from-teal-400 to-teal-600",
    enabled: false,
    hasSettings: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time business analytics with customizable charts and performance metrics",
    price: 100,
    currency: "$",
    period: "per month",
    icon: "📈",
    bgColor: "bg-yellow-50",
    iconBgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    enabled: false,
    hasSettings: true,
  },
  {
    id: "mobile-app",
    title: "Mobile Application",
    description:
      "Native mobile app for iOS and Android with full feature access",
    price: 0,
    currency: "$",
    period: "included with CRM",
    icon: "📱",
    bgColor: "bg-white",
    iconBgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
    enabled: false,
    hasSettings: false,
  },
];

// Enterprise plan configuration
const enterprisePlan: EnterprisePlan = {
  id: "enterprise-premium",
  badge: "ENTERPRISE ⭐",
  title: "Custom Plan for your big Business",
  description:
    "Scalable enterprise solution with unlimited resources and dedicated support for large organizations",
  startingPrice: 999,
  currency: "$",
  period: "month",
  trialInfo: "Try 7 days free, Cancel anytime",
  features: [
    { name: "All from Growth & Business Plan", included: true },
    { name: "Unlimited Attendees", included: true },
    { name: "No time limit", included: true },
    { name: "100+ whiteboards", included: true },
    { name: "Unlimited storage", included: true },
    { name: "Priority Support 24/7", included: true },
    { name: "Custom Integrations", included: true },
    { name: "Dedicated Account Manager", included: true },
    { name: "Advanced Security & Compliance", included: true },
    { name: "Custom Branding", included: true },
  ],
  buttonText: "Let's Talk",
  disclaimer: "*price does not include taxes and varies based on usage",
};

const PricingPage: React.FC = () => {
  const handleLeadsSubmit = (data: LeadsFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    alert("Thank you for your interest! We'll contact you soon.");
  };

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
    // Add your plan selection logic here (redirect to checkout, etc.)
    alert(`You selected the ${planId} plan with ${billingCycle} billing!`);
  };

  const handleReadMore = (planId: string) => {
    console.log(`Read more clicked for plan: ${planId}`);
    // Add your read more logic here (open modal, navigate to details page, etc.)
  };

  const handleTierToggle = (tierId: string, enabled: boolean) => {
    console.log(`Tier ${tierId} ${enabled ? "enabled" : "disabled"}`);
  };

  const handleTierLearnMore = (tierId: string) => {
    console.log(`Learn more clicked for tier: ${tierId}`);
    // Add your learn more logic here
  };

  const handleTierSettings = (tierId: string) => {
    console.log(`Settings clicked for tier: ${tierId}`);
    // Add your settings logic here
  };

  const handleEnterpriseContactSales = (planId: string) => {
    console.log(`Contact sales clicked for enterprise plan: ${planId}`);
    alert(
      "Thank you for your interest! Our enterprise team will contact you within 24 hours."
    );
  };

  const handleComparePlans = () => {
    console.log("Compare plans clicked");
    alert("Redirecting to detailed plan comparison...");
  };

  const handleCalculatePrice = (users: number, estimatedPrice: number) => {
    console.log(`Price calculated for ${users} users: $${estimatedPrice}`);
    alert(
      `Custom quote for ${users.toLocaleString()} users: $${estimatedPrice.toLocaleString()}/month`
    );
  };

  return (
    <>
    <Navbar/>
      <PricingPageSection />
      {/* Enterprise Section */}
      <EnterpriseSection
        plan={enterprisePlan}
        onContactSales={handleEnterpriseContactSales}
        onComparePlans={handleComparePlans}
        onCalculatePrice={handleCalculatePrice}
        showCalculator={true}
        showComparePlans={true}
      />

      {/* Pricing Tiers Section */}
      <PricingTiersSection
        tiers={pricingTiers}
        onTierToggle={handleTierToggle}
        onLearnMore={handleTierLearnMore}
        onSettings={handleTierSettings}
      />
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
      <BusinessSolutionsSection
        solutionOptions={customSolutionOptions}
        processSteps={customProcessSteps}
        onSolutionOptionClick={handleSolutionOptionClick}
        onAiServicesPrimaryClick={handleAiServicesPrimaryClick}
        onAiServicesSecondaryClick={handleAiServicesSecondaryClick}
      />
      <FAQSection
        categories={faqCategories}
        defaultActiveCategory="general"
        defaultOpenFAQ={null}
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <LeadsForm onSubmit={handleLeadsSubmit} />
        </div>
      </section>
      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default PricingPage;
