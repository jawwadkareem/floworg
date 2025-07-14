
// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Box, Typography, Container, TextField, Button, Grid, Link } from "@mui/material"
// import { Phone, Email, LocationOn } from "@mui/icons-material"

// const NewsletterSection: React.FC = () => {
//   const [email, setEmail] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Newsletter subscription:", email)
//     setEmail("")
//   }

//   return (
//     <Box
//       sx={{
//         py: 6,
//         backgroundColor: "#f5f7fa",
//         color: "#2C3E50",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Top Section with Badges and Newsletter */}
//         <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
//           {/* Compliance Badges */}
//           <Grid item xs={12} md={3} {...({} as any)}>
//             <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//               {/* HIPAA Badge */}
//               <Box
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: "50%",
//                   backgroundColor: "#4A90E2",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "white",
//                   fontSize: "0.7rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 <Typography sx={{ fontSize: "0.6rem", textAlign: "center" }}>HIPAA</Typography>
//               </Box>

//               {/* GDPR Badge */}
//               <Box
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: "50%",
//                   backgroundColor: "#1E3A8A",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "white",
//                   position: "relative",
//                 }}
//               >
//                 {/* EU Stars */}
//                 <Box sx={{ position: "absolute", top: 8 }}>
//                   <Typography sx={{ fontSize: "0.5rem", color: "#FFD700" }}>★★★</Typography>
//                 </Box>
//                 <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, mb: 0.5 }}>🔒</Typography>
//                 <Typography sx={{ fontSize: "0.6rem", fontWeight: 600 }}>GDPR</Typography>
//                 <Box sx={{ position: "absolute", bottom: 8 }}>
//                   <Typography sx={{ fontSize: "0.5rem", color: "#FFD700" }}>★★★</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Newsletter Text */}
//           <Grid item xs={12} md={5} {...({} as any)}>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontSize: { xs: "1.5rem", md: "2rem" },
//                 fontWeight: 600,
//                 color: "#2C3E50",
//                 lineHeight: 1.3,
//               }}
//             >
//               Subscribe to our newsletter for
//               <br />
//               the latest updates
//             </Typography>
//           </Grid>

//           {/* Email Input */}
//           <Grid item xs={12} md={4} {...({} as any)}>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{
//                 display: "flex",
//                 gap: 1,
//                 alignItems: "center",
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: 2,
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#E5E7EB",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "#D1D5DB",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#4A90E2",
//                     },
//                   },
//                 }}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#4A90E2",
//                   "&:hover": {
//                     backgroundColor: "#3B82F6",
//                   },
//                   borderRadius: 2,
//                   px: 3,
//                   py: 1.5,
//                   minWidth: 100,
//                 }}
//               >
//                 Send ▷
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Floworg Logo Section */}
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 700,
//               color: "#2C3E50",
//               mb: 1,
//               fontSize: { xs: "2.5rem", md: "3.5rem" },
//             }}
//           >
//             Flo
//             <Box component="span" sx={{ color: "#00D4AA" }}>
//               ✓
//             </Box>
//             org
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#6B7280",
//               fontWeight: 500,
//             }}
//           >
//             Automate your Success
//           </Typography>
//         </Box>

//         {/* Bottom Links Section */}
//         <Grid container spacing={4}>
//           {/* Contact */}
//           <Grid item xs={12} sm={6} md={3} {...({} as any)}>
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 3,
//                 fontWeight: 600,
//                 color: "#2C3E50",
//               }}
//             >
//               Contact
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Phone sx={{ fontSize: 20, color: "#4A90E2" }} />
//                 <Typography variant="body2" sx={{ color: "#6B7280" }}>
//                   (316) 555-0116
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Email sx={{ fontSize: 20, color: "#4A90E2" }} />
//                 <Typography variant="body2" sx={{ color: "#6B7280" }}>
//                   info@example.com
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <LocationOn sx={{ fontSize: 20, color: "#4A90E2" }} />
//                 <Typography variant="body2" sx={{ color: "#6B7280" }}>
//                   31 Brandy Way, Sutton
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Quick Link */}
//           <Grid item xs={12} sm={6} md={2} {...({} as any)}>
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 3,
//                 fontWeight: 600,
//                 color: "#2C3E50",
//               }}
//             >
//               Quick Link
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
//               {["Web App", "Mobile App", "Startup", "Project"].map((link) => (
//                 <Link
//                   key={link}
//                   href="#"
//                   sx={{
//                     color: "#6B7280",
//                     textDecoration: "none",
//                     fontSize: "0.9rem",
//                     "&:hover": { color: "#4A90E2" },
//                   }}
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>

