"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator, Users, Zap, X as CloseIcon } from "lucide-react";

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
export interface EnterpriseFeature {
  name: string;
  included: boolean;
}

export interface EnterprisePlan {
  id: string;
  badge: string;
  title: string;
  description: string;
  startingPrice: number;
  currency: string;
  period: string;
  trialInfo: string;
  features: EnterpriseFeature[];
  buttonText: string;
  disclaimer?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  businessType: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
  color: string;
  bgColor: string;
  features: { name: string; included: boolean }[];
  buttonText: string;
  buttonVariant: "contained" | "outlined";
  recommended?: boolean;
  popular?: boolean;
}

export interface PricingTier {
  users: number;
  label: string;
  priceMultiplier: number;
}

export interface EnterpriseSectionProps {
  plan?: EnterprisePlan;
  onContactSales?: (planId: string) => void;
  onComparePlans?: () => void;
  calculatorTitle?: string;
  pricingTiers?: PricingTier[];
  basePrice?: number;
  onCalculatePrice?: (users: number, estimatedPrice: number) => void;
  showCalculator?: boolean;
  showComparePlans?: boolean;
  className?: string;
}

const PlanComparisonModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  allPlans: PricingPlan[];
}> = ({ isOpen, onClose, allPlans }) => {
  if (!isOpen) return null;

  const allFeatures = Array.from(
    new Set(allPlans.flatMap(plan => plan.features.map(f => f.name)))
  );

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Dialog */}
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative mx-auto my-6 w-[95vw] md:w-[85vw] max-w-[1200px] bg-white rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Header (non-scroll) */}
        <div className="flex items-center justify-between gap-4 p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Compare Plans</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Close modal"
          >
            <CloseIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Scrollable content (both axes) */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm table-auto min-w-[1100px]">
            <thead className="sticky top-0 z-10 bg-white">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700 border-b w-56">
                  Features
                </th>
                {allPlans.map(plan => (
                  <th key={plan.id} className="p-4 text-center font-semibold border-b align-top">
                    <div
                      className="rounded-xl px-3 py-2 md:p-3 inline-block"
                      style={{ border: `2px solid ${plan.color}`, backgroundColor: plan.bgColor }}
                    >
                      <div className="text-xl">{plan.icon}</div>
                      <h3 className="text-base md:text-lg font-bold mt-1" style={{ color: plan.color }}>
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-600">{plan.businessType}</p>
                      <p className="text-sm md:text-base font-bold mt-2 text-gray-800">
                        ${plan.monthlyPrice.toFixed(2)}/mo
                      </p>
                      <p className="text-[11px] md:text-xs text-gray-500">
                        ${(plan.yearlyPrice / 12).toFixed(2)}/mo yearly
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {allFeatures.map((feature, index) => (
                <tr
                  key={feature}
                  className={`${index % 2 === 0 ? "bg-gray-50/60" : "bg-white"} border-b`}
                >
                  <td className="p-4 text-gray-800 font-medium text-left align-middle">
                    {feature}
                  </td>
                  {allPlans.map(plan => {
                    const featureData = plan.features.find(f => f.name === feature);
                    return (
                      <td key={plan.id} className="p-4 text-center align-middle">
                        {featureData ? (
                          featureData.included ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <CloseIcon className="w-5 h-5 text-red-400 mx-auto" />
                          )
                        ) : (
                          <CloseIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer (non-scroll) */}
        <div className="p-4 md:p-6 border-t text-center">
          <button
            onClick={onClose}
            className="bg-[#1ad7ad] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#14b89d] transition-colors duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
  plan = {
    id: "enterprise",
    badge: "ENTERPRISE ⭐",
    title: "Custom Plan for your big Business",
    description:
      "Scalable solution designed for large organizations with advanced needs",
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
      { name: "Priority Support", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Dedicated Account Manager", included: true },
    ],
    buttonText: "Let's Talk",
    disclaimer: "*price does not include taxes",
  },
  onContactSales,
  onComparePlans,
  calculatorTitle = "Calculate Your Plan",
  pricingTiers = [
    { users: 500, label: "500", priceMultiplier: 1 },
    { users: 50000, label: "50k", priceMultiplier: 1.5 },
    { users: 200000, label: "200k", priceMultiplier: 2.2 },
    { users: 500000, label: "500k", priceMultiplier: 3.5 },
    { users: 1000000, label: "1m", priceMultiplier: 5 },
    { users: 2000000, label: "2m", priceMultiplier: 7.5 },
  ],
  basePrice = 999,
  onCalculatePrice,
  showCalculator = true,
  showComparePlans = true,
  className = "",
}) => {
  const [sliderIndices, setSliderIndices] = useState([0, 0, 0]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalUsers = sliderIndices.reduce(
    (sum, index) => sum + pricingTiers[index].users,
    0
  );
  const estimatedPrice = Math.round(
    basePrice * sliderIndices.reduce((sum, index) => sum + pricingTiers[index].priceMultiplier, 0)
  );

  const handleContactSales = () => {
    onContactSales?.(plan.id);
    console.log(`Contact sales clicked for plan: ${plan.id}`);
  };

  const handleComparePlans = () => {
    setIsModalOpen(true);
    onComparePlans?.();
    console.log("Compare plans clicked");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSliderChange = (sliderIdx: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = Number(event.target.value);
    const newSliderIndices = [...sliderIndices];
    newSliderIndices[sliderIdx] = newIndex;
    setSliderIndices(newSliderIndices);
    setIsCalculating(true);

    setTimeout(() => {
      setIsCalculating(false);
      const updatedUsers = newSliderIndices.reduce((sum, index) => sum + pricingTiers[index].users, 0);
      const updatedPrice = Math.round(
        basePrice * newSliderIndices.reduce((sum, index) => sum + pricingTiers[index].priceMultiplier, 0)
      );
      onCalculatePrice?.(updatedUsers, updatedPrice);
    }, 300);
  };

  const getSliderPosition = (index: number) => {
    return (sliderIndices[index] / (pricingTiers.length - 1)) * 100;
  };

  // Combine all plans for comparison
  const allPlans = [
    ...omniAIPricingPlans,
    ...sysPricingPlans,
    ...comboPricingPlans,
    ...otherServicesPricingPlans,
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Enterprise Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full mb-4">
                {plan.badge}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  Starting at {plan.currency}
                  {plan.startingPrice}
                </span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <p className="text-green-600 font-medium mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {plan.trialInfo}
              </p>
            </div>
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      feature.included ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {feature.included && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span
                    className={`text-sm ${feature.included ? "text-gray-800" : "text-gray-400"} ${
                      index === 0 ? "font-semibold" : ""
                    }`}
                  >
                    {feature.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="text-center lg:text-right">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2563eb",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactSales}
                className="bg-transparent border border-gray-300 text-gray-900 px-8 py-4 rounded-4xl font-semibold mb-6 inline-flex items-center gap-2 shadow-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        {plan.disclaimer && (
          <p className="text-xs text-gray-500 text-right border-t border-gray-100 mb-4">
            {plan.disclaimer}
          </p>
        )}
        {/* Compare Plans Button */}
        {showComparePlans && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComparePlans}
              className="bg-[#1ad7ad]/95 hover:bg-[#1ad7ad] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Compare Plans
            </motion.button>
          </motion.div>
        )}

        {/* Pricing Calculator */}
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">{calculatorTitle}</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Users</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {sliderIndices.reduce((sum, index) => sum + pricingTiers[index].users, 0).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Estimated Price</p>
                    <p className="text-2xl font-bold text-green-600">
                      {isCalculating ? "..." : `${plan.currency}${estimatedPrice.toLocaleString()}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Per User Cost</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {isCalculating
                        ? "..."
                        : `${plan.currency}${(estimatedPrice / totalUsers).toFixed(2)}`}
                    </p>
                  </div>
                </div>
              </div>
              {["Bots", "Users", "Contacts"].map((label, sliderIdx) => (
                <div className="mb-6" key={sliderIdx}>
                  <div className="flex items-center mb-2">
                    <div className="w-24 text-left font-semibold text-gray-700">{label}</div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        {pricingTiers.map((tier, index) => (
                          <span
                            key={index}
                            className={`transition-colors duration-300 ${
                              index === sliderIndices[sliderIdx] ? "text-blue-600 font-semibold" : ""
                            }`}
                          >
                            {tier.label}
                          </span>
                        ))}
                      </div>
                      <div className="relative h-3 bg-gray-200 rounded-full">
                        <div
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${getSliderPosition(sliderIdx)}%` }}
                        />
                        <div
                          className="absolute w-6 h-6 bg-gray-900 rounded-full -top-1.5 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                          style={{ left: `calc(${getSliderPosition(sliderIdx)}% - 12px)` }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={pricingTiers.length - 1}
                          value={sliderIndices[sliderIdx]}
                          onChange={handleSliderChange(sliderIdx)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Pricing scales based on your organization size and usage requirements
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCalculatePrice?.(totalUsers, estimatedPrice)}
                  className="bg-[#1ad7ad]/95 hover:bg-[#1ad7ad] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Custom Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Plan Comparison Modal */}
        <PlanComparisonModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          allPlans={allPlans}
        />
      </div>
    </section>
  );
};

export default EnterpriseSection;