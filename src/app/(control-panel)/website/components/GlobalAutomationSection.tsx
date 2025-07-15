// import React, { useRef, useState } from 'react';
// import { Box, Typography, Container, Tooltip } from '@mui/material';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere, Ring, Html } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// const Globe: React.FC = () => {
//   const globeRef = useRef<THREE.Mesh>(null);
//   const ring1Ref = useRef<THREE.Mesh>(null);
//   const ring2Ref = useRef<THREE.Mesh>(null);
//   const ring3Ref = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.005;
//     }
//     if (ring1Ref.current) {
//       ring1Ref.current.rotation.x += 0.01;
//       ring1Ref.current.rotation.z += 0.005;
//     }
//     if (ring2Ref.current) {
//       ring2Ref.current.rotation.y += 0.008;
//       ring2Ref.current.rotation.z -= 0.003;
//     }
//     if (ring3Ref.current) {
//       ring3Ref.current.rotation.x -= 0.006;
//       ring3Ref.current.rotation.y += 0.004;
//     }
//   });

//   return (
//     <group>
//       {/* Main Globe */}
//       <Sphere ref={globeRef} args={[2, 64, 64]} position={[0, 0, 0]}>
//         <meshStandardMaterial
//           color="#1a1a2e"
//           wireframe
//           transparent
//           opacity={0.3}
//         />
//       </Sphere>

//       {/* Orbital Rings */}
//       <Ring ref={ring1Ref} args={[3, 3.1, 64]} rotation={[Math.PI / 2, 0, 0]}>
//         <meshStandardMaterial color="#00D4AA" transparent opacity={0.6} />
//       </Ring>

//       <Ring ref={ring2Ref} args={[3.5, 3.6, 64]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
//         <meshStandardMaterial color="#4ECDC4" transparent opacity={0.4} />
//       </Ring>

//       <Ring ref={ring3Ref} args={[4, 4.1, 64]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
//         <meshStandardMaterial color="#45B7D1" transparent opacity={0.3} />
//       </Ring>

//       {/* Interactive Icons */}
//       <IconPoint position={[2.5, 1, 1]} label="Analytics" />
//       <IconPoint position={[-2, 1.5, 1.5]} label="Security" />
//       <IconPoint position={[1.5, -2, 1]} label="API" />
//       <IconPoint position={[-1, -1.5, -2]} label="Cloud" />
//       <IconPoint position={[0, 2.5, 0]} label="Global" />
//     </group>
//   );
// };

// const IconPoint: React.FC<{ position: [number, number, number]; label: string }> = ({ position, label }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <group position={position}>
//       <Sphere
//         args={[0.1, 16, 16]}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <meshStandardMaterial
//           color={hovered ? "#FFD700" : "#00D4AA"}
//           emissive={hovered ? "#FFD700" : "#00D4AA"}
//           emissiveIntensity={hovered ? 0.5 : 0.2}
//         />
//       </Sphere>
//       {hovered && (
//         <Html>
//           <div
//             style={{
//               background: 'rgba(0, 0, 0, 0.8)',
//               color: 'white',
//               padding: '8px 12px',
//               borderRadius: '4px',
//               fontSize: '12px',
//               whiteSpace: 'nowrap',
//               transform: 'translate(-50%, -100%)',
//               marginTop: '-10px',
//             }}
//           >
//             {label}
//           </div>
//         </Html>
//       )}
//     </group>
//   );
// };

// const GlobalAutomationSection: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         backgroundColor: '#1a1a2e',
//         color: 'white',
//         minHeight: '80vh',
//         display: 'flex',
//         alignItems: 'center',
//       }}
//     >
//       <Container maxWidth="lg">
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
//               mb: 2,
//               fontSize: { xs: '1.8rem', md: '2.5rem' },
//               fontWeight: 600,
//             }}
//           >
//             Floworg AI Powers Global Automation - Across Channels, Devices & Data
//           </Typography>
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 6,
//               color: 'rgba(255, 255, 255, 0.8)',
//               maxWidth: '800px',
//               mx: 'auto',
//             }}
//           >
//             Floworg delivers personalized, conversational experiences, and data-driven automation
//           </Typography>
//         </motion.div>

