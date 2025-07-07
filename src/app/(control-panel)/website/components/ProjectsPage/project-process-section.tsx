import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string[];
  isActive?: boolean;
}

export interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  ctaButtonText?: string;
  onBookConsultation?: () => void;
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = "We Believe in Personalized Guidance and Tailored Processes",
  subtitle = "In-Depth Understanding and Custom Tailoring",
  steps = [
    {
      id: "step1",
      number: "1",
      title: "In-Depth Understanding and Custom Tailoring",
      description:
        "Our Goal is Mapping, Defining, and Achieving Success! We analyze your current operations, dive into marketing and sales processes, understand your target audience, and align with your brand's vision.",
      details: [
        "From this, we created clear goals, actionable tasks, and a detailed work plan with set timelines to achieve your objectives.",
        "Let's map your journey to success!",
      ],
      isActive: true,
    },
    {
      id: "step2",
      number: "2",
      title: "System and Infrastructure Setup",
      description:
        "In this stage, we focus on launching the systems, infrastructure, and processes necessary to bring your vision to life.",
      details: [
        "Guided by the strategic plan and detailed specifications, we don't just build the product itself - we also set up the surrounding infrastructure that ensures and enhances its functionality, streamlines workflows and efficient operations.",
        "Your tailored solution starts here, built for success!",
      ],
      isActive: true,
    },
    {
      id: "step3",
      number: "3",
      title: "System Testing - QA",
      description:
        "This critical phase ensures the high-level quality and accuracy of your system. Our experienced QA team conducts thorough testing led by experienced automation professionals.",
      details: [
        "We focus on three key areas:",
        "1. Technical Cleanup: Verifying that the system operates flawlessly",
        "2. Copywriting & Marketing/Sales Elements: Ensuring the customer experience meets professional standards",
        "3. Strategic Alignment: Confirming the system aligns with the initial plan and objectives",
        "Once testing is complete, we present the system, automations, and processes for a collaborative review. Together, we transitions, refine, and perfect everything before moving on to the most exciting stage - launching your success!",
      ],
    },
    {
      id: "step4",
      number: "4",
      title: "Cheers to Success! The Launch is Here",
      description:
        "The moment we've been working toward has arrived. Processes are activated, leads start coming in, and customers begin to engage.",
      details: [
        "As we dive into the day-to-day operations, you'll experience the system in action, adapt to the new workflows, and embrace an efficient, streamlined way of working.",
        "From here, everything changes - leaving you wondering how you ever managed before.",
        "Here's to a future of success and innovation - let's make it happen!",
      ],
    },
  ],
  ctaButtonText = "Book Your Consultation Now",
  onBookConsultation,
  className = "",
}) => {
  const handleBookConsultation = () => {
    onBookConsultation?.();
    console.log("Book consultation clicked");
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-sm text-orange-500 font-medium">{subtitle}</p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-teal-400"></div>

          {steps.map((step, index) => {
            const isActive = step.isActive || index < 2;
            const isLeft = index % 2 === 0;

            return (
              <div key={step.id} className="relative mb-8 last:mb-0">
                {/* Step Number Circle */}
                <div
                  className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                    isActive ? "bg-teal-400" : "bg-gray-400"
                  }`}
                >
                  {step.number}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full max-w-md ${
                    isLeft ? "mr-auto pr-8" : "ml-auto pl-8"
                  }`}
                  style={{
                    marginLeft: isLeft ? "0" : "calc(50% + 20px)",
                    marginRight: isLeft ? "calc(50% + 20px)" : "0",
                  }}
                >
                  <div className="bg-gray-200 rounded-lg p-4 shadow-sm">
                    <h3 className="text-base font-bold text-teal-600 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-xs mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    {step.details && (
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-600 text-xs leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleBookConsultation}
            className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded font-medium text-sm transition-colors duration-200"
          >
            {ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
