import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingComparisonSection: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<{[key: string]: boolean}>({
    'leads-monthly': false,
    'leads-yearly': false,
    'crm-monthly': false,
    'crm-yearly': false,
    'advanced-monthly': false,
    'advanced-yearly': false,
    'permissions-monthly': false,
    'permissions-yearly': false,
    'management-monthly': false,
    'management-yearly': false,
    'analytics-monthly': false,
    'analytics-yearly': false,
    'advanced-analytics-monthly': false,
    'advanced-analytics-yearly': false,
    'marketplace-monthly': false,
    'marketplace-yearly': false
  });

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const features = [
    {
      icon: "👤",
      title: "הרצאות קבע",
      description: "הרצאת הרצאות קבע להכשרת הרצאות קבע בחודש",
      monthlyPrice: "30",
      yearlyPrice: "30",
      monthlyKey: "leads-monthly",
      yearlyKey: "leads-yearly"
    },
    {
      icon: "🎯",
      title: "פורטל לקוחות",
      description: "מערכת ניהול לקוחות המאפשרת לכל לקוח לכל הרצאות בחודש",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "crm-monthly",
      yearlyKey: "crm-yearly"
    },
    {
      icon: "💎",
      title: "CRM",
      description: "ניהול לקוחות מתקדם - הרצאות מתקדמות לניהול לקוחות מתקדם הרצאות הרצאות",
      monthlyPrice: "69",
      yearlyPrice: "69",
      monthlyKey: "advanced-monthly",
      yearlyKey: "advanced-yearly"
    },
    {
      icon: "📊",
      title: "דוחות מתקדמים",
      description: "דוחות מתקדמים לניהול דוחות מתקדמים דוחות",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "permissions-monthly",
      yearlyKey: "permissions-yearly"
    },
    {
      icon: "🔒",
      title: "הרשאות מתקדמות",
      description: "הרשאות מתקדמות לניהול הרשאות מתקדמות הרשאות",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "management-monthly",
      yearlyKey: "management-yearly"
    },
    {
      icon: "📈",
      title: "ניהול קבצים",
      description: "קבצים מתקדמים לניהול קבצים מתקדמים קבצים במערכת הרצאות הרצאות",
      monthlyPrice: "25",
      yearlyPrice: "100",
      monthlyKey: "analytics-monthly",
      yearlyKey: "analytics-yearly"
    },
    {
      icon: "📊",
      title: "ניהול האחסון",
      description: "ניהול האחסון, הרצאות מתקדמות הרצאות מתקדמות",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "advanced-analytics-monthly",
      yearlyKey: "advanced-analytics-yearly"
    },
    {
      icon: "🛒",
      title: "ניהול מכירות",
      description: "בניית עמוד מכירות, מכירות מתקדמות מכירות - מכירות מתקדמות מכירות מכירות מכירות",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "marketplace-monthly",
      yearlyKey: "marketplace-yearly"
    },
    {
      icon: "📄",
      title: "עמודי מכירה",
      description: "עמודי מכירה מתקדמים לבניית עמודי מכירה מתקדמים עמודי מכירה מתקדמים",
      monthlyPrice: "0",
      yearlyPrice: "0",
      monthlyKey: "marketplace-monthly",
      yearlyKey: "marketplace-yearly"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with sliders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Monthly Slider */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                כמה מסכמים העסק שלך מפיק בחודש?
              </h3>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="10000"
                  defaultValue="1000"
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>10 מסכמים</span>
                  <span>10,000 מסכמים</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  עד 1,000 מסכמים בחודש - ₪220 ©
                </p>
              </div>
            </div>

            {/* Yearly Slider */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                כמה מסכמים העסק שלך מפיק בחודש?
              </h3>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="10000"
                  defaultValue="1000"
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>10 מסכמים</span>
                  <span>10,000 מסכמים</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  עד 10 מסכמים בחודש - ₪25 ©
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium underline">
              View all Pro pricing tiers
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8">
            <span className="border-b-2 border-gray-300 pb-1">ניהול לקוחות</span>
            <span>מכירות ושיווק</span>
            <span>מכירות ושיווק מתקדם</span>
            <span>מכירות ושיווק מתקדם</span>
            <span>מכירות</span>
            <span>ניהול מכירות</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2 text-right">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-right leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* Monthly Toggle */}
                <div className="flex items-center gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={toggleStates[feature.monthlyKey]}
                      onChange={() => handleToggle(feature.monthlyKey)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                  <span className="text-sm text-gray-600">₪{feature.monthlyPrice}</span>
                </div>

                {/* Yearly Toggle */}
                <div className="flex items-center gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={toggleStates[feature.yearlyKey]}
                      onChange={() => handleToggle(feature.yearlyKey)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                  <span className="text-sm text-gray-600">₪{feature.yearlyPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8B5CF6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default PricingComparisonSection;