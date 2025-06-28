import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { 
  Security, 
  VoiceChat, 
  Api, 
  AccountTree,
  Speed,
  CloudSync
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Security sx={{ fontSize: 40, color: '#FF6B6B' }} />,
      title: 'Authentication',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <VoiceChat sx={{ fontSize: 40, color: '#4ECDC4' }} />,
      title: 'Voice',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <VoiceChat sx={{ fontSize: 40, color: '#45B7D1' }} />,
      title: 'Voice',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <Api sx={{ fontSize: 40, color: '#96CEB4' }} />,
      title: 'API',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <AccountTree sx={{ fontSize: 40, color: '#FFEAA7' }} />,
      title: 'Guided Flow',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <AccountTree sx={{ fontSize: 40, color: '#DDA0DD' }} />,
      title: 'Guided Flow',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#FF7675' }} />,
      title: 'Guided Flow',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <CloudSync sx={{ fontSize: 40, color: '#74B9FF' }} />,
      title: 'Guided Flow',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      icon: <AccountTree sx={{ fontSize: 40, color: '#00B894' }} />,
      title: 'Guided Flow',
      description: 'Many packages and web page editors now use Lorem Ipsum as their default model text.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              background: 'linear-gradient(45deg, #00D4AA, #1976d2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Floworg Services
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
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

export default ServicesSection;