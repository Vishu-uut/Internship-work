import React from 'react';
import './Services.css';
import serviceImage from '../images/img9.jpg'; // Import the image for services

const Services = () => (
  <div className="services-container">
    <div className="services-list">
      <h1>Our Services</h1>
      <button className="service-btn">Service 1</button>
      <button className="service-btn">Service 2</button>
      <button className="service-btn">Service 3</button>
      <button className="service-btn">Service 4</button>
    </div>
    <div className="services-image">
      <img src={serviceImage} alt="Our Services" />
    </div>
  </div>
);

export default Services;
