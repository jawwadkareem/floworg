import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { Check, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 19,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      popular: false,
      features: [
        'Up to 5 automation workflows',
        'Basic integrations',
        'Email support',
        '1GB storage',
        'Standard security',
        'Mobile app access',
      ],
      color: '#6366F1',
    },
    {
      name: 'Pro Plan',
      price: 59,
      period: 'month',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Unlimited automation workflows',
        'Advanced integrations',
        'Priority support',
        '10GB storage',
        'Advanced security',
        'Mobile app access',
        'Custom dashboards',
        'API access',
      ],
      color: '#00BFA5',
    },
    {
      name: 'Enterprise Plan',
      price: 99,
      period: 'month',
      description: 'For large organizations',
      popular: false,
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited storage',
        'Enterprise security',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
      ],
      color: '#FF6B6B',
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
            Select The Plan That Best Suits Your Business Needs
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            Choose from our flexible pricing options designed to scale with your business growth.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
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
                    border: plan.popular ? `2px solid ${plan.color}` : '1px solid #e0e0e0',
                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                    '&:hover': {
                      transform: plan.popular ? 'scale(1.07)' : 'scale(1.02)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {plan.popular && (
                    <Chip
                      label="Most Popular"
                      icon={<Star />}
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: plan.color,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  
                  <CardContent sx={{ p: 4, textAlign: 'center', flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {plan.description}
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: plan.color,
                          display: 'inline',
                        }}
                      >
                        ${plan.price}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ display: 'inline', ml: 1 }}
                      >
                        /{plan.period}
                      </Typography>
                    </Box>

                    <List sx={{ textAlign: 'left' }}>
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Check sx={{ color: plan.color, fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      variant={plan.popular ? 'contained' : 'outlined'}
                      fullWidth
                      size="large"
                      sx={{
                        bgcolor: plan.popular ? plan.color : 'transparent',
                        borderColor: plan.color,
                        color: plan.popular ? 'white' : plan.color,
                        '&:hover': {
                          bgcolor: plan.popular ? plan.color : `${plan.color}10`,
                          borderColor: plan.color,
                        },
                      }}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;