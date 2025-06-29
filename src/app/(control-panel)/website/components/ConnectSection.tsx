
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Button } from "@mui/material"
// import { motion } from "framer-motion"

// const ConnectSection: React.FC = () => {
//   const channels = [
//     {
//       name: "Facebook",
//       color: "#1877F2",
//       icon: "📘",
//       position: { top: "10%", right: "15%" },
//     },
//     {
//       name: "Calender",
//       color: "#4FC3F7",
//       icon: "📅",
//       position: { top: "25%", right: "35%" },
//     },
//     {
//       name: "Messenger",
//       color: "#0084FF",
//       icon: "💬",
//       position: { top: "15%", right: "5%" },
//     },
//     {
//       name: "WhatsApp",
//       color: "#25D366",
//       icon: "✓",
//       position: { top: "45%", right: "25%" },
//       isCenter: true,
//     },
//     {
//       name: "Linked In",
//       color: "#0A66C2",
//       icon: "💼",
//       position: { top: "60%", right: "45%" },
//     },
//     {
//       name: "Twitter",
//       color: "#1DA1F2",
//       icon: "🐦",
//       position: { top: "70%", right: "10%" },
//     },
//     {
//       name: "Skype",
//       color: "#00AFF0",
//       icon: "S",
//       position: { bottom: "15%", right: "30%" },
//     },
//   ]

//   const decorativeElements = [
//     { color: "#FFB6C1", size: 8, position: { top: "20%", right: "50%" } },
//     { color: "#87CEEB", size: 6, position: { top: "35%", right: "15%" } },
//     { color: "#FFB6C1", size: 10, position: { top: "55%", right: "5%" } },
//     { color: "#87CEEB", size: 4, position: { bottom: "25%", right: "40%" } },
//     { color: "#FFB6C1", size: 6, position: { bottom: "10%", right: "20%" } },
//   ]

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="overline"
//                 sx={{
//                   color: "#FF8A95",
//                   fontSize: "0.875rem",
//                   fontWeight: 500,
//                   letterSpacing: 1,
//                   mb: 2,
//                   display: "block",
//                 }}
//               >
//                 Talkie Tools
//               </Typography>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: "2.5rem", md: "3.5rem" },
//                   fontWeight: 700,
//                   color: "#2C3E50",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Connect Anytime,{" "}
//                 <Box component="span" sx={{ display: "block" }}>
//                   Anywhere
//                 </Box>
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 4,
//                   color: "#6C757D",
//                   lineHeight: 1.7,
//                   fontSize: "1rem",
//                   maxWidth: "90%",
//                 }}
//               >
//                 It is a long established fact that a reader will be distracted by the readable content of a page when
//                 looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
//               </Typography>

//               <Button
//                 variant="contained"
//                 size="large"
//                 endIcon={<span>→</span>}
//                 sx={{
//                   backgroundColor: "#6366F1",
//                   color: "white",
//                   px: 4,
//                   py: 1.5,
//                   fontSize: "0.875rem",
//                   fontWeight: 600,
//                   textTransform: "uppercase",
//                   letterSpacing: 1,
//                   borderRadius: 1,
//                   boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
//                   "&:hover": {
//                     backgroundColor: "#5B5FE8",
//                     boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
//                     transform: "translateY(-2px)",
//                   },
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 Read More
//               </Button>
//             </motion.div>
//           </Grid>

//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ position: "relative", height: "400px", width: "100%", mt: 4 }}>
//                 {/* Decorative Elements */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: "30%",
//                     right: "20%",
//                     width: 8,
//                     height: 8,
//                     backgroundColor: "#87CEEB",
//                     borderRadius: "50%",
//                   }}
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: "60%",
//                     right: "45%",
//                     width: 6,
//                     height: 6,
//                     backgroundColor: "#FFB6C1",
//                     borderRadius: "50%",
//                   }}
//                 />

//                 {/* Facebook - Top Center */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     top: "5%",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#1877F2",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(24, 119, 242, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       f
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Facebook
//                     </Typography>
//                   </Box>
//                 </motion.div>

//                 {/* Calendar - Left */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     top: "25%",
//                     left: "15%",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#4FC3F7",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(79, 195, 247, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       📅
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Calender
//                     </Typography>
//                   </Box>
//                 </motion.div>

//                 {/* Messenger - Right */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     top: "25%",
//                     right: "15%",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#0084FF",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(0, 132, 255, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       💬
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Messenger
//                     </Typography>
//                   </Box>
//                 </motion.div>

//                 {/* WhatsApp - Center (Prominent) */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     top: "45%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 70,
//                         height: 70,
//                         backgroundColor: "#25D366",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
//                         mb: 1,
//                       }}
//                     >
//                       ✓
//                     </Box>
//                   </Box>
//                 </motion.div>

//                 {/* LinkedIn - Bottom Left */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     bottom: "25%",
//                     left: "15%",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#0A66C2",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(10, 102, 194, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       in
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Linked In
//                     </Typography>
//                   </Box>
//                 </motion.div>

//                 {/* Twitter - Bottom Right */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     bottom: "25%",
//                     right: "15%",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#1DA1F2",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(29, 161, 242, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       🐦
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Twitter
//                     </Typography>
//                   </Box>
//                 </motion.div>

//                 {/* Skype - Bottom Center */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.7 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   style={{
//                     position: "absolute",
//                     bottom: "5%",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                   }}
//                 >
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: "#00AFF0",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "1.2rem",
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 4px 15px rgba(0, 175, 240, 0.3)",
//                         mb: 1,
//                       }}
//                     >
//                       S
//                     </Box>
//                     <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 500, fontSize: "0.875rem" }}>
//                       Skype
//                     </Typography>
//                   </Box>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

        
//       </Container>
//     </Box>
//   )
// }

// export default ConnectSection
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ConnectSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-500 text-sm font-medium tracking-wide uppercase mb-4 block">
                Talkie Tools
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Connect Anytime,{" "}
                <span className="block">Anywhere</span>
              </h2>

              <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-lg">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              </p>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 w-full mt-8">
                {/* Decorative Elements */}
                <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="absolute top-3/5 right-2/5 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>

                {/* Facebook - Top Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2">
                      f
                    </div>
                    <span className="text-gray-800 font-medium text-sm">Facebook</span>
                  </div>
                </motion.div>

                {/* Calendar - Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute top-1/4 left-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2">
                      📅
                    </div>
                    <span className="text-gray-800 font-medium text-sm">Calendar</span>
                  </div>
                </motion.div>

                {/* Messenger - Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute top-1/4 right-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2">
                      💬
                    </div>
                    <span className="text-gray-800 font-medium text-sm">Messenger</span>
                  </div>
                </motion.div>

                {/* WhatsApp - Center (Prominent) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-18 h-18 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl">
                      ✓
                    </div>
                  </div>
                </motion.div>

                {/* LinkedIn - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute bottom-1/4 left-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg mb-2">
                      in
                    </div>
                    <span className="text-gray-800 font-medium text-sm">LinkedIn</span>
                  </div>
                </motion.div>

                {/* Twitter - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute bottom-1/4 right-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2">
                      🐦
                    </div>
                    <span className="text-gray-800 font-medium text-sm">Twitter</span>
                  </div>
                </motion.div>

                {/* Skype - Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2">
                      S
                    </div>
                    <span className="text-gray-800 font-medium text-sm">Skype</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;