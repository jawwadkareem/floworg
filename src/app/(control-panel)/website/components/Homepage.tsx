import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WebPresentationSection from './WebPresentationSection';
import ScalableSolutionsSection from './ScalableSolutionsSection';
import AutomateSuccessSection from './AutomateSuccessSection';
import ServicesSection from './ServicesSection';
import ConnectSection from './ConnectSection';
import SmartAISection from './SmartAISection';
import IntegrationsSection from './IntegrationsSection';
import BannersSection from './BannersSection';
import ScreenSharingSection from './ScreenSharingSection';
import FeaturesSection from './FeatureSection';
import BenefitsSection from './BenefitsSection';
import SolutionsSection from './SolutionsSection';
import BusinessSolutionSection from './BusinessSolutionSection';
import GetStartedSection from './GetStartedSection';
import PricingSection from './PricingSection';
import NewsSection from './NewsSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ScalableSolutionsSection />
      <AutomateSuccessSection />
      <ServicesSection />
      <ConnectSection />
      <SmartAISection />
      <IntegrationsSection />
      {/* <BannersSection /> */}
      {/* <ScreenSharingSection /> */}
      <FeaturesSection />
      <BenefitsSection />
      <SolutionsSection />
      <BusinessSolutionSection />
      <GetStartedSection />
      <PricingSection />
      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Homepage;