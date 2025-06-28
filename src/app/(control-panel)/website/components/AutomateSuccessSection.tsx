// import React from 'react';
// import { Box, Typography, Container, Grid, Button } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const AutomateSuccessSection: React.FC = () => {
//   const leftFeatures = [
//     {
//       title: 'Omni-Channel AI Communication Hub',
//       description: 'Manage conversations across 16+ channels including advanced Webchat, Social Media, and WhatsApp (Business API & Web-Based Automation) – all from one unified bot that adapts per channel, powered by a single smart bot that helps run your entire business.',
//     },
//     {
//       title: 'No-Code Builder for Smart Bots & Advanced Workflows',
//       description: 'Design powerful bots and automation flows using an intuitive drag-and-drop interface, supporting complex logic, forms, file uploads, PDFs, audio, video and more – all with zero code.',
//     },
//     {
//       title: 'Custom CRM + Smart Tickets + Automated RPA Workflows',
//       description: 'Modular CRM tailored to your business brand, with built-in smart ticket management, meeting scheduling, and Smart RPA automations that eliminate repetitive tasks. Includes advanced Live Chat with role-based and agent-level permissions & global contacts management.',
//     },
//     {
//       title: 'Enterprise-Grade Security + Private Cloud Hosting',
//       description: 'Hosted on Amazon AWS, with Database Private Tenant, Whitelabel IP, layered permissions, team-based access, and full compliance with GDPR, ISO 27001 and global privacy standards.',
//     },
//     {
//       title: 'Flexible, Scalable & E-Commerce Ready',
//       description: 'Whether you\'re a startup, global brand, or public agency – Floworg is fast to deploy, fully scalable, supports international payment gateways, and integrates seamlessly with your online store.',
//     },
//   ];

//   const rightFeatures = [
//     {
//       title: 'Multilingual NLP & VoiceBot with Smart IVR',
//       description: 'An AI-powered NLP bot that understands natural language, responds like a human. It supports multiple languages, voice notes, and seamless integration with interactive IVR Systems – creating truly natural conversations.',
//     },
//     {
//       title: 'ChatGPT Integration & 9,000+ Seamless No-Code Connections',
//       description: 'Effortlessly connect to Zapier, Make, Pabbly, CRMs, cloud platforms, and e-commerce systems – with built-in ChatGPT capabilities, plus Full Open API and Webhooks for flexible, scalable integrations.',
//     },
//     {
//       title: 'BI Dashboards, Contact Management & Document Automation',
//       description: 'Track the full customer journey with real-time dashboards, context-aware logic, and automatic generation and delivery of personalized files, forms, and data-driven reports.',
//     },
//     {
//       title: 'Full Developer Toolkit + Custom Widgets & Mini-Apps',
//       description: 'Built for developers: Open API, Webhooks, HTTP Requests, SMTP, JSON, Java, Custom JS Functions, Live Chat API Channel, and flexible SDK components for building custom integrations and embedded tools.',
//     },
//     {
//       title: 'Templates, Training & Global Enterprise Support',
//       description: 'Gain access to hundreds of ready-to-use templates, free video courses, full documentation, and expert onboarding, consulting, implementation, and globally certified support – so you\'re never alone.',
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
//           <Box sx={{ textAlign: 'center', mb: 6 }}>
//             <Box
//               sx={{
//                 display: 'inline-block',
//                 background: 'linear-gradient(45deg, #FF9800, #00D4AA)',
//                 color: 'white',
//                 px: 3,
//                 py: 1,
//                 borderRadius: 3,
//                 fontSize: '0.9rem',
//                 fontWeight: 600,
//                 mb: 3,
//               }}
//             >
//               Your Automation AI. Actually Here
//             </Box>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2rem', md: '3rem' },
//                 fontWeight: 700,
//                 color: '#333',
//                 mb: 2,
//               }}
//             >
//               <span style={{ color: '#00D4AA' }}>Automate</span> Your{' '}
//               <span style={{ color: '#00D4AA' }}>Success</span>.
//               <br />
//               Scale Smarter. Grow Faster.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: 'text.secondary',
//                 maxWidth: '600px',
//                 mx: 'auto',
//                 lineHeight: 1.6,
//                 mb: 4,
//               }}
//             >
//               Stop planning for tomorrow. Automate your business strategy today
//               and reach the next level System AI In One — Faster & Smarter than ever.
//             </Typography>
//           </Box>
//         </motion.div>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ pr: { md: 2 } }}>
//               {leftFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       mb: 4,
//                       gap: 2,
//                     }}
//                   >
//                     <CheckCircle
//                       sx={{
//                         color: '#00D4AA',
//                         fontSize: 24,
//                         mt: 0.5,
//                         flexShrink: 0,
//                       }}
//                     />
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           mb: 1,
//                           color: '#333',
//                           fontSize: '1.1rem',
//                         }}
//                       >
//                         {feature.title}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           color: 'text.secondary',
//                           lineHeight: 1.6,
//                         }}
//                       >
//                         {feature.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </motion.div>
//               ))}
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Box sx={{ pl: { md: 2 } }}>
//               {rightFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       mb: 4,
//                       gap: 2,
//                     }}
//                   >
//                     <CheckCircle
//                       sx={{
//                         color: '#00D4AA',
//                         fontSize: 24,
//                         mt: 0.5,
//                         flexShrink: 0,
//                       }}
//                     />
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           mb: 1,
//                           color: '#333',
//                           fontSize: '1.1rem',
//                         }}
//                       >
//                         {feature.title}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           color: 'text.secondary',
//                           lineHeight: 1.6,
//                         }}
//                       >
//                         {feature.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </motion.div>
//               ))}
//             </Box>
//           </Grid>
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
//                 background: 'linear-gradient(45deg, #00D4AA, #4ECDC4)',
//                 '&:hover': {
//                   background: 'linear-gradient(45deg, #00B894, #45B7D1)',
//                 },
//                 borderRadius: 3,
//                 px: 6,
//                 py: 2,
//                 fontSize: '1.1rem',
//                 fontWeight: 600,
//                 color: 'white',
//                 boxShadow: '0 8px 30px rgba(0, 212, 170, 0.3)',
//               }}
//             >
//               Try Floworg AI. For Free
//             </Button>
//             <Typography
//               variant="body2"
//               sx={{
//                 mt: 2,
//                 color: 'text.secondary',
//               }}
//             >
//               No credit card required. Start in minutes.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default AutomateSuccessSection;
"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Button } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { motion } from "framer-motion"

