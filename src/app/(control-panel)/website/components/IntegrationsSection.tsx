// import React from 'react';
// import { Box, Typography, Container, Grid, Avatar, Button } from '@mui/material';
// import { motion } from 'framer-motion';

// const IntegrationsSection: React.FC = () => {
//   const integrations = Array.from({ length: 20 }, (_, i) => ({
//     id: i + 1,
//     name: `Integration ${i + 1}`,
//     color: `hsl(${(i * 137.5) % 360}, 70%, 60%)`,
//     icon: String.fromCharCode(65 + (i % 26)),
//   }));

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
//             variant="h3"
//             align="center"
//             sx={{
//               mb: 2,
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 600,
//               color: '#333',
//             }}
//           >
//             Over 3,000 Leading Integrations
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 2,
//               color: '#00D4AA',
//               fontWeight: 600,
//             }}
//           >
//             One-Click To Integration with
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 6,
//               color: '#333',
//               fontWeight: 600,
//             }}
//           >
//             Favorite Apps and Tools
//           </Typography>
//         </motion.div>

//         <Box
//           sx={{
//             position: 'relative',
//             height: 400,
//             overflow: 'hidden',
//             borderRadius: 3,
//             backgroundColor: '#f8f9fa',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             mb: 6,
//           }}
//         >
//           {integrations.map((integration, index) => {
//             const angle = (index / integrations.length) * 2 * Math.PI;
//             const radius = 120 + Math.sin(index * 0.5) * 40;
//             const x = Math.cos(angle) * radius;
//             const y = Math.sin(angle) * radius;

//             return (
//               <motion.div
//                 key={integration.id}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 style={{
//                   position: 'absolute',
//                   left: '50%',
//                   top: '50%',
//                   transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                 }}
//                 whileHover={{ scale: 1.2, zIndex: 10 }}
//               >
//                 <Avatar
//                   sx={{
//                     width: 50,
//                     height: 50,
//                     backgroundColor: integration.color,
//                     fontSize: '1.2rem',
//                     fontWeight: 'bold',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: `0 8px 20px ${integration.color}60`,
//                     },
//                   }}
//                 >
//                   {integration.icon}
//                 </Avatar>
//               </motion.div>
//             );
//           })}
//         </Box>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center' }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: '#00D4AA',
//                 '&:hover': {
//                   backgroundColor: '#00B894',
//                 },
//                 borderRadius: 2,
//                 px: 4,
//                 py: 1.5,
//               }}
//             >
//               View All Integrations
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default IntegrationsSection;

"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { Box, Typography, Container, Grid, Button } from "@mui/material"
import { motion } from "framer-motion"

