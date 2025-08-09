
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material"
// import { motion } from "framer-motion"

// const NewsSection: React.FC = () => {
//   const articles = [
//     {
//       title: "Pre and post launch mobile app marketing pitfalls to avoid",
//       excerpt:
//         "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
//       image: "/placeholder.svg?height=250&width=400",
//       date: "30 April, 2019",
//       author: "ADMIN",
//       comments: "2 COMMENTS",
//     },
//     {
//       title: "Social currency high performance keywords or",
//       excerpt:
//         "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
//       image: "/placeholder.svg?height=250&width=400",
//       date: "30 April, 2019",
//       author: "ADMIN",
//       comments: "2 COMMENTS",
//     },
//     {
//       title: "Prioritize these line items quarterly sales are at",
//       excerpt:
//         "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
//       image: "/placeholder.svg?height=250&width=400",
//       date: "30 April, 2019",
//       author: "ADMIN",
//       comments: "2 COMMENTS",
//     },
//   ]

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             {/* Decorative Icon */}
//             <Box
//               sx={{
//                 width: 60,
//                 height: 60,
//                 backgroundColor: "#00D4AA",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mx: "auto",
//                 mb: 3,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 20,
//                   height: 20,
//                   backgroundColor: "white",
//                   borderRadius: "50%",
//                 }}
//               />
//             </Box>

//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: "2rem", md: "2.5rem" },
//                 fontWeight: 600,
//                 color: "#2C3E50",
//                 lineHeight: 1.3,
//                 maxWidth: "600px",
//                 mx: "auto",
//               }}
//             >
//               Check out our latest
//               <br />
//               news & articles.
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* Articles Grid */}
//         <Grid container spacing={4}>
//           {articles.map((article, index) => (
//             <Grid item xs={12} md={4} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: 3,
//                     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//                     },
//                     overflow: "hidden",
//                     backgroundColor: "white",
//                   }}
//                 >
//                   {/* Image with Date Badge */}
//                   <Box sx={{ position: "relative" }}>
//                     <CardMedia
//                       component="img"
//                       height="220"
//                       image={article.image}
//                       alt={article.title}
//                       sx={{
//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                           transform: "scale(1.05)",
//                         },
//                       }}
//                     />
//                     {/* Date Badge */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 20,
//                         left: 20,
//                         backgroundColor: "#00D4AA",
//                         color: "white",
//                         px: 2,
//                         py: 1,
//                         borderRadius: 1,
//                         fontSize: "0.75rem",
//                         fontWeight: 600,
//                       }}
//                     >
//                       {article.date}
//                     </Box>
//                   </Box>

//                   <CardContent sx={{ p: 3 }}>
//                     {/* Author and Comments */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 2,
//                         mb: 2,
//                         fontSize: "0.75rem",
//                         color: "#9CA3AF",
//                         fontWeight: 500,
//                       }}
//                     >
//                       <Typography variant="caption" sx={{ color: "#2C3E50", fontWeight: 600 }}>
//                         BY {article.author}
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: "#E91E63", fontWeight: 600 }}>
//                         {article.comments}
//                       </Typography>
//                     </Box>

//                     {/* Title */}
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: "#2C3E50",
//                         lineHeight: 1.4,
//                         fontSize: "1.1rem",
//                       }}
//                     >
//                       {article.title}
//                     </Typography>

//                     {/* Excerpt */}
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#9CA3AF",
//                         lineHeight: 1.6,
//                         fontSize: "0.9rem",
//                       }}
//                     >
//                       {article.excerpt}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default NewsSection

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BACKEND_URL from '../constants';

interface NewsSectionProps {
  tag: string;
}

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  comments: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({tag} : NewsSectionProps) => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(BACKEND_URL + '/blogs'+`?tag=${tag}`);
        const json = await res.json();

        const transformed = json.map((item: any) => ({
          title: item.Title,
          excerpt: item.Content?.slice(0, 50) + "...",
          image: `https://creator.zoho.com${item.Image}`,
          date: item.Published_Date?.split(" ")[0] || "Unknown Date",
          author: item.Author?.zc_display_value || "Unknown Author",
          comments: `${item.Comments || 0} COMMENTS`,
        }));

        setArticles(transformed);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, [tag]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative Icon */}
          <div className="w-15 h-15 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight max-w-2xl mx-auto">
            Check out our latest
            <br />
            news & articles.
          </h2>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Image with Date Badge */}
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-5 left-5 bg-teal-500 text-white px-3 py-2 rounded text-xs font-semibold">
                    {article.date}
                  </div>
                </div>

                <div className="p-6">
                  {/* Author and Comments */}
                  <div className="flex items-center gap-4 mb-4 text-xs font-medium">
                    <span className="text-gray-800 font-semibold">
                      BY {article.author}
                    </span>
                    <span className="text-pink-600 font-semibold">
                      {article.comments}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;