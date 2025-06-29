// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Box, Typography, Container, Grid, Button } from "@mui/material"
// import { Check, Videocam } from "@mui/icons-material"
// import { motion } from "framer-motion"

// const FeaturesSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("Screen Sharing")

//   const tabs = ["Instant Join", "Screen Sharing", "Team Chat", "HD Audio & Video"]

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 6 }}>
//             <Box>
//               <Typography
//                 variant="overline"
//                 sx={{
//                   color: "#4285F4",
//                   fontSize: "0.875rem",
//                   fontWeight: 600,
//                   letterSpacing: 2,
//                   mb: 2,
//                   display: "block",
//                 }}
//               >
//                 FEATURES
//               </Typography>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "2.5rem", md: "3.5rem" },
//                   fontWeight: 700,
//                   color: "#2C3E50",
//                   lineHeight: 1.2,
//                   mb: 4,
//                 }}
//               >
//                 Most useful{" "}
//                 <Box
//                   component="span"
//                   sx={{
//                     background: "#FFD700",
//                     color: "#2C3E50",
//                     px: 2,
//                     py: 0.5,
//                     borderRadius: 1,
//                     fontWeight: 700,
//                   }}
//                 >
//                   Banners
//                 </Box>
//                 <br />
//                 You must need
//               </Typography>
//             </Box>

//             {/* Video Icon */}
//             <Box
//               sx={{
//                 width: 80,
//                 height: 80,
//                 backgroundColor: "#2C3E50",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//               }}
//             >
//               <Videocam sx={{ fontSize: 40, color: "#4285F4" }} />
//             </Box>
//           </Box>
//         </motion.div>

//         {/* Tab Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ display: "flex", gap: 2, mb: 6, flexWrap: "wrap" }}>
//             {tabs.map((tab, index) => (
//               <Button
//                 key={index}
//                 variant={activeTab === tab ? "contained" : "outlined"}
//                 onClick={() => setActiveTab(tab)}
//                 sx={{
//                   px: 3,
//                   py: 1.5,
//                   borderRadius: 2,
//                   fontSize: "0.9rem",
//                   fontWeight: 500,
//                   textTransform: "none",
//                   ...(activeTab === tab
//                     ? {
//                         backgroundColor: "#4285F4",
//                         color: "white",
//                         "&:hover": {
//                           backgroundColor: "#3367D6",
//                         },
//                       }
//                     : {
//                         borderColor: "#E5E7EB",
//                         color: "#6B7280",
//                         backgroundColor: "white",
//                         "&:hover": {
//                           borderColor: "#4285F4",
//                           color: "#4285F4",
//                         },
//                       }),
//                 }}
//               >
//                 {tab}
//               </Button>
//             ))}
//           </Box>
//         </motion.div>

//         {/* Screen Sharing Content */}
//         <Grid container spacing={6} alignItems="center">
//           {/* Left Side - Content */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: "2rem", md: "2.5rem" },
//                   fontWeight: 600,
//                   color: "#2C3E50",
//                 }}
//               >
//                 Screen Sharing
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 4,
//                   color: "#6B7280",
//                   lineHeight: 1.6,
//                   fontSize: "1rem",
//                 }}
//               >
//                 Readability is of great importance but because those who do not know how to pursue pleasure rationally
//                 encounter consequences that are extremely painful. Nor again is there anyone.
//               </Typography>

//               {/* Feature List */}
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
//                   <Box
//                     sx={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: "50%",
//                       backgroundColor: "#10B981",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                       mt: 0.2,
//                     }}
//                   >
//                     <Check sx={{ fontSize: 14, color: "white" }} />
//                   </Box>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "#2C3E50",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     Share multiple screens at a time and get amazing experience in your team meeting
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
//                   <Box
//                     sx={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: "50%",
//                       backgroundColor: "#10B981",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                       mt: 0.2,
//                     }}
//                   >
//                     <Check sx={{ fontSize: 14, color: "white" }} />
//                   </Box>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "#2C3E50",
//                       fontSize: "1rem",
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     No need for third-party plugins
//                   </Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Video Conference Mockup */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <Box
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: 3,
//                   p: 3,
//                   boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
//                   position: "relative",
//                 }}
//               >
//                 {/* Video Conference Interface */}
//                 <Box sx={{ mb: 3 }}>
//                   {/* Header */}
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
//                     <Box sx={{ width: 8, height: 8, backgroundColor: "#FF5F56", borderRadius: "50%" }} />
//                     <Box sx={{ width: 8, height: 8, backgroundColor: "#FFBD2E", borderRadius: "50%" }} />
//                     <Box sx={{ width: 8, height: 8, backgroundColor: "#27CA3F", borderRadius: "50%" }} />
//                   </Box>

