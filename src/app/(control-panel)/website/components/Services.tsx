import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  AutoFixHigh,
  Speed,
  Security,
  Analytics,
  CloudSync,
  Support,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <AutoFixHigh />,
      title: 'AI Automation',
      description: 'Intelligent workflows that learn and adapt to your business processes automatically.',
      color: '#00BFA5',
    },
    {
      icon: <Speed />,
      title: 'Performance Optimization',
      description: 'Boost your system performance with advanced optimization algorithms.',
      color: '#6366F1',
    },
    {
      icon: <Security />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      color: '#FF6B6B',
    },
    {
      icon: <Analytics />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics to drive business growth.',
      color: '#4ECDC4',
    },
    {
      icon: <CloudSync />,
      title: 'Cloud Integration',
      description: 'Seamless integration with all major cloud platforms and services.',
      color: '#45B7D1',
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your operations never stop.',
      color: '#96CEB4',
    },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
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
            Flowerq Services
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Comprehensive automation solutions designed to transform your business operations
            and accelerate growth across all channels.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
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
                    cursor: 'pointer',
                    '&:hover': {
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: service.color,
                        color: 'white',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box
                      className="service-icon"
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        bgcolor: `${service.color}20`,
                        color: service.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
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

export default Services;