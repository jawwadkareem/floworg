import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { Phone } from '@mui/icons-material';

const ScalableSolutionsSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        py: 8, 
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f3e5f5 100%)',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Abstract tech graphics */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #4285F4 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #00D4AA 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #FF9800 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.2rem', md: '2.8rem' },
                  fontWeight: 700,
                  color: '#1a1a2e',
                  lineHeight: 1.2,
                  fontFamily: '"Inter", "Roboto", sans-serif',
                }}
              >
                Scalable Solutions For
                <br />
                Businesses{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #4285F4, #667eea)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Platforms,
                </Box>
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#5a6c7d',
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  maxWidth: '480px',
                  fontFamily: '"Inter", "Roboto", sans-serif',
                }}
              >
                Our seamless process helps you set up, automate, and optimize 
                operations in just a{' '}
                <Box component="span" sx={{ fontWeight: 600, color: '#4285F4' }}>
                  few clicks
                </Box>
                . From effortless integrations to real-time analytics.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#4285F4',
                  '&:hover': {
                    backgroundColor: '#3367D6',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
                  },
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(66, 133, 244, 0.2)',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          
          {/* Right Side - 3-Step Process */}
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box
              sx={{
                position: 'relative',
                height: 600,
                width: '100%',
              }}
            >
              {/* Curved Path SVG */}
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
                viewBox="0 0 400 600"
                fill="none"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="50%" stopColor="#34A853" />
                    <stop offset="100%" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 520 Q 120 400 180 350 Q 240 300 280 250 Q 320 200 350 120"
                  stroke="url(#pathGradient)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="0"
                />
                {/* Path connection dots */}
                <circle cx="80" cy="520" r="8" fill="#4285F4" />
                <circle cx="180" cy="350" r="8" fill="#34A853" />
                <circle cx="350" cy="120" r="8" fill="#FF9800" />
              </svg>

              {/* Step 1 - Sign Up & Set Up */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 0,
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    p: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                    maxWidth: 320,
                    border: '1px solid rgba(66, 133, 244, 0.1)',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 25,
                      backgroundColor: '#4285F4',
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '4px solid white',
                      boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      1
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 700, 
                        mb: 2,
                        color: '#1a1a2e',
                        lineHeight: 1.3,
                      }}
                    >
                      Sign Up & Set Up
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#5a6c7d',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      Get started in minutes—register, set up 
                      your workspace, and customize it to fit 
                      your business needs with ease.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Step 2 - Integrations */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '45%',
                  right: '10%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    p: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                    maxWidth: 320,
                    border: '1px solid rgba(52, 168, 83, 0.1)',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 25,
                      backgroundColor: '#34A853',
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '4px solid white',
                      boxShadow: '0 8px 25px rgba(52, 168, 83, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 700, 
                        mb: 2,
                        color: '#1a1a2e',
                        lineHeight: 1.3,
                      }}
                    >
                      Integrations
                      <br />
                      Sign Up & Set Up
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#5a6c7d',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      Leverage automation to streamline tasks, 
                      reduce manual work, and enhance 
                      efficiency with smart integrations.
                    </Typography>
                  </Box>
                  
                  {/* Floating Call Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -15,
                      right: 25,
                      backgroundColor: '#00D4AA',
                      borderRadius: '50%',
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid white',
                      boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 12px 35px rgba(0, 212, 170, 0.4)',
                      },
                    }}
                  >
                    <Phone
                      sx={{
                        color: 'white',
                        fontSize: '1.3rem',
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Step 3 - Automation */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 0,
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    p: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                    maxWidth: 320,
                    border: '1px solid rgba(255, 152, 0, 0.1)',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 25,
                      backgroundColor: '#FF9800',
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '4px solid white',
                      boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ 
                        fontSize: '1.2rem', 
                        fontWeight: 700, 
                        mb: 2,
                        color: '#1a1a2e',
                        lineHeight: 1.3,
                      }}
                    >
                      Automation
                      <br />
                      Sign Up & Set Up
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#5a6c7d',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      Track performance, gain valuable insights, 
                      and make data-driven decisions to grow 
                      and scale your business effortlessly.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Background decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  right: '5%',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, rgba(255, 152, 0, 0.05), rgba(255, 152, 0, 0.1))',
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '55%',
                  right: '20%',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, rgba(52, 168, 83, 0.05), rgba(52, 168, 83, 0.1))',
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '10%',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.05), rgba(66, 133, 244, 0.1))',
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScalableSolutionsSection;