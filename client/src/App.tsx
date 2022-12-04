import { HashRouter, Routes, Route } from 'react-router-dom';
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
    <HashRouter>
      <App />
    </HashRouter>
  );
}
