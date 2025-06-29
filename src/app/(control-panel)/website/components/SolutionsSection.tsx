// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
// import { 
//   Business, 
//   Code, 
//   Analytics, 
//   Security, 
//   CloudSync, 
//   Support,
//   IntegrationInstructions ,
//   Speed,
//   Group,
//   Settings,
//   TrendingUp,
//   Storage
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const SolutionsSection: React.FC = () => {
//   const solutions = [
//     { icon: <Business sx={{ fontSize: 40, color: '#4285F4' }} />, title: 'Business Solutions', description: 'Comprehensive business automation tools' },
//     { icon: <Code sx={{ fontSize: 40, color: '#34A853' }} />, title: 'Development Tools', description: 'Advanced development and deployment solutions' },
//     { icon: <Analytics sx={{ fontSize: 40, color: '#EA4335' }} />, title: 'Data Analytics', description: 'Powerful analytics and reporting capabilities' },
//     { icon: <Security sx={{ fontSize: 40, color: '#FBBC04' }} />, title: 'Security Suite', description: 'Enterprise-grade security solutions' },
//     { icon: <CloudSync sx={{ fontSize: 40, color: '#9C27B0' }} />, title: 'Cloud Services', description: 'Scalable cloud infrastructure and services' },
//     { icon: <Support sx={{ fontSize: 40, color: '#FF5722' }} />, title: 'Customer Support', description: '24/7 dedicated customer support solutions' },
//     { icon: <IntegrationInstructions  sx={{ fontSize: 40, color: '#607D8B' }} />, title: 'API Integration', description: 'Seamless third-party integrations' },
//     { icon: <Speed sx={{ fontSize: 40, color: '#795548' }} />, title: 'Performance', description: 'High-performance optimization tools' },
//     { icon: <Group sx={{ fontSize: 40, color: '#3F51B5' }} />, title: 'Team Collaboration', description: 'Enhanced team productivity solutions' },
//     { icon: <Settings sx={{ fontSize: 40, color: '#009688' }} />, title: 'Automation', description: 'Intelligent workflow automation' },
//     { icon: <TrendingUp sx={{ fontSize: 40, color: '#FF9800' }} />, title: 'Growth Tools', description: 'Business growth and scaling solutions' },
//     { icon: <Storage sx={{ fontSize: 40, color: '#E91E63' }} />, title: 'Data Management', description: 'Comprehensive data storage solutions' },
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
//               mb: 6,
//               fontSize: { xs: '2rem', md: '3rem' },
//               fontWeight: 700,
//               color: '#333',
//             }}
//           >
//             Solutions
//           </Typography>
//         </motion.div>

//         <Grid container spacing={3}>
//           {solutions.map((solution, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 3,
//                     boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
//                     },
//                     border: '1px solid rgba(0, 0, 0, 0.05)',
//                   }}
//                 >
//                   <CardContent sx={{ p: 3, textAlign: 'center' }}>
//                     <Box sx={{ mb: 2 }}>
//                       {solution.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ 
//                         mb: 1, 
//                         fontWeight: 600,
//                         fontSize: '1.1rem',
//                         color: '#333',
//                       }}
//                     >
//                       {solution.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{ 
//                         lineHeight: 1.5,
//                         fontSize: '0.9rem',
//                       }}
//                     >
//                       {solution.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mt: 6 }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: '#00D4AA',
//                 '&:hover': {
//                   backgroundColor: '#00B894',
//                 },
//                 borderRadius: 3,
//                 px: 6,
//                 py: 2,
//                 fontSize: '1.1rem',
//                 fontWeight: 600,
//               }}
//             >
//               Explore All the Cards For Your Business Category
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default SolutionsSection;
"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Card, CardContent, Button, Switch } from "@mui/material"
import { motion } from "framer-motion"

const SolutionsSection: React.FC = () => {
  const integrations = [
    {
      name: "Google Mail",
      description: "Email and file sharing, enabling it to be effective and you can use",
      icon: "📧",
      color: "#EA4335",
    },
    {
      name: "Google Analytics",
      description: "Tracking and measuring marketing ROI as well as track your video, applications, social media",
      icon: "📊",
      color: "#4285F4",
    },
    {
      name: "Google Meet",
      description: "Video calling and screen sharing for development for Google Hangouts and Google Chat",
      icon: "📹",
      color: "#34A853",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management in a way to boost the brand's following",
      icon: "☁️",
      color: "#00A1E0",
    },
    {
      name: "Google Outlook",
      description: "Personal and file sharing, enabling it to be effective and you can use",
      icon: "📧",
      color: "#0078D4",
    },
    {
      name: "Chrome",
      description: "Using your browser's native push notifications with international and commerce",
      icon: "🌐",
      color: "#4285F4",
    },
    {
      name: "Slack",
      description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
      icon: "💬",
      color: "#4A154B",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management in a way to boost the brand's following",
      icon: "☁️",
      color: "#00A1E0",
    },
    {
      name: "Trello",
      description:
        "Task and collaboration tool that brings the right people, information and tools together to get work",
      icon: "📋",
      color: "#0079BF",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management in a way to boost the brand's following",
      icon: "☁️",
      color: "#00A1E0",
    },
    {
      name: "Web Hooks",
      description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
      icon: "🔗",
      color: "#FF6B35",
    },
    {
      name: "Facebook",
      description: "Business Pages allows to create a video marketing and reach that it leads to sales, reach friends",
      icon: "📘",
      color: "#1877F2",
    },
    {
      name: "Microsoft Team Conference",
      description:
        "Communication and file sharing tool that brings the right people, information and tools together to get work",
      icon: "👥",
      color: "#6264A7",
    },
    {
      name: "Zapier",
      description: "Zapier lets you connect Google Meet with thousands of the most popular apps, so you can",
      icon: "⚡",
      color: "#FF4A00",
    },
    {
      name: "Zoom",
      description: "Video Chat Meetings for personal or video Chat Meetings, offering integrated broadcasting for",
      icon: "📹",
      color: "#2D8CFF",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management in a way to boost the brand's following",
      icon: "☁️",
      color: "#00A1E0",
    },
  ]

  // Duplicate the array to show more rows as in the image
  const allIntegrations = [...integrations, ...integrations]

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#2C3E50",
            }}
          >
            Solutions
          </Typography>
        </motion.div>

        {/* Integrations Grid */}
        <Grid container spacing={2}>
          {allIntegrations.slice(0, 24).map((integration, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} {...({} as any)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    },
                    border: "1px solid #E5E7EB",
                    backgroundColor: "white",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            backgroundColor: `${integration.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                            flexShrink: 0,
                          }}
                        >
                          {integration.icon}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              fontSize: "0.95rem",
                              color: "#2C3E50",
                              mb: 0.5,
                              lineHeight: 1.3,
                            }}
                          >
                            {integration.name}
                          </Typography>
                        </Box>
                      </Box>
                      <Switch
                        size="small"
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#00D4AA",
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            backgroundColor: "#00D4AA",
                          },
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6B7280",
                        fontSize: "0.8rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {integration.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#00D4AA",
                "&:hover": {
                  backgroundColor: "#00B894",
                },
                borderRadius: 25,
                px: 6,
                py: 2,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(0, 212, 170, 0.3)",
              }}
            >
              To Explore all Use Cases, For Your Business Category
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default SolutionsSection
