import React from 'react';
import { motion } from 'framer-motion';

const ProBuilderSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account. It's just a few clicks."
    },
    {
      number: "02", 
      title: "Customize Your Chatbot",
      description: "Tailor the chatbot to meet your business needs."
    },
    {
      number: "03",
      title: "Train Chatbot", 
      description: "Bring your resources and documentation. We AI learn it."
    },
    {
      number: "04",
      title: "Deploy and Engage",
      description: "Activate your AI assistant and start connecting with customers."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                LET'S JOIN
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                It's Time to Hire{' '}
                <span className="text-blue-600">AI Customer Services</span>
              </h1>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
                Using an AI Customer services it's easy, you just need to 
                know your needs and the business very well.
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Sign Up Now
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
      </div>
    </section>
  );
};

export default ProBuilderSection;