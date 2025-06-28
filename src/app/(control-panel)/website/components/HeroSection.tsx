// import React from 'react';
// import { Box, Typography, Button, Container, Grid } from '@mui/material';
// import { motion } from 'framer-motion';

// const HeroSection: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         pt: 8,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: '2.5rem', md: '3.5rem' },
//                   fontWeight: 700,
//                   color: 'white',
//                   mb: 3,
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Website Builder
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   mb: 4,
//                   fontSize: '1.2rem',
//                   lineHeight: 1.6,
//                 }}
//               >
//                 Create stunning websites with our powerful drag-and-drop builder.
//                 No coding required. Launch your online presence today.
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   sx={{
//                     backgroundColor: '#00D4AA',
//                     '&:hover': {
//                       backgroundColor: '#00B894',
//                     },
//                     borderRadius: 2,
//                     px: 4,
//                     py: 1.5,
//                   }}
//                 >
//                   Start Free Trial
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   sx={{
//                     borderColor: 'white',
//                     color: 'white',
//                     '&:hover': {
//                       borderColor: 'white',
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     },
//                     borderRadius: 2,
//                     px: 4,
//                     py: 1.5,
//                   }}
//                 >
//                   Watch Demo
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   width: '100%',
//                   height: 400,
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: 3,
//                   backdropFilter: 'blur(10px)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   border: '1px solid rgba(255, 255, 255, 0.2)',
//                 }}
//               >
//                 <Typography variant="h6" color="white">
//                   Hero Image Placeholder
//                 </Typography>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;
"use client"

import type React from "react"
import { Box, Typography, Button, Container, Grid, AppBar, Toolbar, Link } from "@mui/material"
import { motion } from "framer-motion"

const HeroSection: React.FC = () => {
  const navItems = ["Home", "Services", "Pricing", "Projects", "Academy", "Blog", "Support"]
  const socialIcons = ["🎵", "📘", "📷", "💬", "📺"]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f2f5 0%, #e8ebf0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navigation Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2C3E50",
          boxShadow: "none",
          py: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialIcons.map((icon, index) => (
              <Box
                key={index}
                sx={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                <Typography sx={{ fontSize: "1rem" }}>{icon}</Typography>
              </Box>
            ))}
          </Box>

          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "white",
              }}
            >
              Flo
              <Box component="span" sx={{ color: "#00D4AA" }}>
                ✓
              </Box>
              org
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.7rem",
                ml: 1,
              }}
            >
              Automate your Success
            </Typography>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#00D4AA",
                  },
                  transition: "color 0.3s ease",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Right side icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "white", fontSize: "0.8rem" }}>🔍 🌐 🍎</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Hero Content */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
                Web Site
                <br />
                Presentation
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  mb: 4,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  maxWidth: "400px",
                }}
              >
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula eget dolor. Aliquam
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#00D4AA",
                    "&:hover": {
                      backgroundColor: "#00B894",
                    },
                    borderRadius: 1,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Start Free trial
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#2C3E50",
                    "&:hover": {
                      backgroundColor: "#1A252F",
                    },
                    borderRadius: 1,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Watch Demo
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: 500,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Main Dashboard Mockup */}
                <Box
                  sx={{
                    position: "absolute",
                    width: 400,
                    height: 280,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                    transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                    zIndex: 3,
                    overflow: "hidden",
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      height: 40,
                      background: "linear-gradient(90deg, #00D4AA, #4ECDC4)",
                      display: "flex",
                      alignItems: "center",
                      px: 2,
                      gap: 1,
                    }}
                  >
                    <Box sx={{ width: 8, height: 8, backgroundColor: "white", borderRadius: "50%", opacity: 0.8 }} />
                    <Typography sx={{ color: "white", fontSize: "1.2rem", fontWeight: 600 }}>
                      We have a Dream
                    </Typography>
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontSize: "0.9rem", color: "#2C3E50", mb: 2, fontWeight: 600 }}>
                      Dashboard Overview
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      <Box sx={{ width: 60, height: 8, backgroundColor: "#00D4AA", borderRadius: 1 }} />
                      <Box sx={{ width: 40, height: 8, backgroundColor: "#4ECDC4", borderRadius: 1 }} />
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 60,
                          backgroundColor: "#F8F9FA",
                          borderRadius: 1,
                          border: "1px solid #E5E7EB",
                        }}
                      />
                      <Box
                        sx={{
                          width: 80,
                          height: 60,
                          backgroundColor: "#F8F9FA",
                          borderRadius: 1,
                          border: "1px solid #E5E7EB",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Secondary Mockup - Right */}
                <Box
                  sx={{
                    position: "absolute",
                    right: -50,
                    top: 50,
                    width: 300,
                    height: 200,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                    transform: "perspective(1000px) rotateY(-25deg) rotateX(10deg)",
                    zIndex: 2,
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontSize: "0.8rem", color: "#2C3E50", mb: 2, fontWeight: 600 }}>
                      Analytics Dashboard
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {[1, 2, 3].map((item) => (
                        <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box
                            sx={{
                              width: 30,
                              height: 30,
                              backgroundColor: "#00D4AA",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography sx={{ color: "white", fontSize: "0.7rem" }}>📊</Typography>
                          </Box>
                          <Box sx={{ flex: 1, height: 4, backgroundColor: "#E5E7EB", borderRadius: 1 }} />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Third Mockup - Left */}
                <Box
                  sx={{
                    position: "absolute",
                    left: -30,
                    bottom: 30,
                    width: 250,
                    height: 160,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                    transform: "perspective(1000px) rotateY(20deg) rotateX(-5deg)",
                    zIndex: 1,
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontSize: "0.7rem", color: "#2C3E50", mb: 1, fontWeight: 600 }}>
                      User Interface
                    </Typography>
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                      {[1, 2, 3, 4].map((item) => (
                        <Box
                          key={item}
                          sx={{
                            height: 30,
                            backgroundColor: "#F8F9FA",
                            borderRadius: 1,
                            border: "1px solid #E5E7EB",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    backgroundColor: "#4ECDC4",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 4,
                  }}
                >
                  <Typography sx={{ color: "white", fontSize: "1.5rem" }}>📈</Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 100,
                    width: 40,
                    height: 40,
                    backgroundColor: "#00D4AA",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 4,
                  }}
                >
                  <Typography sx={{ color: "white", fontSize: "1rem" }}>💡</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
