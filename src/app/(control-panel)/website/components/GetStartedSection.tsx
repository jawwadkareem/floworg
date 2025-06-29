
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Button } from "@mui/material"
// import { motion } from "framer-motion"

// const GetStartedSection: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         backgroundColor: "#E8E5FF",
//         position: "relative",
//         overflow: "hidden",
//         minHeight: "400px",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 mb: 3,
//                 fontSize: { xs: "2rem", md: "2.5rem" },
//                 fontWeight: 700,
//                 color: "#2C3E50",
//                 lineHeight: 1.3,
//                 maxWidth: "800px",
//                 mx: "auto",
//               }}
//             >
//               Get Started with UpSoft Today & Take Your Business to New Heights
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 mb: 4,
//                 fontSize: "1rem",
//                 lineHeight: 1.6,
//                 color: "#6B7280",
//                 maxWidth: "600px",
//                 mx: "auto",
//               }}
//             >
//               Ready to take your business to the next level? UpSoft provides powerful automation, advanced analytics,
//               and seamless cloud solutions to help you scale faster, work smarter.
//             </Typography>

//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: "#4A90E2",
//                 "&:hover": {
//                   backgroundColor: "#3B82F6",
//                 },
//                 borderRadius: 2,
//                 px: 4,
//                 py: 1.5,
//                 fontSize: "1rem",
//                 fontWeight: 600,
//                 textTransform: "none",
//                 boxShadow: "0 4px 15px rgba(74, 144, 226, 0.3)",
//               }}
//             >
//               Contact Us
//             </Button>
//           </Box>
//         </motion.div>

//         {/* Left Floating UI Mockup */}
//         <motion.div
//           initial={{ opacity: 0, x: -100, rotate: -10 }}
//           whileInView={{ opacity: 1, x: 0, rotate: -5 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           viewport={{ once: true }}
//           style={{
//             position: "absolute",
//             left: "5%",
//             top: "50%",
//             transform: "translateY(-50%)",
//             zIndex: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 280,
//               height: 200,
//               backgroundColor: "white",
//               borderRadius: 3,
//               boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
//               p: 3,
//               transform: "rotate(-5deg)",
//             }}
//           >
//             {/* Dashboard Header */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
//               <Box sx={{ width: 8, height: 8, backgroundColor: "#FF5F56", borderRadius: "50%" }} />
//               <Box sx={{ width: 8, height: 8, backgroundColor: "#FFBD2E", borderRadius: "50%" }} />
//               <Box sx={{ width: 8, height: 8, backgroundColor: "#27CA3F", borderRadius: "50%" }} />
//             </Box>

//             {/* Chart Area */}
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="body2" sx={{ color: "#6B7280", mb: 1, fontSize: "0.75rem" }}>
//                 Wade Warren
//               </Typography>
//               <Typography variant="caption" sx={{ color: "#9CA3AF", fontSize: "0.7rem" }}>
//                 CEO, Co-Founder
//               </Typography>
//             </Box>

//             {/* Mock Chart */}
//             <Box sx={{ height: 80, backgroundColor: "#F3F4F6", borderRadius: 2, position: "relative", mb: 2 }}>
//               <svg width="100%" height="100%" viewBox="0 0 240 80">
//                 <path d="M 20 60 Q 60 40 100 45 T 180 35 T 220 25" stroke="#4A90E2" strokeWidth="2" fill="none" />
//                 <circle cx="220" cy="25" r="3" fill="#4A90E2" />
//               </svg>
//             </Box>

//             {/* Action Button */}
//             <Box
//               sx={{
//                 backgroundColor: "#FF6B35",
//                 color: "white",
//                 px: 2,
//                 py: 0.5,
//                 borderRadius: 1,
//                 fontSize: "0.7rem",
//                 fontWeight: 600,
//                 display: "inline-block",
//               }}
//             >
//               Download
//             </Box>
//           </Box>
//         </motion.div>

