import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shoes from './Pages/Shoes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShoesGet from './Pages/ShoesGet';
import About from './Pages/AboutPage/About';
import Contact from './Pages/ContactPage/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shoes" element={<ShoesGet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
