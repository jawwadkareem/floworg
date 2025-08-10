"use client";

import type React from "react";
import { motion } from "framer-motion";
import GetStartedSection from "../GetStartedSection";

export interface SolutionOption {
  id: string;
  title: string;
  description: string;
  type: "primary" | "secondary";
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BusinessSolutionsSectionProps {
  // Main Solution Section
  solutionTitle?: string;
  solutionDescription?: string;
  solutionOptions?: SolutionOption[];
  onSolutionOptionClick?: (optionId: string) => void;

  // AI Services Section
  aiServicesSubtitle?: string;
  aiServicesTitle?: string;
  aiServicesDescription?: string;
  aiServicesPrimaryButtonText?: string;
  aiServicesSecondaryButtonText?: string;
  onAiServicesPrimaryClick?: () => void;
  onAiServicesSecondaryClick?: () => void;
  processSteps?: ProcessStep[];

  className?: string;
}

const BusinessSolutionsSection: React.FC<BusinessSolutionsSectionProps> = ({
  solutionTitle = "Need a Solution Tailored to Your Business?",
  solutionDescription = "At Floworg 360, we give you three smart ways to get started – based on what works best for you:",
  solutionOptions = [
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
  ],
  onSolutionOptionClick,

  aiServicesSubtitle = "LET'S CHAT",
  aiServicesTitle = "It's Time to Hire AI Customer Services",
  aiServicesDescription = "Using an AI Customer Services? It's easy, you just need to know your needs and the business very well.",
  aiServicesPrimaryButtonText = "Learn More",
  aiServicesSecondaryButtonText = "Sign Up Now",
  onAiServicesPrimaryClick,
  onAiServicesSecondaryClick,
  processSteps = [
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
  ],

  className = "",
}) => {
  const handleSolutionClick = (optionId: string) => {
    onSolutionOptionClick?.(optionId);
    console.log(`Solution option clicked: ${optionId}`);
  };

  const handleAiServicesPrimaryClick = () => {
    onAiServicesPrimaryClick?.();
    console.log("AI Services Primary button clicked");
  };

  const handleAiServicesSecondaryClick = () => {
    onAiServicesSecondaryClick?.();
    console.log("AI Services Secondary button clicked");
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Need a Solution Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {solutionTitle}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">{solutionDescription}</p>

            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                <strong>Schedule a 1-on-1 consultation</strong> – Our experts
                will help you identify your needs, define a clear roadmap, and
                implement the right solution for your business.
              </p>
              <p className="text-gray-700">
                <strong>Watch step-by-step tutorials</strong> – Learn at your
                own pace and implement automations on your own, no coding
                required.
              </p>
              <p className="text-gray-700">
                <strong>Explore ready-made templates</strong> – Choose from
                proven automation flows and customize them to fit your needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {solutionOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSolutionClick(option.id)}
                className={`w-full px-6 py-4 rounded-lg font-semibold text-left transition-all duration-300 hover:shadow-md ${
                  option.type === "primary"
                    ? "bg-teal-500 hover:bg-teal-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {option.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* <GetStartedSection /> */}

        {/*
        ===============================
        AI Customer Services Section
        ===============================

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wide">
              {aiServicesSubtitle}
            </span>
            <h3 className="text-4xl font-bold mb-6 text-gray-900">
              It's Time to Hire <br />
              <span className="text-teal-500">
                {aiServicesTitle.split(" ").slice(-3).join(" ")}
              </span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {aiServicesDescription}
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleAiServicesPrimaryClick}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {aiServicesPrimaryButtonText}
              </button>
              <button
                onClick={handleAiServicesSecondaryClick}
                className="border border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {aiServicesSecondaryButtonText}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        */}
      </div>
    </section>
  );
};

export default BusinessSolutionsSection;
