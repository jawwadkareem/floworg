
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Card, CardContent, Button, Switch } from "@mui/material"
// import { motion } from "framer-motion"

// const SolutionsSection: React.FC = () => {
//   const integrations = [
//     {
//       name: "Google Mail",
//       description: "Email and file sharing, enabling it to be effective and you can use",
//       icon: "📧",
//       color: "#EA4335",
//     },
//     {
//       name: "Google Analytics",
//       description: "Tracking and measuring marketing ROI as well as track your video, applications, social media",
//       icon: "📊",
//       color: "#4285F4",
//     },
//     {
//       name: "Google Meet",
//       description: "Video calling and screen sharing for development for Google Hangouts and Google Chat",
//       icon: "📹",
//       color: "#34A853",
//     },
//     {
//       name: "Salesforce",
//       description: "Customer relationship management in a way to boost the brand's following",
//       icon: "☁️",
//       color: "#00A1E0",
//     },
//     {
//       name: "Google Outlook",
//       description: "Personal and file sharing, enabling it to be effective and you can use",
//       icon: "📧",
//       color: "#0078D4",
//     },
//     {
//       name: "Chrome",
//       description: "Using your browser's native push notifications with international and commerce",
//       icon: "🌐",
//       color: "#4285F4",
//     },
//     {
//       name: "Slack",
//       description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
//       icon: "💬",
//       color: "#4A154B",
//     },
//     {
//       name: "Salesforce",
//       description: "Customer relationship management in a way to boost the brand's following",
//       icon: "☁️",
//       color: "#00A1E0",
//     },
//     {
//       name: "Trello",
//       description:
//         "Task and collaboration tool that brings the right people, information and tools together to get work",
//       icon: "📋",
//       color: "#0079BF",
//     },
//     {
//       name: "Salesforce",
//       description: "Customer relationship management in a way to boost the brand's following",
//       icon: "☁️",
//       color: "#00A1E0",
//     },
//     {
//       name: "Web Hooks",
//       description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
//       icon: "🔗",
//       color: "#FF6B35",
//     },
//     {
//       name: "Facebook",
//       description: "Business Pages allows to create a video marketing and reach that it leads to sales, reach friends",
//       icon: "📘",
//       color: "#1877F2",
//     },
//     {
//       name: "Microsoft Team Conference",
//       description:
//         "Communication and file sharing tool that brings the right people, information and tools together to get work",
//       icon: "👥",
//       color: "#6264A7",
//     },
//     {
//       name: "Zapier",
//       description: "Zapier lets you connect Google Meet with thousands of the most popular apps, so you can",
//       icon: "⚡",
//       color: "#FF4A00",
//     },
//     {
//       name: "Zoom",
//       description: "Video Chat Meetings for personal or video Chat Meetings, offering integrated broadcasting for",
//       icon: "📹",
//       color: "#2D8CFF",
//     },
//     {
//       name: "Salesforce",
//       description: "Customer relationship management in a way to boost the brand's following",
//       icon: "☁️",
//       color: "#00A1E0",
//     },
//   ]

//   // Duplicate the array to show more rows as in the image
//   const allIntegrations = [...integrations, ...integrations]

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 6,
//               fontSize: { xs: "2rem", md: "2.5rem" },
//               fontWeight: 700,
//               color: "#2C3E50",
//             }}
//           >
//             Solutions
//           </Typography>
//         </motion.div>

