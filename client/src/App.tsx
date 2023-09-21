import ThemeProvider from './theme';
import Router from './routes/sections';

export function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
