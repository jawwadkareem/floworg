// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Link } from "@mui/material"
// import { motion } from "framer-motion"

// const BusinessSolutionSection: React.FC = () => {
//   return (
//     <Box sx={{ py: 6, backgroundColor: "white", borderTop: "1px solid #E5E7EB" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={6} alignItems="flex-start">
//           {/* Left Side - Main Content */}
//           <Grid item xs={12} md={8} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: "1.5rem", md: "1.75rem" },
//                   fontWeight: 700,
//                   color: "#2C3E50",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 Need a Solution Tailored to Your Business?
//               </Typography>

//               <Box sx={{ mb: 2 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#2C3E50",
//                     lineHeight: 1.6,
//                     fontSize: "0.95rem",
//                     mb: 1,
//                   }}
//                 >
//                   <Box component="span" sx={{ fontWeight: 600 }}>
//                     At Floworg 360, we give you three smart ways to get started
//                   </Box>{" "}
//                   – based on what works best for you:
//                 </Typography>
//               </Box>

//               <Box sx={{ mb: 2 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#2C3E50",
//                     lineHeight: 1.6,
//                     fontSize: "0.95rem",
//                     mb: 1,
//                   }}
//                 >
//                   <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
//                     Schedule a 1-on-1 consultation
//                   </Box>{" "}
//                   – Our experts will help you identify your needs, define a clear roadmap, and implement the right
//                   solutions for your business.
//                 </Typography>
//               </Box>

//               <Box sx={{ mb: 2 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#2C3E50",
//                     lineHeight: 1.6,
//                     fontSize: "0.95rem",
//                     mb: 1,
//                   }}
//                 >
//                   <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
//                     Watch step-by-step tutorials
//                   </Box>{" "}
//                   – Learn at your own pace and implement automations on your own, no coding required.
//                 </Typography>
//               </Box>

//               <Box>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#2C3E50",
//                     lineHeight: 1.6,
//                     fontSize: "0.95rem",
//                   }}
//                 >
//                   <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
//                     Explore ready-made templates
//                   </Box>{" "}
//                   – Choose from proven automation flows and{" "}
//                   <Box component="span" sx={{ fontWeight: 600, color: "#4285F4" }}>
//                     customize them to fit your needs.
//                   </Box>
//                 </Typography>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Navigation Links */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//                 <Link
//                   href="#"
//                   sx={{
//                     color: "#2C3E50",
//                     textDecoration: "none",
//                     fontSize: "1rem",
//                     fontWeight: 500,
//                     "&:hover": {
//                       color: "#4285F4",
//                       textDecoration: "underline",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Watch Tutorials
//                 </Link>

//                 <Link
//                   href="#"
//                   sx={{
//                     color: "#2C3E50",
//                     textDecoration: "none",
//                     fontSize: "1rem",
//                     fontWeight: 500,
//                     "&:hover": {
//                       color: "#4285F4",
//                       textDecoration: "underline",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Browse Templates & Mini Apps
//                 </Link>

//                 <Link
//                   href="#"
//                   sx={{
//                     color: "#2C3E50",
//                     textDecoration: "none",
//                     fontSize: "1rem",
//                     fontWeight: 500,
//                     "&:hover": {
//                       color: "#4285F4",
//                       textDecoration: "underline",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Schedule a Consultation
//                 </Link>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default BusinessSolutionSection

import React from 'react';
import { motion } from 'framer-motion';

const BusinessSolutionSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Need a Solution Tailored to Your Business?
              </h2>

              <div className="space-y-4">
                <p className="text-gray-800 leading-relaxed text-base">
                  <span className="font-semibold">
                    At Floworg 360, we give you three smart ways to get started
                  </span>{" "}
                  – based on what works best for you:
                </p>

                <p className="text-gray-800 leading-relaxed text-base">
                  <span className="font-semibold text-blue-600">
                    Schedule a 1-on-1 consultation
                  </span>{" "}
                  – Our experts will help you identify your needs, define a clear roadmap, and implement the right
                  solutions for your business.
                </p>

                <p className="text-gray-800 leading-relaxed text-base">
                  <span className="font-semibold text-blue-600">
                    Watch step-by-step tutorials
                  </span>{" "}
                  – Learn at your own pace and implement automations on your own, no coding required.
                </p>

                <p className="text-gray-800 leading-relaxed text-base">
                  <span className="font-semibold text-blue-600">
                    Explore ready-made templates
                  </span>{" "}
                  – Choose from proven automation flows and{" "}
                  <span className="font-semibold text-blue-600">
                    customize them to fit your needs.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-gray-800 text-base font-medium hover:text-blue-600 hover:underline transition-all duration-300"
                >
                  Watch Tutorials
                </a>

                <a
                  href="#"
                  className="block text-gray-800 text-base font-medium hover:text-blue-600 hover:underline transition-all duration-300"
                >
                  Browse Templates & Mini Apps
                </a>

                <a
                  href="#"
                  className="block text-gray-800 text-base font-medium hover:text-blue-600 hover:underline transition-all duration-300"
                >
                  Schedule a Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionSection;