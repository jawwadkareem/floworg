"use client";

import type React from "react";
import ProjectDetailHeader from "./project-detail-header";
import ProjectDetailContent from "./project-detail-content";
import ProjectBenefitsCarousel from "./project-benefits-carousel";
import {
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Globe,
  Lightbulb,
} from "lucide-react";
import TrustBadgeSection from "../ProjectsPage/trust-badge-section";
import ProjectBenefitsSection, {
  ProjectBenefit,
} from "../ProjectsPage/project-benefits-section";
import GetStartedSection from "../GetStartedSection";

import ProjectProcessSection, {
  ProcessStep,
} from "../ProjectsPage/project-process-section";
import FAQSection, { FAQCategory } from "../pricingPage/faq-section";
import NewsSection from "../NewsSection";
import TestimonialsSection from "../TestimonialsSection";
import NewsletterSection from "../NewsletterSection";
import Footer from "../Footer";

// Sample project data based on categories
const projectData = {
  education: {
    title: "EduTech - Educational Platform",
    brandName: "EduTech",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.\n\nNor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?",
    projectInfo: {
      client: "Education Institute",
      location: "New York, USA",
      date: "15 Mar 2023",
      duration: "4 Months",
      tags: ["Education", "E-Learning", "Platform"],
    },
    benefits: [
      {
        id: "learning",
        title: "Interactive Learning",
        description:
          "One way to categorize the activities is in terms of the professional's area of expertise such as competitive analysis, corporate strategy.",
        icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      },
      {
        id: "tracking",
        title: "Progress Tracking",
        description:
          "Advanced analytics to monitor student progress and identify areas for improvement with detailed reporting.",
        icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      },
      {
        id: "engagement",
        title: "Student Engagement",
        description:
          "Gamification and interactive elements to keep students motivated and engaged throughout their learning journey.",
        icon: <Target className="w-6 h-6 text-purple-500" />,
      },
      {
        id: "collaboration",
        title: "Collaborative Tools",
        description:
          "Built-in communication and collaboration tools for students and teachers to interact effectively.",
        icon: <Users className="w-6 h-6 text-orange-500" />,
      },
    ],
  },
  ecommerce: {
    title: "ShopFlow - E-Commerce Solution",
    brandName: "ShopFlow",
    description:
      "Comprehensive e-commerce platform designed to streamline online retail operations and enhance customer experience. Our solution integrates advanced inventory management, customer analytics, and seamless payment processing to create a robust online marketplace.\n\nThe platform features responsive design, mobile optimization, and powerful backend tools that enable businesses to scale efficiently while maintaining excellent customer service standards.",
    projectInfo: {
      client: "Retail Corporation",
      location: "Los Angeles, USA",
      date: "22 Apr 2023",
      duration: "6 Months",
      tags: ["E-Commerce", "Retail", "Analytics"],
    },
    benefits: [
      {
        id: "inventory",
        title: "Inventory Management",
        description:
          "Real-time inventory tracking with automated reorder points and comprehensive stock management capabilities.",
        icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      },
      {
        id: "analytics",
        title: "Sales Analytics",
        description:
          "Detailed sales reporting and customer behavior analytics to optimize business performance and growth.",
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      },
      {
        id: "security",
        title: "Secure Payments",
        description:
          "PCI-compliant payment processing with multiple gateway options and fraud protection mechanisms.",
        icon: <Shield className="w-6 h-6 text-red-500" />,
      },
      {
        id: "mobile",
        title: "Mobile Optimization",
        description:
          "Fully responsive design optimized for mobile commerce with progressive web app capabilities.",
        icon: <Globe className="w-6 h-6 text-purple-500" />,
      },
      {
        id: "automation",
        title: "Marketing Automation",
        description:
          "Automated email campaigns, abandoned cart recovery, and personalized product recommendations.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
      },
    ],
  },
  automotive: {
    title: "AutoPro - Automotive Management",
    brandName: "AutoPro",
    description:
      "Advanced automotive management system designed for dealerships and service centers. The platform streamlines vehicle inventory, service scheduling, and customer relationship management to optimize automotive business operations.\n\nFeatures include comprehensive vehicle tracking, service history management, parts inventory control, and integrated customer communication tools that enhance operational efficiency and customer satisfaction.",
    projectInfo: {
      client: "Auto Dealership Group",
      location: "Detroit, USA",
      date: "10 May 2023",
      duration: "5 Months",
      tags: ["Automotive", "Management", "CRM"],
    },
    benefits: [
      {
        id: "inventory",
        title: "Vehicle Inventory",
        description:
          "Complete vehicle inventory management with detailed specifications, pricing, and availability tracking.",
        icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      },
      {
        id: "service",
        title: "Service Scheduling",
        description:
          "Automated service appointment scheduling with technician assignment and customer notifications.",
        icon: <Target className="w-6 h-6 text-green-500" />,
      },
      {
        id: "crm",
        title: "Customer Management",
        description:
          "Comprehensive CRM system to track customer interactions, service history, and sales opportunities.",
        icon: <Users className="w-6 h-6 text-purple-500" />,
      },
      {
        id: "parts",
        title: "Parts Management",
        description:
          "Integrated parts inventory with supplier connections and automated ordering capabilities.",
        icon: <Zap className="w-6 h-6 text-orange-500" />,
      },
    ],
  },
};

// Sample process steps
const processSteps: ProcessStep[] = [
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
  },
  {
    id: "step3",
    number: "3",
    title: "System Testing - QA",
    description:
      "This critical phase ensures the high-level quality and accuracy of your system. Our experienced QA team conducts thorough testing led by experienced automation professionals.",
    details: [
      "We focus on three key areas:",
      "• Technical Cleanup: Verifying that the system operates flawlessly",
      "• User Experience Testing: Ensuring seamless user interactions",
      "• Performance Quality Professional Standards",
      "• Strategic Alignment: Confirming the system aligns with the initial plan and objectives",
      "Once testing is complete, we present the system, technologies, and processes for a collaborative review. Together, we transitions, refine, and perfect everything before moving to the most exciting stage - launching your success!",
    ],
  },
  {
    id: "step4",
    number: "4",
    title: "Cheers to Success! The Launch is Here",
    description:
      "The moment we've been working toward has arrived. Processes are activated, leads start coming in, and customers begin to engage.",
    details: [
      "As we dive into the day-to-day operations, we'll experience the system in action, adapt to the new workflows, and embrace an efficient, streamlined approach.",
      "From here, everything changes - leaving you considering how you ever managed before.",
      "Here's to a future of success and innovation - let's make it happen!",
    ],
  },
];

