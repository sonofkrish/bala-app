import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from '@mui/material/styles';
import { palette } from './palette';

const theme = createTheme({
  palette: palette('light'),
} as ThemeOptions);

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