//                   {/* Participants List */}
//                   <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                     {[
//                       { name: "Messages", avatar: "💬", color: "#4285F4" },
//                       { name: "Samantha", avatar: "👩", color: "#E91E63" },
//                       { name: "Samantha", avatar: "👩", color: "#9C27B0" },
//                       { name: "Samantha", avatar: "👩", color: "#FF9800" },
//                       { name: "Samantha", avatar: "👩", color: "#4CAF50" },
//                       { name: "Samantha", avatar: "👩", color: "#2196F3" },
//                     ].map((participant, index) => (
//                       <Box
//                         key={index}
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 2,
//                           p: 2,
//                           backgroundColor: "#F8F9FA",
//                           borderRadius: 2,
//                         }}
//                       >
//                         <Box
//                           sx={{
//                             width: 40,
//                             height: 40,
//                             backgroundColor: participant.color,
//                             borderRadius: "50%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             fontSize: "1.2rem",
//                           }}
//                         >
//                           {participant.avatar}
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Typography variant="body2" sx={{ fontWeight: 600, color: "#2C3E50" }}>
//                             {participant.name}
//                           </Typography>
//                           <Typography variant="caption" sx={{ color: "#6B7280" }}>
//                             {index === 0 ? "Chat" : "Participant"}
//                           </Typography>
//                         </Box>
//                         {/* Audio Waveform */}
//                         <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//                           {[...Array(8)].map((_, i) => (
//                             <Box
//                               key={i}
//                               sx={{
//                                 width: 2,
//                                 height: Math.random() * 20 + 5,
//                                 backgroundColor: "#4285F4",
//                                 borderRadius: 1,
//                               }}
//                             />
//                           ))}
//                         </Box>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>

//                 {/* Bottom Controls */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 15,
//                     left: 15,
//                     backgroundColor: "#FFD700",
//                     borderRadius: "50%",
//                     width: 30,
//                     height: 30,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Typography sx={{ fontSize: "0.8rem" }}>😊</Typography>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default FeaturesSection

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Video } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Screen Sharing");

  const tabs = ["Instant Join", "Screen Sharing", "Team Chat", "HD Audio & Video"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
                FEATURES
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8">
                Most useful{" "}
                <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-lg font-bold">
                  Banners
                </span>
                <br />
                You must need
              </h2>
            </div>

            {/* Video Icon */}
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
              <Video className="w-10 h-10 text-blue-600" />
            </div>
          </div>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4 mb-12 flex-wrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Screen Sharing Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                Screen Sharing
              </h3>

              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                Readability is of great importance but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    Share multiple screens at a time and get amazing experience in your team meeting
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    No need for third-party plugins
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Video Conference Mockup */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl relative">
                {/* Video Conference Interface */}
                <div className="mb-6">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Participants List */}
                  <div className="space-y-4">
                    {[
                      { name: "Messages", avatar: "💬", color: "bg-blue-500" },
                      { name: "Samantha", avatar: "👩", color: "bg-pink-500" },
                      { name: "Samantha", avatar: "👩", color: "bg-purple-500" },
                      { name: "Samantha", avatar: "👩", color: "bg-orange-500" },
                      { name: "Samantha", avatar: "👩", color: "bg-green-500" },
                      { name: "Samantha", avatar: "👩", color: "bg-blue-600" },
                    ].map((participant, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className={`w-10 h-10 ${participant.color} rounded-full flex items-center justify-center text-lg`}>
                          {participant.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-sm">{participant.name}</p>
                          <p className="text-xs text-gray-500">
                            {index === 0 ? "Chat" : "Participant"}
                          </p>
                        </div>
                        {/* Audio Waveform */}
                        <div className="flex items-center gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="w-0.5 bg-blue-600 rounded"
                              style={{ height: `${Math.random() * 20 + 5}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-4 left-4 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm">😊</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;