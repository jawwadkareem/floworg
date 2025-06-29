// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
// import { motion } from 'framer-motion';

// const TestimonialsSection: React.FC = () => {
//   const testimonials = [
//     {
//       name: 'Hanna Somi',
//       role: 'CEO, TechCorp',
//       avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
//       rating: 5,
//       comment: 'Floworg has completely transformed our business operations. The automation features are incredible and have saved us countless hours.',
//     },
//     {
//       name: 'Hanna Dokis',
//       role: 'Marketing Director, StartupXYZ',
//       avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
//       rating: 5,
//       comment: 'The customer support is outstanding and the platform is incredibly user-friendly. Highly recommend to any growing business.',
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
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
//               mb: 6,
//               fontSize: { xs: '2rem', md: '3rem' },
//               fontWeight: 700,
//               color: '#333',
//             }}
//           >
//             What Our Customer Says
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4} justifyContent="center">
//           {testimonials.map((testimonial, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 4,
//                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                       <Avatar
//                         src={testimonial.avatar}
//                         sx={{ width: 60, height: 60, mr: 2 }}
//                       />
//                       <Box>
//                         <Typography
//                           variant="h6"
//                           sx={{ fontWeight: 600, color: '#333' }}
//                         >
//                           {testimonial.name}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                         >
//                           {testimonial.role}
//                         </Typography>
//                       </Box>
//                     </Box>
                    
//                     <Rating
//                       value={testimonial.rating}
//                       readOnly
//                       sx={{ mb: 2 }}
//                     />
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.6,
//                         color: 'text.secondary',
//                         fontStyle: 'italic',
//                       }}
//                     >
//                       "{testimonial.comment}"
//                     </Typography>
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

// export default TestimonialsSection;
"use client"

import type React from "react"
import { useState } from "react"
import { Box, Typography, Container, Grid, IconButton, Avatar } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { motion } from "framer-motion"

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Hanna Donin",
      role: "Creative Expert",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
    },
    {
      name: "Hanna Donin",
      role: "Creative Expert",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
    },
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
  }

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Header and Navigation */}
          <Grid item xs={12} md={5} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#8B5CF6",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block",
                }}
              >
                TESTIMONIAL
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                <Box component="span" sx={{ color: "#8B5CF6" }}>
                  What
                </Box>{" "}
                <Box component="span" sx={{ color: "#2C3E50" }}>
                  Our
                  <br />
                  Customer Says
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.6,
                  fontSize: "1rem",
                  mb: 4,
                  maxWidth: "400px",
                }}
              >
                It is a long established fact content of a page when looking at its layout.
              </Typography>

              {/* Navigation Arrows */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    width: 50,
                    height: 50,
                    border: "2px solid #E5E7EB",
                    borderRadius: "50%",
                    color: "#6B7280",
                    "&:hover": {
                      borderColor: "#8B5CF6",
                      color: "#8B5CF6",
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                    },
                  }}
                >
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    width: 50,
                    height: 50,
                    border: "2px solid #E5E7EB",
                    borderRadius: "50%",
                    color: "#6B7280",
                    "&:hover": {
                      borderColor: "#8B5CF6",
                      color: "#8B5CF6",
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                    },
                  }}
                >
                  <ChevronRight />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Testimonials */}
          <Grid item xs={12} md={7} {...({} as any)}>
            <Grid container spacing={3}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} sm={6} key={index} {...({} as any)}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 3,
                        p: 4,
                        height: "100%",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        position: "relative",
                        "&:hover": {
                          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Quote Text */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9CA3AF",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                          mb: 4,
                          fontSize: "0.95rem",
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>

                      {/* Profile Section */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{
                            width: 60,
                            height: 60,
                            border: "3px solid #F3F4F6",
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: "#2C3E50",
                              fontSize: "1.1rem",
                              mb: 0.5,
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#9CA3AF",
                              fontSize: "0.9rem",
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>

                        {/* Quote Icon */}
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: "#8B5CF6",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: "1.2rem",
                              fontWeight: 600,
                            }}
                          >
                            "
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TestimonialsSection
