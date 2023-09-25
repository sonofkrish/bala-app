import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Container, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { Logo } from '../../components/logo';
import { HEADER } from '../config-layout';

import { bgBlur } from '../../theme/css';

import { useOffSetTop } from '../../hooks/use-off-set-top';

const StyledLogo = styled(Logo)(() => ({
  transition: 'transform .25s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2) rotate(10deg)',
  },
}));
export default function Header() {
  const theme = useTheme();
  const offsetTop = useOffSetTop(48);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <StyledLogo />
          <Box sx={{ flexGrow: 1 }} />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
