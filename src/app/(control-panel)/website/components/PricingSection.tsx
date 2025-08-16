
// "use client";

// import type React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";

// export interface PricingFeature {
//   name: string;
//   included: boolean;
// }

// export interface PricingPlan {
//   id: string;
//   name: string;
//   businessType: string;
//   monthlyPrice: number;
//   yearlyPrice: number;
//   icon: string;
//   color: string;
//   bgColor: string;
//   features: PricingFeature[];
//   buttonText: string;
//   buttonVariant: "contained" | "outlined";
//   recommended?: boolean;
//   popular?: boolean;
// }

// export interface PricingSectionProps {
//   title?: string;
//   subtitle?: string;
//   plans: PricingPlan[];
//   onPlanSelect?: (planId: string, billingCycle: "monthly" | "yearly") => void;
//   onReadMore?: (planId: string) => void;
//   yearlyDiscount?: number;
//   showYearlyToggle?: boolean;
//   currency?: string;
//   className?: string;
// }

// const PricingSection: React.FC<PricingSectionProps> = ({
//   title = "Select The Plan That Best Suits Your Business Needs.",
//   subtitle = "No matter if you're new to the game or aiming to boost your marketing strategies, we have a tailored plan just for you.",
//   plans,
//   onPlanSelect,
//   onReadMore,
//   yearlyDiscount = 30,
//   showYearlyToggle = true,
//   currency = "$",
//   className = "",
// }) => {
//   const [isYearly, setIsYearly] = useState(false);
//   const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({});
//   const [startIndex, setStartIndex] = useState(0);

//   const handlePlanSelect = (planId: string) => {
//     const billingCycle = isYearly ? "yearly" : "monthly";
//     onPlanSelect?.(planId, billingCycle);
//     console.log(`Selected plan: ${planId} with ${billingCycle} billing`);
//   };

//   const handleReadMore = (planId: string) => {
//     setExpandedPlans((prev) => ({
//       ...prev,
//       [planId]: !prev[planId],
//     }));
//     onReadMore?.(planId);
//   };

//   const getPrice = (plan: PricingPlan) => {
//     return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
//   };

//   const formatPrice = (price: number) => {
//     return `${currency}${price.toFixed(2)}`;
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setStartIndex((prev) => Math.min(prev + 1, plans.length - 3));
//   };

//   // Determine visible plans (up to 3 at a time)
//   const visiblePlans = plans.slice(startIndex, startIndex + 3);

//   return (
//     <section className={`py-16 bg-gray-50 ${className}`}>
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
//             {title}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
//             {subtitle}
//           </p>

//           {showYearlyToggle && (
//             <div className="flex justify-center items-center mb-12 gap-4">
//               <span
//                 className={`font-semibold ${!isYearly ? "text-purple-600" : "text-gray-600"}`}
//               >
//                 Monthly
//               </span>
//               <div className="relative">
//                 <button
//                   onClick={() => setIsYearly(!isYearly)}
//                   className={`w-14 h-8 rounded-full transition-colors duration-300 ${
//                     isYearly ? "bg-purple-600" : "bg-gray-300"
//                   }`}
//                   aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} billing`}
//                 >
//                   <div
//                     className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//                       isYearly ? "translate-x-7" : "translate-x-1"
//                     } mt-1`}
//                   />
//                 </button>
//                 {isYearly && (
//                   <div className="absolute -top-8 -right-6 bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap">
//                     SAVE {yearlyDiscount}%
//                   </div>
//                 )}
//               </div>
//               <span
//                 className={`font-semibold ${isYearly ? "text-purple-600" : "text-gray-600"}`}
//               >
//                 Yearly{" "}
//                 <span className="text-red-500">(Save {yearlyDiscount}%)</span>
//               </span>
//             </div>
//           )}
//         </motion.div>

//         {/* Pricing Cards with Navigation Arrows */}
//         <div className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory">
//           {plans.length > 3 && (
//             <button
//               onClick={handlePrev}
//               disabled={startIndex === 0}
//               className={`p-2 rounded-full flex-shrink-0 ${
//                 startIndex === 0
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-purple-100 text-purple-600 hover:bg-purple-200"
//               } transition-all duration-300`}
//               aria-label="Previous plans"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow min-w-0">
//             {visiblePlans.map((plan, index) => {
//               const isExpanded = expandedPlans[plan.id] || false;
//               const visibleFeatures = isExpanded
//                 ? plan.features
//                 : plan.features.slice(0, 4); // Limit to 4 features

