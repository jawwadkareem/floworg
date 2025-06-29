// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
// import { Psychology, Translate, Analytics } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const SmartAISection: React.FC = () => {
//   const aiFeatures = [
//     {
//       icon: <Psychology sx={{ fontSize: 40, color: '#4285F4' }} />,
//       title: 'Multi Language Support',
//       description: 'Support for multiple languages with intelligent translation and localization capabilities.',
//     },
//     {
//       icon: <Translate sx={{ fontSize: 40, color: '#34A853' }} />,
//       title: 'AI Training Center',
//       description: 'Advanced AI training capabilities with machine learning algorithms for better performance.',
//     },
//     {
//       icon: <Analytics sx={{ fontSize: 40, color: '#EA4335' }} />,
//       title: 'Personal Customer Insights',
//       description: 'Deep customer analytics and insights powered by artificial intelligence and data science.',
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
//             variant="h3"
//             align="center"
//             sx={{
//               mb: 2,
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 600,
//               color: '#333',
//             }}
//           >
//             Excellent Response with{' '}
//             <span style={{ color: '#4285F4' }}>Smart AI</span>
//           </Typography>
//           <Typography
//             variant="body1"
//             align="center"
//             sx={{
//               mb: 6,
//               color: 'text.secondary',
//               maxWidth: '600px',
//               mx: 'auto',
//               lineHeight: 1.6,
//             }}
//           >
//             Our intelligent AI system provides excellent responses and automates complex workflows
//             with precision and efficiency.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4}>
//           {aiFeatures.map((feature, index) => (
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
//                     borderRadius: 3,
//                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                     <Box sx={{ mb: 3 }}>
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ mb: 2, fontWeight: 600 }}
//                     >
//                       {feature.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{ lineHeight: 1.6, mb: 3 }}
//                     >
//                       {feature.description}
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
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mt: 6 }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: '#4285F4',
//                 '&:hover': {
//                   backgroundColor: '#3367D6',
//                 },
//                 borderRadius: 2,
//                 px: 4,
//                 py: 1.5,
//               }}
//             >
//               Explore Features
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default SmartAISection;
"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material"
import { motion } from "framer-motion"

const SmartAISection: React.FC = () => {
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
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 6 }}>
            <Box sx={{ flex: 1 }}>
              {/* Features Tag */}
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "#E3F2FD",
                  color: "#1976D2",
                  px: 3,
                  py: 1,
                  borderRadius: 20,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  mb: 3,
                }}
              >
                Features
              </Box>

              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  color: "#2C3E50",
                  lineHeight: 1.2,
                }}
              >
                Excellent Response with{" "}
                <Box component="span" sx={{ color: "#4285F4" }}>
                  Smart AI
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6C757D",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                Refine chatbot intelligence through continuous learning and customization options
              </Typography>
            </Box>

            {/* Explore Features Button */}
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#4285F4",
                "&:hover": {
                  backgroundColor: "#3367D6",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(66, 133, 244, 0.3)",
                },
                borderRadius: 25,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
                transition: "all 0.3s ease",
                textTransform: "none",
                mt: 4,
              }}
            >
              Explore Features
            </Button>
          </Box>
        </motion.div>

        {/* Feature Cards */}
        <Grid container spacing={3}>
          {/* Multi-Language Support */}
          <Grid item xs={12} md={4} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #E0E7FF",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Chat Interface Mockup */}
                  <Box
                    sx={{
                      mb: 3,
                      p: 3,
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      border: "1px solid #e9ecef",
                      position: "relative",
                    }}
                  >
                    {/* AI Icon */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        backgroundColor: "#4285F4",
                        borderRadius: 2,
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ color: "white", fontSize: "0.75rem", fontWeight: 600 }}>AI</Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: "#2C3E50", mb: 1, fontWeight: 500 }}>
                      Estimado equipo:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.8rem", lineHeight: 1.4, mb: 2 }}>
                      No puedo iniciar sesión en mi panel de control para consultar el estado de mi pedido. ¿Podrían
                      informarme cuál es el problema?
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
                      Gracias Por mensaje
                    </Typography>
                    <Box sx={{ textAlign: "right", mt: 1 }}>
                      <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
                        13:45
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#4285F4",
                      fontSize: "1.25rem",
                    }}
                  >
                    Multi-Language Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
                    Connect with global users with auto-translates messages, ensuring smooth conversations in multiple
                    languages.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* AI Training Center */}
          <Grid item xs={12} md={4} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #E0E7FF",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Training Interface Mockup */}
                  <Box
                    sx={{
                      mb: 3,
                      p: 3,
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#2C3E50", mb: 2, fontSize: "1rem", fontWeight: 600 }}>
                      AI Training Center
                    </Typography>
                    <Box sx={{ space: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          py: 1,
                          borderBottom: "1px solid #e9ecef",
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "#2C3E50", fontSize: "0.85rem" }}>
                          AI Knowledgebase Data
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          py: 1,
                          borderBottom: "1px solid #e9ecef",
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.85rem" }}>
                          Website resources
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          py: 1,
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.85rem" }}>
                          File resources
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#4285F4",
                      fontSize: "1.25rem",
                    }}
                  >
                    AI Training Center
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
                    Continuously improve your chatbot's intelligence, dedicated space to train responses for better
                    interactions.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Personal Customer Insights */}
          <Grid item xs={12} md={4} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #E0E7FF",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Customer Insights Mockup */}
                  <Box
                    sx={{
                      mb: 3,
                      p: 3,
                      backgroundColor: "#f8f9fa",
                      borderRadius: 2,
                      border: "1px solid #e9ecef",
                    }}
                  >
                    {/* User Profile */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: "#E1BEE7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                        }}
                      >
                        <Typography sx={{ color: "#8E24AA", fontWeight: 600, fontSize: "0.9rem" }}>LA</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 600, fontSize: "0.9rem" }}>
                          Lucy Andriana
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" sx={{ color: "#2C3E50", mb: 1, fontWeight: 500 }}>
                      Chat Activity
                    </Typography>
                    <Box sx={{ backgroundColor: "#e9ecef", borderRadius: 1, p: 2, mb: 1 }}>
                      <Typography variant="caption" sx={{ color: "#6C757D" }}>
                        Recent interactions and engagement metrics
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#4285F4",
                      fontSize: "1.25rem",
                    }}
                  >
                    Personal Customer Insights
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
                    Gain valuable insights with AI that learns customer preferences, providing engaging support
                    experience every time.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SmartAISection