const AutomateSuccessSection: React.FC = () => {
  const leftFeatures = [
    {
      title: "Omni-Channel AI Communication Hub",
      description:
        "Manage conversations across 16+ channels including advanced Webchat, Social Media, and WhatsApp (Business API & Web-Based Automation) – all from one unified bot that adapts per channel, powered by a single smart bot that runs your entire business.",
    },
    {
      title: "No-Code Builder for Smart Bots & Advanced Workflows",
      description:
        "Design powerful bots and automation flows using an intuitive drag-and-drop builder, supporting complex logic, forms, file uploads, PDFs, audio, images, and more – all with zero code.",
    },
    {
      title: "Custom CRM + Smart Tickets + Automated RPA Workflows",
      description:
        "Modular CRM tailored to your business brand, with built-in smart ticket management, meeting scheduling, and Smart RPA automations that eliminate repetitive tasks. Includes advanced Live Chat with role-based and agent-level permissions & global contacts management.",
    },
    {
      title: "Enterprise-Grade Security + Private Cloud Hosting",
      description:
        "Hosted on Amazon AWS, with Database Private Tenant, Whitelabel IP, layered permissions, team-based access, and full compliance with GDPR, ISO, SOC2, and global privacy standards.",
    },
    {
      title: "Flexible, Scalable & E-Commerce Ready",
      description:
        "Whether you're a startup, global brand, or public agency – Floworg is fast to deploy, fully scalable, supports international payment gateways, and integrates seamlessly with your online store.",
    },
  ]

  const rightFeatures = [
    {
      title: "Multilingual NLP & VoiceBot with Smart IVR",
      description:
        "An AI-powered NLP bot that understands natural language, responds like a human, and supports multiple languages, voice tonality, and seamless integration with interactive IVR systems – creating truly natural conversations.",
    },
    {
      title: "ChatGPT Integration & 9,000+ Seamless No-Code Connections",
      description:
        "Effortlessly connect to Zapier, Make, Pabbly, CRMs, cloud platforms, and e-commerce systems – with built-in ChatGPT capabilities, plus Full Open API and Webhooks for flexible, scalable integrations.",
    },
    {
      title: "BI Dashboards, Contact Management & Document Automation",
      description:
        "Track the full customer journey with real-time dashboards, context-aware logic, and automatic generation and delivery of personalized files, forms, and data-driven reports.",
    },
    {
      title: "Full Developer Toolkit + Custom Widgets & Mini-Apps",
      description:
        "Built for developers: Open API, Webhooks, HTTP Requests, SMTP, JSON, Java, Custom JS Functions, Live Chat API Channel, and flexible SDK components for building custom integrations and embedded tools.",
    },
    {
      title: "Templates, Training & Global Enterprise Support",
      description:
        "Gain access to hundreds of ready-to-use templates, free video courses, full documentation, and expert onboarding, consulting, implementation, and globally certified support – so you're never alone.",
    },
  ]

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #E8F5E8 0%, #F0E6FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "inline-block",
                background: "linear-gradient(90deg, #FF9800, #00D4AA)",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: 25,
                fontSize: "1rem",
                fontWeight: 600,
                mb: 4,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              Your Automation AI. Actually Here
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                color: "#2C3E50",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              <Box component="span" sx={{ color: "#00D4AA" }}>
                Automate
              </Box>{" "}
              Your{" "}
              <Box component="span" sx={{ color: "#00D4AA" }}>
                Success
              </Box>
              .
              <br />
              Scale Smarter. Grow Faster.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2C3E50",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
                mb: 6,
                fontSize: "1.1rem",
                fontWeight: 400,
              }}
            >
              Stop planning for tomorrow. Automate your business strategy today and reach the next level System AI In
              One — Faster & Smarter than ever.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box>
              {leftFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 4,
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#00D4AA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color: "white",
                          fontSize: 16,
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: "#2C3E50",
                          fontSize: "1.1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6B7280",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              {rightFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 4,
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#00D4AA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color: "white",
                          fontSize: 16,
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: "#2C3E50",
                          fontSize: "1.1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6B7280",
                          lineHeight: 1.6,
                          fontSize: "0.95rem",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

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
                backgroundColor: "#2C3E50",
                "&:hover": {
                  backgroundColor: "#1A252F",
                },
                borderRadius: 25,
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "white",
                boxShadow: "0 8px 30px rgba(44, 62, 80, 0.3)",
                textTransform: "none",
                mb: 2,
              }}
            >
              Try{" "}
              <Box component="span" sx={{ color: "#00D4AA", mx: 1 }}>
                Floworg AI
              </Box>
              . For Free
            </Button>
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
                fontSize: "0.9rem",
              }}
            >
              No credit card required. Start in minutes.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default AutomateSuccessSection
