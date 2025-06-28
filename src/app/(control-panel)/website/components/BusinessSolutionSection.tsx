"use client"

import type React from "react"
import { Box, Typography, Container, Grid, Link } from "@mui/material"
import { motion } from "framer-motion"

const BusinessSolutionSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "white", borderTop: "1px solid #E5E7EB" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Side - Main Content */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 700,
                  color: "#2C3E50",
                  lineHeight: 1.3,
                }}
              >
                Need a Solution Tailored to Your Business?
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2C3E50",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    mb: 1,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    At Floworg 360, we give you three smart ways to get started
                  </Box>{" "}
                  – based on what works best for you:
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2C3E50",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    mb: 1,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
                    Schedule a 1-on-1 consultation
                  </Box>{" "}
                  – Our experts will help you identify your needs, define a clear roadmap, and implement the right
                  solutions for your business.
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2C3E50",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    mb: 1,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
                    Watch step-by-step tutorials
                  </Box>{" "}
                  – Learn at your own pace and implement automations on your own, no coding required.
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2C3E50",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
                    Explore ready-made templates
                  </Box>{" "}
                  – Choose from proven automation flows and{" "}
                  <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
                    customize them to fit your needs.
                  </Box>
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Navigation Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Link
                  href="#"
                  sx={{
                    color: "#2C3E50",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#4285F4",
                      textDecoration: "underline",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Watch Tutorials
                </Link>

                <Link
                  href="#"
                  sx={{
                    color: "#2C3E50",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#4285F4",
                      textDecoration: "underline",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Browse Templates & Mini Apps
                </Link>

                <Link
                  href="#"
                  sx={{
                    color: "#2C3E50",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#4285F4",
                      textDecoration: "underline",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Schedule a Consultation
                </Link>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BusinessSolutionSection