//           {/* More Link */}
//           <Grid item xs={12} sm={6} md={2} {...({} as any)}>
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 3,
//                 fontWeight: 600,
//                 color: "#2C3E50",
//               }}
//             >
//               More Link
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
//               {["SEO Agency", "Mobile App", "Startup", "Marketing Tools"].map((link) => (
//                 <Link
//                   key={link}
//                   href="#"
//                   sx={{
//                     color: "#6B7280",
//                     textDecoration: "none",
//                     fontSize: "0.9rem",
//                     "&:hover": { color: "#4A90E2" },
//                   }}
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>

//           {/* UpSoft Section */}
//           <Grid item xs={12} sm={6} md={5} {...({} as any)}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
//               <Box
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   backgroundColor: "#4A90E2",
//                   borderRadius: 1,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography sx={{ color: "white", fontSize: "1rem", fontWeight: 600 }}>U</Typography>
//               </Box>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 600,
//                   color: "#2C3E50",
//                 }}
//               >
//                 UpSoft
//               </Typography>
//             </Box>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#6B7280",
//                 mb: 3,
//                 lineHeight: 1.6,
//               }}
//             >
//               UpSoft is a cutting-edge Software, SaaS & Startup platform that streamlines operations, automates
//               workflows.
//             </Typography>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               {["📘", "📷", "🌐", "📌"].map((icon, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     width: 36,
//                     height: 36,
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     border: "1px solid #E5E7EB",
//                     cursor: "pointer",
//                     "&:hover": {
//                       backgroundColor: "#F3F4F6",
//                     },
//                   }}
//                 >
//                   <Typography sx={{ fontSize: "1rem" }}>{icon}</Typography>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Footer */}
//         <Box
//           sx={{
//             borderTop: "1px solid #E5E7EB",
//             mt: 6,
//             pt: 4,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexDirection: { xs: "column", md: "row" },
//             gap: 2,
//           }}
//         >
//           <Typography variant="body2" sx={{ color: "#6B7280" }}>
//             Copyright©2025{" "}
//             <Box component="span" sx={{ color: "#F97316" }}>
//               Upsoft.
//             </Box>{" "}
//             All rights reserved
//           </Typography>
//           <Box sx={{ display: "flex", gap: 3 }}>
//             {["Help & Support", "Privacy policy", "Terms & Conditions"].map((link) => (
//               <Link
//                 key={link}
//                 href="#"
//                 sx={{
//                   color: "#6B7280",
//                   textDecoration: "none",
//                   fontSize: "0.875rem",
//                   "&:hover": { color: "#4A90E2" },
//                 }}
//               >
//                 {link}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default NewsletterSection

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import DarkLogo from './DarkLogo';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section with Badges and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          {/* Compliance Badges */}
          <div className="md:col-span-3">
            <div className="flex gap-4 items-center">
              {/* HIPAA Badge */}
              <div className="w-20 h-20 rounded-full bg-blue-500 flex flex-col items-center justify-center text-white text-xs font-semibold">
                <span className="text-xs text-center">HIPAA</span>
              </div>

              {/* GDPR Badge */}
              <div className="w-20 h-20 rounded-full bg-blue-900 flex flex-col items-center justify-center text-white relative">
                {/* EU Stars */}
                <div className="absolute top-2">
                  <span className="text-xs text-yellow-400">★★★</span>
                </div>
                <span className="text-lg mb-1">🔒</span>
                <span className="text-xs font-semibold">GDPR</span>
                <div className="absolute bottom-2">
                  <span className="text-xs text-yellow-400">★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Text */}
          <div className="md:col-span-5">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
              Subscribe to our newsletter for
              <br />
              the latest updates
            </h2>
          </div>

          {/* Email Input */}
          <div className="md:col-span-4">
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send ▷
              </button>
            </form>
          </div>
        </div>

        {/* Floworg Logo Section */}
        <div className="text-center mb-12 flex justify-center items-center">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Flo
            <span className="text-teal-500">✓</span>
            org
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Automate your Success
          </p> */}
          <DarkLogo/>
        </div>


        {/* Bottom Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 text-sm">(316) 555-0116</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 text-sm">info@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 text-sm">31 Brandy Way, Sutton</span>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Link
            </h3>
            <div className="flex flex-col gap-3">
              {["Web App", "Mobile App", "Startup", "Project"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* More Link */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              More Link
            </h3>
            <div className="flex flex-col gap-3">
              {["SEO Agency", "Mobile App", "Startup", "Marketing Tools"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* UpSoft Section */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-base font-semibold">U</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                UpSoft
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              UpSoft is a cutting-edge Software, SaaS & Startup platform that streamlines operations, automates
              workflows.
            </p>
            <div className="flex gap-2">
              {["📘", "📷", "🌐", "📌"].map((icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-base">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            Copyright©2025{" "}
            <span className="text-orange-500">Upsoft.</span>{" "}
            All rights reserved
          </p>
          <div className="flex gap-6">
            {["Help & Support", "Privacy policy", "Terms & Conditions"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;