//         {/* Integrations Grid */}
//         <Grid container spacing={2}>
//           {allIntegrations.slice(0, 24).map((integration, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.02 }}
//                 viewport={{ once: true }}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: 2,
//                     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//                     },
//                     border: "1px solid #E5E7EB",
//                     backgroundColor: "white",
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
//                         <Box
//                           sx={{
//                             width: 40,
//                             height: 40,
//                             borderRadius: 2,
//                             backgroundColor: `${integration.color}15`,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             fontSize: "1.2rem",
//                             flexShrink: 0,
//                           }}
//                         >
//                           {integration.icon}
//                         </Box>
//                         <Box sx={{ flex: 1, minWidth: 0 }}>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               fontWeight: 600,
//                               fontSize: "0.95rem",
//                               color: "#2C3E50",
//                               mb: 0.5,
//                               lineHeight: 1.3,
//                             }}
//                           >
//                             {integration.name}
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Switch
//                         size="small"
//                         sx={{
//                           "& .MuiSwitch-switchBase.Mui-checked": {
//                             color: "#00D4AA",
//                           },
//                           "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//                             backgroundColor: "#00D4AA",
//                           },
//                         }}
//                       />
//                     </Box>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#6B7280",
//                         fontSize: "0.8rem",
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {integration.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Call to Action Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: "center", mt: 6 }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: "#00D4AA",
//                 "&:hover": {
//                   backgroundColor: "#00B894",
//                 },
//                 borderRadius: 25,
//                 px: 6,
//                 py: 2,
//                 fontSize: "1rem",
//                 fontWeight: 600,
//                 textTransform: "none",
//                 boxShadow: "0 4px 15px rgba(0, 212, 170, 0.3)",
//               }}
//             >
//               To Explore all Use Cases, For Your Business Category
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   )
// }

// export default SolutionsSection

import React from 'react';
import { motion } from 'framer-motion';

const SolutionsSection: React.FC = () => {
  const integrations = [
    {
      name: "Google Mail",
      description: "Email and file sharing, enabling it to be effective and you can use",
      icon: "📧",
      color: "text-red-500",
    },
    {
      name: "Google Analytics",
      description: "Tracking and measuring marketing ROI as well as track your video, applications, social media",
      icon: "📊",
      color: "text-blue-500",
    },
    {
      name: "Google Meet",
      description: "Video calling and screen sharing for development for Google Hangouts and Google Chat",
      icon: "📹",
      color: "text-green-500",
    },
    {
      name: "Salesforce",
      description: "Customer relationship management in a way to boost the brand's following",
      icon: "☁️",
      color: "text-blue-600",
    },
    {
      name: "Google Outlook",
      description: "Personal and file sharing, enabling it to be effective and you can use",
      icon: "📧",
      color: "text-blue-700",
    },
    {
      name: "Chrome",
      description: "Using your browser's native push notifications with international and commerce",
      icon: "🌐",
      color: "text-blue-500",
    },
    {
      name: "Slack",
      description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
      icon: "💬",
      color: "text-purple-600",
    },
    {
      name: "Trello",
      description:
        "Task and collaboration tool that brings the right people, information and tools together to get work",
      icon: "📋",
      color: "text-blue-600",
    },
    {
      name: "Web Hooks",
      description: "Real-time messaging for teams and individuals with chat, voice calls and video calls",
      icon: "🔗",
      color: "text-orange-500",
    },
    {
      name: "Facebook",
      description: "Business Pages allows to create a video marketing and reach that it leads to sales, reach friends",
      icon: "📘",
      color: "text-blue-600",
    },
    {
      name: "Microsoft Teams",
      description:
        "Communication and file sharing tool that brings the right people, information and tools together to get work",
      icon: "👥",
      color: "text-purple-600",
    },
    {
      name: "Zapier",
      description: "Zapier lets you connect Google Meet with thousands of the most popular apps, so you can",
      icon: "⚡",
      color: "text-orange-500",
    },
    {
      name: "Zoom",
      description: "Video Chat Meetings for personal or video Chat Meetings, offering integrated broadcasting for",
      icon: "📹",
      color: "text-blue-500",
    },
    {
      name: "WhatsApp",
      description: "Business messaging and customer support through WhatsApp Business API integration",
      icon: "💬",
      color: "text-green-500",
    },
    {
      name: "HubSpot",
      description: "Marketing automation and CRM integration for better customer relationship management",
      icon: "🎯",
      color: "text-orange-500",
    },
    {
      name: "Shopify",
      description: "E-commerce platform integration for seamless online store management and automation",
      icon: "🛍️",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Solutions
          </h2>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0`}>
                    {integration.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight truncate">
                      {integration.name}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore All Use Cases For Your Business
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;