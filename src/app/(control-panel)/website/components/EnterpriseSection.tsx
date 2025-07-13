import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EnterpriseSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Pricing Content */}
            <div className="lg:col-span-1">
              {/* Blue Tag */}
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                ENTERPRISE
              </div>

              {/* Main Heading */}
              <h2 className="text-lg font-medium text-gray-600 mb-6">
                Custom Plan for your big Business
              </h2>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">Starting at $999</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <p className="text-gray-600">Try 7 days free. Cancel anytime</p>
              </div>
            </div>

            {/* Middle - Features List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✓</span>
                  <span className="text-gray-700">All from Groth & Business Plan</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✓</span>
                  <span className="text-gray-700">Unlimited Attendees</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✓</span>
                  <span className="text-gray-700">No time limit</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✓</span>
                  <span className="text-gray-700">100+ whiteboards</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✓</span>
                  <span className="text-gray-700">Unlimited storage</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA and Illustration */}
            <div className="lg:col-span-1 flex flex-col items-end">
              {/* CTA Button */}
              <div className="mb-8">
                <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 border border-blue-200">
                  Lets Talk
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Illustration */}
              <div className="relative">
                {/* Main illustration container */}
                <div className="w-48 h-32 relative">
                  {/* Person 1 - Business man in suit */}
                  <div className="absolute top-4 right-8">
                    {/* Head */}
                    <div className="w-8 h-8 bg-orange-200 rounded-full mb-1"></div>
                    {/* Body */}
                    <div className="w-12 h-16 bg-blue-600 rounded-t-lg relative">
                      {/* Tie */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-red-500"></div>
                    </div>
                    {/* Arms */}
                    <div className="absolute top-8 -left-2 w-4 h-2 bg-orange-200 rounded"></div>
                    <div className="absolute top-8 -right-2 w-4 h-2 bg-orange-200 rounded"></div>
                  </div>

                  {/* Person 2 - Woman in orange */}
                  <div className="absolute top-8 left-4">
                    {/* Head */}
                    <div className="w-7 h-7 bg-orange-200 rounded-full mb-1"></div>
                    {/* Body */}
                    <div className="w-10 h-14 bg-orange-500 rounded-t-lg"></div>
                    {/* Arms */}
                    <div className="absolute top-6 -left-2 w-3 h-2 bg-orange-200 rounded"></div>
                    <div className="absolute top-6 -right-2 w-3 h-2 bg-orange-200 rounded"></div>
                  </div>

                  {/* Document/Chart */}
                  <div className="absolute bottom-0 right-0 w-12 h-8 bg-white rounded shadow-md border border-gray-200">
                    <div className="p-1">
                      <div className="w-full h-1 bg-blue-300 rounded mb-1"></div>
                      <div className="w-3/4 h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  {/* Background elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-blue-50 rounded-full opacity-30"></div>
                  <div className="absolute bottom-4 left-8 w-8 h-8 bg-orange-100 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseSection;