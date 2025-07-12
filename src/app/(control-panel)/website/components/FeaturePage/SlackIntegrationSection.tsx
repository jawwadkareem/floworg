"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Check } from 'lucide-react'

const SlackIntegrationSection: React.FC = () => {
  const navigationTabs = [
    "Tutorial Videos",
    "Documentation", 
    "Features",
    "Integrations",
    "API",
    "Developer"
  ]

  const steps = [
    {
      number: 1,
      title: "Access Sync edge Dashboard",
      description: "Log in to your Floworg Sync edge account and navigate to the integrations section. From there, select the Slack integration option.",
      details: [
        "Open dashboard, log in to your Sync edge account using your credentials.",
        "Navigate to the integrations section in the main menu."
      ]
    },
    {
      number: 2,
      title: "Generate Integration Token",
      description: "In the Sync edge dashboard, navigate to the \"Integrations\" or \"API Settings\" section, usually located in the settings menu.",
      details: [
        "Look for the option to create a new integration or API token.",
        "Click on \"Generate Token\" or a similar button to create a new integration token.",
        "Copy the generated token as you'll need it for the Slack application setup later."
      ]
    },
    {
      number: 3,
      title: "Configure Integration in Your SaaS Dashboard",
      description: "Log in to your client application's dashboard and navigate to the integrations settings page.",
      details: [
        "Look for Slack integration options or third-party integrations.",
        "Find the integration token generated in Step 2 into the designated field.",
        "Save the configuration."
      ]
    },
    {
      number: 4,
      title: "Map Data Fields",
      description: "Configure how data flows between your SaaS application and Slack.",
      details: [
        "Specify which events or data changes should trigger Slack notifications.",
        "Map mapping channels that data should be routed between the two platforms.",
        "Set up any filtering rules to control which data gets synchronized.",
        "Define the message format and content for Slack notifications."
      ]
    },
    {
      number: 5,
      title: "Test Integration",
      description: "Perform a test to ensure the integration is functioning properly.",
      details: [
        "Send a test message or trigger a test event within your SaaS application.",
        "Verify that the corresponding notification or data appears in the designated Slack channel.",
        "Check for any error messages or failed delivery notifications.",
        "Testing the integration thoroughly helps identify any potential issues early and ensures a seamless user experience."
      ]
    },
    {
      number: 6,
      title: "Additional Configuration (if applicable)",
      description: "Document your specific setup and any customizations you may have configured.",
      details: [
        "Document your specific setup and any customizations you may have configured additional settings within your SaaS application.",
        "Keep a record of the integration token and any configuration settings for future reference.",
        "This documentation can be helpful for team members who may need to troubleshoot or make changes to the integration in the future."
      ]
    },
    {
      number: 7,
      title: "Troubleshooting (if necessary)",
      description: "If you encounter any issues during the integration process, don't hesitate to seek assistance.",
      details: [
        "Check the integration logs or error messages for any clues about the issue.",
        "Consult the Sync edge documentation, knowledge base, or community forums for troubleshooting tips and common solutions.",
        "If the issue persists, reach out to the Sync edge support team for personalized assistance and guidance to resolve the integration challenges."
      ]
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            {navigationTabs.map((tab, index) => (
              <button
                key={tab}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  tab === "Integrations" 
                    ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Slack Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#36C5F0"/>
                <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#2EB67D"/>
                <path d="M18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834z" fill="#ECB22E"/>
                <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52z" fill="#E01E5A"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Slack Integration</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimization of performance through integration with business tools and services.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              {/* Step Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Details */}
              <div className="ml-12">
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlackIntegrationSection
