
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Link, IconButton, TextField, Button } from "@mui/material"
// import { motion } from "framer-motion"

// const Footer: React.FC = () => {
//   const footerColumns = [
//     {
//       title: "Floworg",
//       links: [
//         "Home",
//         "About",
//         "Timline",
//         "Contact Us",
//         "Careers",
//         "Tenders",
//         "Partners Area",
//         "Employee Area",
//         "Investor Relations",
//         "Show more",
//       ],
//     },
//     {
//       title: "Explore",
//       links: [
//         "Pricing",
//         "Book a Demo",
//         "Floworg ProBuilder",
//         "Floworg Consulting",
//         "Projects",
//         "Academy",
//         "Blog & News",
//         "Newsletter",
//         "Loyalty Programs",
//         "Show more",
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         "Support",
//         "Developers",
//         "Integration",
//         "Documentation & API",
//         "Forum & Community",
//         "Website Terms",
//         "Refund Policy",
//         "Privacy Policy",
//         "Accessibility Statement",
//         "Show more",
//       ],
//     },
//     {
//       title: "Services",
//       links: [
//         "Floworg OmniAI 360",
//         "Floworg SYS 360 - All In One",
//         "Automate your Business (RPA)",
//         "Implementation of Systems & CRM",
//         "Dashboards, Smart Excel & BI",
//         "Device Management & Configurations",
//         "Product Management & Strategy",
//         "Projects Management",
//         "Digital, Branding & Media",
//         "Show more",
//       ],
//     },
//   ]

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#2C3E50",
//         color: "white",
//         pt: 6,
//         pb: 4,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Left Section - Newsletter Signup */}
//           <Grid item xs={12} md={3} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   fontWeight: 600,
//                   color: "#00D4AA",
//                 }}
//               >
//                 Exclusive Updates
//               </Typography>

//               <Box sx={{ mb: 3 }}>
//                 <TextField
//                   fullWidth
//                   placeholder="Enter your Name"
//                   variant="outlined"
//                   sx={{
//                     mb: 2,
//                     "& .MuiOutlinedInput-root": {
//                       backgroundColor: "white",
//                       borderRadius: 2,
//                       "& fieldset": {
//                         border: "none",
//                       },
//                     },
//                     "& .MuiInputBase-input": {
//                       color: "#2C3E50",
//                       fontSize: "0.9rem",
//                     },
//                   }}
//                 />
//                 <TextField
//                   fullWidth
//                   placeholder="Enter your email"
//                   variant="outlined"
//                   sx={{
//                     mb: 2,
//                     "& .MuiOutlinedInput-root": {
//                       backgroundColor: "white",
//                       borderRadius: 2,
//                       "& fieldset": {
//                         border: "none",
//                       },
//                     },
//                     "& .MuiInputBase-input": {
//                       color: "#2C3E50",
//                       fontSize: "0.9rem",
//                     },
//                   }}
//                 />
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#00D4AA",
//                     "&:hover": { backgroundColor: "#00B894" },
//                     borderRadius: 25,
//                     py: 1.5,
//                     fontSize: "0.9rem",
//                     fontWeight: 600,
//                     textTransform: "none",
//                   }}
//                 >
//                   Agree to updates
//                 </Button>
//               </Box>

//               {/* Logo Section */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: 700,
//                     color: "white",
//                     mb: 1,
//                   }}
//                 >
//                   Flo
//                   <Box component="span" sx={{ color: "#00D4AA" }}>
//                     ✓
//                   </Box>
//                   org
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.8)",
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Automate your Success
//                 </Typography>
//               </Box>

//               {/* Social Media Icons */}
//               <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   🎵
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   💼
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   📘
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   📷
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   💬
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     "&:hover": { color: "#00D4AA" },
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   📺
//                 </IconButton>
//               </Box>

//               {/* App Store Badges */}
//               <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//                 <Box
//                   sx={{
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     borderRadius: 2,
//                     p: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1,
//                     cursor: "pointer",
//                   }}
//                 >
//                   <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
//                     📱 Google Play
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     borderRadius: 2,
//                     p: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1,
//                     cursor: "pointer",
//                   }}
//                 >
//                   <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
//                     🍎 App Store
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Copyright */}
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "rgba(255, 255, 255, 0.6)",
//                   fontSize: "0.8rem",
//                 }}
//               >
//                 © Floworg LTD 2024
//                 <br />
//                 All rights reserved
//               </Typography>
//             </motion.div>
//           </Grid>

//           {/* Footer Columns */}
//           {footerColumns.map((column, index) => (
//             <Grid item xs={12} sm={6} md={2.25} key={index} {...({} as any)}> 
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
//                     color: "#00D4AA",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   {column.title}
//                 </Typography>

//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                   {column.links.map((link, linkIndex) => (
//                     <Link
//                       key={linkIndex}
//                       href="#"
//                       sx={{
//                         color: "rgba(255, 255, 255, 0.8)",
//                         textDecoration: "none",
//                         fontSize: "0.85rem",
//                         lineHeight: 1.6,
//                         "&:hover": {
//                           color: "#00D4AA",
//                         },
//                         ...(link === "Show more" && {
//                           color: "#00D4AA",
//                           fontWeight: 500,
//                         }),
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
//       </Container>
//     </Box>
//   )
// }

// export default Footer

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Floworg",
      links: [
        "Home",
        "About",
        "Timeline",
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
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Section - Newsletter Signup */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-teal-400 mb-6">
                Exclusive Updates
              </h3>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm border-none outline-none"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm border-none outline-none"
                />
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full text-sm font-semibold transition-colors duration-300">
                  Agree to updates
                </button>
              </div>

              {/* Logo Section */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Flo
                  <span className="text-teal-400">✓</span>
                  org
                </h1>
                <p className="text-gray-300 text-sm">
                  Automate your Success
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {['🎵', '💼', '📘', '📷', '💬', '📺'].map((icon, index) => (
                  <button
                    key={index}
                    className="text-gray-400 hover:text-teal-400 text-lg transition-colors duration-300"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* App Store Badges */}
              <div className="flex gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transition-colors duration-300">
                  <span className="text-xs">📱 Google Play</span>
                </div>
                <div className="bg-gray-700 rounded-lg px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600 transition-colors duration-300">
                  <span className="text-xs">🍎 App Store</span>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-gray-400 text-xs">
                © Floworg LTD 2024
                <br />
                All rights reserved
              </p>
            </motion.div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-teal-400 mb-4">
                  {column.title}
                </h3>

                <div className="flex flex-col gap-2">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        link === "Show more"
                          ? "text-teal-400 font-medium"
                          : "text-gray-300 hover:text-teal-400"
                      }`}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;