// View.js
import React from 'react';
import './CSSFiles/view.css';
import { useLocation } from 'react-router-dom';

const View = (props) => {
  const location = useLocation();
  const eventObject = location.state;

  const {
    action,
    dateTime,
    eventTitle,
    guestDetails,
    schemeName,
    sponsoredAgency,
    venue,
    __v,
    _id,
  } = eventObject;

  return (
    <div className="view-container">
      <h2>View Event</h2>
      
      <form className="event-form">
        <div className="form-group">
          <label>Scheme Name:</label>
          <p>{schemeName}</p>
        </div>
        <div className="form-group">
          <label>Is Completed:</label>
          <p>{action ? 'Yes' : 'No'}</p>
        </div>
        

        <div className="form-group">
          <label>Event Title:</label>
          <p>{eventTitle}</p>
        </div>

        <div className="form-group">
          <label>Sponsored Agency:</label>
          <p>{sponsoredAgency}</p>
        </div>

        <div className="form-group">
          <label>Venue:</label>
          <p>{venue}</p>
        </div>

        <div className="form-group">
          <label>Guest Details:</label>
          <p>{guestDetails}</p>
        </div>

        <div className="form-group">
          <label>Date and Time:</label>
          <p>{dateTime}</p>
        </div>
      </form>
    </div>
  );
};

export default View;
