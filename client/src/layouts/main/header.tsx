import { useTheme } from '@mui/material/styles';
import { AppBar, Container, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { Logo } from '../../components/logo';
import { HEADER } from '../config-layout';

import { bgBlur } from '../../theme/css';

import { useOffSetTop } from '../../hooks/use-off-set-top';
import { useResponsive } from '../../hooks/use-responsive';

export default function Header() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

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
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
