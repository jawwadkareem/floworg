import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from '@mui/material';
import { Email, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 6,
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get Started with Flowerq Today & Take Your Business to New Heights
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}
            >
              Subscribe to our newsletter for the latest updates on automation trends, 
              product features, and exclusive insights.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                gap: 2,
                maxWidth: 400,
                mx: 'auto',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  bgcolor: 'primary.main',
                  px: 4,
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 3, opacity: 0.8 }}
            >
              Join 10,000+ businesses already transforming their operations with Flowerq
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Newsletter;