//               return (
//                 <motion.div
//                   key={plan.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                   className="h-full min-w-[300px]"
//                 >
//                   <div
//                     className={`h-full rounded-2xl shadow-lg transition-all duration-300 relative ${
//                       plan.recommended ? `border-2` : "border"
//                     } hover:shadow-xl`}
//                     style={{
//                       backgroundColor: plan.bgColor,
//                       borderColor: plan.recommended ? plan.color : "#E5E7EB",
//                     }}
//                   >
//                     {plan.recommended && (
//                       <div
//                         className="absolute top-0 left-0 right-0 text-white py-2 text-center text-sm font-semibold rounded-t-2xl"
//                         style={{ backgroundColor: plan.color }}
//                       >
//                         RECOMMENDED
//                       </div>
//                     )}

//                     {plan.popular && !plan.recommended && (
//                       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
//                         POPULAR
//                       </div>
//                     )}

//                     <div className={`p-6 ${plan.recommended ? "pt-12" : "pt-6"}`}>
//                       <div className="flex justify-between items-start mb-6">
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-800 mb-1">
//                             {plan.name}
//                           </h3>
//                           <p className="text-gray-600 text-sm">
//                             {plan.businessType}
//                           </p>
//                         </div>
//                         <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
//                           {plan.icon}
//                         </div>
//                       </div>

//                       {/* Price */}
//                       <div className="mb-6">
//                         <div className="flex items-baseline gap-2">
//                           <span className="text-3xl font-bold text-gray-800">
//                             {formatPrice(getPrice(plan))}
//                           </span>
//                           <span className="text-gray-600">
//                             /{isYearly ? "year" : "month"}
//                           </span>
//                         </div>
//                         {isYearly && (
//                           <p className="text-sm text-green-600 mt-1">
//                             Save{" "}
//                             {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)}{" "}
//                             per year
//                           </p>
//                         )}
//                       </div>

//                       {/* Action Button */}
//                       <button
//                         onClick={() => handlePlanSelect(plan.id)}
//                         className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-300 hover:transform hover:scale-105 ${
//                           plan.buttonVariant === "contained"
//                             ? "text-white shadow-lg hover:shadow-xl"
//                             : "bg-transparent border-2 hover:bg-opacity-10"
//                         }`}
//                         style={{
//                           backgroundColor:
//                             plan.buttonVariant === "contained"
//                               ? plan.color
//                               : "transparent",
//                           borderColor: plan.color,
//                           color:
//                             plan.buttonVariant === "contained"
//                               ? "white"
//                               : plan.color,
//                         }}
//                       >
//                         {plan.buttonText} →
//                       </button>

//                       {/* Features List */}
//                       <div className="mb-6">
//                         {visibleFeatures.map((feature, featureIndex) => (
//                           <div
//                             key={featureIndex}
//                             className="flex items-center gap-3 py-2"
//                           >
//                             <div
//                               className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
//                                 feature.included ? "bg-green-500" : "bg-red-500"
//                               }`}
//                             >
//                               {feature.included ? (
//                                 <Check className="w-3 h-3 text-white" />
//                               ) : (
//                                 <X className="w-3 h-3 text-white" />
//                               )}
//                             </div>
//                             <span
//                               className={`text-sm ${
//                                 feature.included
//                                   ? "text-gray-800"
//                                   : "text-gray-400 line-through"
//                               }`}
//                             >
//                               {feature.name}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Read More / Less Button */}
//                       {plan.features.length > 4 && (
//                         <button
//                           onClick={() => handleReadMore(plan.id)}
//                           className="w-full text-center font-semibold hover:opacity-75 transition-opacity"
//                           style={{ color: plan.color }}
//                         >
//                           {isExpanded ? "Read Less" : "Read More"}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//           {plans.length > 3 && (
//             <button
//               onClick={handleNext}
//               disabled={startIndex >= plans.length - 3}
//               className={`p-2 rounded-full flex-shrink-0 ${
//                 startIndex >= plans.length - 3
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-purple-100 text-purple-600 hover:bg-purple-200"
//               } transition-all duration-300`}
//               aria-label="Next plans"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"

export interface PricingFeature {
  name: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  businessType: string
  monthlyPrice: number
  yearlyPrice: number
  icon: string
  color: string
  bgColor: string
  features: PricingFeature[]
  buttonText: string
  buttonVariant: "contained" | "outlined"
  recommended?: boolean
  popular?: boolean
}

export interface PricingSectionProps {
  title?: string
  subtitle?: string
  plans: PricingPlan[]
  onPlanSelect?: (planId: string, billingCycle: "monthly" | "yearly") => void
  onReadMore?: (planId: string) => void
  yearlyDiscount?: number
  showYearlyToggle?: boolean
  currency?: string
  className?: string
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Select The Plan That Best Suits Your Business Needs.",
  subtitle = "No matter if you're new to the game or aiming to boost your marketing strategies, we have a tailored plan just for you.",
  plans,
  onPlanSelect,
  onReadMore,
  yearlyDiscount = 30,
  showYearlyToggle = true,
  currency = "$",
  className = "",
}) => {
  const [isYearly, setIsYearly] = useState(false)
const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null)
const [startIndex, setStartIndex] = useState(0)


  const handlePlanSelect = (planId: string) => {
    const billingCycle = isYearly ? "yearly" : "monthly"
    onPlanSelect?.(planId, billingCycle)
    console.log(`Selected plan: ${planId} with ${billingCycle} billing`)
  }


