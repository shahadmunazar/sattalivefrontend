import React from 'react';
import logo from '../../assests/logo.jpg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0B1120', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="#home" className="d-flex align-items-center text-decoration-none mb-3">
              <img src={logo} alt="Satta Live Logo" style={{ height: '50px', borderRadius: '10px', marginRight: '15px' }} />
              <span className="fs-3 fw-bold text-white">Satta Live</span>
            </a>
            <p className="text-secondary pe-lg-5">
              The most trusted and fastest platform for live Satta results. Download our app today for real-time notifications.
            </p>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none hover-primary">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none hover-primary">About Us</a></li>
              <li className="mb-2"><a href="#results" className="text-secondary text-decoration-none hover-primary">Live Results</a></li>
              <li className="mb-2"><a href="#features" className="text-secondary text-decoration-none hover-primary">Features</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-white mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#faq" className="text-secondary text-decoration-none hover-primary">FAQ</a></li>
              <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none hover-primary">Contact Us</a></li>
              <li className="mb-2"><a href="#download" className="text-secondary text-decoration-none hover-primary">Download App</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="text-white mb-4">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Disclaimer</a></li>
            </ul>
            <div className="mt-4">
              <p className="text-muted small mb-0">Disclaimer: This website is for informational purposes only. We do not promote or encourage illegal gambling.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-muted mb-0 small">
          &copy; {new Date().getFullYear()} Satta Live. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
