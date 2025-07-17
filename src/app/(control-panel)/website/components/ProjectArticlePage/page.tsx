import type React from "react"
import Header from "../Header"
import Navbar from "../Navbar";
import DigitalAnalysisSection from "./DigitalAnalysisSection";
import ProjectSummarySection from "./ProjectSummarySection";
import LeadsForumSection from "../LeadsForumSection";
import NewsSection from "../NewsSection"
import ProcessTimelineSection from "../ProcessTimelineSection";
import NewsletterSection from "../NewsletterSection";
import TestimonialsSection from "../TestimonialsSection"

import Footer from "../Footer"
import SupportBlogSection from "../support-blog-section";

const ProjectArticlepage: React.FC = () => {
   
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
              Canva - Project
            </h1>
          
          </div>
        </div>
      </div>
      
      <DigitalAnalysisSection />
      <ProcessTimelineSection />

      <ProjectSummarySection />
      <LeadsForumSection />

      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      </div>
    </>
  )
}

export default ProjectArticlepage;
