"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface AcademyTab {
  id: string;
  name: string;
  description?: string;
  active?: boolean;
}

export interface AcademyNavbarHeaderProps {
  tabs?: AcademyTab[];
  onTabChange?: (tabId: string) => void;
  defaultActiveTab?: string;
  className?: string;
}

const AcademyNavbarHeader: React.FC<AcademyNavbarHeaderProps> = ({
  tabs = [
    { id: "show-all", name: "SHOW ALL" },
    { id: "business", name: "BUSINESS" },
    { id: "coaching", name: "COACHING" },
    { id: "life", name: "LIFE" },
    { id: "web", name: "WEB" },
  ],
  onTabChange,
  defaultActiveTab,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id || ""
  );

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    console.log(`Active academy tab changed to: ${tabId}`);
  };

  return (
    <header className={`relative overflow-hidden ${className}`}>
      {/* Academy Category Tabs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-0"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-4 font-medium text-sm md:text-base transition-all duration-300 border-b-2 hover:bg-white/50 relative ${
                  activeTab === tab.id
                    ? "bg-white text-teal-600 border-teal-500 shadow-sm"
                    : "bg-transparent text-gray-600 border-transparent hover:text-gray-800"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {tab.name}
                </motion.span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeAcademyTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AcademyNavbarHeader;