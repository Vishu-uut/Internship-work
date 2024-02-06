// HandleEvent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CSSFiles/create.css'
const HandleEvent = () => {
    const navigate=useNavigate();
const location = useLocation();
  const eventObject = location.state;

  const [formData, setFormData] = useState(eventObject);

//   useEffect(() => {
//     if (event) {
//       // If the event prop is provided, use its values as default
//       setFormData(eventObject);
//     }
//   }, [eventObject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log(formData);
      console.log("Sending new data");
      const {_id} = formData;
  
      // Assuming eventId is a variable containing the event ID
      const response = await axios.post(`http://localhost:5000/api/updateEvent/${_id}`, formData);
      
  
      // Check the status of the response if needed
      console.log('Response status:', response.status);
      navigate('/manage')
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className='container'>
      <h2 style={{ color: 'black' }}>Edit Event</h2>
      <form method='POST' onSubmit={handleSubmit}>
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

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default HandleEvent;
