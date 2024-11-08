import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarCollapsible from './components/NavbarCollapsible';

import './App.css'
import About from './components/About.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import Homepage from './components/Homepage.tsx'
import Products from './components/Products.tsx'
import Contact from './components/Contact.tsx';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 768px is typical mobile breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <BrowserRouter>
        <ScrollToTop />
        {isMobile ? <NavbarCollapsible /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> 
      </BrowserRouter>
    </main>
  );
}

export default App



