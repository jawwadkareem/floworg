import React from 'react';
import BlogArticleHeader from './BlogArticleHeader';
import BlogArticle from './BlogArticleSection';
import NewsSection from './NewsSection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import LeadsForumSection from './LeadsForumSection';
const BlogArticlepage: React.FC = () => {
  return (
    <>
      <BlogArticleHeader />
      <BlogArticle />
      
      
      <LeadsForumSection />
      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default BlogArticlepage;