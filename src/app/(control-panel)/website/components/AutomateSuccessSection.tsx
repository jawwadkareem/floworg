
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid, Button } from "@mui/material"
// import { CheckCircle } from "@mui/icons-material"
// import { motion } from "framer-motion"

// const AutomateSuccessSection: React.FC = () => {
//   const leftFeatures = [
//     {
//       title: "Omni-Channel AI Communication Hub",
//       description:
//         "Manage conversations across 16+ channels including advanced Webchat, Social Media, and WhatsApp (Business API & Web-Based Automation) – all from one unified bot that adapts per channel, powered by a single smart bot that runs your entire business.",
//     },
//     {
//       title: "No-Code Builder for Smart Bots & Advanced Workflows",
//       description:
//         "Design powerful bots and automation flows using an intuitive drag-and-drop builder, supporting complex logic, forms, file uploads, PDFs, audio, images, and more – all with zero code.",
//     },
//     {
//       title: "Custom CRM + Smart Tickets + Automated RPA Workflows",
//       description:
//         "Modular CRM tailored to your business brand, with built-in smart ticket management, meeting scheduling, and Smart RPA automations that eliminate repetitive tasks. Includes advanced Live Chat with role-based and agent-level permissions & global contacts management.",
//     },
//     {
//       title: "Enterprise-Grade Security + Private Cloud Hosting",
//       description:
//         "Hosted on Amazon AWS, with Database Private Tenant, Whitelabel IP, layered permissions, team-based access, and full compliance with GDPR, ISO, SOC2, and global privacy standards.",
//     },
//     {
//       title: "Flexible, Scalable & E-Commerce Ready",
//       description:
//         "Whether you're a startup, global brand, or public agency – Floworg is fast to deploy, fully scalable, supports international payment gateways, and integrates seamlessly with your online store.",
//     },
//   ]

//   const rightFeatures = [
//     {
//       title: "Multilingual NLP & VoiceBot with Smart IVR",
//       description:
//         "An AI-powered NLP bot that understands natural language, responds like a human, and supports multiple languages, voice tonality, and seamless integration with interactive IVR systems – creating truly natural conversations.",
//     },
//     {
//       title: "ChatGPT Integration & 9,000+ Seamless No-Code Connections",
//       description:
//         "Effortlessly connect to Zapier, Make, Pabbly, CRMs, cloud platforms, and e-commerce systems – with built-in ChatGPT capabilities, plus Full Open API and Webhooks for flexible, scalable integrations.",
//     },
//     {
//       title: "BI Dashboards, Contact Management & Document Automation",
//       description:
//         "Track the full customer journey with real-time dashboards, context-aware logic, and automatic generation and delivery of personalized files, forms, and data-driven reports.",
//     },
//     {
//       title: "Full Developer Toolkit + Custom Widgets & Mini-Apps",
//       description:
//         "Built for developers: Open API, Webhooks, HTTP Requests, SMTP, JSON, Java, Custom JS Functions, Live Chat API Channel, and flexible SDK components for building custom integrations and embedded tools.",
//     },
//     {
//       title: "Templates, Training & Global Enterprise Support",
//       description:
//         "Gain access to hundreds of ready-to-use templates, free video courses, full documentation, and expert onboarding, consulting, implementation, and globally certified support – so you're never alone.",
//     },
//   ]

//   return (
//     <Box
//       sx={{
//         py: 8,
//         background: "linear-gradient(135deg, #E8F5E8 0%, #F0E6FF 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Box
//               sx={{
//                 display: "inline-block",
//                 background: "linear-gradient(90deg, #FF9800, #00D4AA)",
//                 color: "white",
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: 25,
//                 fontSize: "1rem",
//                 fontWeight: 600,
//                 mb: 4,
//                 boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               Your Automation AI. Actually Here
//             </Box>

//             <Typography
//               variant="h1"
//               sx={{
//                 fontSize: { xs: "2.5rem", md: "3.5rem" },
//                 fontWeight: 700,
//                 color: "#2C3E50",
//                 mb: 3,
//                 lineHeight: 1.2,
//               }}
//             >
//               <Box component="span" sx={{ color: "#00D4AA" }}>
//                 Automate
//               </Box>{" "}
//               Your{" "}
//               <Box component="span" sx={{ color: "#00D4AA" }}>
//                 Success
//               </Box>
//               .
//               <br />
//               Scale Smarter. Grow Faster.
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#2C3E50",
//                 maxWidth: "600px",
//                 mx: "auto",
//                 lineHeight: 1.6,
//                 mb: 6,
//                 fontSize: "1.1rem",
//                 fontWeight: 400,
//               }}
//             >
//               Stop planning for tomorrow. Automate your business strategy today and reach the next level System AI In
//               One — Faster & Smarter than ever.
//             </Typography>
//           </Box>
//         </motion.div>

