import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
import RouterLink from '../../../routes/components/router-link';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.palette.primary.main;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 64,
          height: 64,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360.000000 361.000000"
        >
          <g
            transform="translate(0.000000,361.000000) scale(0.100000,-0.100000)"
            fill={PRIMARY_MAIN}
            stroke="none"
          >
            <path
              d="M2140 2995 c-209 -31 -496 -122 -695 -223 -38 -19 -116 -52 -171 -72
-106 -38 -325 -172 -338 -205 -21 -55 12 -109 65 -109 25 0 58 16 124 61 100
67 155 97 200 107 16 4 110 45 210 90 99 46 188 86 197 89 24 8 36 -38 49
-183 20 -224 -9 -505 -73 -709 -21 -69 -46 -166 -54 -216 -9 -49 -25 -117 -36
-150 -11 -33 -29 -89 -38 -125 -58 -209 -222 -532 -314 -619 -52 -49 -19 -131
51 -131 62 0 135 91 252 314 59 112 161 362 161 394 0 8 13 56 29 106 16 50
36 132 45 182 9 51 33 147 54 215 58 184 76 320 76 594 1 189 -2 242 -17 299
-10 38 -14 73 -10 77 15 14 219 58 319 70 72 8 117 8 155 0 30 -5 98 -9 152
-7 118 4 140 17 135 79 -5 69 -23 74 -243 80 -134 4 -218 1 -285 -8z"
            />
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
