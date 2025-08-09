import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar"
import CareerNavbar from "./career-application-navbar"
import JoinTeamHeroSection from "./join-team-hero-section"
import TrustStatisticsSection from "./trust-stats-section"
import WhyApplySection from "./why-apply-section"
import BenefitsSection from "./benefits-section"
import JobListingsSection from "./job-listings-section"
import CommonNewsSection from "../CommonNewsSection"
import TestimonialsSection from "../TestimonialsSection"
import NewsSection from "../NewsSection"
import FAQSection from "../faq-section"
import Footer from "../Footer"
import { CAREERS_TAG } from "../../constants"

const Careerpage: React.FC = () => {
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
              Careers
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto animate-fade-in">
             We are Always Searching For Amazing People to Join Our Team
            </p>
          </div>
        </div>
      </div>
     
      <CareerNavbar />
      <JoinTeamHeroSection />
      <TrustStatisticsSection />
      <WhyApplySection />
      <BenefitsSection />
      <JobListingsSection />
      <CommonNewsSection />
      <FAQSection />

      <NewsSection tag={CAREERS_TAG}/>
      <TestimonialsSection />
      <Footer />
      </div>
    </>
  )
}

export default Careerpage;