//         <Grid container spacing={6} {...({} as any)}>
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <Box>
//               {leftFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       mb: 4,
//                       gap: 3,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 24,
//                         height: 24,
//                         borderRadius: "50%",
//                         backgroundColor: "#00D4AA",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0,
//                         mt: 0.5,
//                       }}
//                     >
//                       <CheckCircle
//                         sx={{
//                           color: "white",
//                           fontSize: 16,
//                         }}
//                       />
//                     </Box>
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 700,
//                           mb: 1.5,
//                           color: "#2C3E50",
//                           fontSize: "1.1rem",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {feature.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#6B7280",
//                           lineHeight: 1.6,
//                           fontSize: "0.95rem",
//                         }}
//                       >
//                         {feature.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </motion.div>
//               ))}
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6} {...({} as any)}>
//             <Box>
//               {rightFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       mb: 4,
//                       gap: 3,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 24,
//                         height: 24,
//                         borderRadius: "50%",
//                         backgroundColor: "#00D4AA",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0,
//                         mt: 0.5,
//                       }}
//                     >
//                       <CheckCircle
//                         sx={{
//                           color: "white",
//                           fontSize: 16,
//                         }}
//                       />
//                     </Box>
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 700,
//                           mb: 1.5,
//                           color: "#2C3E50",
//                           fontSize: "1.1rem",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {feature.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#6B7280",
//                           lineHeight: 1.6,
//                           fontSize: "0.95rem",
//                         }}
//                       >
//                         {feature.description}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </motion.div>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>

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
//                 backgroundColor: "#2C3E50",
//                 "&:hover": {
//                   backgroundColor: "#1A252F",
//                 },
//                 borderRadius: 25,
//                 px: 6,
//                 py: 2,
//                 fontSize: "1.1rem",
//                 fontWeight: 600,
//                 color: "white",
//                 boxShadow: "0 8px 30px rgba(44, 62, 80, 0.3)",
//                 textTransform: "none",
//                 mb: 2,
//               }}
//             >
//               Try{" "}
//               <Box component="span" sx={{ color: "#00D4AA", mx: 1 }}>
//                 Floworg AI
//               </Box>
//               . For Free
//             </Button>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#6B7280",
//                 fontSize: "0.9rem",
//               }}
//             >
//               No credit card required. Start in minutes.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   )
// }

// export default AutomateSuccessSection

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AutomateSuccessSection: React.FC = () => {
  const leftFeatures = [
    {
      title: "Omni-Channel AI Communication Hub",
      description:
        "Manage conversations across 16+ channels including advanced Webchat, Social Media, and WhatsApp (Business API & Web-Based Automation) – all from one unified bot that adapts per channel, powered by a single smart bot that runs your entire business.",
    },
    {
      title: "No-Code Builder for Smart Bots & Advanced Workflows",
      description:
        "Design powerful bots and automation flows using an intuitive drag-and-drop builder, supporting complex logic, forms, file uploads, PDFs, audio, images, and more – all with zero code.",
    },
    {
      title: "Custom CRM + Smart Tickets + Automated RPA Workflows",
      description:
        "Modular CRM tailored to your business brand, with built-in smart ticket management, meeting scheduling, and Smart RPA automations that eliminate repetitive tasks. Includes advanced Live Chat with role-based and agent-level permissions & global contacts management.",
    },
    {
      title: "Enterprise-Grade Security + Private Cloud Hosting",
      description:
        "Hosted on Amazon AWS, with Database Private Tenant, Whitelabel IP, layered permissions, team-based access, and full compliance with GDPR, ISO, SOC2, and global privacy standards.",
    },
    {
      title: "Flexible, Scalable & E-Commerce Ready",
      description:
        "Whether you're a startup, global brand, or public agency – Floworg is fast to deploy, fully scalable, supports international payment gateways, and integrates seamlessly with your online store.",
    },
  ];

  const rightFeatures = [
    {
      title: "Multilingual NLP & VoiceBot with Smart IVR",
      description:
        "An AI-powered NLP bot that understands natural language, responds like a human, and supports multiple languages, voice tonality, and seamless integration with interactive IVR systems – creating truly natural conversations.",
    },
    {
      title: "ChatGPT Integration & 9,000+ Seamless No-Code Connections",
      description:
        "Effortlessly connect to Zapier, Make, Pabbly, CRMs, cloud platforms, and e-commerce systems – with built-in ChatGPT capabilities, plus Full Open API and Webhooks for flexible, scalable integrations.",
    },
    {
      title: "BI Dashboards, Contact Management & Document Automation",
      description:
        "Track the full customer journey with real-time dashboards, context-aware logic, and automatic generation and delivery of personalized files, forms, and data-driven reports.",
    },
    {
      title: "Full Developer Toolkit + Custom Widgets & Mini-Apps",
      description:
        "Built for developers: Open API, Webhooks, HTTP Requests, SMTP, JSON, Java, Custom JS Functions, Live Chat API Channel, and flexible SDK components for building custom integrations and embedded tools.",
    },
    {
      title: "Templates, Training & Global Enterprise Support",
      description:
        "Gain access to hundreds of ready-to-use templates, free video courses, full documentation, and expert onboarding, consulting, implementation, and globally certified support – so you're never alone.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Your Automation AI. Actually Here
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-teal-500">Automate</span> Your{' '}
            <span className="text-teal-500">Success</span>.
            <br />
            Scale Smarter. Grow Faster.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop planning for tomorrow. Automate your business strategy today and reach the next level System AI In
            One — Faster & Smarter than ever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            Try <span className="text-teal-400 mx-1">Floworg AI</span> For Free
          </button>
          <p className="text-gray-500 text-sm mt-3">
            No credit card required. Start in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomateSuccessSection;