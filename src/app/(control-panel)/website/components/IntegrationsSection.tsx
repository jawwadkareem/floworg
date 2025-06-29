

// "use client"

// import type React from "react"
// import { useRef, useEffect } from "react"
// import { Box, Typography, Container, Grid, Button } from "@mui/material"
// import { motion } from "framer-motion"

// const IntegrationsSection: React.FC = () => {
//   const orbitRef1 = useRef<HTMLDivElement>(null)
//   const orbitRef2 = useRef<HTMLDivElement>(null)
//   const orbitRef3 = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const animateOrbit = (ref: React.RefObject<HTMLDivElement>, duration: number) => {
//       if (ref.current) {
//         ref.current.style.animation = `rotateArc ${duration}s linear infinite`
//       }
//     }

//     // Add CSS animation for semi-circular movement
//     const style = document.createElement("style")
//     style.textContent = `
//       @keyframes rotateArc {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//     `
//     document.head.appendChild(style)

//     animateOrbit(orbitRef1, 30) // Outer arc - slowest
//     animateOrbit(orbitRef2, 25) // Middle arc
//     animateOrbit(orbitRef3, 20) // Inner arc - fastest

//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style)
//       }
//     }
//   }, [])

//   const IconComponent = ({ icon, color, name }: { icon: string; color: string; name: string }) => (
//     <Box
//       sx={{
//         width: 50,
//         height: 50,
//         backgroundColor: "white",
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "1.5rem",
//         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//         border: `2px solid ${color}`,
//         cursor: "pointer",
//         transition: "all 0.3s ease",
//         "&:hover": {
//           transform: "scale(1.1)",
//           boxShadow: `0 6px 20px ${color}40`,
//         },
//       }}
//       title={name}
//     >
//       {icon}
//     </Box>
//   )

//   return (
//     <Box sx={{ py: 8, backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 6 }}>
//           {/* Left Side - Headings */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
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
//                 Over 9,000 Leading Integrations
//               </Typography>

//               <Typography
//                 variant="h4"
//                 sx={{
//                   mb: 0,
//                   fontSize: { xs: "1.5rem", md: "2rem" },
//                   fontWeight: 600,
//                   color: "#6C757D",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 One-Click To Integration with Favorite Apps and Tools
//               </Typography>
//             </motion.div>
//           </Grid>

//           {/* Right Side - Description and Button */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 4,
//                   color: "#6C757D",
//                   lineHeight: 1.7,
//                   fontSize: "1rem",
//                   mt: 2,
//                 }}
//               >
//                 Achieve seamless integration with your favorite apps and tools through a single click, enhancing
//                 efficiency and functionality of our SaaS-based project.
//               </Typography>

//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: "#00D4AA",
//                   "&:hover": {
//                     backgroundColor: "#00B894",
//                     transform: "translateY(-2px)",
//                     boxShadow: "0 8px 25px rgba(0, 212, 170, 0.3)",
//                   },
//                   borderRadius: 25,
//                   px: 4,
//                   py: 1.5,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   boxShadow: "0 4px 15px rgba(0, 212, 170, 0.2)",
//                   transition: "all 0.3s ease",
//                   textTransform: "none",
//                 }}
//               >
//                 Start Your Automation Journey
//               </Button>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Semi-circular Arcs with Moving Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <Box
//             sx={{
//               position: "relative",
//               height: 450,
//               display: "flex",
//               alignItems: "flex-start",
//               justifyContent: "center",
//             }}
//           >
//             {/* SVG for semi-circular arcs */}
//             <svg
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 zIndex: 1,
//               }}
//               viewBox="0 0 800 450"
//               fill="none"
//             >
//               {/* Outer semi-circular arc */}
//               <path
//                 d="M 100 300 A 300 300 0 0 1 700 300"
//                 stroke="rgba(66, 133, 244, 0.3)"
//                 strokeWidth="2"
//                 fill="none"
//               />
//               {/* Middle semi-circular arc */}
//               <path
//                 d="M 150 280 A 250 250 0 0 1 650 280"
//                 stroke="rgba(66, 133, 244, 0.3)"
//                 strokeWidth="2"
//                 fill="none"
//               />
//               {/* Inner semi-circular arc */}
//               <path
//                 d="M 200 260 A 200 200 0 0 1 600 260"
//                 stroke="rgba(66, 133, 244, 0.3)"
//                 strokeWidth="2"
//                 fill="none"
//               />
//             </svg>

