// import React, { useState } from 'react';
// import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';
// import { Email, Send } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const NewsletterSection: React.FC = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//     console.log('Newsletter subscription:', email);
//     setEmail('');
//   };

//   return (
//     <Box
//       sx={{
//         py: 8,
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         color: 'white',
//       }}
//     >
//       <Container maxWidth="md">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 6 }}>
//             <Email sx={{ fontSize: 60, mb: 2, opacity: 0.8 }} />
//             <Typography
//               variant="h3"
//               sx={{
//                 mb: 2,
//                 fontSize: { xs: '2rem', md: '2.5rem' },
//                 fontWeight: 600,
//               }}
//             >
//               Subscribe to our newsletter for
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 mb: 3,
//                 fontSize: { xs: '1.5rem', md: '2rem' },
//                 fontWeight: 600,
//                 color: '#00D4AA',
//               }}
//             >
//               the latest updates
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 opacity: 0.9,
//                 fontSize: '1.1rem',
//                 maxWidth: 600,
//                 mx: 'auto',
//               }}
//             >
//               Stay informed about our latest features, updates, and exclusive offers.
//               Join our community of satisfied customers.
//             </Typography>
//           </Box>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//               display: 'flex',
//               gap: 2,
//               maxWidth: 500,
//               mx: 'auto',
//               flexDirection: { xs: 'column', sm: 'row' },
//             }}
//           >
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                 borderRadius: 2,
//                 '& .MuiOutlinedInput-root': {
//                   color: 'white',
//                   '& fieldset': {
//                     borderColor: 'rgba(255, 255, 255, 0.3)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'rgba(255, 255, 255, 0.5)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#00D4AA',
//                   },
//                 },
//                 '& .MuiInputBase-input::placeholder': {
//                   color: 'rgba(255, 255, 255, 0.7)',
//                 },
//               }}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               endIcon={<Send />}
//               sx={{
//                 backgroundColor: '#00D4AA',
//                 '&:hover': {
//                   backgroundColor: '#00B894',
//                 },
//                 borderRadius: 2,
//                 px: 4,
//                 minWidth: { xs: 'auto', sm: 150 },
//               }}
//             >
//               Subscribe
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default NewsletterSection;
"use client"

import type React from "react"
import { useState } from "react"
import { Box, Typography, Container, TextField, Button, Grid, Link } from "@mui/material"
import { Phone, Email, LocationOn } from "@mui/icons-material"

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#f5f7fa",
        color: "#2C3E50",
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section with Badges and Newsletter */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          {/* Compliance Badges */}
          <Grid item xs={12} md={3} {...({} as any)}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {/* HIPAA Badge */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#4A90E2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                }}
              >
                <Typography sx={{ fontSize: "0.6rem", textAlign: "center" }}>HIPAA</Typography>
              </Box>

              {/* GDPR Badge */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#1E3A8A",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  position: "relative",
                }}
              >
                {/* EU Stars */}
                <Box sx={{ position: "absolute", top: 8 }}>
                  <Typography sx={{ fontSize: "0.5rem", color: "#FFD700" }}>★★★</Typography>
                </Box>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, mb: 0.5 }}>🔒</Typography>
                <Typography sx={{ fontSize: "0.6rem", fontWeight: 600 }}>GDPR</Typography>
                <Box sx={{ position: "absolute", bottom: 8 }}>
                  <Typography sx={{ fontSize: "0.5rem", color: "#FFD700" }}>★★★</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Text */}
          <Grid item xs={12} md={5} {...({} as any)}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 600,
                color: "#2C3E50",
                lineHeight: 1.3,
              }}
            >
              Subscribe to our newsletter for
              <br />
              the latest updates
            </Typography>
          </Grid>

          {/* Email Input */}
          <Grid item xs={12} md={4} {...({} as any)}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#D1D5DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4A90E2",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#4A90E2",
                  "&:hover": {
                    backgroundColor: "#3B82F6",
                  },
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  minWidth: 100,
                }}
              >
                Send ▷
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Floworg Logo Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#2C3E50",
              mb: 1,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Flo
            <Box component="span" sx={{ color: "#00D4AA" }}>
              ✓
            </Box>
            org
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6B7280",
              fontWeight: 500,
            }}
          >
            Automate your Success
          </Typography>
        </Box>

        {/* Bottom Links Section */}
        <Grid container spacing={4}>
          {/* Contact */}
          <Grid item xs={12} sm={6} md={3} {...({} as any)}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#2C3E50",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 20, color: "#4A90E2" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  (316) 555-0116
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 20, color: "#4A90E2" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  info@example.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, color: "#4A90E2" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  31 Brandy Way, Sutton
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Link */}
          <Grid item xs={12} sm={6} md={2} {...({} as any)}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#2C3E50",
              }}
            >
              Quick Link
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Web App", "Mobile App", "Startup", "Project"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  sx={{
                    color: "#6B7280",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#4A90E2" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* More Link */}
          <Grid item xs={12} sm={6} md={2} {...({} as any)}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#2C3E50",
              }}
            >
              More Link
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["SEO Agency", "Mobile App", "Startup", "Marketing Tools"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  sx={{
                    color: "#6B7280",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#4A90E2" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* UpSoft Section */}
          <Grid item xs={12} sm={6} md={5} {...({} as any)}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#4A90E2",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ color: "white", fontSize: "1rem", fontWeight: 600 }}>U</Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#2C3E50",
                }}
              >
                UpSoft
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              UpSoft is a cutting-edge Software, SaaS & Startup platform that streamlines operations, automates
              workflows.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {["📘", "📷", "🌐", "📌"].map((icon, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 36,
                    height: 36,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #E5E7EB",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1rem" }}>{icon}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box
          sx={{
            borderTop: "1px solid #E5E7EB",
            mt: 6,
            pt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#6B7280" }}>
            Copyright©2025{" "}
            <Box component="span" sx={{ color: "#F97316" }}>
              Upsoft.
            </Box>{" "}
            All rights reserved
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Help & Support", "Privacy policy", "Terms & Conditions"].map((link) => (
              <Link
                key={link}
                href="#"
                sx={{
                  color: "#6B7280",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#4A90E2" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NewsletterSection
