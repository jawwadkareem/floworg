import React from 'react';
import BlogArticleHeader from './BlogArticleHeader';
import BlogArticle from './BlogArticleSection';
import NewsSection from './NewsSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import LeadsForm from './pricingPage/leads-form';
import { HOMEPAGE_TAG } from '../constants';
import Navbar from './Navbar';
const BlogArticlepage: React.FC = () => {
  return (
    <>
    <Navbar/>
      <BlogArticleHeader />
      <BlogArticle />
      
      
      <LeadsForm />
      <NewsSection tag={HOMEPAGE_TAG} />
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </>
  );
};

export default BlogArticlepage;