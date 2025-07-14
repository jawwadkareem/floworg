"use client";

import type React from "react";
import ProjectBenefitsSection from "./project-benefits-section";
import ProjectProcessSection from "./project-process-section";
import ProjectStatsSection from "./project-stats-section";
import TrustBadgeSection from "./trust-badge-section";
import IndustryProjectsSection from "./industry-projects-section";
import type { ProjectBenefit } from "./project-benefits-section";
import type { ProcessStep } from "./project-process-section";
import type { ProjectStat } from "./project-stats-section";
import type {
  ProjectCard,
  IndustryCategory,
} from "./industry-projects-section";
import GetStartedSection from "../GetStartedSection";
import FAQSection, { FAQCategory } from "../pricingPage/faq-section";
import NewsSection from "../NewsSection";
import TestimonialsSection from "../TestimonialsSection";
import NewsletterSection from "../NewsletterSection";
import Footer from "../Footer";
import Navbar from "../Navbar";

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

const ProjectsPage: React.FC = () => {
  // Sample benefits data
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

  // Sample stats data
  const projectStats: ProjectStat[] = [
    { id: "integrations", value: "9K+", label: "Integrations" },
    { id: "channels", value: "16+", label: "Communication Channels" },
    { id: "clients", value: "800+", label: "Enterprise Clients" },
    { id: "messages", value: "50M+", label: "Messages Per Month" },
    { id: "chats", value: "2K+", label: "Active Chats" },
  ];

  // Sample industry categories
  const industryCategories: IndustryCategory[] = [
    { id: "all", name: "ALL INDUSTRIES", label: "All Industries" },
    { id: "automotive", name: "AUTOMOTIVE", label: "Automotive" },
    { id: "ecommerce", name: "E-COMMERCE", label: "E-Commerce" },
    { id: "education", name: "EDUCATION", label: "Education" },
    {
      id: "entertainment",
      name: "ENTERTAINMENT & MEDIA",
      label: "Entertainment & Media",
    },
    { id: "finance", name: "FINANCE", label: "Finance" },
    { id: "food", name: "FOOD & BEVERAGE", label: "Food & Beverage" },
    {
      id: "government",
      name: "GOVERNMENT & PUBLIC SERVICES",
      label: "Government & Public Services",
    },
    { id: "healthcare", name: "HEALTHCARE", label: "Healthcare" },
    { id: "hospitality", name: "HOSPITALITY", label: "Hospitality" },
    { id: "hr", name: "HR & RECRUITMENT", label: "HR & Recruitment" },
    { id: "legal", name: "LEGAL SERVICES", label: "Legal Services" },
    {
      id: "logistics",
      name: "LOGISTICS & TRANSPORTATION",
      label: "Logistics & Transportation",
    },
    { id: "manufacturing", name: "MANUFACTURING", label: "Manufacturing" },
    {
      id: "nonprofit",
      name: "NON-PROFIT ORGANIZATIONS",
      label: "Non-Profit Organizations",
    },
    { id: "realestate", name: "REAL ESTATE", label: "Real Estate" },
    { id: "retail", name: "RETAIL", label: "Retail" },
    { id: "technology", name: "TECHNOLOGY & SAAS", label: "Technology & SaaS" },
    { id: "travel", name: "TRAVEL & TOURISM", label: "Travel & Tourism" },
  ];

  // Sample projects data
  const projectCards: ProjectCard[] = [
    {
      id: "education-1",
      title: "Project Education",
      description:
        "Comprehensive educational platform with interactive learning modules and student management system.",
      image: "/placeholder.svg?height=200&width=300",
      category: "education",
      brand: "EduTech",
    },
    {
      id: "ecommerce-1",
      title: "Project E-Commerce",
      description:
        "Modern e-commerce solution with advanced inventory management and customer analytics.",
      image: "/placeholder.svg?height=200&width=300",
      category: "ecommerce",
      brand: "ShopFlow",
    },
    {
      id: "automotive-1",
      title: "Project Automotive",
      description:
        "Automotive management system with service scheduling and parts inventory tracking.",
      image: "/placeholder.svg?height=200&width=300",
      category: "automotive",
      brand: "AutoPro",
    },
    {
      id: "healthcare-1",
      title: "Healthcare Management",
      description:
        "Patient management system with appointment scheduling and medical records integration.",
      image: "/placeholder.svg?height=200&width=300",
      category: "healthcare",
      brand: "MedFlow",
    },
    {
      id: "finance-1",
      title: "Financial Dashboard",
      description:
        "Comprehensive financial analytics platform with real-time reporting and forecasting.",
      image: "/placeholder.svg?height=200&width=300",
      category: "finance",
      brand: "FinTech",
    },
    {
      id: "retail-1",
      title: "Retail Analytics",
      description:
        "Advanced retail analytics platform with sales tracking and customer behavior insights.",
      image: "/placeholder.svg?height=200&width=300",
      category: "retail",
      brand: "RetailPro",
    },
  ];

  // Event handlers
  const handleBookConsultation = () => {
    console.log("Book consultation clicked");
    alert(
      "Thank you for your interest! We'll contact you within 24 hours to schedule your consultation."
    );
  };

  const handleReadMore = (projectId: string) => {
    console.log(`Read more clicked for project: ${projectId}`);
    alert(`Opening detailed view for project: ${projectId}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    console.log(`Category changed to: ${categoryId}`);
  };

  return (
    <main className="min-h-screen">
      <Navbar/>
      {/* Project Stats Header */}
      <ProjectStatsSection stats={projectStats} />

      {/* Industry Projects */}
      <IndustryProjectsSection
        categories={industryCategories}
        projects={projectCards}
        onReadMore={handleReadMore}
        onCategoryChange={handleCategoryChange}
      />

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
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  );
};

export default ProjectsPage;
