// import React from 'react';
// import { Box, Typography, Container, Grid, Button } from '@mui/material';
// import { Phone } from '@mui/icons-material';

// const ScalableSolutionsSection: React.FC = () => {
//   return (
//     <Box 
//       sx={{ 
//         py: 8, 
//         background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f3e5f5 100%)',
//         minHeight: '90vh',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Abstract tech graphics */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           opacity: 0.03,
//           backgroundImage: `
//             radial-gradient(circle at 20% 20%, #4285F4 0%, transparent 50%),
//             radial-gradient(circle at 80% 80%, #00D4AA 0%, transparent 50%),
//             radial-gradient(circle at 40% 60%, #FF9800 0%, transparent 50%)
//           `,
//         }}
//       />

//       <Container maxWidth="lg">
//         <Grid container spacing={8} alignItems="center">
//           {/* Left Side - Content */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <Box sx={{ pr: { md: 4 } }}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   mb: 3,
//                   fontSize: { xs: '2.2rem', md: '2.8rem' },
//                   fontWeight: 700,
//                   color: '#1a1a2e',
//                   lineHeight: 1.2,
//                   fontFamily: '"Inter", "Roboto", sans-serif',
//                 }}
//               >
//                 Scalable Solutions For
//                 <br />
//                 Businesses{' '}
//                 <Box
//                   component="span"
//                   sx={{
//                     background: 'linear-gradient(45deg, #4285F4, #667eea)',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   Platforms,
//                 </Box>
//               </Typography>
              
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mb: 4,
//                   color: '#5a6c7d',
//                   lineHeight: 1.7,
//                   fontSize: '1.1rem',
//                   maxWidth: '480px',
//                   fontFamily: '"Inter", "Roboto", sans-serif',
//                 }}
//               >
//                 Our seamless process helps you set up, automate, and optimize 
//                 operations in just a{' '}
//                 <Box component="span" sx={{ fontWeight: 600, color: '#4285F4' }}>
//                   few clicks
//                 </Box>
//                 . From effortless integrations to real-time analytics.
//               </Typography>
              
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: '#4285F4',
//                   '&:hover': {
//                     backgroundColor: '#3367D6',
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
//                   },
//                   borderRadius: 3,
//                   px: 5,
//                   py: 2,
//                   fontSize: '1.1rem',
//                   fontWeight: 600,
//                   boxShadow: '0 4px 15px rgba(66, 133, 244, 0.2)',
//                   transition: 'all 0.3s ease',
//                   textTransform: 'none',
//                 }}
//               >
//                 Get Started
//               </Button>
//             </Box>
//           </Grid>
          
//           {/* Right Side - 3-Step Process */}
//           <Grid item xs={12} md={6} {...({} as any)}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 height: 600,
//                 width: '100%',
//               }}
//             >
//               {/* Curved Path SVG */}
//               <svg
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   zIndex: 1,
//                 }}
//                 viewBox="0 0 400 600"
//                 fill="none"
//               >
//                 <defs>
//                   <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#4285F4" />
//                     <stop offset="50%" stopColor="#34A853" />
//                     <stop offset="100%" stopColor="#FF9800" />
//                   </linearGradient>
//                 </defs>
//                 <path
//                   d="M 80 520 Q 120 400 180 350 Q 240 300 280 250 Q 320 200 350 120"
//                   stroke="url(#pathGradient)"
//                   strokeWidth="5"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeDasharray="0"
//                 />
//                 {/* Path connection dots */}
//                 <circle cx="80" cy="520" r="8" fill="#4285F4" />
//                 <circle cx="180" cy="350" r="8" fill="#34A853" />
//                 <circle cx="350" cy="120" r="8" fill="#FF9800" />
//               </svg>

