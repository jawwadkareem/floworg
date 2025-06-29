import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const WebPresentationSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f0f4f8' }}>
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
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam commodo ligula quis dolor. Aliquam rhoncus, 
                velit nec rutrum pellentesque et magna ut porttitor 
                molestie, nascetur ridiculus mus. Donec quam felis, 
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla 
                consequat massa quis enim. Donec pede justo, fringilla 
                vel, aliquet nec, vulputate eget, arcu.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#00D4AA',
                    '&:hover': {
                      backgroundColor: '#00B894',
                    },
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#333',
                    '&:hover': {
                      backgroundColor: '#555',
                    },
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Watch Demo
                </Button>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} {...({} as any)}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 350,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    border: '8px solid #ddd',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ textAlign: 'center' }}
                  >
                    Web Site
                    <br />
                    Presentation
                  </Typography>
                  
                  {/* Mockup elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 20,
                          backgroundColor: '#00D4AA',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: 60,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 20,
                          backgroundColor: '#4285F4',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebPresentationSection;