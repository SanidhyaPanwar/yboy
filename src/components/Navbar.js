import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import yarn from '../media/yarn.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-theme", savedMode);
  }, []);

  // Scroll listener for sticky navbar and scroll-up button
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
      setShowScrollUp(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.body.classList.toggle("dark-theme", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const toggleMenu = () => setMenuActive(prev => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollUp && (
        <div 
        className={`scroll-up-btn ${showScrollUp ? "show" : ""}`} 
        onClick={scrollToTop}
      >
        <i className="fas fa-angle-up"></i>
      </div>
      
      )}

      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <Link to="/"><span>YB</span><img src={yarn} alt="yarn" /><span>Y</span></Link>
          </div>

          <span className="btn-toggle" onClick={toggleDarkMode}>
            <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`} />
          </span>

          <ul className={`menu ${menuActive ? "active" : ""}`}>
            <li><Link to="/home" onClick={() => setMenuActive(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuActive(false)}>About</Link></li>
            <li><Link to="/categories" onClick={() => setMenuActive(false)}>Categories</Link></li>
            <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
          </ul>

          <div className="menu-btn" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? "active" : ""}`}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