//         <Box
//           sx={{
//             height: '500px',
//             width: '100%',
//             position: 'relative',
//           }}
//         >
//           <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} intensity={1} />
//             <pointLight position={[-10, -10, -10]} intensity={0.5} />
//             <Globe />
//           </Canvas>
//         </Box>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mt: 4 }}>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 maxWidth: '600px',
//                 mx: 'auto',
//                 lineHeight: 1.6,
//               }}
//             >
//               Experience the power of global automation with our interactive 3D visualization.
//               Hover over the connection points to explore different aspects of our platform.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default GlobalAutomationSection;
"use client"

import { left } from "@popperjs/core";
// import type React from "react"
// import { useRef, useState } from "react"
// import { Box, Typography, Container, Grid, Button } from "@mui/material"
// import { Canvas, useFrame } from "@react-three/fiber"
// // import { Sphere, Ring, Html } from "@react-three/drei"
// import { motion } from "framer-motion"
// import type * as THREE from "three"

// const Globe: React.FC = () => {
//   const globeRef = useRef<THREE.Mesh>(null)
//   const ring1Ref = useRef<THREE.Mesh>(null)
//   const ring2Ref = useRef<THREE.Mesh>(null)
//   const ring3Ref = useRef<THREE.Mesh>(null)

//   useFrame((state) => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.005
//     }
//     if (ring1Ref.current) {
//       ring1Ref.current.rotation.x += 0.01
//       ring1Ref.current.rotation.z += 0.005
//     }
//     if (ring2Ref.current) {
//       ring2Ref.current.rotation.y += 0.008
//       ring2Ref.current.rotation.z -= 0.003
//     }
//     if (ring3Ref.current) {
//       ring3Ref.current.rotation.x -= 0.006
//       ring3Ref.current.rotation.y += 0.004
//     }
//   })

//   return (
//     <group>
//       {/* Main Globe with dotted pattern */}
//       <Sphere ref={globeRef} args={[2.2, 64, 64]} position={[0, 0, 0]}>
//         <meshStandardMaterial color="#0a4d5c" wireframe transparent opacity={0.4} />
//       </Sphere>

//       {/* Inner glow sphere */}
//       <Sphere args={[2.1, 32, 32]} position={[0, 0, 0]}>
//         <meshStandardMaterial color="#00D4AA" transparent opacity={0.1} emissive="#00D4AA" emissiveIntensity={0.2} />
//       </Sphere>

//       {/* Orbital Rings */}
//       <Ring ref={ring1Ref} args={[3.2, 3.25, 64]} rotation={[Math.PI / 2, 0, 0]}>
//         <meshStandardMaterial color="#00D4AA" transparent opacity={0.8} emissive="#00D4AA" emissiveIntensity={0.3} />
//       </Ring>

//       <Ring ref={ring2Ref} args={[3.8, 3.85, 64]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
//         <meshStandardMaterial color="#4ECDC4" transparent opacity={0.6} emissive="#4ECDC4" emissiveIntensity={0.2} />
//       </Ring>

//       <Ring ref={ring3Ref} args={[4.4, 4.45, 64]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
//         <meshStandardMaterial color="#45B7D1" transparent opacity={0.4} emissive="#45B7D1" emissiveIntensity={0.1} />
//       </Ring>

//       {/* Interactive Icons */}
//       <IconPoint position={[2.8, 1.2, 1.2]} label="Analytics" icon="📊" />
//       <IconPoint position={[-2.5, 1.8, 1.8]} label="Security" icon="🔒" />
//       <IconPoint position={[1.8, -2.5, 1.2]} label="API" icon="🔗" />
//       <IconPoint position={[-1.5, -1.8, -2.2]} label="Cloud" icon="☁️" />
//       <IconPoint position={[0, 3, 0]} label="Global" icon="🌐" />
//       <IconPoint position={[2.2, 0, -2]} label="WWW" icon="🌍" />
//     </group>
//   )
// }

// const IconPoint: React.FC<{
//   position: [number, number, number]
//   label: string
//   icon: string
// }> = ({ position, label, icon }) => {
//   const [hovered, setHovered] = useState(false)

//   return (
//     <group position={position}>
//       <Sphere args={[0.15, 16, 16]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
//         <meshStandardMaterial
//           color={hovered ? "#FFD700" : "#00D4AA"}
//           emissive={hovered ? "#FFD700" : "#00D4AA"}
//           emissiveIntensity={hovered ? 0.8 : 0.4}
//           transparent
//           opacity={0.9}
//         />
//       </Sphere>