const faqCategories: FAQCategory[] = [
  {
    id: "general",
    name: "General",
    faqs: [
      {
        question: "What is HAIchat?",
        answer:
          "HAIchat is an AI chatbot platform designed to automate customer interactions, streamline support, and enhance engagement across various channels.",
      },
      {
        question: "How does HAIchat ensure data security?",
        answer:
          "We implement enterprise-grade security measures including encryption, secure data storage, and compliance with industry standards.",
      },
      {
        question: "Is there a trial period for HAIchat?",
        answer:
          "Yes, we offer a free trial period so you can test all features before making a commitment.",
      },
      {
        question: "What support options are available if I need help?",
        answer:
          "We provide 24/7 customer support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients.",
      },
      {
        question: "How can I measure the performance of my HAIchat bot?",
        answer:
          "Our platform includes detailed analytics and reporting tools to track conversations, user satisfaction, and performance metrics.",
      },
      {
        question: "How customizable is the chatbot's design and functionality?",
        answer:
          "HAIchat offers extensive customization options for both design and functionality to match your brand and business needs.",
      },
    ],
  },
  {
    id: "technical",
    name: "Technical",
    faqs: [
      {
        question: "What programming languages does HAIchat support?",
        answer:
          "HAIchat supports integration with multiple programming languages including JavaScript, Python, PHP, and more through our REST API.",
      },
      {
        question: "Can I integrate HAIchat with my existing CRM?",
        answer:
          "Yes, HAIchat offers seamless integration with popular CRM systems like Salesforce, HubSpot, and Zendesk.",
      },
      {
        question: "What are the system requirements for HAIchat?",
        answer:
          "HAIchat is cloud-based and works with any modern web browser. No special hardware or software installation is required.",
      },
      {
        question: "How do I backup my chatbot data?",
        answer:
          "We provide automated daily backups and you can also export your data at any time through our dashboard.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    faqs: [
      {
        question: "What pricing plans are available?",
        answer:
          "We offer Starter, Professional, and Enterprise plans with different features and conversation limits to suit businesses of all sizes.",
      },
      {
        question: "Is there a free plan available?",
        answer:
          "Yes, we offer a free plan with basic features and limited conversations per month, perfect for small businesses getting started.",
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
          "You can change your plan at any time from your account dashboard. Changes take effect immediately.",
      },
      {
        question: "Do you offer custom enterprise pricing?",
        answer:
          "Yes, we provide custom pricing for enterprise clients with specific requirements and high-volume usage needs.",
      },
    ],
  },
  {
    id: "support",
    name: "Support",
    faqs: [
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our support team via live chat, email, or phone. We're available 24/7 to help you.",
      },
      {
        question: "Do you provide training for new users?",
        answer:
          "Yes, we offer comprehensive onboarding sessions, video tutorials, and documentation to help you get started quickly.",
      },
      {
        question: "What is your average response time for support tickets?",
        answer:
          "We typically respond to support tickets within 2 hours during business hours and within 24 hours on weekends.",
      },
      {
        question: "Do you offer phone support?",
        answer:
          "Phone support is available for Professional and Enterprise plan subscribers during business hours.",
      },
    ],
  },
];

const projectBenefits: ProjectBenefit[] = [
  { id: "1", text: "We use the newest product for developing" },
  { id: "2", text: "Manage all systems to our experienced" },
  { id: "3", text: "Always ready to easy way in installing all" },
  { id: "4", text: "We use the newest product for developing" },
  { id: "5", text: "Manage all systems to our experienced" },
  { id: "6", text: "Always ready to easy way in installing all" },
  { id: "7", text: "We use the newest product for developing" },
  { id: "8", text: "Manage all systems to our experienced" },
  { id: "9", text: "Always ready to easy way in installing all" },
];

const ProjectDetailPage: React.FC = () => {
  // Extract category from project ID (assuming format like "education-1", "ecommerce-1", etc.)
  const projectId = "ecommerce";
  const category = projectId?.split("-")[0] as keyof typeof projectData;
  const project = projectData[category] || projectData.education;

  const handleGetOffer = () => {
    console.log(`Get personalized offer for project: ${projectId}`);
    alert(
      `Thank you for your interest in ${project.title}! We'll contact you with a personalized offer.`
    );
  };
  // Event handlers
  const handleBookConsultation = () => {
    console.log("Book consultation clicked");
    alert(
      "Thank you for your interest! We'll contact you within 24 hours to schedule your consultation."
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Project Header */}
      <ProjectDetailHeader
        projectTitle={project.title}
        brandName={project.brandName}
        onGetOffer={handleGetOffer}
      />

      {/* Project Content */}
      <ProjectDetailContent
        title="Digital Analysis"
        description={project.description}
        projectInfo={project.projectInfo}
        images={[
          "/placeholder.svg?height=300&width=400",
          "/placeholder.svg?height=300&width=400",
        ]}
      />

      {/* Project Benefits Carousel */}
      <ProjectBenefitsCarousel benefits={project.benefits} itemsPerView={3} />

      {/* Trust Badge */}
      <TrustBadgeSection />

      {/* Project Process */}
      <ProjectProcessSection
        steps={processSteps}
        onBookConsultation={handleBookConsultation}
      />

      {/* Project Benefits */}
      <ProjectBenefitsSection
        benefits={projectBenefits}
        images={[
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ]}
      />

      <GetStartedSection />

      <FAQSection
        categories={faqCategories}
        defaultActiveCategory="general"
        defaultOpenFAQ={null}
      />

      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default ProjectDetailPage;
