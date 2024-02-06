import React from 'react';
import './Contact.css'; // Assuming similar CSS styling as Services.css
import contactImage from '../images/img10.jpg'; // Import the image for contact

const Contact = () => (
  <div className="contact-container">
    <div className="contact-list">
      <h1>Contact Us</h1>
      <button className="contact-btn">Email Us</button>
      <button className="contact-btn">Call Us</button>
      <button className="contact-btn">Location</button>
      <button className="contact-btn">Support</button>
    </div>
    <div className="contact-image">
      <img src={contactImage} alt="Contact Us" />
    </div>
  </div>
);

export default Contact;
