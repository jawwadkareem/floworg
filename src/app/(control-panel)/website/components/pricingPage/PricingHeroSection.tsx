import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingHeroSection: React.FC = () => {
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Small Businesses",
      price: "$19.00",
      period: "/month",
      buttonText: "Start 14 day trial",
      buttonColor: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      name: "Pro Plan",
      subtitle: "Growing Businesses",
      price: "$59.00",
      period: "/month",
      buttonText: "Start Free Trial",
      buttonColor: "bg-teal-500 text-white hover:bg-teal-600",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: true },
        { name: "24/7 Priority Support", included: true },
      ],
      bgColor: "bg-teal-50",
      iconColor: "text-teal-500",
      recommended: true,
    },
    {
      name: "Enterprise Plan",
      subtitle: "Large Businesses",
      price: "$99.00",
      period: "/month",
      buttonText: "Start 14 day trial",
      buttonColor: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: true },
        { name: "24/7 Priority Support", included: true },
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <div className="bg-white text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Pricing</h1>
          <p className="text-xl mb-8">
            Discover Your Full Power – Smart Automation, Precise Optimization,
            and Growth at the Highest International Standards
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-1 flex">
              <button className="px-6 py-2 rounded-md bg-white text-teal-500 font-medium">
                Floworg OmniAI 360
              </button>
              <button className="px-6 py-2 rounded-md text-white font-medium">
                Floworg SYS 360
              </button>
              <button className="px-6 py-2 rounded-md text-white font-medium">
                Combo Plans
              </button>
              <button className="px-6 py-2 rounded-md text-white font-medium">
                Other Services
              </button>
            </div>
          </div>
        </motion.div>

        {/* Plans Section */}
        <div className="bg-white text-gray-800 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Select The Plan That Best Suits Your Business Needs.
            </h2>
            <p className="text-gray-600 mb-8">
              No matter if you're new to the game or aiming to boost your
              marketing strategies, we have a tailored plan just for you.
            </p>

            {/* Monthly/Yearly Toggle */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-purple-500 font-medium">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
              </div>
              <span className="font-medium">
                Yearly <span className="text-purple-500">(Save 30%)</span>
              </span>
              <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded">
                SAVE 30%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${plan.bgColor} rounded-2xl p-8 relative ${
                  plan.recommended ? "ring-2 ring-teal-500 scale-105" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-12 h-12 ${plan.iconColor} mx-auto mb-4`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.buttonColor}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-center text-gray-600 hover:text-gray-800 font-medium">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeroSection;
