import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Gauge, ThumbsUp, CheckCircle } from 'lucide-react';

const RoadMapJourneySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Header Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <CheckCircle className="w-4 h-4" />
                Simple Steps To Success
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The roadmap to success,{' '}
                <span className="block">Start your journey now</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Side - Description and Button */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-16"
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Getting started has never been easier. Our streamlined process ensures a hassle-free experience, guiding you every step of the way.
              </p>

              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                <span>→</span>
                Register Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Journey Timeline with Arrows */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                Step - 01
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sign Up & Setup
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Create your account and personalize your experience in just a few clicks.
            </p>
          </motion.div>

          {/* Arrow between Step 1 and 2 */}
          <div className="hidden md:block text-green-600 text-3xl">→</div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Gauge className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                Step - 02
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customize & Optimize
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Adjust settings to match your needs and maximize efficiency.
            </p>
          </motion.div>

          {/* Arrow between Step 2 and 3 */}
          <div className="hidden md:block text-green-600 text-3xl">→</div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <ThumbsUp className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                Step - 03
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Launch & Succeed
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Start using the platform, track progress, and achieve your goals effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapJourneySection;
