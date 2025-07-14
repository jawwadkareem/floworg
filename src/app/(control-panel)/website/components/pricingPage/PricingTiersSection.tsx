"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Info } from "lucide-react";

export interface PricingTier {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  icon: string;
  bgColor: string;
  iconBgColor: string;
  enabled: boolean;
  hasSettings?: boolean;
  category?: string;
}

export interface PricingTiersSectionProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  onTierToggle?: (tierId: string, enabled: boolean) => void;
  onLearnMore?: (tierId: string) => void;
  onSettings?: (tierId: string) => void;
  className?: string;
}

const PricingTiersSection: React.FC<PricingTiersSectionProps> = ({
  title = "View all Pro pricing tiers",
  subtitle = "Choose the services that best fit your business needs",
  tiers,
  onTierToggle,
  onLearnMore,
  onSettings,
  className = "",
}) => {
  const [enabledTiers, setEnabledTiers] = useState<Set<string>>(
    new Set(tiers.filter((tier) => tier.enabled).map((tier) => tier.id))
  );

  const handleToggle = (tierId: string) => {
    const newEnabledState = !enabledTiers.has(tierId);
    const newEnabledTiers = new Set(enabledTiers);

    if (newEnabledState) {
      newEnabledTiers.add(tierId);
    } else {
      newEnabledTiers.delete(tierId);
    }

    setEnabledTiers(newEnabledTiers);
    onTierToggle?.(tierId, newEnabledState);
  };

  const handleLearnMore = (tierId: string) => {
    onLearnMore?.(tierId);
    console.log(`Learn more clicked for tier: ${tierId}`);
  };

  const handleSettings = (tierId: string) => {
    onSettings?.(tierId);
    console.log(`Settings clicked for tier: ${tierId}`);
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                tier.bgColor
              } ${enabledTiers.has(tier.id) ? "ring-2 ring-[#1ad7ad] ring-opacity-50" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${tier.iconBgColor}`}
                >
                  <span className="text-white text-xl">{tier.icon}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">
                      {tier.currency} {tier.price}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={enabledTiers.has(tier.id)}
                      onChange={() => handleToggle(tier.id)}
                    />
                    <div
                      onClick={() => handleToggle(tier.id)}
                      className={`w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
                        enabledTiers.has(tier.id)
                          ? "bg-[#1ad7ad]"
                          : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                          enabledTiers.has(tier.id)
                            ? "translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                  {tier.hasSettings && (
                    <button
                      onClick={() => handleSettings(tier.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {tier.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {tier.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{tier.period}</span>
                <button
                  onClick={() => handleLearnMore(tier.id)}
                  className="text-[#1ad7ad] hover:text-[#1ad7ad] text-sm font-medium transition-colors flex items-center gap-1"
                >
                  Learn More
                  <Info className="w-3 h-3" />
                </button>
              </div>

              {enabledTiers.has(tier.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      ✓ Active
                    </span>
                    <button className="text-xs text-[#1ad7ad] hover:text-[#1ad7ad]">
                      Configure
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Selected Services</h3>
              <p className="text-sm text-gray-600">
                {enabledTiers.size} of {tiers.length} services enabled
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {tiers
                  .filter((tier) => enabledTiers.has(tier.id))
                  .reduce((total, tier) => total + tier.price, 0)}
              </div>
              <p className="text-sm text-gray-600">Total per month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiersSection;
