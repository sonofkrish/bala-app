import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <FluentProvider theme={teamsLightTheme}>
        <App />
      </FluentProvider>
    </BrowserRouter>
  );
}
