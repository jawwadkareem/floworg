import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import AccessibilityNavbar from "../AccessibilityStatementPage/accessibiliynavbar"
import TermsSection from "../AccessibilityStatementPage/TermsSection"
import TestimonialsSection from "../TestimonialsSection"
import NewsSection from "../NewsSection"
import FAQSection from "../faq-section"
import Footer from "../Footer"

const PrivacyPolicypage: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization,
              and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>

      <AccessibilityNavbar />
      <TermsSection />
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

export default PrivacyPolicypage;