//       {/* Icon display */}
//       <Html>
//         <div
//           style={{
//             fontSize: "20px",
//             transform: "translate(-50%, -50%)",
//             pointerEvents: "none",
//           }}
//         >
//           {icon}
//         </div>
//       </Html>

//       {hovered && (
//         <Html>
//           <div
//             style={{
//               background: "rgba(0, 212, 170, 0.9)",
//               color: "white",
//               padding: "8px 16px",
//               borderRadius: "8px",
//               fontSize: "14px",
//               fontWeight: "600",
//               whiteSpace: "nowrap",
//               transform: "translate(-50%, -150%)",
//               marginTop: "-20px",
//               boxShadow: "0 4px 20px rgba(0, 212, 170, 0.3)",
//               border: "1px solid rgba(0, 212, 170, 0.5)",
//             }}
//           >
//             {label}
//           </div>
//         </Html>
//       )}
//     </group>
//   )
// }

// const StatCard: React.FC<{ number: string; label: string; delay: number }> = ({ number, label, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay }}
//     viewport={{ once: true }}
//   >
//     <Box
//       sx={{
//         textAlign: "center",
//         p: 2,
//         borderRadius: 2,
//         background: "rgba(0, 212, 170, 0.1)",
//         border: "1px solid rgba(0, 212, 170, 0.2)",
//         backdropFilter: "blur(10px)",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "#00D4AA",
//           fontWeight: 700,
//           fontSize: { xs: "1.5rem", md: "2rem" },
//           mb: 0.5,
//         }}
//       >
//         {number}
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{
//           color: "rgba(255, 255, 255, 0.8)",
//           fontSize: { xs: "0.75rem", md: "0.875rem" },
//           fontWeight: 500,
//         }}
//       >
//         {label}
//       </Typography>
//     </Box>
//   </motion.div>
// )

// const GlobalAutomationSections: React.FC = () => {
//   const stats = [
//     { number: "5K+", label: "Integrations" },
//     { number: "16+", label: "Development Years" },
//     { number: "600+", label: "Trusted Clients" },
//     { number: "50M+", label: "Transactions" },
//     { number: "2K+", label: "Active Users" },
//   ]

//   return (
//     <Box
//       sx={{
//         py: 8,
//         background: "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)",
//         color: "white",
//         minHeight: "100vh",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background particles effect */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `
//             radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 80% 80%, rgba(69, 183, 209, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 40% 60%, rgba(78, 205, 196, 0.05) 0%, transparent 50%)
//           `,
//           pointerEvents: "none",
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 4,
//               color: "rgba(255, 255, 255, 0.7)",
//               fontSize: { xs: "0.875rem", md: "1rem" },
//               fontWeight: 500,
//             }}
//           >
//             Floworg 360's Story in Numbers
//           </Typography>

//           <Grid container spacing={2} sx={{ mb: 6 }}>
//             {stats.map((stat, index) => (
//               <Grid item xs={6} sm={4} md={2.4} key={index} {...({} as any)}>
//                 <StatCard number={stat.number} label={stat.label} delay={index * 0.1} />
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 3,
//               fontSize: { xs: "1.75rem", md: "2.5rem", lg: "3rem" },
//               fontWeight: 700,
//               lineHeight: 1.2,
//               background: "linear-gradient(135deg, #ffffff 0%, #00D4AA 100%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Floworg AI Powers Global Automation – Across Channels, Devices & Data
//           </Typography>

//           <Typography
//             variant="h6"
//             align="center"
//             sx={{
//               mb: 6,
//               color: "rgba(255, 255, 255, 0.8)",
//               maxWidth: "800px",
//               mx: "auto",
//               fontSize: { xs: "1rem", md: "1.25rem" },
//               fontWeight: 400,
//               lineHeight: 1.6,
//             }}
//           >
//             Floworg 360 powers global automation – connecting systems, channels, and data in one secure platform.
//           </Typography>
//         </motion.div>

//         {/* 3D Globe */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <Box
//             sx={{
//               height: { xs: "400px", md: "600px" },
//               width: "100%",
//               position: "relative",
//               mb: 4,
//             }}
//           >
//             <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
//               <ambientLight intensity={0.3} />
//               <pointLight position={[10, 10, 10]} intensity={1} color="#00D4AA" />
//               <pointLight position={[-10, -10, -10]} intensity={0.5} color="#45B7D1" />
//               <pointLight position={[0, 10, 0]} intensity={0.3} color="#4ECDC4" />
//               <Globe />
//             </Canvas>
//           </Box>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: "center" }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 background: "linear-gradient(135deg, #00D4AA 0%, #4ECDC4 100%)",
//                 color: "white",
//                 px: 4,
//                 py: 1.5,
//                 fontSize: "1.1rem",
//                 fontWeight: 600,
//                 borderRadius: 3,
//                 textTransform: "none",
//                 boxShadow: "0 8px 32px rgba(0, 212, 170, 0.3)",
//                 "&:hover": {
//                   background: "linear-gradient(135deg, #00B894 0%, #4ECDC4 100%)",
//                   boxShadow: "0 12px 40px rgba(0, 212, 170, 0.4)",
//                   transform: "translateY(-2px)",
//                 },
//                 transition: "all 0.3s ease",
//               }}
//             >
//               Start Automating Now
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   )
// }

