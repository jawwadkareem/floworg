import React from 'react';
import { motion } from 'framer-motion';

const DigitalAnalysisSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Digital Analysis
              </h1>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  I will organize the workflow of this website into a comprehensive and working plan 
                  and then you will give you a complete account of the system and expound the actual 
                  teachings of the great explorer of the truth, the master-builder of human happiness. 
                  No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because 
                  those who do not know how to pursue pleasure rationally encounter consequences that are 
                  extremely painful.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it 
                  is pain, but because occasionally circumstances occur in which toil and pain can procure him 
                  some great pleasure. To take a trivial example, which of us ever undertakes laborious 
                  physical exercise.
                </p>
              </div>

              {/* Images Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Get Shit Done workspace"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Professional working"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Best Benefits Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Best Benefits of Project
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Strategy and Planning */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Strategy and Planning
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Develop comprehensive strategies that align with your business goals and market opportunities through detailed analysis.
                    </p>
                  </div>

                  {/* Corporate Finance */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Corporate Finance
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Get expert financial guidance and solutions to optimize your corporate financial structure and performance.
                    </p>
                  </div>

                  {/* Market Research */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Market Research
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gain valuable insights into market trends, customer behavior, and competitive landscape analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  We Believe in Personalized Guidance and Tailored Processes
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  In-Depth Understanding and Custom Tailoring
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 relative top-8"
            >
              <div className="space-y-6">
                {/* Category */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Category
                  </h4>
                  <p className="text-gray-900">
                    Digital Analysis
                  </p>
                </div>

                {/* Client */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Client
                  </h4>
                  <p className="text-gray-900">
                    Floworg Company
                  </p>
                </div>

                {/* Date */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Date
                  </h4>
                  <p className="text-gray-900">
                    30 June 2024
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Duration
                  </h4>
                  <p className="text-gray-900">
                    3 Months
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Tags
                  </h4>
                  <p className="text-gray-900">
                    Consulting, Business
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAnalysisSection;

