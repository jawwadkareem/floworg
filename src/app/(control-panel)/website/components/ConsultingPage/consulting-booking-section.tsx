"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ChevronRight } from "lucide-react"

const ConsultationBookingSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, title: "Consultation", icon: Calendar, completed: true },
    { id: 2, title: "Date, Time & Consultant", icon: Clock, completed: false },
    { id: 3, title: "Your Info", icon: User, completed: false },
  ]

  const timeSlots = [
    { id: 1, title: "New Inquiries", duration: "30 mins", available: true },
    { id: 2, title: "New Inquiries", duration: "30 mins", available: true },
    { id: 3, title: "Business Demo", duration: "30 mins", available: true },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-teal-500">Book a consultation</span> <span className="text-gray-900">meeting</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Book your appointment in a few simple steps: Choose a service, pick your date and time, and fill in your
              details. See you soon!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-colors ${
                    currentStep === step.id
                      ? "border-teal-500 bg-teal-50"
                      : step.completed
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep === step.id
                        ? "bg-teal-500 text-white"
                        : step.completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-medium ${
                        currentStep === step.id || step.completed ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {currentStep === step.id && <ChevronRight className="w-5 h-5 text-teal-500" />}
                </motion.div>
              ))}
            </div>

            {/* Right Side - Time Slots */}
            <div className="space-y-4">
              {timeSlots.map((slot, index) => (
                <motion.div
                  key={slot.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all cursor-pointer"
                >
                  {/* Floworg Logo */}
                  <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">flow</span>
                    <span className="text-teal-400 text-sm font-bold">org</span>
                  </div>

                  {/* Slot Info */}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{slot.title}</h4>
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {slot.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsultationBookingSection
