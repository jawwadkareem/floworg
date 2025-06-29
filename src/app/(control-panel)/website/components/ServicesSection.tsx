// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
// import { 
//   Security, 
//   VoiceChat, 
//   Api, 
//   AccountTree,
//   Speed,
//   CloudSync
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const ServicesSection: React.FC = () => {
//   const services = [
//     {
//       icon: <Security sx={{ fontSize: 40, color: '#FF6B6B' }} />,
//       title: 'Authentication',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <VoiceChat sx={{ fontSize: 40, color: '#4ECDC4' }} />,
//       title: 'Voice',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <VoiceChat sx={{ fontSize: 40, color: '#45B7D1' }} />,
//       title: 'Voice',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <Api sx={{ fontSize: 40, color: '#96CEB4' }} />,
//       title: 'API',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <AccountTree sx={{ fontSize: 40, color: '#FFEAA7' }} />,
//       title: 'Guided Flow',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <AccountTree sx={{ fontSize: 40, color: '#DDA0DD' }} />,
//       title: 'Guided Flow',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <Speed sx={{ fontSize: 40, color: '#FF7675' }} />,
//       title: 'Guided Flow',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <CloudSync sx={{ fontSize: 40, color: '#74B9FF' }} />,
//       title: 'Guided Flow',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//     {
//       icon: <AccountTree sx={{ fontSize: 40, color: '#00B894' }} />,
//       title: 'Guided Flow',
//       description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 2,
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 600,
//               background: 'linear-gradient(45deg, #00D4AA, #1976d2)',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             Floworg Services
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 3,
//                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 3, textAlign: 'center' }}>
//                     <Box sx={{ mb: 2 }}>
//                       {service.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ mb: 2, fontWeight: 600 }}
//                     >
//                       {service.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{ lineHeight: 1.6 }}
//                     >
//                       {service.description}
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

// export default ServicesSection;
"use client"

import type React from "react"
import { Box, Typography, Container, Grid } from "@mui/material"
import {
  LightbulbOutlined,
  NotificationsOutlined,
  DescriptionOutlined,
  LocalFireDepartmentOutlined,
} from "@mui/icons-material"
import { motion } from "framer-motion"

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <LightbulbOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Authentication",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: true,
      decorationPosition: "top-left",
    },
    {
      icon: <NotificationsOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Voice",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: true,
      decorationPosition: "top-right",
    },
    {
      icon: <NotificationsOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Voice",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
    {
      icon: <DescriptionOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "API",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: true,
      decorationPosition: "bottom-left",
    },
    {
      icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
    {
      icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
    {
      icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
    {
      icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
    {
      icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#FF6B6B" }} />,
      title: "Gated Flow",
      description: "Many packages and web page editors now Lorem.",
      hasDecoration: false,
    },
  ]

  const getDecorationElement = (position: string) => {
    const baseStyles = {
      position: "absolute" as const,
      width: 0,
      height: 0,
      zIndex: 0,
    }

    switch (position) {
      case "top-left":
        return (
          <Box
            sx={{
              ...baseStyles,
              top: 0,
              left: 0,
              borderTop: "40px solid #FF6B6B",
              borderRight: "40px solid transparent",
            }}
          />
        )
      case "top-right":
        return (
          <Box
            sx={{
              ...baseStyles,
              top: 0,
              right: 0,
              borderTop: "60px solid #FF6B6B",
              borderLeft: "60px solid transparent",
            }}
          />
        )
      case "bottom-left":
        return (
          <Box
            sx={{
              ...baseStyles,
              bottom: 0,
              left: 0,
              borderBottom: "50px solid #FF6B6B",
              borderRight: "50px solid transparent",
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
              color: "#2C3E50",
            }}
          >
            <Box component="span" sx={{ color: "#00D4AA" }}>
              Floworg
            </Box>{" "}
            Services
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    p: 4,
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  {/* Decorative Elements */}
                  {service.hasDecoration && getDecorationElement(service.decorationPosition || "")}

                  {/* Content */}
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        mb: 3,
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      {service.icon}
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
                      {service.title}
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
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesSection
