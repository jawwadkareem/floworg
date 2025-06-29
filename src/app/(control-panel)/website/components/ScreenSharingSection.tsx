import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { ScreenShare, Group, Security, Speed } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ScreenSharingSection: React.FC = () => {
  const features = [
    {
      icon: <ScreenShare sx={{ fontSize: 40, color: '#4285F4' }} />,
      title: 'Real-time Sharing',
      description: 'Share your screen instantly with team members and collaborate in real-time.',
    },
    {
      icon: <Group sx={{ fontSize: 40, color: '#34A853' }} />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with advanced collaboration tools and features.',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#EA4335' }} />,
      title: 'Secure Connection',
      description: 'End-to-end encryption ensures your screen sharing sessions are always secure.',
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#FBBC04' }} />,
      title: 'High Performance',
      description: 'Lightning-fast performance with minimal latency for smooth screen sharing.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: '#333',
                }}
              >
                Screen Sharing
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                Seamlessly share your screen with team members, clients, or collaborators.
                Our advanced screen sharing technology provides crystal-clear quality
                and real-time interaction capabilities.
              </Typography>
              
              <Box
                sx={{
                  p: 3,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 3,
                  border: '2px dashed #00D4AA',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                >
                  "Screen sharing has never been this easy and secure. 
                  Perfect for remote teams and client presentations."
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} {...({} as any)}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index} {...({} as any)}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ mb: 1, fontWeight: 600, fontSize: '1rem' }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.5, fontSize: '0.85rem' }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScreenSharingSection;