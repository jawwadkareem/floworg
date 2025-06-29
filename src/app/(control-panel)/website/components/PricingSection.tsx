

// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Box, Typography, Container, Grid, Card, CardContent, Button, Switch, FormControlLabel } from "@mui/material"
// import { Check, Close } from "@mui/icons-material"
// import { motion } from "framer-motion"

// const PricingSection: React.FC = () => {
//   const [isYearly, setIsYearly] = useState(false)

//   const plans = [
//     {
//       name: "Basic Plan",
//       businessType: "Small Businesses",
//       price: "$19.00",
//       icon: "✈️",
//       color: "#6366F1",
//       bgColor: "#E0E7FF",
//       features: [
//         { name: "Contact Management", included: true },
//         { name: "Task and Activity Tracking", included: true },
//         { name: "Automation Workflows", included: true },
//         { name: "PayPal Mass Payout", included: true },
//         { name: "Chat and Email Support", included: true },
//         { name: "Customizable Dashboards", included: false },
//         { name: "24/7 Priority Support", included: false },
//       ],
//       buttonText: "Start 14 day trial",
//       buttonVariant: "outlined" as const,
//     },
//     {
//       name: "Pro Plan",
//       businessType: "Growing Businesses",
//       price: "$59.00",
//       icon: "🐦",
//       color: "#06B6D4",
//       bgColor: "#CFFAFE",
//       features: [
//         { name: "Contact Management", included: true },
//         { name: "Task and Activity Tracking", included: true },
//         { name: "Automation Workflows", included: true },
//         { name: "PayPal Mass Payout", included: true },
//         { name: "Chat and Email Support", included: true },
//         { name: "Customizable Dashboards", included: false },
//         { name: "24/7 Priority Support", included: false },
//       ],
//       buttonText: "Start for Free",
//       buttonVariant: "contained" as const,
//       recommended: true,
//     },
//     {
//       name: "Enterprise Plan",
//       businessType: "Large Businesses",
//       price: "$99.00",
//       icon: "🚀",
//       color: "#8B5CF6",
//       bgColor: "#F3E8FF",
//       features: [
//         { name: "Contact Management", included: true },
//         { name: "Task and Activity Tracking", included: true },
//         { name: "Automation Workflows", included: true },
//         { name: "PayPal Mass Payout", included: true },
//         { name: "Chat and Email Support", included: true },
//         { name: "Customizable Dashboards", included: false },
//         { name: "24/7 Priority Support", included: false },
//       ],
//       buttonText: "Start 14 day trial",
//       buttonVariant: "outlined" as const,
//     },
//   ]

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
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{
//               mb: 2,
//               fontSize: { xs: "2rem", md: "2.5rem" },
//               fontWeight: 700,
//               color: "#2C3E50",
//               lineHeight: 1.3,
//             }}
//           >
//             Select The Plan That Best Suits
//             <br />
//             Your Business Needs.
//           </Typography>

//           <Typography
//             variant="body1"
//             align="center"
//             sx={{
//               mb: 4,
//               color: "#6B7280",
//               maxWidth: "600px",
//               mx: "auto",
//               lineHeight: 1.6,
//             }}
//           >
//             No matter if you're new to the game or aiming to boost your marketing strategies, we have a tailored plan
//             just for you.
//           </Typography>

//           {/* Monthly/Yearly Toggle */}
//           <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 6, gap: 2 }}>
//             <Typography sx={{ color: isYearly ? "#6B7280" : "#8B5CF6", fontWeight: 600 }}>Monthly</Typography>
//             <Box sx={{ position: "relative" }}>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={isYearly}
//                     onChange={(e) => setIsYearly(e.target.checked)}
//                     sx={{
//                       "& .MuiSwitch-switchBase.Mui-checked": {
//                         color: "#8B5CF6",
//                       },
//                       "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//                         backgroundColor: "#8B5CF6",
//                       },
//                     }}
//                   />
//                 }
//                 label=""
//               />
//               {/* Save 30% Badge */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: -25,
//                   right: -20,
//                   backgroundColor: "#E0E7FF",
//                   color: "#6366F1",
//                   px: 1.5,
//                   py: 0.5,
//                   borderRadius: 2,
//                   fontSize: "0.75rem",
//                   fontWeight: 600,
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 SAVE 25%
//               </Box>
//             </Box>
//             <Typography sx={{ color: !isYearly ? "#6B7280" : "#8B5CF6", fontWeight: 600 }}>
//               Yearly{" "}
//               <Box component="span" sx={{ color: "#EF4444" }}>
//                 (Save 30%)
//               </Box>
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* Pricing Cards */}
//         <Grid container spacing={3} justifyContent="center">
//           {plans.map((plan, index) => (
//             <Grid item xs={12} md={4} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: 4,
//                     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//                     transition: "all 0.3s ease",
//                     position: "relative",
//                     backgroundColor: plan.bgColor,
//                     border: plan.recommended ? `2px solid ${plan.color}` : "none",
//                     "&:hover": {
//                       boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
//                     },
//                   }}
//                 >
//                   {/* Recommended Badge */}
//                   {plan.recommended && (
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         backgroundColor: plan.color,
//                         color: "white",
//                         py: 1,
//                         textAlign: "center",
//                         fontSize: "0.875rem",
//                         fontWeight: 600,
//                         borderTopLeftRadius: 16,
//                         borderTopRightRadius: 16,
//                       }}
//                     >
//                       RECOMMENDED
//                     </Box>
//                   )}

//                   <CardContent sx={{ p: 4, pt: plan.recommended ? 6 : 4 }}>
//                     {/* Header */}
//                     <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
//                       <Box>
//                         <Typography
//                           variant="h5"
//                           sx={{
//                             fontWeight: 700,
//                             color: "#2C3E50",
//                             mb: 0.5,
//                           }}
//                         >
//                           {plan.name}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             color: "#6B7280",
//                             fontSize: "0.9rem",
//                           }}
//                         >
//                           {plan.businessType}
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           fontSize: "2rem",
//                           backgroundColor: "white",
//                           borderRadius: "50%",
//                           width: 60,
//                           height: 60,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//                         }}
//                       >
//                         {plan.icon}
//                       </Box>
//                     </Box>

//                     {/* Price */}
//                     <Box sx={{ mb: 3 }}>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           fontWeight: 700,
//                           color: "#2C3E50",
//                           display: "inline",
//                         }}
//                       >
//                         {plan.price}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#6B7280",
//                           ml: 1,
//                           display: "inline",
//                         }}
//                       >
//                         /month
//                       </Typography>
//                     </Box>

//                     {/* Action Button */}
//                     <Button
//                       variant={plan.buttonVariant}
//                       fullWidth
//                       size="large"
//                       sx={{
//                         backgroundColor: plan.buttonVariant === "contained" ? plan.color : "transparent",
//                         borderColor: plan.color,
//                         color: plan.buttonVariant === "contained" ? "white" : plan.color,
//                         "&:hover": {
//                           backgroundColor: plan.buttonVariant === "contained" ? plan.color : `${plan.color}20`,
//                           borderColor: plan.color,
//                         },
//                         borderRadius: 3,
//                         py: 1.5,
//                         fontWeight: 600,
//                         mb: 3,
//                       }}
//                     >
//                       {plan.buttonText} →
//                     </Button>

//                     {/* Features List */}
//                     <Box sx={{ mb: 3 }}>
//                       {plan.features.map((feature, featureIndex) => (
//                         <Box
//                           key={featureIndex}
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 2,
//                             py: 1,
//                           }}
//                         >
//                           <Box
//                             sx={{
//                               width: 20,
//                               height: 20,
//                               borderRadius: "50%",
//                               backgroundColor: feature.included ? "#10B981" : "#EF4444",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               flexShrink: 0,
//                             }}
//                           >
//                             {feature.included ? (
//                               <Check sx={{ fontSize: 14, color: "white" }} />
//                             ) : (
//                               <Close sx={{ fontSize: 14, color: "white" }} />
//                             )}
//                           </Box>
//                           <Typography
//                             variant="body2"
//                             sx={{
//                               color: feature.included ? "#2C3E50" : "#9CA3AF",
//                               fontSize: "0.9rem",
//                             }}
//                           >
//                             {feature.name}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>

//                     {/* Read More Link */}
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#2C3E50",
//                         fontWeight: 600,
//                         textAlign: "center",
//                         cursor: "pointer",
//                         "&:hover": {
//                           color: plan.color,
//                         },
//                       }}
//                     >
//                       Read More
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Pagination Dots */}
//         <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
//           {[0, 1, 2, 3, 4].map((dot) => (
//             <Box
//               key={dot}
//               sx={{
//                 width: 8,
//                 height: 8,
//                 borderRadius: "50%",
//                 backgroundColor: dot === 1 ? "#2C3E50" : "#D1D5DB",
//               }}
//             />
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default PricingSection

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      businessType: "Small Businesses",
      price: "$19.00",
      icon: "✈️",
      color: "#6366F1",
      bgColor: "#E0E7FF",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      buttonText: "Start 14 day trial",
      buttonVariant: "outlined" as const,
    },
    {
      name: "Pro Plan",
      businessType: "Growing Businesses",
      price: "$59.00",
      icon: "🐦",
      color: "#06B6D4",
      bgColor: "#CFFAFE",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      buttonText: "Start for Free",
      buttonVariant: "contained" as const,
      recommended: true,
    },
    {
      name: "Enterprise Plan",
      businessType: "Large Businesses",
      price: "$99.00",
      icon: "🚀",
      color: "#8B5CF6",
      bgColor: "#F3E8FF",
      features: [
        { name: "Contact Management", included: true },
        { name: "Task and Activity Tracking", included: true },
        { name: "Automation Workflows", included: true },
        { name: "PayPal Mass Payout", included: true },
        { name: "Chat and Email Support", included: true },
        { name: "Customizable Dashboards", included: false },
        { name: "24/7 Priority Support", included: false },
      ],
      buttonText: "Start 14 day trial",
      buttonVariant: "outlined" as const,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Select The Plan That Best Suits
            <br />
            Your Business Needs.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            No matter if you're new to the game or aiming to boost your marketing strategies, we have a tailored plan
            just for you.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex justify-center items-center mb-12 gap-4">
            <span className={`font-semibold ${!isYearly ? 'text-purple-600' : 'text-gray-600'}`}>Monthly</span>
            <div className="relative">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 h-8 rounded-full transition-colors duration-300 ${
                  isYearly ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isYearly ? 'translate-x-7' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
              {/* Save 30% Badge */}
              <div className="absolute -top-6 -right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap">
                SAVE 25%
              </div>
            </div>
            <span className={`font-semibold ${isYearly ? 'text-purple-600' : 'text-gray-600'}`}>
              Yearly <span className="text-red-500">(Save 30%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div
                className={`h-full rounded-2xl shadow-lg transition-all duration-300 relative ${
                  plan.recommended ? `border-2` : 'border'
                } hover:shadow-xl`}
                style={{ 
                  backgroundColor: plan.bgColor,
                  borderColor: plan.recommended ? plan.color : '#E5E7EB'
                }}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div
                    className="absolute top-0 left-0 right-0 text-white py-2 text-center text-sm font-semibold rounded-t-2xl"
                    style={{ backgroundColor: plan.color }}
                  >
                    RECOMMENDED
                  </div>
                )}

                <div className={`p-6 ${plan.recommended ? 'pt-12' : 'pt-6'}`}>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {plan.businessType}
                      </p>
                    </div>
                    <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                      {plan.icon}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-300 ${
                      plan.buttonVariant === 'contained'
                        ? 'text-white shadow-lg hover:shadow-xl'
                        : 'bg-transparent border-2'
                    }`}
                    style={{
                      backgroundColor: plan.buttonVariant === 'contained' ? plan.color : 'transparent',
                      borderColor: plan.color,
                      color: plan.buttonVariant === 'contained' ? 'white' : plan.color,
                    }}
                  >
                    {plan.buttonText} →
                  </button>

                  {/* Features List */}
                  <div className="mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 py-2">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            feature.included ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        >
                          {feature.included ? (
                            <Check className="w-3 h-3 text-white" />
                          ) : (
                            <X className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-gray-800' : 'text-gray-400'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <p
                    className="text-gray-800 font-semibold text-center cursor-pointer hover:opacity-75 transition-opacity"
                    style={{ color: plan.color }}
                  >
                    Read More
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;