const IntegrationsSection: React.FC = () => {
  const orbitRef1 = useRef<HTMLDivElement>(null)
  const orbitRef2 = useRef<HTMLDivElement>(null)
  const orbitRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateOrbit = (ref: React.RefObject<HTMLDivElement>, duration: number) => {
      if (ref.current) {
        ref.current.style.animation = `rotateArc ${duration}s linear infinite`
      }
    }

    // Add CSS animation for semi-circular movement
    const style = document.createElement("style")
    style.textContent = `
      @keyframes rotateArc {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(style)

    animateOrbit(orbitRef1, 30) // Outer arc - slowest
    animateOrbit(orbitRef2, 25) // Middle arc
    animateOrbit(orbitRef3, 20) // Inner arc - fastest

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  const IconComponent = ({ icon, color, name }: { icon: string; color: string; name: string }) => (
    <Box
      sx={{
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        border: `2px solid ${color}`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: `0 6px 20px ${color}40`,
        },
      }}
      title={name}
    >
      {icon}
    </Box>
  )

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 6 }}>
          {/* Left Side - Headings */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                Over 9,000 Leading Integrations
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 0,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#6C757D",
                  lineHeight: 1.3,
                }}
              >
                One-Click To Integration with Favorite Apps and Tools
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Side - Description and Button */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#6C757D",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                  mt: 2,
                }}
              >
                Achieve seamless integration with your favorite apps and tools through a single click, enhancing
                efficiency and functionality of our SaaS-based project.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#00D4AA",
                  "&:hover": {
                    backgroundColor: "#00B894",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(0, 212, 170, 0.3)",
                  },
                  borderRadius: 25,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(0, 212, 170, 0.2)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
              >
                Start Your Automation Journey
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        {/* Semi-circular Arcs with Moving Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              height: 450,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {/* SVG for semi-circular arcs */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
              viewBox="0 0 800 450"
              fill="none"
            >
              {/* Outer semi-circular arc */}
              <path
                d="M 100 300 A 300 300 0 0 1 700 300"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              {/* Middle semi-circular arc */}
              <path
                d="M 150 280 A 250 250 0 0 1 650 280"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              {/* Inner semi-circular arc */}
              <path
                d="M 200 260 A 200 200 0 0 1 600 260"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Outer Arc Moving Icons */}
            <Box
              ref={orbitRef1}
              sx={{
                position: "absolute",
                width: 600,
                height: 300,
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                transformOrigin: "50% 100%",
              }}
            >
              {/* Google */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 0px), calc(0% + -300px))",
                }}
              >
                <IconComponent icon="🔍" color="#4285F4" name="Google" />
              </Box>
              {/* Figma */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 212px), calc(0% + -212px))",
                }}
              >
                <IconComponent icon="🎨" color="#F24E1E" name="Figma" />
              </Box>
              {/* Webflow */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 260px), calc(0% + -100px))",
                }}
              >
                <IconComponent icon="W" color="#4353FF" name="Webflow" />
              </Box>
              {/* ClickUp */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + -260px), calc(0% + -100px))",
                }}
              >
                <IconComponent icon="📋" color="#7B68EE" name="ClickUp" />
              </Box>
              {/* Discord */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + -212px), calc(0% + -212px))",
                }}
              >
                <IconComponent icon="🎮" color="#5865F2" name="Discord" />
              </Box>
            </Box>

            {/* Middle Arc Moving Icons */}
            <Box
              ref={orbitRef2}
              sx={{
                position: "absolute",
                width: 500,
                height: 250,
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                transformOrigin: "50% 100%",
              }}
            >
              {/* Slack */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + -177px), calc(0% + -177px))",
                }}
              >
                <IconComponent icon="💬" color="#4A154B" name="Slack" />
              </Box>
              {/* Trello */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 0px), calc(0% + -250px))",
                }}
              >
                <IconComponent icon="📊" color="#0079BF" name="Trello" />
              </Box>
              {/* Zoom */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 177px), calc(0% + -177px))",
                }}
              >
                <IconComponent icon="📹" color="#2D8CFF" name="Zoom" />
              </Box>
              {/* Dropbox */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 220px), calc(0% + -80px))",
                }}
              >
                <IconComponent icon="📦" color="#0061FF" name="Dropbox" />
              </Box>
            </Box>

            {/* Inner Arc Moving Icons */}
            <Box
              ref={orbitRef3}
              sx={{
                position: "absolute",
                width: 400,
                height: 200,
                top: 40,
                left: "50%",
                transform: "translateX(-50%)",
                transformOrigin: "50% 100%",
              }}
            >
              {/* Twitter */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + -141px), calc(0% + -141px))",
                }}
              >
                <IconComponent icon="🐦" color="#1DA1F2" name="Twitter" />
              </Box>
              {/* Instagram */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 0px), calc(0% + -200px))",
                }}
              >
                <IconComponent icon="📷" color="#E4405F" name="Instagram" />
              </Box>
              {/* LinkedIn */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  transform: "translate(calc(-50% + 141px), calc(0% + -141px))",
                }}
              >
                <IconComponent icon="💼" color="#0A66C2" name="LinkedIn" />
              </Box>
            </Box>

            {/* Center Buttons - Positioned below the arcs */}
            <Box
              sx={{
                position: "absolute",
                bottom: 50,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 2,
                zIndex: 10,
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#4285F4",
                  "&:hover": { backgroundColor: "#3367D6" },
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#4285F4",
                  "&:hover": { backgroundColor: "#3367D6" },
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default IntegrationsSection
