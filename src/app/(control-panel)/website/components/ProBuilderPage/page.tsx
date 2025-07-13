import type React from "react"
import { useNavigate } from "react-router";
import Header from "../Header"
import Navbar from "../Navbar";

import ScalableSolutionsSection from "../ScalableSolutionsSection";
import EnterpriseSection from "../EnterpriseSection";
import PricingSection, { PricingPlan } from "../PricingSection";
import NewsSection from "../NewsSection"
import GetStartedSection from "../GetStartedSection";
import ProBuilderSection from "../ProBuilderSection";
import NewsletterSection from "../NewsletterSection";
import FAQSection from "../faq-section"
import TestimonialsSection from "../TestimonialsSection"

import LeadsForumSection from "../LeadsForumSection";
import Footer from "../Footer"
import { use } from "react";

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

const ProBuilderpage: React.FC = () => {
    const navigate = useNavigate();
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
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Floworg ProBuilder
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization,
              and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>
      
      <ScalableSolutionsSection />
      <EnterpriseSection />
      <PricingSection
        plans={pricingPlans}
        onPlanSelect={handlePlanSelect}
        onReadMore={handleReadMore}
        yearlyDiscount={30}
        showYearlyToggle={true}
        currency="$"
      />
      <GetStartedSection />
      <ProBuilderSection />
      <FAQSection />
      <LeadsForumSection />

      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      </div>
    </>
  )
}

export default ProBuilderpage;
