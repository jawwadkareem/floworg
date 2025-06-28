// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
// import { 
//   Speed, 
//   Security, 
//   CloudSync, 
//   Analytics, 
//   Support, 
//   IntegrationInstructions  
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const BenefitsSection: React.FC = () => {
//   const benefits = [
//     {
//       icon: <Speed sx={{ fontSize: 50, color: '#4285F4' }} />,
//       title: 'Lightning Fast',
//       description: 'Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.',
//     },
//     {
//       icon: <Security sx={{ fontSize: 50, color: '#34A853' }} />,
//       title: 'Bank-level Security',
//       description: 'Your data is protected with enterprise-grade security measures and end-to-end encryption.',
//     },
//     {
//       icon: <CloudSync sx={{ fontSize: 50, color: '#EA4335' }} />,
//       title: 'Cloud Integration',
//       description: 'Seamlessly sync across all your devices with our robust cloud infrastructure.',
//     },
//     {
//       icon: <Analytics sx={{ fontSize: 50, color: '#FBBC04' }} />,
//       title: 'Advanced Analytics',
//       description: 'Get deep insights into your data with our powerful analytics and reporting tools.',
//     },
//     {
//       icon: <Support sx={{ fontSize: 50, color: '#9C27B0' }} />,
//       title: 'Incredible Support',
//       description: '24/7 customer support from our team of experts to help you succeed.',
//     },
//     {
//       icon: <IntegrationInstructions  sx={{ fontSize: 50, color: '#FF5722' }} />,
//       title: 'Easy Integration',
//       description: 'Connect with your favorite tools and services with our extensive integration library.',
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
//               mb: 2,
//               fontSize: { xs: '2rem', md: '3rem' },
//               fontWeight: 700,
//               color: '#333',
//             }}
//           >
//             Benefits
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 6,
//               color: 'text.secondary',
//               maxWidth: '600px',
//               mx: 'auto',
//             }}
//           >
//             We Deliver transform operations through intelligent automation.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4}>
//           {benefits.map((benefit, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 4,
//                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
//                       transform: 'translateY(-5px)',
//                     },
//                     border: '1px solid rgba(0, 0, 0, 0.05)',
//                   }}
//                 >
//                   <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                     <Box
//                       sx={{
//                         mb: 3,
//                         p: 2,
//                         borderRadius: '50%',
//                         backgroundColor: 'rgba(66, 133, 244, 0.1)',
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       {benefit.icon}
//                     </Box>
//                     <Typography
//                       variant="h5"
//                       sx={{ 
//                         mb: 2, 
//                         fontWeight: 600,
//                         color: '#333',
//                       }}
//                     >
//                       {benefit.title}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{ 
//                         lineHeight: 1.6,
//                         fontSize: '1rem',
//                       }}
//                     >
//                       {benefit.description}
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

// export default BenefitsSection;

"use client"

import type React from "react"
import { Box, Typography, Container, Grid } from "@mui/material"
import { motion } from "framer-motion"

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "🤖",
      title: "AI Automation",
      description:
        "Our AI continuously streamlines repetitive tasks, reduces manual effort, and enhances productivity with intelligent workflows.",
      color: "#4285F4",
    },
    {
      icon: "💡",
      title: "Smart Insights",
      description:
        "Leverage AI-powered analytics to gain deep insights into business trends and customer behavior. Our advanced data.",
      color: "#8B5CF6",
    },
    {
      icon: "🎯",
      title: "Adaptive Learning",
      description:
        "Our AI continuously evolves by learning from user interactions and data patterns. With adaptive machine learning system.",
      color: "#06B6D4",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description:
        "Easily connect our AI software with your existing tools, from CRM and ERP systems to marketing platforms, from social to integrations.",
      color: "#10B981",
    },
    {
      icon: "🛡️",
      title: "Scalable Security",
      description:
        "We prioritize robust security and scalability, ensuring encrypted data protection and compliance with global standards.",
      color: "#F59E0B",
    },
    {
      icon: "🚀",
      title: "Future-Ready",
      description:
        "Stay ahead with cutting-edge AI solutions built for long-term success. Our software evolves with emerging technologies.",
      color: "#EF4444",
    },
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 6 }}>
          {/* Left Side - Benefits Heading */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  fontWeight: 700,
                  color: "#2C3E50",
                  lineHeight: 1.1,
                }}
              >
                Benefits
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Side - Description */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#F3E8FF",
                    color: "#8B5CF6",
                    px: 2,
                    py: 0.5,
                    borderRadius: 20,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  ✨ Why Choose Us
                </Box>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 600,
                  color: "#2C3E50",
                  lineHeight: 1.3,
                }}
              >
                We Deliver transform operations through intelligent automation.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.6,
                  fontSize: "1rem",
                  maxWidth: "600px",
                }}
              >
                We specialize in providing AI-driven solutions that help businesses automate, optimize, and scale
                effectively with state-of-the-art security, seamless integrations, and adaptive AI.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: "center", p: 3 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: benefit.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                      fontSize: "2rem",
                    }}
                  >
                    {benefit.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#2C3E50",
                      fontSize: "1.1rem",
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6B7280",
                      lineHeight: 1.6,
                      fontSize: "0.9rem",
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default BenefitsSection
