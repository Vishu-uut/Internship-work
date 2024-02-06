// CampTable.js

import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye , faEdit ,faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import './CSSFiles/CampTable.css'; // Import the CSS file
import axios from 'axios';
import './CSSFiles/iconStyle.css'
const CampTable = ({ events,setNo,no}) => {
  const navigate = useNavigate();
  
  

  const handleView = (event) => {
    navigate('/view', { state: event });
  };

  const handleEdit = (event) => {
    navigate('/edit', { state: event });
    // setSelectedEvent(event);
  };

  const handleMarkCompleted = async (event) => {
    try {
      const updatedEvent = { ...event, action: true };
      const response = await axios.post('http://localhost:5000/api/updateAction', updatedEvent);
  
      if (response.status === 200) {
        console.log('Event marked as completed in backend');
        // Update the state in the parent component
        setNo((prevNo) => prevNo + 1);
      } else {
        console.error('Failed to mark event as completed in backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 

  
  const handleMarkCancelled = async (event) => {
    try {
      const updatedEvent = { ...event, action: false };
      const response = await axios.post('http://localhost:5000/api/updateAction', updatedEvent);
  
      if (response.status === 200) {
        console.log('Event marked as cancelled in backend');
        // Update the state in the parent component
        setNo((prevNo) => prevNo + 1)
        console.log(no)
      } else {
        console.error('Failed to mark event as cancelled in backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="thStyle thTd">Scheme Name</th>
            <th className="thStyle thTd">Sponsored Agency</th>
            <th className="thStyle thTd">Event Title</th>
            <th className="thStyle thTd">Date and Time</th>
            <th className="thStyle thTd">Venue</th>
            <th className="thStyle thTd">Guest Details</th>
            <th className="thStyle thTd">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.schemeName} className={event.action ? 'actionButtonRed' : 'actionButtonGreen'}>
              <td className="thTd">{event.schemeName}</td>
              <td className="thTd">{event.sponsoredAgency}</td>
              <td className="thTd">{event.eventTitle}</td>
              <td className="thTd">{event.dateTime}</td>
              <td className="thTd">{event.venue}</td>
              <td className="thTd">{event.guestDetails}</td>
              <td className="thTd">
                <button className="actionButton" onClick={() => handleView(event)}>
                <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="actionButton" onClick={() => handleEdit(event)}>
                <FontAwesomeIcon icon={faEdit} />
                </button>
                {event.action &&<button className="actionButton" onClick={() => handleMarkCompleted(event)}>
                Hosted
                </button>}
                {!event.action && <button className="actionButton" onClick={() => handleMarkCancelled(event)}>
                Pending
                </button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampTable;
