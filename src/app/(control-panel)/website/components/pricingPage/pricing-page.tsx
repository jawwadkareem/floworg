// "use client";

// import { useState } from "react";

// import type React from "react";
// import PricingHeader, { type ServiceTab } from "./pricing-header";
// import PricingSection, { PricingPlan } from "../PricingSection";

// // Different pricing plans for different services
// const omniAIPricingPlans: PricingPlan[] = [
//   {
//     id: "omni-basic",
//     name: "OmniAI Basic",
//     businessType: "Small Teams",
//     monthlyPrice: 29.0,
//     yearlyPrice: 244.8, // 30% discount
//     icon: "🤖",
//     color: "#6366F1",
//     bgColor: "#E0E7FF",
//     features: [
//       { name: "AI-Powered Automation", included: true },
//       { name: "Smart Workflows", included: true },
//       { name: "Basic Analytics", included: true },
//       { name: "Email Support", included: true },
//       { name: "Advanced AI Models", included: false },
//       { name: "Custom Integrations", included: false },
//       { name: "Priority Support", included: false },
//     ],
//     buttonText: "Start Free Trial",
//     buttonVariant: "outlined",
//   },
//   {
//     id: "omni-pro",
//     name: "OmniAI Pro",
//     businessType: "Growing Teams",
//     monthlyPrice: 79.0,
//     yearlyPrice: 664.8, // 30% discount
//     icon: "🚀",
//     color: "#06B6D4",
//     bgColor: "#CFFAFE",
//     features: [
//       { name: "AI-Powered Automation", included: true },
//       { name: "Smart Workflows", included: true },
//       { name: "Advanced Analytics", included: true },
//       { name: "Priority Support", included: true },
//       { name: "Advanced AI Models", included: true },
//       { name: "Custom Integrations", included: false },
//       { name: "Dedicated Account Manager", included: false },
//     ],
//     buttonText: "Get Started",
//     buttonVariant: "contained",
//     recommended: true,
//   },
//   {
//     id: "omni-enterprise",
//     name: "OmniAI Enterprise",
//     businessType: "Large Organizations",
//     monthlyPrice: 199.0,
//     yearlyPrice: 1672.8, // 30% discount
//     icon: "🏢",
//     color: "#8B5CF6",
//     bgColor: "#F3E8FF",
//     features: [
//       { name: "AI-Powered Automation", included: true },
//       { name: "Smart Workflows", included: true },
//       { name: "Advanced Analytics", included: true },
//       { name: "Priority Support", included: true },
//       { name: "Advanced AI Models", included: true },
//       { name: "Custom Integrations", included: true },
//       { name: "Dedicated Account Manager", included: true },
//     ],
//     buttonText: "Contact Sales",
//     buttonVariant: "outlined",
//   },
// ];

// const sysPricingPlans: PricingPlan[] = [
//   {
//     id: "sys-starter",
//     name: "SYS Starter",
//     businessType: "Small Business",
//     monthlyPrice: 19.0,
//     yearlyPrice: 159.6, // 30% discount
//     icon: "⚙️",
//     color: "#10B981",
//     bgColor: "#D1FAE5",
//     features: [
//       { name: "System Optimization", included: true },
//       { name: "Basic Monitoring", included: true },
//       { name: "Standard Support", included: true },
//       { name: "Performance Reports", included: true },
//       { name: "Advanced Monitoring", included: false },
//       { name: "Custom Dashboards", included: false },
//       { name: "24/7 Support", included: false },
//     ],
//     buttonText: "Start Trial",
//     buttonVariant: "outlined",
//   },
//   {
//     id: "sys-professional",
//     name: "SYS Professional",
//     businessType: "Medium Business",
//     monthlyPrice: 49.0,
//     yearlyPrice: 411.6, // 30% discount
//     icon: "📊",
//     color: "#F59E0B",
//     bgColor: "#FEF3C7",
//     features: [
//       { name: "System Optimization", included: true },
//       { name: "Advanced Monitoring", included: true },
//       { name: "Priority Support", included: true },
//       { name: "Performance Reports", included: true },
//       { name: "Custom Dashboards", included: true },
//       { name: "API Access", included: false },
//       { name: "24/7 Support", included: false },
//     ],
//     buttonText: "Get Started",
//     buttonVariant: "contained",
//     recommended: true,
//   },
//   {
//     id: "sys-enterprise",
//     name: "SYS Enterprise",
//     businessType: "Enterprise",
//     monthlyPrice: 99.0,
//     yearlyPrice: 831.6, // 30% discount
//     icon: "🏭",
//     color: "#EF4444",
//     bgColor: "#FEE2E2",
//     features: [
//       { name: "System Optimization", included: true },
//       { name: "Advanced Monitoring", included: true },
//       { name: "24/7 Support", included: true },
//       { name: "Performance Reports", included: true },
//       { name: "Custom Dashboards", included: true },
//       { name: "API Access", included: true },
//       { name: "Dedicated Support", included: true },
//     ],
//     buttonText: "Contact Sales",
//     buttonVariant: "outlined",
//   },
// ];

// const comboPricingPlans: PricingPlan[] = [
//   {
//     id: "combo-standard",
//     name: "Combo Standard",
//     businessType: "Complete Solution",
//     monthlyPrice: 89.0,
//     yearlyPrice: 748.8, // 30% discount
//     icon: "📦",
//     color: "#8B5CF6",
//     bgColor: "#F3E8FF",
//     features: [
//       { name: "OmniAI Basic Features", included: true },
//       { name: "SYS Starter Features", included: true },
//       { name: "Integrated Dashboard", included: true },
//       { name: "Combined Analytics", included: true },
//       { name: "Priority Support", included: true },
//       { name: "Advanced Features", included: false },
//       { name: "Custom Integration", included: false },
//     ],
//     buttonText: "Start Combo Trial",
//     buttonVariant: "contained",
//     recommended: true,
//   },
//   {
//     id: "combo-premium",
//     name: "Combo Premium",
//     businessType: "Full Power Solution",
//     monthlyPrice: 149.0,
//     yearlyPrice: 1252.8, // 30% discount
//     icon: "💎",
//     color: "#06B6D4",
//     bgColor: "#CFFAFE",
//     features: [
//       { name: "OmniAI Pro Features", included: true },
//       { name: "SYS Professional Features", included: true },
//       { name: "Integrated Dashboard", included: true },
//       { name: "Combined Analytics", included: true },
//       { name: "Priority Support", included: true },
//       { name: "Advanced Features", included: true },
//       { name: "Custom Integration", included: true },
//     ],
//     buttonText: "Get Premium",
//     buttonVariant: "outlined",
//   },
// ];

// const otherServicesPricingPlans: PricingPlan[] = [
//   {
//     id: "consulting",
//     name: "Consulting",
//     businessType: "Expert Guidance",
//     monthlyPrice: 199.0,
//     yearlyPrice: 1672.8, // 30% discount
//     icon: "👨‍💼",
//     color: "#10B981",
//     bgColor: "#D1FAE5",
//     features: [
//       { name: "Strategy Consultation", included: true },
//       { name: "Implementation Support", included: true },
//       { name: "Custom Solutions", included: true },
//       { name: "Training Sessions", included: true },
//       { name: "Ongoing Support", included: true },
//       { name: "Dedicated Consultant", included: true },
//       { name: "24/7 Availability", included: false },
//     ],
//     buttonText: "Book Consultation",
//     buttonVariant: "contained",
//   },
//   {
//     id: "training",
//     name: "Training Program",
//     businessType: "Team Development",
//     monthlyPrice: 99.0,
//     yearlyPrice: 831.6, // 30% discount
//     icon: "🎓",
//     color: "#F59E0B",
//     bgColor: "#FEF3C7",
//     features: [
//       { name: "Comprehensive Training", included: true },
//       { name: "Certification Program", included: true },
//       { name: "Learning Materials", included: true },
//       { name: "Progress Tracking", included: true },
//       { name: "Expert Instructors", included: true },
//       { name: "Custom Curriculum", included: false },
//       { name: "1-on-1 Sessions", included: false },
//     ],
//     buttonText: "Enroll Now",
//     buttonVariant: "outlined",
//   },
// ];

// const PricingPageSection: React.FC = () => {
//   const [activeService, setActiveService] = useState<string>("omni-ai");

//   const serviceTabs: ServiceTab[] = [
//     { id: "omni-ai", name: "Floworg OmniAI. 360" },
//     { id: "sys", name: "Floworg SYS 360" },
//     { id: "combo", name: "Combo Plans" },
//     { id: "other", name: "Other Services" },
//   ];

//   const handleTabChange = (tabId: string) => {
//     setActiveService(tabId);
//   };

//   const handlePlanSelect = (
//     planId: string,
//     billingCycle: "monthly" | "yearly"
//   ) => {
//     console.log(
//       `Selected plan: ${planId} with ${billingCycle} billing for service: ${activeService}`
//     );
//     alert(`You selected the ${planId} plan with ${billingCycle} billing!`);
//   };

//   const handleReadMore = (planId: string) => {
//     console.log(`Read more clicked for plan: ${planId}`);
//   };

//   const getCurrentPlans = () => {
//     switch (activeService) {
//       case "omni-ai":
//         return omniAIPricingPlans;
//       case "sys":
//         return sysPricingPlans;
//       case "combo":
//         return comboPricingPlans;
//       case "other":
//         return otherServicesPricingPlans;
//       default:
//         return omniAIPricingPlans;
//     }
//   };

//   const getServiceTitle = () => {
//     const service = serviceTabs.find((tab) => tab.id === activeService);
//     return service?.name || "Pricing Plans";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Pricing Header */}
//       <PricingHeader
//         tabs={serviceTabs}
//         onTabChange={handleTabChange}
//         defaultActiveTab="omni-ai"
//       />

//       {/* Dynamic Pricing Section */}
//       <PricingSection
//         title={`${getServiceTitle()} Plans`}
//         subtitle={`Choose the perfect ${getServiceTitle()} plan for your business needs.`}
//         plans={getCurrentPlans()}
//         onPlanSelect={handlePlanSelect}
//         onReadMore={handleReadMore}
//         yearlyDiscount={30}
//         showYearlyToggle={true}
//         currency="$"
//       />
//     </div>
//   );
// };

// export default PricingPageSection;

"use client"

import type React from "react"
import { useState } from "react"
import PricingHeader, { type ServiceTab } from "./pricing-header"
import PricingSection, { type PricingPlan } from "../PricingSection"

