
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material"
// import { motion } from "framer-motion"

// const SmartAISection: React.FC = () => {
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
//             <Box sx={{ flex: 1 }}>
//               {/* Features Tag */}
//               <Box
//                 sx={{
//                   display: "inline-block",
//                   backgroundColor: "#E3F2FD",
//                   color: "#1976D2",
//                   px: 3,
//                   py: 1,
//                   borderRadius: 20,
//                   fontSize: "0.75rem",
//                   fontWeight: 600,
//                   textTransform: "uppercase",
//                   letterSpacing: 1,
//                   mb: 3,
//                 }}
//               >
//                 Features
//               </Box>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 2,
//                   fontSize: { xs: "2.5rem", md: "3.5rem" },
//                   fontWeight: 700,
//                   color: "#2C3E50",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Excellent Response with{" "}
//                 <Box component="span" sx={{ color: "#4285F4" }}>
//                   Smart AI
//                 </Box>
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#6C757D",
//                   maxWidth: "500px",
//                   lineHeight: 1.6,
//                   fontSize: "1rem",
//                 }}
//               >
//                 Refine chatbot intelligence through continuous learning and customization options
//               </Typography>
//             </Box>

//             {/* Explore Features Button */}
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: "#4285F4",
//                 "&:hover": {
//                   backgroundColor: "#3367D6",
//                   transform: "translateY(-2px)",
//                   boxShadow: "0 8px 25px rgba(66, 133, 244, 0.3)",
//                 },
//                 borderRadius: 25,
//                 px: 4,
//                 py: 1.5,
//                 fontSize: "1rem",
//                 fontWeight: 600,
//                 boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
//                 transition: "all 0.3s ease",
//                 textTransform: "none",
//                 mt: 4,
//               }}
//             >
//               Explore Features
//             </Button>
//           </Box>
//         </motion.div>

//         {/* Feature Cards */}
//         <Grid container spacing={3}>
//           {/* Multi-Language Support */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <Card
//                 sx={{
//                   height: "100%",
//                   borderRadius: 3,
//                   border: "1px solid #E0E7FF",
//                   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   {/* Chat Interface Mockup */}
//                   <Box
//                     sx={{
//                       mb: 3,
//                       p: 3,
//                       backgroundColor: "#f8f9fa",
//                       borderRadius: 2,
//                       border: "1px solid #e9ecef",
//                       position: "relative",
//                     }}
//                   >
//                     {/* AI Icon */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 15,
//                         right: 15,
//                         backgroundColor: "#4285F4",
//                         borderRadius: 2,
//                         p: 1,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <Typography sx={{ color: "white", fontSize: "0.75rem", fontWeight: 600 }}>AI</Typography>
//                     </Box>

//                     <Typography variant="body2" sx={{ color: "#2C3E50", mb: 1, fontWeight: 500 }}>
//                       Estimado equipo:
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.8rem", lineHeight: 1.4, mb: 2 }}>
//                       No puedo iniciar sesión en mi panel de control para consultar el estado de mi pedido. ¿Podrían
//                       informarme cuál es el problema?
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
//                       Gracias Por mensaje
//                     </Typography>
//                     <Box sx={{ textAlign: "right", mt: 1 }}>
//                       <Typography variant="caption" sx={{ color: "#9CA3AF" }}>
//                         13:45
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 2,
//                       fontWeight: 600,
//                       color: "#4285F4",
//                       fontSize: "1.25rem",
//                     }}
//                   >
//                     Multi-Language Support
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
//                     Connect with global users with auto-translates messages, ensuring smooth conversations in multiple
//                     languages.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>

//           {/* AI Training Center */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <Card
//                 sx={{
//                   height: "100%",
//                   borderRadius: 3,
//                   border: "1px solid #E0E7FF",
//                   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   {/* Training Interface Mockup */}
//                   <Box
//                     sx={{
//                       mb: 3,
//                       p: 3,
//                       backgroundColor: "#f8f9fa",
//                       borderRadius: 2,
//                       border: "1px solid #e9ecef",
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ color: "#2C3E50", mb: 2, fontSize: "1rem", fontWeight: 600 }}>
//                       AI Training Center
//                     </Typography>
//                     <Box sx={{ space: 1 }}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           py: 1,
//                           borderBottom: "1px solid #e9ecef",
//                         }}
//                       >
//                         <Typography variant="body2" sx={{ color: "#2C3E50", fontSize: "0.85rem" }}>
//                           AI Knowledgebase Data
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           py: 1,
//                           borderBottom: "1px solid #e9ecef",
//                         }}
//                       >
//                         <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.85rem" }}>
//                           Website resources
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           py: 1,
//                         }}
//                       >
//                         <Typography variant="body2" sx={{ color: "#6C757D", fontSize: "0.85rem" }}>
//                           File resources
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 2,
//                       fontWeight: 600,
//                       color: "#4285F4",
//                       fontSize: "1.25rem",
//                     }}
//                   >
//                     AI Training Center
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
//                     Continuously improve your chatbot's intelligence, dedicated space to train responses for better
//                     interactions.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>

