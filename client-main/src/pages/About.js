import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import img from '../images/img7.jpg';

import additionalImg from '../images/img8.webp'; // Import your new image

const About = () => (
  <div>
    {/* Existing Flex Container for Side-by-Side Layout */}
    <div className="about-container">
      <div className="about-left">
        <img src={img} alt="About Us" className="about-image" />
      </div>
      <div className="about-right">
        <h1>About Us</h1>
        <h2>Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values Learn more about our mission and values </h2>
   <div className="about-buttons">
          <Link to="/courses" className="btn-explore">Explore Courses</Link>
          <button className="btn-custom1">Button 1</button>
          <button className="btn-custom2">Button 2</button>
        </div>
      </div>
    </div>

    {/* New Section Below the Flex Container */}
    <div className="additional-section">
      <img src={additionalImg} alt="Additional Info" className="additional-image" />
      <h2>Some additional text goes here. Describe more about your mission and values.</h2>
    </div>
  </div>
);

export default About;

      