import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import logo from '../../assests/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed-top transition-all ${isScrolled ? 'glass-panel shadow-sm py-2' : 'py-3'}`} style={{ zIndex: 1000, transition: 'all 0.3s ease' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#home" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="Satta Live Logo" style={{ height: '40px', borderRadius: '8px', marginRight: '10px' }} />
          <span className="fs-4 fw-bold text-white">Satta Live</span>
        </a>

        {/* Desktop Nav */}
        <nav className="d-none d-lg-flex align-items-center gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-decoration-none fw-medium" style={{ opacity: 0.9 }}>
              {link.name}
            </a>
          ))}
          <a href="#download" className="btn-primary-custom ms-2">
            <FaDownload /> Download App
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="d-lg-none btn text-white p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', fontSize: '1.5rem' }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="d-lg-none glass-panel position-absolute w-100 mt-2 p-3 shadow-lg" style={{ left: 0 }}>
          <nav className="d-flex flex-column gap-3 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white text-decoration-none fs-5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#download" className="btn-primary-custom mt-2 d-inline-flex mx-auto" onClick={() => setIsMobileMenuOpen(false)}>
              <FaDownload /> Download App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
