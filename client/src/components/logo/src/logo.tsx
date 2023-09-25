import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
import RouterLink from '../../../routes/components/router-link';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  variant?: 'B' | 'T';
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, variant = 'B', sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.palette.error.main;

    const svgB = (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 361.000000 360.000000"
      >
        <g
          transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
          fill="#2d2e32"
          stroke="none"
        >
          <path
            d="M1955 3013 c-251 -31 -424 -67 -574 -118 -375 -129 -500 -186 -568
-257 -48 -50 -52 -81 -15 -118 43 -43 71 -39 140 21 49 43 107 69 334 152 235
86 352 117 558 148 391 60 675 3 793 -158 48 -66 64 -122 46 -165 -31 -76
-158 -183 -304 -256 -93 -46 -340 -138 -470 -175 -246 -70 -358 -97 -442 -108
l-93 -12 0 -72 0 -72 50 -7 c31 -4 73 -1 115 9 82 19 167 19 356 0 168 -16
243 -32 353 -74 103 -40 142 -67 221 -160 93 -108 130 -186 130 -276 0 -58 -6
-81 -32 -135 -43 -88 -120 -178 -217 -256 -244 -195 -514 -241 -741 -127 -90
46 -226 145 -273 200 -26 30 -63 64 -82 76 -19 11 -55 37 -80 57 -66 53 -114
80 -144 80 -14 0 -26 3 -26 8 0 24 42 240 59 310 45 174 249 684 333 834 45
79 48 119 13 153 -32 33 -78 33 -110 0 -14 -13 -25 -29 -25 -35 0 -5 -22 -56
-49 -113 -64 -131 -198 -459 -251 -612 -88 -257 -143 -554 -144 -788 -1 -145
0 -149 23 -168 30 -25 72 -24 99 1 12 12 23 22 23 23 1 1 5 58 8 126 l6 123
90 -65 c50 -36 119 -94 155 -130 75 -74 143 -125 255 -191 235 -137 500 -140
765 -6 246 124 450 351 490 547 7 32 10 90 8 131 -4 62 -12 88 -53 170 -43 85
-62 110 -159 208 -109 109 -113 112 -211 150 -55 21 -140 48 -190 60 -49 12
-83 24 -75 27 8 3 78 29 155 57 242 89 376 164 497 278 173 163 169 346 -10
528 -114 116 -340 186 -591 183 -64 -1 -129 -4 -146 -6z"
          />
        </g>
      </svg>
    );
    const svgT = (
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
    );

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
        {variant === 'B' ? svgB : svgT}
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
