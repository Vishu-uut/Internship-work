// Create.js

import React, { useState } from 'react';
import axios from 'axios';
import './CSSFiles/create.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schemeName: '',
    sponsoredAgency: '',
    eventTitle: '',
    dateTime: '',
    venue: '',
    guestDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/submit-form', formData);
      console.log(response.data);
      navigate('/camp');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'black' }}>Create Camp</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="schemeName">Scheme Name:</label>
        <input
          type="text"
          id="schemeName"
          name="schemeName"
          value={formData.schemeName}
          onChange={handleChange}
          required
        />

        <label htmlFor="sponsoredAgency">Sponsored Agency:</label>
        <input
          type="text"
          id="sponsoredAgency"
          name="sponsoredAgency"
          value={formData.sponsoredAgency}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventTitle">Event Title:</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />

        <label htmlFor="dateTime">Date and Time:</label>
        <input
          type="datetime-local"
          id="dateTime"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="venue">Venue:</label>
        <input
          type="text"
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
        />

        <label htmlFor="guestDetails">Guest Details:</label>
        <input
          type="text"
          id="guestDetails"
          name="guestDetails"
          value={formData.guestDetails}
          onChange={handleChange}
          required
        />

        <button className='about_section ' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
