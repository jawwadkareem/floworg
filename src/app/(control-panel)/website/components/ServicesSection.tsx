
// "use client"

// import type React from "react"
// import { Box, Typography, Container, Grid } from "@mui/material"
// import {
//   LightbulbOutlined,
//   NotificationsOutlined,
//   DescriptionOutlined,
//   LocalFireDepartmentOutlined,
// } from "@mui/icons-material"
// import { motion } from "framer-motion"

// const ServicesSection: React.FC = () => {
//   const services = [
//     {
//       icon: <LightbulbOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Authentication",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: true,
//       decorationPosition: "top-left",
//     },
//     {
//       icon: <NotificationsOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Voice",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: true,
//       decorationPosition: "top-right",
//     },
//     {
//       icon: <NotificationsOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Voice",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//     {
//       icon: <DescriptionOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "API",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: true,
//       decorationPosition: "bottom-left",
//     },
//     {
//       icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Gated Flow",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//     {
//       icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Gated Flow",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//     {
//       icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Gated Flow",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//     {
//       icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Gated Flow",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//     {
//       icon: <LocalFireDepartmentOutlined sx={{ fontSize: 32, color: "#1ad7ad" }} />,
//       title: "Gated Flow",
//       description: "Many packages and web page editors now Lorem.",
//       hasDecoration: false,
//     },
//   ]

//   const getDecorationElement = (position: string) => {
//     const baseStyles = {
//       position: "absolute" as const,
//       width: 0,
//       height: 0,
//       zIndex: 0,
//     }

//     switch (position) {
//       case "top-left":
//         return (
//           <Box
//             sx={{
//               ...baseStyles,
//               top: 0,
//               left: 0,
//               borderTop: "40px solid #1ad7ad",
//               borderRight: "40px solid transparent",
//             }}
//           />
//         )
//       case "top-right":
//         return (
//           <Box
//             sx={{
//               ...baseStyles,
//               top: 0,
//               right: 0,
//               borderTop: "60px solid #1ad7ad",
//               borderLeft: "60px solid transparent",
//             }}
//           />
//         )
//       case "bottom-left":
//         return (
//           <Box
//             sx={{
//               ...baseStyles,
//               bottom: 0,
//               left: 0,
//               borderBottom: "50px solid #1ad7ad",
//               borderRight: "50px solid transparent",
//             }}
//           />
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 6,
//               fontSize: { xs: "2rem", md: "2.5rem" },
//               fontWeight: 600,
//               color: "#2C3E50",
//             }}
//           >
//             <Box component="span" sx={{ color: "#00D4AA" }}>
//               Floworg
//             </Box>{" "}
//             Services
//           </Typography>
//         </motion.div>

//         {/* Services Grid */}
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor: "white",
//                     borderRadius: 2,
//                     p: 4,
//                     height: "100%",
//                     position: "relative",
//                     overflow: "hidden",
//                     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
//                     },
//                   }}
//                 >
//                   {/* Decorative Elements */}
//                   {service.hasDecoration && getDecorationElement(service.decorationPosition || "")}

//                   {/* Content */}
//                   <Box sx={{ position: "relative", zIndex: 1 }}>
//                     {/* Icon */}
//                     <Box
//                       sx={{
//                         mb: 3,
//                         display: "flex",
//                         alignItems: "flex-start",
//                       }}
//                     >
//                       {service.icon}
//                     </Box>

//                     {/* Title */}
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 600,
//                         color: "#2C3E50",
//                         fontSize: "1.1rem",
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     {/* Description */}
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#6B7280",
//                         lineHeight: 1.6,
//                         fontSize: "0.9rem",
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default ServicesSection

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Bell, FileText, Flame } from 'lucide-react';
import HoverCard from './HoverCard';
const ServicesSection: React.FC = () => {
  const services = [
    
    {
      icon: <HoverCard />,
      // title: "Authentication",
      // description: "Many packages and web page editors now Lorem.",
      // hasDecoration: false,
      // decorationPosition: "top-left",
    },
    {
      icon:<HoverCard/>
    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
    {
      icon:<HoverCard/>

    },
  ];

  const getDecorationElement = (position: string) => {
    switch (position) {
      case "top-left":
        return (
          <div 
            className="absolute top-0 left-0 w-0 h-0 z-0"
            style={{
              borderTop: "40px solid #1ad7ad",
              borderRight: "40px solid transparent",
            }}
          />
        );
      case "top-right":
        return (
          <div 
            className="absolute top-0 right-0 w-0 h-0 z-0"
            style={{
              borderTop: "60px solid #1ad7ad",
              borderLeft: "60px solid transparent",
            }}
          />
        );
      case "bottom-left":
        return (
          <div 
            className="absolute bottom-0 left-0 w-0 h-0 z-0"
            style={{
              borderBottom: "50px solid #1ad7ad",
              borderRight: "50px solid transparent",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            <span className="text-teal-500">Floworg</span> Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
             

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex items-start">
                    {service.icon}
                  </div>

                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