//           {/* Personal Customer Insights */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <Card
//                 sx={{
//                   height: "100%",
//                   borderRadius: 3,
//                   border: "1px solid #E0E7FF",
//                   boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   {/* Customer Insights Mockup */}
//                   <Box
//                     sx={{
//                       mb: 3,
//                       p: 3,
//                       backgroundColor: "#f8f9fa",
//                       borderRadius: 2,
//                       border: "1px solid #e9ecef",
//                     }}
//                   >
//                     {/* User Profile */}
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                       <Box
//                         sx={{
//                           width: 40,
//                           height: 40,
//                           borderRadius: "50%",
//                           backgroundColor: "#E1BEE7",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           mr: 2,
//                         }}
//                       >
//                         <Typography sx={{ color: "#8E24AA", fontWeight: 600, fontSize: "0.9rem" }}>LA</Typography>
//                       </Box>
//                       <Box>
//                         <Typography variant="body2" sx={{ color: "#2C3E50", fontWeight: 600, fontSize: "0.9rem" }}>
//                           Lucy Andriana
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Typography variant="body2" sx={{ color: "#2C3E50", mb: 1, fontWeight: 500 }}>
//                       Chat Activity
//                     </Typography>
//                     <Box sx={{ backgroundColor: "#e9ecef", borderRadius: 1, p: 2, mb: 1 }}>
//                       <Typography variant="caption" sx={{ color: "#6C757D" }}>
//                         Recent interactions and engagement metrics
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 2,
//                       fontWeight: 600,
//                       color: "#4285F4",
//                       fontSize: "1.25rem",
//                     }}
//                   >
//                     Personal Customer Insights
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.9rem" }}>
//                     Gain valuable insights with AI that learns customer preferences, providing engaging support
//                     experience every time.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default SmartAISection

import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const SmartAISection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start mb-12"
        >
          <div className="flex-1 mb-8 lg:mb-0">
            {/* Features Tag */}
            <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Features
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Excellent Response with{" "}
              <span className="text-teal-500">Smart AI</span>
            </h2>

            <p className="text-gray-600 max-w-lg text-base leading-relaxed">
              Refine chatbot intelligence through continuous learning and customization options
            </p>
          </div>

          {/* Explore Features Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-8 lg:mt-16">
            Explore Features
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Multi-Language Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="p-6">
                {/* Chat Interface Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 relative">
                  {/* AI Icon */}
                  <div className="absolute top-3 right-3 bg-teal-600 rounded px-2 py-1 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">AI</span>
                  </div>

                  <p className="text-gray-800 text-sm font-medium mb-2">
                    Estimado equipo:
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    No puedo iniciar sesión en mi panel de control para consultar el estado de mi pedido. ¿Podrían
                    informarme cuál es el problema?
                  </p>
                  <p className="text-gray-400 text-xs mb-2">
                    Gracias Por mensaje
                  </p>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">13:45</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-teal-600 mb-3">
                  Multi-Language Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with global users with auto-translates messages, ensuring smooth conversations in multiple
                  languages.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI Training Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="p-6">
                {/* Training Interface Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-gray-800 text-base font-semibold mb-3">
                    AI Training Center
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-800 text-sm">AI Knowledgebase Data</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm">Website resources</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 text-sm">File resources</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-teal-600 mb-3">
                  AI Training Center
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Continuously improve your chatbot's intelligence, dedicated space to train responses for better
                  interactions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal Customer Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="p-6">
                {/* Customer Insights Mockup */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  {/* User Profile */}
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold text-sm">LA</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">Lucy Andriana</p>
                    </div>
                  </div>

                  <p className="text-gray-800 text-sm font-medium mb-2">Chat Activity</p>
                  <div className="bg-gray-200 rounded p-3">
                    <p className="text-gray-600 text-xs">
                      Recent interactions and engagement metrics
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-teal-600 mb-3">
                  Personal Customer Insights
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gain valuable insights with AI that learns customer preferences, providing engaging support
                  experience every time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartAISection;