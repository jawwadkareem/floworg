// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Check, Star } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const PricingSection: React.FC = () => {
//   const plans = [
//     {
//       name: 'Basic Plan',
//       price: '$19.00',
//       period: 'per month',
//       color: '#4285F4',
//       features: [
//         'Up to 5 team members',
//         'Basic integrations',
//         'Standard support',
//         'Mobile app access',
//         'Basic analytics',
//         'File storage (10GB)',
//       ],
//       popular: false,
//     },
//     {
//       name: 'Pro Plan',
//       price: '$59.00',
//       period: 'per month',
//       color: '#00D4AA',
//       features: [
//         'Up to 25 team members',
//         'Advanced integrations',
//         'Priority support',
//         'Mobile & desktop apps',
//         'Advanced analytics',
//         'File storage (100GB)',
//         'Custom workflows',
//         'API access',
//       ],
//       popular: true,
//     },
//     {
//       name: 'Enterprise Plan',
//       price: '$99.00',
//       period: 'per month',
//       color: '#9C27B0',
//       features: [
//         'Unlimited team members',
//         'All integrations',
//         '24/7 dedicated support',
//         'All platform access',
//         'Enterprise analytics',
//         'Unlimited storage',
//         'Custom workflows',
//         'Full API access',
//         'White-label options',
//         'Custom integrations',
//       ],
//       popular: false,
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
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
//               fontSize: { xs: '2rem', md: '3rem' },
//               fontWeight: 700,
//               color: '#333',
//             }}
//           >
//             Select the Plan That Best Suits
//           </Typography>
//           <Typography
//             variant="h3"
//             align="center"
//             sx={{
//               mb: 6,
//               fontSize: { xs: '1.5rem', md: '2rem' },
//               fontWeight: 600,
//               color: '#333',
//             }}
//           >
//             Your Business Needs
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4} justifyContent="center">
//           {plans.map((plan, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 4,
//                     boxShadow: plan.popular ? '0 12px 40px rgba(0, 212, 170, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease',
//                     position: 'relative',
//                     border: plan.popular ? `3px solid ${plan.color}` : '1px solid rgba(0, 0, 0, 0.1)',
//                     '&:hover': {
//                       boxShadow: plan.popular ? '0 16px 50px rgba(0, 212, 170, 0.4)' : '0 8px 30px rgba(0, 0, 0, 0.15)',
//                     },
//                   }}
//                 >
//                   {plan.popular && (
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: -15,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         backgroundColor: plan.color,
//                         color: 'white',
//                         px: 3,
//                         py: 1,
//                         borderRadius: 3,
//                         fontSize: '0.9rem',
//                         fontWeight: 600,
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                       }}
//                     >
//                       <Star sx={{ fontSize: 16 }} />
//                       Most Popular
//                     </Box>
//                   )}
                  
//                   <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                     <Typography
//                       variant="h5"
//                       sx={{ 
//                         mb: 2, 
//                         fontWeight: 600,
//                         color: plan.color,
//                       }}
//                     >
//                       {plan.name}
//                     </Typography>
                    
//                     <Box sx={{ mb: 3 }}>
//                       <Typography
//                         variant="h3"
//                         sx={{ 
//                           fontWeight: 700,
//                           color: '#333',
//                           display: 'inline',
//                         }}
//                       >
//                         {plan.price}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="text.secondary"
//                         sx={{ ml: 1, display: 'inline' }}
//                       >
//                         {plan.period}
//                       </Typography>
//                     </Box>

//                     <List sx={{ mb: 3 }}>
//                       {plan.features.map((feature, featureIndex) => (
//                         <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
//                           <ListItemIcon sx={{ minWidth: 30 }}>
//                             <Check sx={{ fontSize: 20, color: plan.color }} />
//                           </ListItemIcon>
//                           <ListItemText 
//                             primary={feature}
//                             primaryTypographyProps={{
//                               fontSize: '0.9rem',
//                               color: 'text.secondary',
//                             }}
//                           />
//                         </ListItem>
//                       ))}
//                     </List>

//                     <Button
//                       variant={plan.popular ? "contained" : "outlined"}
//                       fullWidth
//                       size="large"
//                       sx={{
//                         backgroundColor: plan.popular ? plan.color : 'transparent',
//                         borderColor: plan.color,
//                         color: plan.popular ? 'white' : plan.color,
//                         '&:hover': {
//                           backgroundColor: plan.popular ? plan.color : `${plan.color}20`,
//                           borderColor: plan.color,
//                         },
//                         borderRadius: 3,
//                         py: 1.5,
//                         fontWeight: 600,
//                       }}
//                     >
//                       {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default PricingSection;

"use client"

import type React from "react"
import { useState } from "react"
import { Box, Typography, Container, Grid, Card, CardContent, Button, Switch, FormControlLabel } from "@mui/material"
import { Check, Close } from "@mui/icons-material"
import { motion } from "framer-motion"

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false)

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
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#2C3E50",
              lineHeight: 1.3,
            }}
          >
            Select The Plan That Best Suits
            <br />
            Your Business Needs.
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 4,
              color: "#6B7280",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            No matter if you're new to the game or aiming to boost your marketing strategies, we have a tailored plan
            just for you.
          </Typography>

          {/* Monthly/Yearly Toggle */}
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 6, gap: 2 }}>
            <Typography sx={{ color: isYearly ? "#6B7280" : "#8B5CF6", fontWeight: 600 }}>Monthly</Typography>
            <Box sx={{ position: "relative" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#8B5CF6",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "#8B5CF6",
                      },
                    }}
                  />
                }
                label=""
              />
              {/* Save 30% Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: -25,
                  right: -20,
                  backgroundColor: "#E0E7FF",
                  color: "#6366F1",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                SAVE 25%
              </Box>
            </Box>
            <Typography sx={{ color: !isYearly ? "#6B7280" : "#8B5CF6", fontWeight: 600 }}>
              Yearly{" "}
              <Box component="span" sx={{ color: "#EF4444" }}>
                (Save 30%)
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Pricing Cards */}
        <Grid container spacing={3} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    backgroundColor: plan.bgColor,
                    border: plan.recommended ? `2px solid ${plan.color}` : "none",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  {/* Recommended Badge */}
                  {plan.recommended && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: plan.color,
                        color: "white",
                        py: 1,
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }}
                    >
                      RECOMMENDED
                    </Box>
                  )}

                  <CardContent sx={{ p: 4, pt: plan.recommended ? 6 : 4 }}>
                    {/* Header */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#2C3E50",
                            mb: 0.5,
                          }}
                        >
                          {plan.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#6B7280",
                            fontSize: "0.9rem",
                          }}
                        >
                          {plan.businessType}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "2rem",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          width: 60,
                          height: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {plan.icon}
                      </Box>
                    </Box>

                    {/* Price */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: "#2C3E50",
                          display: "inline",
                        }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6B7280",
                          ml: 1,
                          display: "inline",
                        }}
                      >
                        /month
                      </Typography>
                    </Box>

                    {/* Action Button */}
                    <Button
                      variant={plan.buttonVariant}
                      fullWidth
                      size="large"
                      sx={{
                        backgroundColor: plan.buttonVariant === "contained" ? plan.color : "transparent",
                        borderColor: plan.color,
                        color: plan.buttonVariant === "contained" ? "white" : plan.color,
                        "&:hover": {
                          backgroundColor: plan.buttonVariant === "contained" ? plan.color : `${plan.color}20`,
                          borderColor: plan.color,
                        },
                        borderRadius: 3,
                        py: 1.5,
                        fontWeight: 600,
                        mb: 3,
                      }}
                    >
                      {plan.buttonText} →
                    </Button>

                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      {plan.features.map((feature, featureIndex) => (
                        <Box
                          key={featureIndex}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              backgroundColor: feature.included ? "#10B981" : "#EF4444",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {feature.included ? (
                              <Check sx={{ fontSize: 14, color: "white" }} />
                            ) : (
                              <Close sx={{ fontSize: 14, color: "white" }} />
                            )}
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: feature.included ? "#2C3E50" : "#9CA3AF",
                              fontSize: "0.9rem",
                            }}
                          >
                            {feature.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Read More Link */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: 600,
                        textAlign: "center",
                        cursor: "pointer",
                        "&:hover": {
                          color: plan.color,
                        },
                      }}
                    >
                      Read More
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
          {[0, 1, 2, 3, 4].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: dot === 1 ? "#2C3E50" : "#D1D5DB",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default PricingSection
