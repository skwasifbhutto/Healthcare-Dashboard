import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <section className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="activity-chart">
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '50%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '50%' }}></div>
      </div>
      <div className="activity-days">
        <span>Mon</span>
        <span>Tues</span>
        <span>Wed</span>
        <span>Thurs</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </section>
  );
};

export default ActivityFeed;