const handleReadMore = (planId: string) => {
  setExpandedPlanId((prev) => (prev === planId ? null : planId)) // toggle only clicked card
  onReadMore?.(planId)
}


  const getPrice = (plan: PricingPlan) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice
  }

  const formatPrice = (price: number) => {
    return `${currency}${price.toFixed(2)}`
  }

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, Math.max(0, plans.length - 3)))
  }

  // Determine visible plans (up to 3 at a time)
  const visiblePlans = plans.slice(startIndex, startIndex + 3)
  const canGoPrev = startIndex > 0
  const canGoNext = startIndex < plans.length - 3

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">{subtitle}</p>

          {showYearlyToggle && (
            <div className="flex justify-center items-center mb-12 gap-4">
              <span className={`font-semibold ${!isYearly ? "text-purple-600" : "text-gray-600"}`}>Monthly</span>
              <div className="relative">
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className={`w-14 h-8 rounded-full transition-colors duration-300 ${
                    isYearly ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} billing`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isYearly ? "translate-x-7" : "translate-x-1"
                    } mt-1`}
                  />
                </button>
                {isYearly && (
                  <div className="absolute -top-8 -right-6 bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap">
                    SAVE {yearlyDiscount}%
                  </div>
                )}
              </div>
              <span className={`font-semibold ${isYearly ? "text-purple-600" : "text-gray-600"}`}>
                Yearly <span className="text-red-500">(Save {yearlyDiscount}%)</span>
              </span>
            </div>
          )}
        </motion.div>

        <div className="relative">
          {plans.length > 3 && (
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg ${
                !canGoPrev
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-xl"
              } transition-all duration-300`}
              style={{ transform: "translateY(-50%) translateX(-50%)" }}
              aria-label="Previous plans"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Pricing Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 items-start">
  {visiblePlans.map((plan, index) => {
    const isExpanded = expandedPlanId === plan.id
    const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 4)

    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div
          className={`rounded-2xl shadow-lg transition-all duration-300 relative ${
            plan.recommended ? `border-2` : "border"
          } hover:shadow-xl`}
          style={{
            backgroundColor: plan.bgColor,
            borderColor: plan.recommended ? plan.color : "#E5E7EB",
          }}
        >
                    {plan.recommended && (
                      <div
                        className="absolute top-0 left-0 right-0 text-white py-2 text-center text-sm font-semibold rounded-t-2xl"
                        style={{ backgroundColor: plan.color }}
                      >
                        RECOMMENDED
                      </div>
                    )}

                    {plan.popular && !plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        POPULAR
                      </div>
                    )}

                    <div className={`p-6 ${plan.recommended ? "pt-12" : "pt-6"}`}>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                          <p className="text-gray-600 text-sm">{plan.businessType}</p>
                        </div>
                        <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                          {plan.icon}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-800">{formatPrice(getPrice(plan))}</span>
                          <span className="text-gray-600">/{isYearly ? "year" : "month"}</span>
                        </div>
                        {isYearly && (
                          <p className="text-sm text-green-600 mt-1">
                            Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} per year
                          </p>
                        )}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handlePlanSelect(plan.id)}
                        className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-300 hover:transform hover:scale-105 ${
                          plan.buttonVariant === "contained"
                            ? "text-white shadow-lg hover:shadow-xl"
                            : "bg-transparent border-2 hover:bg-opacity-10"
                        }`}
                        style={{
                          backgroundColor: plan.buttonVariant === "contained" ? plan.color : "transparent",
                          borderColor: plan.color,
                          color: plan.buttonVariant === "contained" ? "white" : plan.color,
                        }}
                      >
                        {plan.buttonText} →
                      </button>

                      {/* Features List */}
                      <div className="mb-6">
                        {visibleFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 py-2">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                feature.included ? "bg-green-500" : "bg-red-500"
                              }`}
                            >
                              {feature.included ? (
                                <Check className="w-3 h-3 text-white" />
                              ) : (
                                <X className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span
                              className={`text-sm ${feature.included ? "text-gray-800" : "text-gray-400 line-through"}`}
                            >
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Read More / Less Button */}
                      {plan.features.length > 4 && (
                        <button
                          onClick={() => handleReadMore(plan.id)}
                          className="w-full text-center font-semibold hover:opacity-75 transition-opacity"
                          style={{ color: plan.color }}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {plans.length > 3 && (
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg ${
                !canGoNext
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-xl"
              } transition-all duration-300`}
              style={{ transform: "translateY(-50%) translateX(50%)" }}
              aria-label="Next plans"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
