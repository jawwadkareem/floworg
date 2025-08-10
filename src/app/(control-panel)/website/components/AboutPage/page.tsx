import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import AboutNavbar from "./about-navbar"
import FeaturesSection from "./features-section"
import HebrewTimelineSection from "./hebrew-section"
import WorldMapSection from "./world-map-section"
import VisionSection from "./vision-section"
import OurStorySection from "./our-story-section"
import CertificatesAwardsSection from "./certificate-awards-section"
import TrustedCompaniesSection from "./trusted-companies-section"
import HebrewFaqSection from "./hebrew-faq-section"
import BusinessUnderstandingSection from "./business-understanding-section"
import TeamSection from "./team-section"
import TestimonialsSection from "../TestimonialsSection"
import NewsSection from "../NewsSection"
import CommonNewsSection from "../CommonNewsSection"
import LeadsForm from "../pricingPage/leads-form"
import { HOMEPAGE_TAG } from "../../constants"
import FAQSection from "../faq-section"
import Footer from "../Footer"
import { i } from "node_modules/react-router/dist/development/fog-of-war-D2zsXvum.mjs"

const Aboutpage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-teal-800 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
             About Floworg
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
              Discover Your Full Power – Smart Automation, Precise Optimization,
              and Growth at the Highest International Standards
            </p>
          </div>
        </div>
      </div>

      <AboutNavbar />
      <FeaturesSection />
      <VisionSection />
      <HebrewTimelineSection />
      <WorldMapSection />
      <OurStorySection />
      <CertificatesAwardsSection />
      <TrustedCompaniesSection />
      <HebrewFaqSection />
      <BusinessUnderstandingSection />
      <TeamSection />
      <CommonNewsSection />
      <FAQSection />
      <LeadsForm />

      <NewsSection tag={HOMEPAGE_TAG} />
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
      </div>
    </>
  )
}

export default Aboutpage;