//         {/* Right Floating UI Mockup */}
//         <motion.div
//           initial={{ opacity: 0, x: 100, rotate: 10 }}
//           whileInView={{ opacity: 1, x: 0, rotate: 5 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           viewport={{ once: true }}
//           style={{
//             position: "absolute",
//             right: "5%",
//             top: "30%",
//             zIndex: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 200,
//               backgroundColor: "white",
//               borderRadius: 3,
//               boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
//               p: 2,
//               transform: "rotate(5deg)",
//             }}
//           >
//             {/* Profile Card 1 */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 p: 2,
//                 backgroundColor: "#F8F9FA",
//                 borderRadius: 2,
//                 mb: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 40,
//                   height: 40,
//                   backgroundColor: "#E91E63",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "white",
//                   fontSize: "0.8rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 👤
//               </Box>
//               <Box>
//                 <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.8rem", color: "#2C3E50" }}>
//                   $981.00
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: "#6B7280", fontSize: "0.7rem" }}>
//                   +8.2%
//                 </Typography>
//               </Box>
//             </Box>

//             {/* Profile Card 2 */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 p: 2,
//                 backgroundColor: "#F8F9FA",
//                 borderRadius: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 40,
//                   height: 40,
//                   backgroundColor: "#4A90E2",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "white",
//                   fontSize: "0.8rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 👤
//               </Box>
//               <Box>
//                 <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.8rem", color: "#2C3E50" }}>
//                   Thomas Edward
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: "#6B7280", fontSize: "0.7rem" }}>
//                   Manager
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </motion.div>

//         {/* Background Decorative Elements */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "10%",
//             left: "20%",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//             background: "rgba(74, 144, 226, 0.1)",
//             opacity: 0.5,
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "20%",
//             right: "25%",
//             width: 80,
//             height: 80,
//             borderRadius: "50%",
//             background: "rgba(139, 92, 246, 0.1)",
//             opacity: 0.3,
//           }}
//         />
//       </Container>
//     </Box>
//   )
// }

// export default GetStartedSection

import React from 'react';
import { motion } from 'framer-motion';

const GetStartedSection: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50 relative overflow-hidden min-h-96">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative z-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight max-w-4xl mx-auto">
            Get Started with UpSoft Today & Take Your Business to New Heights
          </h2>

          <p className="text-base leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? UpSoft provides powerful automation, advanced analytics,
            and seamless cloud solutions to help you scale faster, work smarter.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us
          </button>
        </motion.div>

        {/* Left Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <div className="w-72 h-48 bg-white rounded-2xl shadow-xl p-6 transform -rotate-3">
            {/* Dashboard Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            {/* Chart Area */}
            <div className="mb-4">
              <p className="text-gray-600 text-xs mb-1">Wade Warren</p>
              <p className="text-gray-400 text-xs">CEO, Co-Founder</p>
            </div>

            {/* Mock Chart */}
            <div className="h-16 bg-gray-100 rounded-lg relative mb-4">
              <svg width="100%" height="100%" viewBox="0 0 240 64">
                <path d="M 20 48 Q 60 32 100 36 T 180 28 T 220 20" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <circle cx="220" cy="20" r="3" fill="#4A90E2" />
              </svg>
            </div>

            {/* Action Button */}
            <div className="bg-orange-500 text-white px-4 py-2 rounded text-xs font-semibold inline-block">
              Download
            </div>
          </div>
        </motion.div>

        {/* Right Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute right-[5%] top-[30%] z-10"
        >
          <div className="w-48 bg-white rounded-2xl shadow-xl p-4 transform rotate-3">
            {/* Profile Card 1 */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-3">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                👤
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">$981.00</p>
                <p className="text-gray-600 text-xs">+8.2%</p>
              </div>
            </div>

            {/* Profile Card 2 */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                👤
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">Thomas Edward</p>
                <p className="text-gray-600 text-xs">Manager</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute top-[10%] left-[20%] w-24 h-24 rounded-full bg-blue-200 opacity-30"></div>
        <div className="absolute bottom-[20%] right-[25%] w-20 h-20 rounded-full bg-purple-200 opacity-20"></div>
      </div>
    </section>
  );
};

export default GetStartedSection;