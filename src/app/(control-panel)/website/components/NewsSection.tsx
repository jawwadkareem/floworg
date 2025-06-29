// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
// import { CalendarToday, Person } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const NewsSection: React.FC = () => {
//   const articles = [
//     {
//       title: 'The Future of Business Automation',
//       excerpt: 'Discover how AI and automation are transforming modern business operations and what it means for your company.',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
//       date: 'March 15, 2024',
//       author: 'John Smith',
//       category: 'Technology',
//     },
//     {
//       title: 'Building Scalable Cloud Solutions',
//       excerpt: 'Learn the best practices for creating cloud infrastructure that grows with your business needs.',
//       image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
//       date: 'March 12, 2024',
//       author: 'Sarah Johnson',
//       category: 'Cloud Computing',
//     },
//     {
//       title: 'Security Best Practices for Remote Teams',
//       excerpt: 'Essential security measures every remote team should implement to protect their digital assets.',
//       image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
//       date: 'March 10, 2024',
//       author: 'Mike Davis',
//       category: 'Security',
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: 'white' }}>
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 2,
//               fontSize: { xs: '2rem', md: '3rem' },
//               fontWeight: 700,
//               color: '#333',
//             }}
//           >
//             Check out our latest
//           </Typography>
//           <Typography
//             variant="h3"
//             align="center"
//             sx={{
//               mb: 6,
//               fontSize: { xs: '1.5rem', md: '2rem' },
//               fontWeight: 600,
//               color: '#00D4AA',
//             }}
//           >
//             news & articles
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4}>
//           {articles.map((article, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 4,
//                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
//                     },
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={article.image}
//                     alt={article.title}
//                     sx={{
//                       transition: 'transform 0.3s ease',
//                       '&:hover': {
//                         transform: 'scale(1.05)',
//                       },
//                     }}
//                   />
//                   <CardContent sx={{ p: 3 }}>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 2,
//                         mb: 2,
//                         color: 'text.secondary',
//                         fontSize: '0.85rem',
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                         <CalendarToday sx={{ fontSize: 16 }} />
//                         {article.date}
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                         <Person sx={{ fontSize: 16 }} />
//                         {article.author}
//                       </Box>
//                     </Box>
                    
//                     <Typography
//                       variant="h6"
//                       sx={{ 
//                         mb: 2, 
//                         fontWeight: 600,
//                         color: '#333',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {article.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{ 
//                         mb: 3,
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       {article.excerpt}
//                     </Typography>
                    
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <Button
//                         variant="text"
//                         sx={{
//                           color: '#00D4AA',
//                           fontWeight: 600,
//                           '&:hover': {
//                             backgroundColor: 'rgba(0, 212, 170, 0.1)',
//                           },
//                         }}
//                       >
//                         Read More
//                       </Button>
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           backgroundColor: '#f0f0f0',
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: 2,
//                           color: 'text.secondary',
//                         }}
//                       >
//                         {article.category}
//                       </Typography>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default NewsSection;

"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material"
import { motion } from "framer-motion"

const NewsSection: React.FC = () => {
  const articles = [
    {
      title: "Pre and post launch mobile app marketing pitfalls to avoid",
      excerpt:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
      image: "/placeholder.svg?height=250&width=400",
      date: "30 April, 2019",
      author: "ADMIN",
      comments: "2 COMMENTS",
    },
    {
      title: "Social currency high performance keywords or",
      excerpt:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
      image: "/placeholder.svg?height=250&width=400",
      date: "30 April, 2019",
      author: "ADMIN",
      comments: "2 COMMENTS",
    },
    {
      title: "Prioritize these line items quarterly sales are at",
      excerpt:
        "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
      image: "/placeholder.svg?height=250&width=400",
      date: "30 April, 2019",
      author: "ADMIN",
      comments: "2 COMMENTS",
    },
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            {/* Decorative Icon */}
            <Box
              sx={{
                width: 60,
                height: 60,
                backgroundColor: "#00D4AA",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 600,
                color: "#2C3E50",
                lineHeight: 1.3,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Check out our latest
              <br />
              news & articles.
            </Typography>
          </Box>
        </motion.div>

        {/* Articles Grid */}
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} md={4} key={index} {...({} as any)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                    },
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                >
                  {/* Image with Date Badge */}
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={article.image}
                      alt={article.title}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    {/* Date Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        backgroundColor: "#00D4AA",
                        color: "white",
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {article.date}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Author and Comments */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        fontSize: "0.75rem",
                        color: "#9CA3AF",
                        fontWeight: 500,
                      }}
                    >
                      <Typography variant="caption" sx={{ color: "#2C3E50", fontWeight: 600 }}>
                        BY {article.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#E91E63", fontWeight: 600 }}>
                        {article.comments}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "#2C3E50",
                        lineHeight: 1.4,
                        fontSize: "1.1rem",
                      }}
                    >
                      {article.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#9CA3AF",
                        lineHeight: 1.6,
                        fontSize: "0.9rem",
                      }}
                    >
                      {article.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default NewsSection
