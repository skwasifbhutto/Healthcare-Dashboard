import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <span className="appointment-icon">{icon}</span>
      <div className="appointment-info">
        <h5 className="appointment-title">{title}</h5>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
