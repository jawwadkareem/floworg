"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MapPin, DollarSign, Building, Users, Calendar } from "lucide-react"

const JobPostingSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          {/* Header Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Apply Button */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Business Development Manager and Financial Services
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>📅 2 days ago</span>
                  <span>👁 15 views</span>
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium transition-colors">
                Apply Now
              </button>
            </div>

            {/* Job Summary */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">JOB SUMMARY</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Industry:</span>
                    <span className="text-sm font-medium">Business, Financial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Salary:</span>
                    <span className="text-sm font-medium">$60k - $70k</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Job Type:</span>
                    <span className="text-sm font-medium">Full Time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Updated:</span>
                    <span className="text-sm font-medium">09/01/2023</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Job level:</span>
                    <span className="text-sm font-medium">Experienced (Non - Manager)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Experience:</span>
                    <span className="text-sm font-medium">2 - 5 years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Job function:</span>
                    <span className="text-sm font-medium">Sales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Location:</span>
                    <span className="text-sm font-medium">Dallas, Texas, United States</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Practical knowledge: Deeply understand technology and business of the product and its related services
                  management. Research, document and distribute impact and findings for the candidates.
                </p>
                <p>
                  Develop and maintain strong working relationships with key internal stakeholders including sales,
                  marketing, user flows, user friendly environment, high-fidelity mockups, prototypes and UI flow
                  deliverables and professional through the user experience.
                </p>
                <p>
                  Collaborate with the design team to ensure that the visual design and user experience align with the
                  overall brand and business goals. Functional requirements and design specifications to ensure a
                  seamless integration and provide the best user experience.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Experience demonstrating solid financial planning and professional development from start</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>An acute of industry experience in business strategy and for client design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Excellent interpersonal skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Bachelor's Degree in business, communications, or related discipline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>
                    Ability to work independently, manage multiple projects and meet tight deadlines while maintaining
                    attention to details
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>
                    Proficiency in business development, client's accounting, organizational talent and growth
                    management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Ability to work in a fast-paced, high-volume, deadline-driven environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Effective written and verbal communication skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Proficiency in a variety of design tools for wireframe and experience prototyping</span>
                </li>
              </ul>
            </div>

            {/* What's on Offer */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What's on Offer</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Broad international business, senior workforce, and health benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Training and advancement in finance within the Greater China region</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded font-medium transition-colors">
                Apply Now
              </button>
              <div className="flex gap-3">
                <button className="bg-teal-100 hover:bg-teal-200 text-teal-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                  Save
                </button>
                <button className="bg-teal-100 hover:bg-teal-200 text-teal-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                  Share
                </button>
                <button className="bg-teal-100 hover:bg-teal-200 text-teal-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                  Shortlist
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JobPostingSection
