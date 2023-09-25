import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Link from '@mui/material/Link';

import BalaImage from '../../../assets/bala_photo.png';

const morph = keyframes`
0% {
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
50% {
  border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`;
const shake = keyframes`
0%,80%,to {
  transform: rotate(0deg)
}
85% {
  transform: rotate(10deg)
}
95% {
  transform: rotate(-10deg)
}
`;
const HeroImage = styled('div')(() => ({
  animation: `${morph} 8s ease-in-out infinite`,
  backgroundImage: `url(${BalaImage})`,
  backgroundPosition: '50% top',
  backgroundRepeat: 'no-repeat',
  border: '3px solid #2d2e32',
  borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
  height: '25rem',
  position: 'relative',
  transition: 'all 1s ease-in-out',
  width: '100%',
}));
export default function HomeView() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container
        sx={{
          py: { md: 16.4, xs: 5 },
        }}
      >
        <Grid container sx={{ rowGap: 5 }}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  md: 52,
                  xs: 32,
                },
                marginBottom: '12px',
              }}
            >
              Hello World{' '}
              <Box
                component="span"
                sx={{
                  animation: `${shake} 2s ease-in-out infinite`,
                  display: 'inline-block',
                }}
              >
                👋🏻
              </Box>{' '}
              <br />
              I&apos;m
              <Box
                component="span"
                sx={{
                  background: 'rgba(0,0,0,.8)',
                  borderRadius: '4px',
                  color: '#f5f5f5',
                  padding: '0 .5rem',
                }}
              >
                {' '}
                Balasubramani K{' '}
              </Box>
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { md: '1.25rem', xs: '1rem' },
              }}
            >
              A passionate Front-end React Developer based in Chennai, India. 📍
            </Typography>
            <Typography component="span">
              <Link
                href="https://www.linkedin.com/in/balasubramani-k-689425138"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/sonofkrish"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ px: { md: 5 } }}>
            <HeroImage />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
