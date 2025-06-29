import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const BannersSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: '#333',
            }}
          >
            Most useful{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: 'black',
                px: 2,
                py: 0.5,
                borderRadius: 2,
                fontWeight: 700,
              }}
            >
              Banners
            </Box>
            <br />
            You must need
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {['Instant Jobs', 'Screen Sharing', 'Team Chat', 'HR Audit & Visits'].map((item, index) => (
            <Grid item xs={6} sm={3} key={index} {...({} as any)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: '100%',
                    py: 2,
                    borderRadius: 3,
                    borderColor: '#00D4AA',
                    color: '#00D4AA',
                    '&:hover': {
                      borderColor: '#00B894',
                      backgroundColor: 'rgba(0, 212, 170, 0.1)',
                    },
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              mt: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <CardContent sx={{ p: 6, textAlign: 'center' }}>
              <TrendingUp sx={{ fontSize: 60, mb: 2, opacity: 0.8 }} />
              <Typography
                variant="h4"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Boost Your Performance
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}
              >
                Discover powerful tools and features that will help you achieve better results
                and streamline your workflow like never before.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  borderRadius: 2,
                  px: 4,
                }}
              >
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BannersSection;