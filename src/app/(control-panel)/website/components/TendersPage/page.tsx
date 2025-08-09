import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import TenderNavbar from "../TenderArticlesPage/tender-navbar"
import FloworgSuppliers from "./floworg-suppliers"
import TrustedCompaniesSection from "../AboutPage/trusted-companies-section"
import WhyApplySection from "../CareerPage/why-apply-section"
import BenefitsSection from "../CareerPage/benefits-section"
import JobListingsSection from "./JobListingSection"
import CommonNewsSection from "../CommonNewsSection"
import TestimonialsSection from "../TestimonialsSection"
import NewsSection from "../NewsSection"
import FAQSection from "../faq-section"
import Footer from "../Footer"

const Tenderspage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-teal-800 to-teal-600  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              Tenders
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
             We are Always Searching For Amazing People to Join Our Team
            </p>
          </div>
        </div>
      </div>
     
      <TenderNavbar />
      <FloworgSuppliers />
      <WhyApplySection />
      <BenefitsSection />
      <JobListingsSection />
      <TrustedCompaniesSection />

      <CommonNewsSection />
      <FAQSection />

      <NewsSection />
      <TestimonialsSection />
       {/* Partner Logos Slider Section */}
    <div className="bg-gray-100 py-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
        className="logo-slider flex space-x-10 overflow-x-auto items-center"
        style={{
            scrollbarWidth: 'none',        // Firefox
            msOverflowStyle: 'none',       // IE and Edge
            WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
        }}
        onWheel={(e) => {
            if (e.deltaY !== 0) {
            e.currentTarget.scrollLeft += e.deltaY;
            e.preventDefault();
            }
        }}
        >
        {[
            "QUOTRAX", "Marshk", "PILOT", "UPWARE", "uprise", "Lookout", "NovaCore", "Skyloop", "Trendify",
            "QUOTRAX", "Marshk", "PILOT", "UPWARE", "uprise", "Lookout", "NovaCore", "Skyloop", "Trendify",
            "QUOTRAX", "Marshk", "PILOT", "UPWARE", "uprise", "Lookout", "NovaCore", "Skyloop", "Trendify",
        ].map((logo, idx) => (
            <span
            key={idx}
            className="flex-shrink-0 text-lg md:text-xl font-semibold text-gray-500 opacity-70 hover:opacity-100 transition duration-300"
            >
            {logo}
            </span>
        ))}
        </div>
    </div>

    {/* Inline style to hide WebKit scrollbar */}
    <style>
        {`
        .logo-slider::-webkit-scrollbar {
            display: none;
        }
        `}
    </style>
    </div>
      
      <Footer />
      </div>
    </>
  )
}

export default Tenderspage;