//             {/* Outer Arc Moving Icons */}
//             <Box
//               ref={orbitRef1}
//               sx={{
//                 position: "absolute",
//                 width: 600,
//                 height: 300,
//                 top: 0,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 transformOrigin: "50% 100%",
//               }}
//             >
//               {/* Google */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 0px), calc(0% + -300px))",
//                 }}
//               >
//                 <IconComponent icon="🔍" color="#4285F4" name="Google" />
//               </Box>
//               {/* Figma */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 212px), calc(0% + -212px))",
//                 }}
//               >
//                 <IconComponent icon="🎨" color="#F24E1E" name="Figma" />
//               </Box>
//               {/* Webflow */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 260px), calc(0% + -100px))",
//                 }}
//               >
//                 <IconComponent icon="W" color="#4353FF" name="Webflow" />
//               </Box>
//               {/* ClickUp */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + -260px), calc(0% + -100px))",
//                 }}
//               >
//                 <IconComponent icon="📋" color="#7B68EE" name="ClickUp" />
//               </Box>
//               {/* Discord */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + -212px), calc(0% + -212px))",
//                 }}
//               >
//                 <IconComponent icon="🎮" color="#5865F2" name="Discord" />
//               </Box>
//             </Box>

//             {/* Middle Arc Moving Icons */}
//             <Box
//               ref={orbitRef2}
//               sx={{
//                 position: "absolute",
//                 width: 500,
//                 height: 250,
//                 top: 20,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 transformOrigin: "50% 100%",
//               }}
//             >
//               {/* Slack */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + -177px), calc(0% + -177px))",
//                 }}
//               >
//                 <IconComponent icon="💬" color="#4A154B" name="Slack" />
//               </Box>
//               {/* Trello */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 0px), calc(0% + -250px))",
//                 }}
//               >
//                 <IconComponent icon="📊" color="#0079BF" name="Trello" />
//               </Box>
//               {/* Zoom */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 177px), calc(0% + -177px))",
//                 }}
//               >
//                 <IconComponent icon="📹" color="#2D8CFF" name="Zoom" />
//               </Box>
//               {/* Dropbox */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 220px), calc(0% + -80px))",
//                 }}
//               >
//                 <IconComponent icon="📦" color="#0061FF" name="Dropbox" />
//               </Box>
//             </Box>

//             {/* Inner Arc Moving Icons */}
//             <Box
//               ref={orbitRef3}
//               sx={{
//                 position: "absolute",
//                 width: 400,
//                 height: 200,
//                 top: 40,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 transformOrigin: "50% 100%",
//               }}
//             >
//               {/* Twitter */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + -141px), calc(0% + -141px))",
//                 }}
//               >
//                 <IconComponent icon="🐦" color="#1DA1F2" name="Twitter" />
//               </Box>
//               {/* Instagram */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 0px), calc(0% + -200px))",
//                 }}
//               >
//                 <IconComponent icon="📷" color="#E4405F" name="Instagram" />
//               </Box>
//               {/* LinkedIn */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   left: "50%",
//                   bottom: 0,
//                   transform: "translate(calc(-50% + 141px), calc(0% + -141px))",
//                 }}
//               >
//                 <IconComponent icon="💼" color="#0A66C2" name="LinkedIn" />
//               </Box>
//             </Box>

//             {/* Center Buttons - Positioned below the arcs */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 50,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 display: "flex",
//                 gap: 2,
//                 zIndex: 10,
//               }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: "#4285F4",
//                   "&:hover": { backgroundColor: "#3367D6" },
//                   borderRadius: 2,
//                   px: 3,
//                   py: 1.5,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   textTransform: "none",
//                   boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
//                 }}
//               >
//                 Get Started
//               </Button>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: "#4285F4",
//                   "&:hover": { backgroundColor: "#3367D6" },
//                   borderRadius: 2,
//                   px: 3,
//                   py: 1.5,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   textTransform: "none",
//                   boxShadow: "0 4px 15px rgba(66, 133, 244, 0.2)",
//                 }}
//               >
//                 Contact Us
//               </Button>
//             </Box>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   )
// }

// export default IntegrationsSection


