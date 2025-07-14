import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar";
import TestimonialsSection from "../TestimonialsSection"
import NewsSection from "../NewsSection"
import SupportBlogSection from "../support-blog-section"
import DocumentationSection from "./DocumentationSection";
import NewsletterSection from "../NewsletterSection"
import FAQSection from "../faq-section"
import Footer from "../Footer"

const KnowledgeBasepage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Knowledge Base
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization,
              and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>
      
      <DocumentationSection />
      <SupportBlogSection />
      <FAQSection />

      <NewsSection />
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
      </div>
    </>
  )
}

export default KnowledgeBasepage;
