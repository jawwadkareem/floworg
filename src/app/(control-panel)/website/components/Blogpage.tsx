import React from 'react';
import Header from './Header';
import BlogHeroSection from './BlogHeroSection';
import BlogNavigationSection from './BlogNavigationSection';
import BlogGridSection from './BlogGridSection';
import BlogNewsletterSection from './BlogNewsLetterSection';
import NewsSection from './NewsSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import LeadsForumSection from './LeadsForumSection';
import Navbar from './Navbar';
const Blogpage: React.FC = () => {
  return (
    <>
    <Header />
    <Navbar />
  
    {/* Wrapper to add spacing after Navbar */}
    <div className="mt-8"> {/* Tailwind: mt-8 = margin-top: 2rem */}
      <BlogNavigationSection />
      <BlogGridSection />
      <BlogNewsletterSection />
      <LeadsForumSection />
      <NewsSection />
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  </>
  );
};

export default Blogpage;