import React, { useState } from "react";

const hotspots = [
  {
    title: "Customer Service",
    description: "High-quality customer service is one of the key factors for success. Automating these processes helps deliver exceptional service that drives loyalty and referrals.",
    top: "32%",
    left: "72%",
  },
  {
    title: "Marketing",
    description: "Marketing automations maximize advertising impact, expand lead generation, and enhance marketing performance.",
    top: "17%",
    left: "59.5%",
  },
  {
    title: "Sales",
    description: "Automated sales workflows increase conversion rates, profitability, and customer satisfaction.",
    top: "37.6%",
    left: "29.5%",
  },
  {
    title: "Finance & Accounting",
    description: "Automation streamlines financial processes like invoice generation, document access, and internal reporting.",
    top: "57%",
    left: "69.8%",
  },
  {
    title: "HR & Operations",
    description: "Smart automation frees up employees to focus on high-impact tasks, reducing manual overhead.",
    top: "80.5%",
    left: "39%",
  },
  {
    title: "Business Management",
    description: "Smart BI tools, dashboards, and automation elevate decision-making and operational insight.",
    top: "61.7%",
    left: "27.1%",
  },
  {
    title: "Business Management",
    description: "Smart BI tools, dashboards, and automation elevate decision-making and operational insight.",
    top: "23.5%",
    left: "34.2%",
  },

  {
    title: "HR & Operations",
    description: "Smart automation frees up employees to focus on high-impact tasks, reducing manual overhead.",
    top: "74.5%",
    left: "64%",
  }
];

const GlobalAutomationSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0b1320] text-white">
      <div className="absolute top-0 w-full text-center py-12 px-4 z-30">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6">
          Floworg AI Powers Global Automation – Across Channels, Devices & Data
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-300">
          Floworg 360 powers global automation – connecting systems, channels, and data in one secure platform.
        </p>
      </div>

      {/* Background Image */}
      <img
        src="https://floworg360.com/wp-content/uploads/2025/03/website-circle-01.png"
        alt="Globe Background"
        className="w-full h-auto object-cover"
        style={{ minHeight: "100vh", display: "block" }}
      />

      {/* Hotspots */}
      {hotspots.map((spot, index) => (
        <div
          key={index}
          className="absolute z-20"
          style={{ top: spot.top, left: spot.left }}
        >
          <div
            className="relative w-6 h-6"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Outer pulsing effect */}
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-60"
              style={{
                backgroundColor: "rgb(22, 215, 173)",
                boxShadow: "inset 100px 100px transparent",
              }}
            ></div>

            {/* Middle green solid dot (no white border) */}
            <div
              className="relative w-6 h-6 rounded-full shadow-md flex items-center justify-center z-10"
              style={{
                backgroundColor: "rgb(22, 215, 173)",
                boxShadow: "inset 100px 100px transparent",
              }}
            >
              {/* Inner white center dot */}
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>





          {/* Tooltip */}
          {activeIndex === index && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md text-gray-800 rounded-xl p-4 w-72 shadow-2xl z-30 border border-white/20">
              <h4 className="font-bold text-lg text-gray-900 mb-2">{spot.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{spot.description}</p>

              {/* Tooltip arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-white/20"></div>
            </div>
          )}
        </div>
      ))}
      {/* CTA Button at Bottom */}
      <div className="absolute bottom-10 w-full text-center z-30">
        <button className="px-6 py-3 bg-[#1ad7ad] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#13b49a] transition-all duration-300">
          Start Automating Now
        </button>
      </div>

    </section>
  );
};

export default GlobalAutomationSection;
