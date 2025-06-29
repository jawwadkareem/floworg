import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  TrendingUp,
  Speed,
  Security,
  CloudDone,
  Psychology,
  Insights,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Increased Efficiency',
      description: 'Boost productivity by up to 300% with intelligent automation workflows.',
      metric: '300%',
      color: '#00BFA5',
    },
    {
      icon: <Speed />,
      title: 'Faster Deployment',
      description: 'Deploy solutions 10x faster with our pre-built automation templates.',
      metric: '10x',
      color: '#6366F1',
    },
    {
      icon: <Security />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with 99.9% uptime and data protection.',
      metric: '99.9%',
      color: '#FF6B6B',
    },
    {
      icon: <CloudDone />,
      title: 'Scalable Solutions',
      description: 'Scale seamlessly from startup to enterprise with flexible architecture.',
      metric: '∞',
      color: '#4ECDC4',
    },
    {
      icon: <Psychology />,
      title: 'Smart Intelligence',
      description: 'AI-powered insights that learn from your data and optimize automatically.',
      metric: 'AI',
      color: '#45B7D1',
    },
    {
      icon: <Insights />,
      title: 'Data-Driven Results',
      description: 'Make informed decisions with real-time analytics and reporting.',
      metric: '24/7',
      color: '#96CEB4',
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
            Benefits
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}
          >
            We deliver business optimization through intelligent automation.
            Experience measurable results that transform your operations.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
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
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      '& .benefit-metric': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Avatar
                    className="benefit-metric"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: 20,
                      bgcolor: benefit.color,
                      width: 60,
                      height: 60,
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {benefit.metric}
                  </Avatar>
                  <CardContent sx={{ p: 4, pt: 5 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: `${benefit.color}15`,
                        color: benefit.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {benefit.description}
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

export default Benefits;