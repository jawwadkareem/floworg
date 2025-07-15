"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator, Users, Zap } from "lucide-react";

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

export interface PricingTier {
  users: number;
  label: string;
  priceMultiplier: number;
}

export interface EnterpriseSectionProps {
  plan?: EnterprisePlan;
  onContactSales?: (planId: string) => void;
  onComparePlans?: () => void;

  // Calculator props
  calculatorTitle?: string;
  pricingTiers?: PricingTier[];
  basePrice?: number;
  onCalculatePrice?: (users: number, estimatedPrice: number) => void;

  // Customization
  showCalculator?: boolean;
  showComparePlans?: boolean;
  className?: string;
}

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
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Default to second tier
  const [isCalculating, setIsCalculating] = useState(false);

  const currentTier = pricingTiers[selectedTierIndex];
  const estimatedPrice = Math.round(basePrice * currentTier.priceMultiplier);

  const handleContactSales = () => {
    onContactSales?.(plan.id);
    console.log(`Contact sales clicked for plan: ${plan.id}`);
  };

  const handleComparePlans = () => {
    onComparePlans?.();
    console.log("Compare plans clicked");
  };

  const handleSliderChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newIndex = Number.parseInt(event.target.value);
      setSelectedTierIndex(newIndex);
      setIsCalculating(true);

      // Simulate calculation delay
      setTimeout(() => {
        setIsCalculating(false);
        const tier = pricingTiers[newIndex];
        const price = Math.round(basePrice * tier.priceMultiplier);
        onCalculatePrice?.(tier.users, price);
      }, 300);
    },
    [pricingTiers, basePrice, onCalculatePrice]
  );

  const getSliderPosition = () => {
    return (selectedTierIndex / (pricingTiers.length - 1)) * 100;
  };

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

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {plan.title}
              </h3>

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
                      {feature.included && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-800" : "text-gray-400"
                      } ${index === 0 ? "font-semibold" : ""}`}
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
              {/* <div className="relative">
              <div className="w-full max-w-sm mx-auto lg:ml-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">
                Enterprise Ready
                </h4>
                <p className="text-sm text-gray-600">
                Designed for organizations with 500+ users and complex
                requirements
                </p>
              </div>
              </div> */}
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
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
              <h3 className="text-2xl font-bold text-gray-900">
                {calculatorTitle}
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              {/* Current Selection Display */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Selected Users</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {currentTier.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Estimated Price
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      {isCalculating
                        ? "..."
                        : `${plan.currency}${estimatedPrice.toLocaleString()}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Per User Cost</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {isCalculating
                        ? "..."
                        : `${plan.currency}${(estimatedPrice / currentTier.users).toFixed(2)}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="relative mb-6">
                {/* Labels */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  {pricingTiers.map((tier, index) => (
                    <span
                      key={index}
                      className={`transition-colors duration-300 ${
                        index === selectedTierIndex
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >
                      {tier.label}
                    </span>
                  ))}
                </div>

                {/* Slider Track */}
                <div className="relative h-3 bg-gray-200 rounded-full">
                  {/* Progress Fill */}
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${getSliderPosition()}%` }}
                  />

                  {/* Slider Handle */}
                  <div
                    className="absolute w-6 h-6 bg-gray-900 rounded-full -top-1.5 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                    style={{ left: `calc(${getSliderPosition()}% - 12px)` }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Hidden Range Input */}
                  <input
                    type="range"
                    min="0"
                    max={pricingTiers.length - 1}
                    value={selectedTierIndex}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Pricing scales based on your organization size and usage
                  requirements
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    onCalculatePrice?.(currentTier.users, estimatedPrice)
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Custom Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EnterpriseSection;
