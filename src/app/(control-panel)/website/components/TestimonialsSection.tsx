
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Box, Typography, Container, Grid, IconButton, Avatar } from "@mui/material"
// import { ChevronLeft, ChevronRight } from "@mui/icons-material"
// import { motion } from "framer-motion"

// const TestimonialsSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const testimonials = [
//     {
//       name: "Hanna Donin",
//       role: "Creative Expert",
//       avatar: "/placeholder.svg?height=80&width=80",
//       quote:
//         "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
//     },
//     {
//       name: "Hanna Donin",
//       role: "Creative Expert",
//       avatar: "/placeholder.svg?height=80&width=80",
//       quote:
//         "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
//     },
//   ]

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
//   }

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
//   }

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={6} alignItems="center">
//           {/* Left Side - Header and Navigation */}
//           <Grid item xs={12} md={5} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="overline"
//                 sx={{
//                   color: "#8B5CF6",
//                   fontSize: "0.875rem",
//                   fontWeight: 600,
//                   letterSpacing: 2,
//                   mb: 2,
//                   display: "block",
//                 }}
//               >
//                 TESTIMONIAL
//               </Typography>

//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: "2.5rem", md: "3.5rem" },
//                   fontWeight: 700,
//                   lineHeight: 1.2,
//                 }}
//               >
//                 <Box component="span" sx={{ color: "#8B5CF6" }}>
//                   What
//                 </Box>{" "}
//                 <Box component="span" sx={{ color: "#2C3E50" }}>
//                   Our
//                   <br />
//                   Customer Says
//                 </Box>
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#6B7280",
//                   lineHeight: 1.6,
//                   fontSize: "1rem",
//                   mb: 4,
//                   maxWidth: "400px",
//                 }}
//               >
//                 It is a long established fact content of a page when looking at its layout.
//               </Typography>

//               {/* Navigation Arrows */}
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <IconButton
//                   onClick={handlePrevious}
//                   sx={{
//                     width: 50,
//                     height: 50,
//                     border: "2px solid #E5E7EB",
//                     borderRadius: "50%",
//                     color: "#6B7280",
//                     "&:hover": {
//                       borderColor: "#8B5CF6",
//                       color: "#8B5CF6",
//                       backgroundColor: "rgba(139, 92, 246, 0.1)",
//                     },
//                   }}
//                 >
//                   <ChevronLeft />
//                 </IconButton>
//                 <IconButton
//                   onClick={handleNext}
//                   sx={{
//                     width: 50,
//                     height: 50,
//                     border: "2px solid #E5E7EB",
//                     borderRadius: "50%",
//                     color: "#6B7280",
//                     "&:hover": {
//                       borderColor: "#8B5CF6",
//                       color: "#8B5CF6",
//                       backgroundColor: "rgba(139, 92, 246, 0.1)",
//                     },
//                   }}
//                 >
//                   <ChevronRight />
//                 </IconButton>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Testimonials */}
//           <Grid item xs={12} md={7} {...({} as any)}>
//             <Grid container spacing={3}>
//               {testimonials.map((testimonial, index) => (
//                 <Grid item xs={12} sm={6} key={index} {...({} as any)}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     <Box
//                       sx={{
//                         backgroundColor: "white",
//                         borderRadius: 3,
//                         p: 4,
//                         height: "100%",
//                         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//                         position: "relative",
//                         "&:hover": {
//                           boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//                         },
//                         transition: "all 0.3s ease",
//                       }}
//                     >
//                       {/* Quote Text */}
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#9CA3AF",
//                           fontStyle: "italic",
//                           lineHeight: 1.6,
//                           mb: 4,
//                           fontSize: "0.95rem",
//                         }}
//                       >
//                         "{testimonial.quote}"
//                       </Typography>

//                       {/* Profile Section */}
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Avatar
//                           src={testimonial.avatar}
//                           sx={{
//                             width: 60,
//                             height: 60,
//                             border: "3px solid #F3F4F6",
//                           }}
//                         />
//                         <Box sx={{ flex: 1 }}>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               fontWeight: 600,
//                               color: "#2C3E50",
//                               fontSize: "1.1rem",
//                               mb: 0.5,
//                             }}
//                           >
//                             {testimonial.name}
//                           </Typography>
//                           <Typography
//                             variant="body2"
//                             sx={{
//                               color: "#9CA3AF",
//                               fontSize: "0.9rem",
//                             }}
//                           >
//                             {testimonial.role}
//                           </Typography>
//                         </Box>

//                         {/* Quote Icon */}
//                         <Box
//                           sx={{
//                             width: 40,
//                             height: 40,
//                             backgroundColor: "#8B5CF6",
//                             borderRadius: "50%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             flexShrink: 0,
//                           }}
//                         >
//                           <Typography
//                             sx={{
//                               color: "white",
//                               fontSize: "1.2rem",
//                               fontWeight: 600,
//                             }}
//                           >
//                             "
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default TestimonialsSection

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Hanna Donin",
      role: "Creative Expert",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
      quote:
        "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
    },
    {
      name: "John Smith",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80",
      quote:
        "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.",
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      content: 'Flowerq transformed our business operations completely. The automation workflows saved us countless hours and improved our efficiency by 250%. Highly recommended!',
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Header and Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
                TESTIMONIAL
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-purple-600">What</span>{" "}
                <span className="text-gray-800">
                  Our
                  <br />
                  Customer Says
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-md">
                It is a long established fact content of a page when looking at its layout.
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Testimonials */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials
  .slice(currentIndex, currentIndex + 2)
  .map((testimonial, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative">
        <p className="text-gray-400 italic leading-relaxed mb-8 text-sm">
          "{testimonial.quote || testimonial.content}"
        </p>
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-15 h-15 rounded-full border-3 border-gray-100"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </div>
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl font-semibold">"</span>
          </div>
        </div>
      </div>
    </motion.div>
))}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;