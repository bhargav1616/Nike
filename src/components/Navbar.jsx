import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="/Images/brand_logo.png" alt="Logo" />
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shoes" onClick={() => setMenuOpen(false)}>Shoes</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="login-btn">
            <Link to="/login" className="shop-btnn" onClick={() => setMenuOpen(false)}>Login</Link>
          </div>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
// 