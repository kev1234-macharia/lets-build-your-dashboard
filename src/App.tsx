import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Dashboard from './pages/dashboard';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;