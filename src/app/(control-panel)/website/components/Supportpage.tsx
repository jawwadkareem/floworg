import type React from "react"
import SupportHeroSection from "./support-hero-section"
import GettingStartedSection from "./getting-started-section"
import NewsUpdatesSection from "./news-updates-section"
import NewFeaturesSection from "./new-features-section"
import SupportBlogSection from "./support-blog-section"
import IntegrationsSupportSection from "./integrations-support-section"
import FAQSection from "./faq-section"
import NewsSection from "./NewsSection"

import TestimonialsSection from "./TestimonialsSection"
import NewsletterSection from "./NewsletterSection"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Supportpage: React.FC = () => {
  return (
    <>
    <Navbar/>
      <SupportHeroSection />
      <GettingStartedSection />
      <NewsUpdatesSection />
      <NewFeaturesSection />
      <SupportBlogSection />
      <IntegrationsSupportSection />
      <FAQSection />
      <NewsSection />

      {/* <LatestArticlesSection /> */}
      <TestimonialsSection />
      {/* <TestimonialsSupportSection /> */}
      {/* <NewsletterSection /> */}
      <Footer />
    </>
  )
}

export default Supportpage;
