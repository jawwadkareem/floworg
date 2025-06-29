import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      content: 'Flowerq transformed our business operations completely. The automation workflows saved us countless hours and improved our efficiency by 250%. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      content: 'The AI-powered automation is incredible. It learns from our processes and continuously optimizes them. Our team productivity has never been higher.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, GrowthCorp',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      rating: 5,
      content: 'Outstanding platform with exceptional support. The integration capabilities are seamless, and the analytics provide valuable insights for decision-making.',
    },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 2, color: 'text.primary' }}
          >
            What Our Customers Say
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Don't just take our word for it. Here's what our customers have to say about their 
            experience with Flowerq.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} {...({} as any)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    '&:hover': {
                      '& .quote-mark': {
                        transform: 'scale(1.1)',
                        opacity: 0.8,
                      },
                    },
                  }}
                >
                  <Box
                    className="quote-mark"
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      fontSize: '3rem',
                      color: 'primary.main',
                      opacity: 0.3,
                      fontFamily: 'serif',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    "
                  </Box>
                  
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                        color: 'text.secondary',
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 50, height: 50, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;