// Different pricing plans for different services
const omniAIPricingPlans: PricingPlan[] = [
  {
    id: "omni-basic",
    name: "OmniAI Basic",
    businessType: "Small Teams",
    monthlyPrice: 29.0,
    yearlyPrice: 244.8, // 30% discount
    icon: "🤖",
    color: "#6366F1",
    bgColor: "#E0E7FF",
    features: [
      { name: "AI-Powered Automation", included: true },
      { name: "Smart Workflows", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Advanced AI Models", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outlined",
  },
  {
    id: "omni-pro",
    name: "OmniAI Pro",
    businessType: "Growing Teams",
    monthlyPrice: 79.0,
    yearlyPrice: 664.8, // 30% discount
    icon: "🚀",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
    features: [
      { name: "AI-Powered Automation", included: true },
      { name: "Smart Workflows", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced AI Models", included: true },
      { name: "Custom Integrations", included: false },
      { name: "Dedicated Account Manager", included: false },
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
    recommended: true,
  },
  {
    id: "omni-enterprise",
    name: "OmniAI Enterprise",
    businessType: "Large Organizations",
    monthlyPrice: 199.0,
    yearlyPrice: 1672.8, // 30% discount
    icon: "🏢",
    color: "#8B5CF6",
    bgColor: "#F3E8FF",
    features: [
      { name: "AI-Powered Automation", included: true },
      { name: "Smart Workflows", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced AI Models", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Dedicated Account Manager", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  },
  {
    id: "omni-startup",
    name: "OmniAI Startup",
    businessType: "Startups",
    monthlyPrice: 15.0,
    yearlyPrice: 126.0, // 30% discount
    icon: "💡",
    color: "#F97316",
    bgColor: "#FED7AA",
    features: [
      { name: "Basic AI Features", included: true },
      { name: "Limited Workflows", included: true },
      { name: "Community Support", included: true },
      { name: "Basic Reports", included: true },
      { name: "Advanced AI Models", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Start Free",
    buttonVariant: "outlined",
  },
  {
    id: "omni-premium",
    name: "OmniAI Premium",
    businessType: "Premium Users",
    monthlyPrice: 129.0,
    yearlyPrice: 1084.8, // 30% discount
    icon: "⭐",
    color: "#DC2626",
    bgColor: "#FEE2E2",
    features: [
      { name: "All AI Features", included: true },
      { name: "Unlimited Workflows", included: true },
      { name: "White-label Solution", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Advanced AI Models", included: true },
      { name: "Custom Integrations", included: true },
      { name: "24/7 Premium Support", included: true },
    ],
    buttonText: "Go Premium",
    buttonVariant: "contained",
  },
  {
    id: "omni-test",
    name: "OmniAI Test",
    businessType: "Test Teams",
    monthlyPrice: 39.0,
    yearlyPrice: 332.4, // 30% discount
    icon: "🧪",
    color: "#FF0000",
    bgColor: "#FFCCCC",
    features: [
      { name: "AI-Powered Automation", included: true },
      { name: "Smart Workflows", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Support", included: true },
      { name: "Advanced AI Models", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Priority Support", included: true },
    ],
    buttonText: "Test Plan",
    buttonVariant: "outlined",
  },
]

const sysPricingPlans: PricingPlan[] = [
  {
    id: "sys-starter",
    name: "SYS Starter",
    businessType: "Small Business",
    monthlyPrice: 19.0,
    yearlyPrice: 159.6, // 30% discount
    icon: "⚙️",
    color: "#10B981",
    bgColor: "#D1FAE5",
    features: [
      { name: "System Optimization", included: true },
      { name: "Basic Monitoring", included: true },
      { name: "Standard Support", included: true },
      { name: "Performance Reports", included: true },
      { name: "Advanced Monitoring", included: false },
      { name: "Custom Dashboards", included: false },
      { name: "24/7 Support", included: false },
    ],
    buttonText: "Start Trial",
    buttonVariant: "outlined",
  },
  {
    id: "sys-professional",
    name: "SYS Professional",
    businessType: "Medium Business",
    monthlyPrice: 49.0,
    yearlyPrice: 411.6, // 30% discount
    icon: "📊",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    features: [
      { name: "System Optimization", included: true },
      { name: "Advanced Monitoring", included: true },
      { name: "Priority Support", included: true },
      { name: "Performance Reports", included: true },
      { name: "Custom Dashboards", included: true },
      { name: "API Access", included: false },
      { name: "24/7 Support", included: false },
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
    recommended: true,
  },
  {
    id: "sys-enterprise",
    name: "SYS Enterprise",
    businessType: "Enterprise",
    monthlyPrice: 99.0,
    yearlyPrice: 831.6, // 30% discount
    icon: "🏭",
    color: "#EF4444",
    bgColor: "#FEE2E2",
    features: [
      { name: "System Optimization", included: true },
      { name: "Advanced Monitoring", included: true },
      { name: "24/7 Support", included: true },
      { name: "Performance Reports", included: true },
      { name: "Custom Dashboards", included: true },
      { name: "API Access", included: true },
      { name: "Dedicated Support", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  },
]

const comboPricingPlans: PricingPlan[] = [
  {
    id: "combo-standard",
    name: "Combo Standard",
    businessType: "Complete Solution",
    monthlyPrice: 89.0,
    yearlyPrice: 748.8, // 30% discount
    icon: "📦",
    color: "#8B5CF6",
    bgColor: "#F3E8FF",
    features: [
      { name: "OmniAI Basic Features", included: true },
      { name: "SYS Starter Features", included: true },
      { name: "Integrated Dashboard", included: true },
      { name: "Combined Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced Features", included: false },
      { name: "Custom Integration", included: false },
    ],
    buttonText: "Start Combo Trial",
    buttonVariant: "contained",
    recommended: true,
  },
  {
    id: "combo-premium",
    name: "Combo Premium",
    businessType: "Full Power Solution",
    monthlyPrice: 149.0,
    yearlyPrice: 1252.8, // 30% discount
    icon: "💎",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
    features: [
      { name: "OmniAI Pro Features", included: true },
      { name: "SYS Professional Features", included: true },
      { name: "Integrated Dashboard", included: true },
      { name: "Combined Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Advanced Features", included: true },
      { name: "Custom Integration", included: true },
    ],
    buttonText: "Get Premium",
    buttonVariant: "outlined",
  },
]

const otherServicesPricingPlans: PricingPlan[] = [
  {
    id: "consulting",
    name: "Consulting",
    businessType: "Expert Guidance",
    monthlyPrice: 199.0,
    yearlyPrice: 1672.8, // 30% discount
    icon: "👨‍💼",
    color: "#10B981",
    bgColor: "#D1FAE5",
    features: [
      { name: "Strategy Consultation", included: true },
      { name: "Implementation Support", included: true },
      { name: "Custom Solutions", included: true },
      { name: "Training Sessions", included: true },
      { name: "Ongoing Support", included: true },
      { name: "Dedicated Consultant", included: true },
      { name: "24/7 Availability", included: false },
    ],
    buttonText: "Book Consultation",
    buttonVariant: "contained",
  },
  {
    id: "training",
    name: "Training Program",
    businessType: "Team Development",
    monthlyPrice: 99.0,
    yearlyPrice: 831.6, // 30% discount
    icon: "🎓",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    features: [
      { name: "Comprehensive Training", included: true },
      { name: "Certification Program", included: true },
      { name: "Learning Materials", included: true },
      { name: "Progress Tracking", included: true },
      { name: "Expert Instructors", included: true },
      { name: "Custom Curriculum", included: false },
      { name: "1-on-1 Sessions", included: false },
    ],
    buttonText: "Enroll Now",
    buttonVariant: "outlined",
  },
]

const PricingPageSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("omni-ai")

  const serviceTabs: ServiceTab[] = [
    { id: "omni-ai", name: "Floworg OmniAI. 360" },
    { id: "sys", name: "Floworg SYS 360" },
    { id: "combo", name: "Combo Plans" },
    { id: "other", name: "Other Services" },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveService(tabId)
  }

  const handlePlanSelect = (planId: string, billingCycle: "monthly" | "yearly") => {
    console.log(`Selected plan: ${planId} with ${billingCycle} billing for service: ${activeService}`)
    alert(`You selected the ${planId} plan with ${billingCycle} billing!`)
  }

  const handleReadMore = (planId: string) => {
    console.log(`Read more clicked for plan: ${planId}`)
  }

  const getCurrentPlans = () => {
    switch (activeService) {
      case "omni-ai":
        return omniAIPricingPlans
      case "sys":
        return sysPricingPlans
      case "combo":
        return comboPricingPlans
      case "other":
        return otherServicesPricingPlans
      default:
        return omniAIPricingPlans
    }
  }

  const getServiceTitle = () => {
    const service = serviceTabs.find((tab) => tab.id === activeService)
    return service?.name || "Pricing Plans"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PricingHeader
        title="Pricing"
        subtitle="Discover Your Full Power – Smart Automation, Precise Optimization, and Growth at the Highest International Standards"
        tabs={serviceTabs}
        onTabChange={handleTabChange}
        defaultActiveTab="omni-ai"
      />

      {/* Dynamic Pricing Section */}
      <PricingSection
        title={`${getServiceTitle()} Plans`}
        subtitle={`Choose the perfect ${getServiceTitle()} plan for your business needs.`}
        plans={getCurrentPlans()}
        onPlanSelect={handlePlanSelect}
        onReadMore={handleReadMore}
        yearlyDiscount={30}
        showYearlyToggle={true}
        currency="$"
      />
    </div>
  )
}

export default PricingPageSection
