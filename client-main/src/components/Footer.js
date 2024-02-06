import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="social-icons">
        {/* Replace these with actual icons */}
        <a href="#" className="social-icon">Icon1</a>
        <a href="#" className="social-icon">Icon2</a>
        <a href="#" className="social-icon">Icon3</a>
      </div>
      <p className="footer-bottom-text">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
