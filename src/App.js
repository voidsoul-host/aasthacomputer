//Important Dependencies Imports
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages & Components Imports for routes
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';

function App() {
  // States


  // Functions


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
