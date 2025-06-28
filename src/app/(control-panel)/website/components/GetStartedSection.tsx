// import React from 'react';
// import { Box, Typography, Container, Button, Grid } from '@mui/material';
// import { RocketLaunch, TrendingUp } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const GetStartedSection: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={8}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   fontWeight: 600,
//                 }}
//               >
//                 Get Started with UpSoft Today & Take Your
//                 Business to New Heights
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 4,
//                   fontSize: '1.1rem',
//                   lineHeight: 1.6,
//                   opacity: 0.9,
//                 }}
//               >
//                 Transform your business operations with our comprehensive suite of tools
//                 and services. Join thousands of satisfied customers who have already
//                 revolutionized their workflow.
//               </Typography>
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<RocketLaunch />}
//                 sx={{
//                   backgroundColor: '#00D4AA',
//                   '&:hover': {
//                     backgroundColor: '#00B894',
//                   },
//                   borderRadius: 3,
//                   px: 4,
//                   py: 2,
//                   fontSize: '1.1rem',
//                   fontWeight: 600,
//                 }}
//               >
//                 Get Started
//               </Button>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Box
//                 sx={{
//                   textAlign: 'center',
//                   p: 4,
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: 4,
//                   backdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(255, 255, 255, 0.2)',
//                 }}
//               >
//                 <TrendingUp sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
//                 <Typography
//                   variant="h4"
//                   sx={{ mb: 2, fontWeight: 600 }}
//                 >
//                   10,000+
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ opacity: 0.9 }}
//                 >
//                   Happy Customers
//                 </Typography>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
      
//       {/* Background decoration */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: -50,
//           right: -50,
//           width: 200,
//           height: 200,
//           borderRadius: '50%',
//           background: 'rgba(255, 255, 255, 0.1)',
//           opacity: 0.5,
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: -30,
//           left: -30,
//           width: 150,
//           height: 150,
//           borderRadius: '50%',
//           background: 'rgba(255, 255, 255, 0.1)',
//           opacity: 0.3,
//         }}
//       />
//     </Box>
//   );
// };

// export default GetStartedSection;
"use client"

import type React from "react"
import { Box, Typography, Container, Button } from "@mui/material"
import { motion } from "framer-motion"

const GetStartedSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#E8E5FF",
        position: "relative",
        overflow: "hidden",
        minHeight: "400px",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: "#2C3E50",
                lineHeight: 1.3,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Get Started with UpSoft Today & Take Your Business to New Heights
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#6B7280",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Ready to take your business to the next level? UpSoft provides powerful automation, advanced analytics,
              and seamless cloud solutions to help you scale faster, work smarter.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#4A90E2",
                "&:hover": {
                  backgroundColor: "#3B82F6",
                },
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>

        {/* Left Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 280,
              height: 200,
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              p: 3,
              transform: "rotate(-5deg)",
            }}
          >
            {/* Dashboard Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box sx={{ width: 8, height: 8, backgroundColor: "#FF5F56", borderRadius: "50%" }} />
              <Box sx={{ width: 8, height: 8, backgroundColor: "#FFBD2E", borderRadius: "50%" }} />
              <Box sx={{ width: 8, height: 8, backgroundColor: "#27CA3F", borderRadius: "50%" }} />
            </Box>

            {/* Chart Area */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "#6B7280", mb: 1, fontSize: "0.75rem" }}>
                Wade Warren
              </Typography>
              <Typography variant="caption" sx={{ color: "#9CA3AF", fontSize: "0.7rem" }}>
                CEO, Co-Founder
              </Typography>
            </Box>

            {/* Mock Chart */}
            <Box sx={{ height: 80, backgroundColor: "#F3F4F6", borderRadius: 2, position: "relative", mb: 2 }}>
              <svg width="100%" height="100%" viewBox="0 0 240 80">
                <path d="M 20 60 Q 60 40 100 45 T 180 35 T 220 25" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <circle cx="220" cy="25" r="3" fill="#4A90E2" />
              </svg>
            </Box>

            {/* Action Button */}
            <Box
              sx={{
                backgroundColor: "#FF6B35",
                color: "white",
                px: 2,
                py: 0.5,
                borderRadius: 1,
                fontSize: "0.7rem",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Download
            </Box>
          </Box>
        </motion.div>

        {/* Right Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            right: "5%",
            top: "30%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 200,
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              p: 2,
              transform: "rotate(5deg)",
            }}
          >
            {/* Profile Card 1 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                backgroundColor: "#F8F9FA",
                borderRadius: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#E91E63",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                👤
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.8rem", color: "#2C3E50" }}>
                  $981.00
                </Typography>
                <Typography variant="caption" sx={{ color: "#6B7280", fontSize: "0.7rem" }}>
                  +8.2%
                </Typography>
              </Box>
            </Box>

            {/* Profile Card 2 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                backgroundColor: "#F8F9FA",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#4A90E2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                👤
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.8rem", color: "#2C3E50" }}>
                  Thomas Edward
                </Typography>
                <Typography variant="caption" sx={{ color: "#6B7280", fontSize: "0.7rem" }}>
                  Manager
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Background Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(74, 144, 226, 0.1)",
            opacity: 0.5,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "25%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.1)",
            opacity: 0.3,
          }}
        />
      </Container>
    </Box>
  )
}

export default GetStartedSection
