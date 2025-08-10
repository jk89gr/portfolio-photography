// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="photos" element={<Photos />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
