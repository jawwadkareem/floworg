
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid } from "@mui/material"
// import { motion } from "framer-motion"

// const BenefitsSection: React.FC = () => {
//   const benefits = [
//     {
//       icon: "🤖",
//       title: "AI Automation",
//       description:
//         "Our AI continuously streamlines repetitive tasks, reduces manual effort, and enhances productivity with intelligent workflows.",
//       color: "#4285F4",
//     },
//     {
//       icon: "💡",
//       title: "Smart Insights",
//       description:
//         "Leverage AI-powered analytics to gain deep insights into business trends and customer behavior. Our advanced data.",
//       color: "#8B5CF6",
//     },
//     {
//       icon: "🎯",
//       title: "Adaptive Learning",
//       description:
//         "Our AI continuously evolves by learning from user interactions and data patterns. With adaptive machine learning system.",
//       color: "#06B6D4",
//     },
//     {
//       icon: "🔗",
//       title: "Seamless Integration",
//       description:
//         "Easily connect our AI software with your existing tools, from CRM and ERP systems to marketing platforms, from social to integrations.",
//       color: "#10B981",
//     },
//     {
//       icon: "🛡️",
//       title: "Scalable Security",
//       description:
//         "We prioritize robust security and scalability, ensuring encrypted data protection and compliance with global standards.",
//       color: "#F59E0B",
//     },
//     {
//       icon: "🚀",
//       title: "Future-Ready",
//       description:
//         "Stay ahead with cutting-edge AI solutions built for long-term success. Our software evolves with emerging technologies.",
//       color: "#EF4444",
//     },
//   ]

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 6 }}>
//           {/* Left Side - Benefits Heading */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "3rem", md: "4rem" },
//                   fontWeight: 700,
//                   color: "#2C3E50",
//                   lineHeight: 1.1,
//                 }}
//               >
//                 Benefits
//               </Typography>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Description */}
//           <Grid item xs={12} md={8} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ mb: 2 }}>
//                 <Box
//                   sx={{
//                     display: "inline-block",
//                     backgroundColor: "#F3E8FF",
//                     color: "#8B5CF6",
//                     px: 2,
//                     py: 0.5,
//                     borderRadius: 20,
//                     fontSize: "0.75rem",
//                     fontWeight: 600,
//                     mb: 2,
//                   }}
//                 >
//                   ✨ Why Choose Us
//                 </Box>
//               </Box>

//               <Typography
//                 variant="h3"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: "1.75rem", md: "2.25rem" },
//                   fontWeight: 600,
//                   color: "#2C3E50",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 We Deliver transform operations through intelligent automation.
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#6B7280",
//                   lineHeight: 1.6,
//                   fontSize: "1rem",
//                   maxWidth: "600px",
//                 }}
//               >
//                 We specialize in providing AI-driven solutions that help businesses automate, optimize, and scale
//                 effectively with state-of-the-art security, seamless integrations, and adaptive AI.
//               </Typography>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Benefits Grid */}
//         <Grid container spacing={4}>
//           {benefits.map((benefit, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Box sx={{ textAlign: "center", p: 3 }}>
//                   {/* Icon */}
//                   <Box
//                     sx={{
//                       width: 80,
//                       height: 80,
//                       borderRadius: "50%",
//                       backgroundColor: benefit.color,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mx: "auto",
//                       mb: 3,
//                       fontSize: "2rem",
//                     }}
//                   >
//                     {benefit.icon}
//                   </Box>

//                   {/* Title */}
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 2,
//                       fontWeight: 600,
//                       color: "#2C3E50",
//                       fontSize: "1.1rem",
//                     }}
//                   >
//                     {benefit.title}
//                   </Typography>

//                   {/* Description */}
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "#6B7280",
//                       lineHeight: 1.6,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     {benefit.description}
//                   </Typography>
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default BenefitsSection


import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "🤖",
      title: "AI Automation",
      description:
        "Our AI continuously streamlines repetitive tasks, reduces manual effort, and enhances productivity with intelligent workflows.",
      color: "bg-blue-500",
    },
    {
      icon: "💡",
      title: "Smart Insights",
      description:
        "Leverage AI-powered analytics to gain deep insights into business trends and customer behavior. Our advanced data.",
      color: "bg-purple-500",
    },
    {
      icon: "🎯",
      title: "Adaptive Learning",
      description:
        "Our AI continuously evolves by learning from user interactions and data patterns. With adaptive machine learning system.",
      color: "bg-cyan-500",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description:
        "Easily connect our AI software with your existing tools, from CRM and ERP systems to marketing platforms, from social to integrations.",
      color: "bg-green-500",
    },
    {
      icon: "🛡️",
      title: "Scalable Security",
      description:
        "We prioritize robust security and scalability, ensuring encrypted data protection and compliance with global standards.",
      color: "bg-yellow-500",
    },
    {
      icon: "🚀",
      title: "Future-Ready",
      description:
        "Stay ahead with cutting-edge AI solutions built for long-term success. Our software evolves with emerging technologies.",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Side - Benefits Heading */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-none">
                Benefits
              </h1>
            </motion.div>
          </div>

          {/* Right Side - Description */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  ✨ Why Choose Us
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 leading-tight">
                We Deliver transform operations through intelligent automation.
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
                We specialize in providing AI-driven solutions that help businesses automate, optimize, and scale
                effectively with state-of-the-art security, seamless integrations, and adaptive AI.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg`}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;