//               {/* Step 1 - Sign Up & Set Up */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: 20,
//                   left: 0,
//                   zIndex: 3,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor: 'white',
//                     borderRadius: 4,
//                     p: 4,
//                     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
//                     maxWidth: 320,
//                     border: '1px solid rgba(66, 133, 244, 0.1)',
//                     position: 'relative',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   {/* Number Badge */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: -20,
//                       left: 25,
//                       backgroundColor: '#4285F4',
//                       borderRadius: '50%',
//                       width: 60,
//                       height: 60,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       border: '4px solid white',
//                       boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
//                     }}
//                   >
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: 'white',
//                         fontWeight: 700,
//                         fontSize: '1.5rem',
//                       }}
//                     >
//                       1
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ mt: 3 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{ 
//                         fontSize: '1.2rem', 
//                         fontWeight: 700, 
//                         mb: 2,
//                         color: '#1a1a2e',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       Sign Up & Set Up
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ 
//                         color: '#5a6c7d',
//                         fontSize: '0.95rem',
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       Get started in minutes—register, set up 
//                       your workspace, and customize it to fit 
//                       your business needs with ease.
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Step 2 - Integrations */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: '45%',
//                   right: '10%',
//                   transform: 'translateY(-50%)',
//                   zIndex: 3,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor: 'white',
//                     borderRadius: 4,
//                     p: 4,
//                     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
//                     maxWidth: 320,
//                     border: '1px solid rgba(52, 168, 83, 0.1)',
//                     position: 'relative',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   {/* Number Badge */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: -20,
//                       left: 25,
//                       backgroundColor: '#34A853',
//                       borderRadius: '50%',
//                       width: 60,
//                       height: 60,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       border: '4px solid white',
//                       boxShadow: '0 8px 25px rgba(52, 168, 83, 0.3)',
//                     }}
//                   >
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: 'white',
//                         fontWeight: 700,
//                         fontSize: '1.5rem',
//                       }}
//                     >
//                       2
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ mt: 3 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{ 
//                         fontSize: '1.2rem', 
//                         fontWeight: 700, 
//                         mb: 2,
//                         color: '#1a1a2e',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       Integrations
//                       <br />
//                       Sign Up & Set Up
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ 
//                         color: '#5a6c7d',
//                         fontSize: '0.95rem',
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       Leverage automation to streamline tasks, 
//                       reduce manual work, and enhance 
//                       efficiency with smart integrations.
//                     </Typography>
//                   </Box>
                  
//                   {/* Floating Call Icon */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: -15,
//                       right: 25,
//                       backgroundColor: '#00D4AA',
//                       borderRadius: '50%',
//                       width: 50,
//                       height: 50,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       border: '3px solid white',
//                       boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         transform: 'scale(1.1)',
//                         boxShadow: '0 12px 35px rgba(0, 212, 170, 0.4)',
//                       },
//                     }}
//                   >
//                     <Phone
//                       sx={{
//                         color: 'white',
//                         fontSize: '1.3rem',
//                       }}
//                     />
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Step 3 - Automation */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: 20,
//                   right: 0,
//                   zIndex: 3,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor: 'white',
//                     borderRadius: 4,
//                     p: 4,
//                     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
//                     maxWidth: 320,
//                     border: '1px solid rgba(255, 152, 0, 0.1)',
//                     position: 'relative',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   {/* Number Badge */}
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: -20,
//                       left: 25,
//                       backgroundColor: '#FF9800',
//                       borderRadius: '50%',
//                       width: 60,
//                       height: 60,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       border: '4px solid white',
//                       boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)',
//                     }}
//                   >
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: 'white',
//                         fontWeight: 700,
//                         fontSize: '1.5rem',
//                       }}
//                     >
//                       3
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ mt: 3 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{ 
//                         fontSize: '1.2rem', 
//                         fontWeight: 700, 
//                         mb: 2,
//                         color: '#1a1a2e',
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       Automation
//                       <br />
//                       Sign Up & Set Up
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ 
//                         color: '#5a6c7d',
//                         fontSize: '0.95rem',
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       Track performance, gain valuable insights, 
//                       and make data-driven decisions to grow 
//                       and scale your business effortlessly.
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Background decorative elements */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: '15%',
//                   right: '5%',
//                   width: 120,
//                   height: 120,
//                   borderRadius: '50%',
//                   background: 'linear-gradient(45deg, rgba(255, 152, 0, 0.05), rgba(255, 152, 0, 0.1))',
//                   zIndex: 0,
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: '55%',
//                   right: '20%',
//                   width: 80,
//                   height: 80,
//                   borderRadius: '50%',
//                   background: 'linear-gradient(45deg, rgba(52, 168, 83, 0.05), rgba(52, 168, 83, 0.1))',
//                   zIndex: 0,
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: '15%',
//                   left: '10%',
//                   width: 100,
//                   height: 100,
//                   borderRadius: '50%',
//                   background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.05), rgba(66, 133, 244, 0.1))',
//                   zIndex: 0,
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ScalableSolutionsSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const ScalableSolutionsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen relative overflow-hidden">
      {/* Abstract tech graphics */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500 via-teal-500 to-orange-500"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Scalable Solutions For
                <br />
                Businesses{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Platforms,
                </span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg">
                Our seamless process helps you set up, automate, and optimize 
                operations in just a{' '}
                <span className="font-semibold text-blue-600">few clicks</span>
                . From effortless integrations to real-time analytics.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Get Started
              </button>
            </motion.div>
          </div>
          
          {/* Right Side - 3-Step Process */}
          <div className="relative h-[600px] w-full">
            {/* Curved Path SVG */}
            <svg
              className="absolute inset-0 w-full h-full z-10"
              viewBox="0 0 400 600"
              fill="none"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
              <path
                d="M 80 520 Q 120 400 180 350 Q 240 300 280 250 Q 320 200 350 120"
                stroke="url(#pathGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="80" cy="520" r="8" fill="#3B82F6" />
              <circle cx="180" cy="350" r="8" fill="#10B981" />
              <circle cx="350" cy="120" r="8" fill="#F59E0B" />
            </svg>

            {/* Step 1 - Sign Up & Set Up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="absolute bottom-5 left-0 z-30"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-80 border border-blue-100 relative backdrop-blur-sm">
                {/* Number Badge */}
                <div className="absolute -top-5 left-6 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Sign Up & Set Up
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get started in minutes—register, set up 
                    your workspace, and customize it to fit 
                    your business needs with ease.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-1/2 right-10 transform -translate-y-1/2 z-30"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-80 border border-green-100 relative backdrop-blur-sm">
                {/* Number Badge */}
                <div className="absolute -top-5 left-6 bg-green-600 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Integrations
                    <br />
                    Sign Up & Set Up
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leverage automation to streamline tasks, 
                    reduce manual work, and enhance 
                    efficiency with smart integrations.
                  </p>
                </div>
                
                {/* Floating Call Icon */}
                <div className="absolute -bottom-4 right-6 bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center border-3 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-5 right-0 z-30"
            >
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-80 border border-orange-100 relative backdrop-blur-sm">
                {/* Number Badge */}
                <div className="absolute -top-5 left-6 bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Automation
                    <br />
                    Sign Up & Set Up
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Track performance, gain valuable insights, 
                    and make data-driven decisions to grow 
                    and scale your business effortlessly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 right-5 w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 opacity-30"></div>
            <div className="absolute top-3/5 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 opacity-30"></div>
            <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableSolutionsSection;