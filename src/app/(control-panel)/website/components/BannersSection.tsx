// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
// import { TrendingUp } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const BannersSection: React.FC = () => {
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
//             variant="h3"
//             align="center"
//             sx={{
//               mb: 6,
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 600,
//               color: '#333',
//             }}
//           >
//             Most useful{' '}
//             <Box
//               component="span"
//               sx={{
//                 background: 'linear-gradient(45deg, #FFD700, #FFA500)',
//                 color: 'black',
//                 px: 2,
//                 py: 0.5,
//                 borderRadius: 2,
//                 fontWeight: 700,
//               }}
//             >
//               Banners
//             </Box>
//             <br />
//             You must need
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4} justifyContent="center">
//           {['Instant Jobs', 'Screen Sharing', 'Team Chat', 'HR Audit & Visits'].map((item, index) => (
//             <Grid item xs={6} sm={3} key={index} {...({} as any)}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     width: '100%',
//                     py: 2,
//                     borderRadius: 3,
//                     borderColor: '#00D4AA',
//                     color: '#00D4AA',
//                     '&:hover': {
//                       borderColor: '#00B894',
//                       backgroundColor: 'rgba(0, 212, 170, 0.1)',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <Card
//             sx={{
//               mt: 6,
//               borderRadius: 4,
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               color: 'white',
//               overflow: 'hidden',
//               position: 'relative',
//             }}
//           >
//             <CardContent sx={{ p: 6, textAlign: 'center' }}>
//               <TrendingUp sx={{ fontSize: 60, mb: 2, opacity: 0.8 }} />
//               <Typography
//                 variant="h4"
//                 sx={{ mb: 2, fontWeight: 600 }}
//               >
//                 Boost Your Performance
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}
//               >
//                 Discover powerful tools and features that will help you achieve better results
//                 and streamline your workflow like never before.
//               </Typography>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   backdropFilter: 'blur(10px)',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//                   },
//                   borderRadius: 2,
//                   px: 4,
//                 }}
//               >
//                 Get Started Now
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default BannersSection;
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const BannersSection: React.FC = () => {
  const bannerItems = ['Instant Jobs', 'Screen Sharing', 'Team Chat', 'HR Audit & Visits'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Most useful{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-lg font-bold">
              Banners
            </span>
            <br />
            You must need
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {bannerItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <button className="w-full py-3 px-4 border-2 border-teal-500 text-teal-600 rounded-xl hover:bg-teal-50 hover:border-teal-600 transition-all duration-300 font-medium">
                {item}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Boost Your Performance
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6 leading-relaxed">
                Discover powerful tools and features that will help you achieve better results
                and streamline your workflow like never before.
              </p>
              <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannersSection;