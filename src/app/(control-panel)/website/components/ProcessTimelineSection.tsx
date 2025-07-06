import React from 'react';
import { motion } from 'framer-motion';

const ProcessTimelineSection: React.FC = () => {
  const timelineSteps = [
    {
      number: 1,
      title: "In-Depth Understanding and Custom Tailoring",
      content: [
        "Our Goal is Mapping, Defining, and Achieving Outcomes We analyze your current operations, dive into identifying with clear processes, understand your target audience and align with your business needs.",
        "From this, we create clear, doable, actionable tasks, and a detailed work plan with our company to achieve your objectives.",
        "Let's map your journey to success!"
      ],
      bgColor: "bg-gray-100"
    },
    {
      number: 2,
      title: "System and Infrastructure Setup",
      content: [
        "For this setup, we focus on launching the comprehensive and structured framework to bring your vision to life.",
        "Guided by the strategic plan and the identified specifications, we start plan leads the technical team - we also set up the outstanding automations that support and enhance the functionality, streamline operations and efficient workflows.",
        "Your tailored solution starts here, built for optimal."
      ],
      bgColor: "bg-white"
    },
    {
      number: 3,
      title: "System Testing - QA",
      content: [
        "This crucial phase ensures that high-level quality and success of your project. Every component and process has to assessment automation implementation.",
        "We focus on three key areas:",
        "• Technical Channel: Verifying that the system operates flawlessly",
        "• Optimizing & Marketing Setup: Ensuring the business requirements meets professional standards",
        "• Strategic Alignment: Confirming the system aligns with the initial plan and business objectives",
        "Once testing is complete, we present the system, demonstrate, and processes for a collaborative review. Together, we brainstorm, refine, and perfect everything before moving on to the most exciting stage: launching your success!"
      ],
      bgColor: "bg-gray-100"
    },
    {
      number: 4,
      title: "Cheers to Success! The Launch is Here",
      content: [
        "The moment we've been working toward has finally arrived! We present all deliverables, send your training, to your customized design language.",
        "We are also fully focused on long-term planning, and to understand the operation in the most efficient way, combined with ongoing and business knowledge area of working.",
        "If you have any questions about the system or need guidance, we are here managed before.",
        "Here's to a future of success and innovation - let's make it happen!"
      ],
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            We Believe in Personalized Guidance and Tailored Processes
          </h2>
          <p className="text-sm text-gray-600">
            In-Depth Understanding and Custom Tailoring
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}
            >
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-80 ${step.bgColor} rounded-lg p-6 shadow-sm relative`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <div className="space-y-3">
                    {step.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-sm text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Circle */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white text-sm font-semibold">{step.number}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded font-semibold transition-colors">
            Book Your Consultation Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;