import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection: React.FC = () => {
  const orbitRef1 = useRef<HTMLDivElement>(null);
  const orbitRef2 = useRef<HTMLDivElement>(null);
  const orbitRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateOrbit = (ref: React.RefObject<HTMLDivElement>, duration: number) => {
      if (ref.current) {
        ref.current.style.animation = `rotateArc ${duration}s linear infinite`;
      }
    };

    // Add CSS animation for semi-circular movement
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotateArc {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    animateOrbit(orbitRef1, 30); // Outer arc - slowest
    animateOrbit(orbitRef2, 25); // Middle arc
    animateOrbit(orbitRef3, 20); // Inner arc - fastest

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const IconComponent = ({ icon, color, name }: { icon: string; color: string; name: string }) => (
    <div
      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
      style={{ 
        border: `2px solid ${color}`,
        boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`,
      }}
      title={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 6px 20px ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 15px rgba(0, 0, 0, 0.1)`;
      }}
    >
      {icon}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Headings */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Over 9,000 Leading Integrations
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-600 leading-tight">
                One-Click To Integration with Favorite Apps and Tools
              </h3>
            </motion.div>
          </div>

          {/* Right Side - Description and Button */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-base mb-8 mt-4">
                Achieve seamless integration with your favorite apps and tools through a single click, enhancing
                efficiency and functionality of our SaaS-based project.
              </p>

              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Start Your Automation Journey
              </button>
            </motion.div>
          </div>
        </div>

        {/* Semi-circular Arcs with Moving Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 flex items-start justify-center">
            {/* SVG for semi-circular arcs */}
            <svg
              className="absolute top-0 left-0 w-full h-full z-10"
              viewBox="0 0 800 450"
              fill="none"
            >
              {/* Outer semi-circular arc */}
              <path
                d="M 100 300 A 300 300 0 0 1 700 300"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              {/* Middle semi-circular arc */}
              <path
                d="M 150 280 A 250 250 0 0 1 650 280"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
              {/* Inner semi-circular arc */}
              <path
                d="M 200 260 A 200 200 0 0 1 600 260"
                stroke="rgba(66, 133, 244, 0.3)"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Outer Arc Moving Icons */}
            <div
              ref={orbitRef1}
              className="absolute w-96 h-48 top-0 left-1/2 transform -translate-x-1/2"
              style={{ transformOrigin: "50% 100%" }}
            >
              {/* Google */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-0 translate-y-[-300px]">
                <IconComponent icon="🔍" color="#4285F4" name="Google" />
              </div>
              {/* Figma */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[212px] translate-y-[-212px]">
                <IconComponent icon="🎨" color="#F24E1E" name="Figma" />
              </div>
              {/* Webflow */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[260px] translate-y-[-100px]">
                <IconComponent icon="W" color="#4353FF" name="Webflow" />
              </div>
              {/* ClickUp */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[-260px] translate-y-[-100px]">
                <IconComponent icon="📋" color="#7B68EE" name="ClickUp" />
              </div>
              {/* Discord */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[-212px] translate-y-[-212px]">
                <IconComponent icon="🎮" color="#5865F2" name="Discord" />
              </div>
            </div>

            {/* Middle Arc Moving Icons */}
            <div
              ref={orbitRef2}
              className="absolute w-80 h-40 top-5 left-1/2 transform -translate-x-1/2"
              style={{ transformOrigin: "50% 100%" }}
            >
              {/* Slack */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[-177px] translate-y-[-177px]">
                <IconComponent icon="💬" color="#4A154B" name="Slack" />
              </div>
              {/* Trello */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-0 translate-y-[-250px]">
                <IconComponent icon="📊" color="#0079BF" name="Trello" />
              </div>
              {/* Zoom */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[177px] translate-y-[-177px]">
                <IconComponent icon="📹" color="#2D8CFF" name="Zoom" />
              </div>
              {/* Dropbox */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[220px] translate-y-[-80px]">
                <IconComponent icon="📦" color="#0061FF" name="Dropbox" />
              </div>
            </div>

            {/* Inner Arc Moving Icons */}
            <div
              ref={orbitRef3}
              className="absolute w-64 h-32 top-10 left-1/2 transform -translate-x-1/2"
              style={{ transformOrigin: "50% 100%" }}
            >
              {/* Twitter */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[-141px] translate-y-[-141px]">
                <IconComponent icon="🐦" color="#1DA1F2" name="Twitter" />
              </div>
              {/* Instagram */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-0 translate-y-[-200px]">
                <IconComponent icon="📷" color="#E4405F" name="Instagram" />
              </div>
              {/* LinkedIn */}
              <div className="absolute left-1/2 bottom-0 transform translate-x-[141px] translate-y-[-141px]">
                <IconComponent icon="💼" color="#0A66C2" name="LinkedIn" />
              </div>
            </div>

            {/* Center Buttons - Positioned below the arcs */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;