import React from 'react';
import calendarAppointments from '../data/calendarAppointments';
import './CalendarView.css';

const CalendarView = () => {
  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <h3>{calendarAppointments.month}</h3>
        <div className="calendar-nav">
          <button className="nav-button" aria-label="Previous month">←</button>
          <button className="nav-button" aria-label="Next month">→</button>
        </div>
      </div>
      <div className="calendar-grid">
        <div className="calendar-weekdays">
          <div>Mon</div>
          <div>Tues</div>
          <div>Wed</div>
          <div>Thurs</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="calendar-days">
          {calendarAppointments.days.map((day) => (
            <div key={day.day} className="calendar-day">
              <div className="day-number">{day.day}</div>
              <div className="appointments">
                {day.appointments.map((time, idx) => (
                  <div key={idx} className="appointment-time">{time}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="appointment-details">
        {calendarAppointments.details.map((detail, idx) => (
          <div key={idx} className="appointment-card">
            <h4>{detail.title}</h4>
            <p>{detail.time}</p>
            <p>{detail.doctor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;
