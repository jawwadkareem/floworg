// import React from 'react';
// import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
// import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Footer: React.FC = () => {
//   const footerSections = [
//     {
//       title: 'Company',
//       links: ['About Us', 'Our Team', 'Careers', 'Contact', 'Blog'],
//     },
//     {
//       title: 'Products',
//       links: ['Features', 'Pricing', 'Integrations', 'API', 'Documentation'],
//     },
//     {
//       title: 'Resources',
//       links: ['Help Center', 'Tutorials', 'Webinars', 'Case Studies', 'Community'],
//     },
//     {
//       title: 'Legal',
//       links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
//     },
//   ];

//   const socialLinks = [
//     { icon: <Facebook />, url: '#' },
//     { icon: <Twitter />, url: '#' },
//     { icon: <LinkedIn />, url: '#' },
//     { icon: <Instagram />, url: '#' },
//     { icon: <YouTube />, url: '#' },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#1a1a2e',
//         color: 'white',
//         pt: 8,
//         pb: 4,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 700,
//                   background: 'linear-gradient(45deg, #00D4AA, #4ECDC4)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 Floworg
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 3,
//                   color: 'rgba(255, 255, 255, 0.8)',
//                   lineHeight: 1.6,
//                 }}
//               >
//                 Empowering businesses with intelligent automation and seamless integrations.
//                 Transform your workflow and scale your operations with our comprehensive platform.
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 1 }}>
//                 {socialLinks.map((social, index) => (
//                   <IconButton
//                     key={index}
//                     href={social.url}
//                     sx={{
//                       color: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         color: '#00D4AA',
//                         backgroundColor: 'rgba(0, 212, 170, 0.1)',
//                       },
//                     }}
//                   >
//                     {social.icon}
//                   </IconButton>
//                 ))}
//               </Box>
//             </motion.div>
//           </Grid>

//           {footerSections.map((section, index) => (
//             <Grid item xs={12} sm={6} md={2} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 2,
//                     fontWeight: 600,
//                     color: '#00D4AA',
//                   }}
//                 >
//                   {section.title}
//                 </Typography>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                   {section.links.map((link, linkIndex) => (
//                     <Link
//                       key={linkIndex}
//                       href="#"
//                       sx={{
//                         color: 'rgba(255, 255, 255, 0.7)',
//                         textDecoration: 'none',
//                         fontSize: '0.9rem',
//                         '&:hover': {
//                           color: '#00D4AA',
//                         },
//                       }}
//                     >
//                       {link}
//                     </Link>
//                   ))}
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <Box
//           sx={{
//             borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//             mt: 6,
//             pt: 4,
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flexDirection: { xs: 'column', md: 'row' },
//             gap: 2,
//           }}
//         >
//           <Typography
//             variant="body2"
//             sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
//           >
//             © 2024 Floworg. All rights reserved.
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
//           >
//             Made with ❤️ for businesses worldwide
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Link, IconButton, TextField, Button } from "@mui/material"
import { motion } from "framer-motion"

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Floworg",
      links: [
        "Home",
        "About",
        "Timline",
        "Contact Us",
        "Careers",
        "Tenders",
        "Partners Area",
        "Employee Area",
        "Investor Relations",
        "Show more",
      ],
    },
    {
      title: "Explore",
      links: [
        "Pricing",
        "Book a Demo",
        "Floworg ProBuilder",
        "Floworg Consulting",
        "Projects",
        "Academy",
        "Blog & News",
        "Newsletter",
        "Loyalty Programs",
        "Show more",
      ],
    },
    {
      title: "Resources",
      links: [
        "Support",
        "Developers",
        "Integration",
        "Documentation & API",
        "Forum & Community",
        "Website Terms",
        "Refund Policy",
        "Privacy Policy",
        "Accessibility Statement",
        "Show more",
      ],
    },
    {
      title: "Services",
      links: [
        "Floworg OmniAI 360",
        "Floworg SYS 360 - All In One",
        "Automate your Business (RPA)",
        "Implementation of Systems & CRM",
        "Dashboards, Smart Excel & BI",
        "Device Management & Configurations",
        "Product Management & Strategy",
        "Projects Management",
        "Digital, Branding & Media",
        "Show more",
      ],
    },
  ]

  return (
    <Box
      sx={{
        backgroundColor: "#2C3E50",
        color: "white",
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section - Newsletter Signup */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "#00D4AA",
                }}
              >
                Exclusive Updates
              </Typography>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Enter your Name"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#2C3E50",
                      fontSize: "0.9rem",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#2C3E50",
                      fontSize: "0.9rem",
                    },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#00D4AA",
                    "&:hover": { backgroundColor: "#00B894" },
                    borderRadius: 25,
                    py: 1.5,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Agree to updates
                </Button>
              </Box>

              {/* Logo Section */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Flo
                  <Box component="span" sx={{ color: "#00D4AA" }}>
                    ✓
                  </Box>
                  org
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.9rem",
                  }}
                >
                  Automate your Success
                </Typography>
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  🎵
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  💼
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  📘
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  📷
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  💬
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": { color: "#00D4AA" },
                    fontSize: "1.2rem",
                  }}
                >
                  📺
                </IconButton>
              </Box>

              {/* App Store Badges */}
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    📱 Google Play
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                    🍎 App Store
                  </Typography>
                </Box>
              </Box>

              {/* Copyright */}
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.8rem",
                }}
              >
                © Floworg LTD 2024
                <br />
                All rights reserved
              </Typography>
            </motion.div>
          </Grid>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <Grid item xs={12} sm={6} md={2.25} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: "#00D4AA",
                    fontSize: "1.1rem",
                  }}
                >
                  {column.title}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {column.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        "&:hover": {
                          color: "#00D4AA",
                        },
                        ...(link === "Show more" && {
                          color: "#00D4AA",
                          fontWeight: 500,
                        }),
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
