import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <h2>Dashboard</h2>
      <div className="overview-controls">
        <span>This Week</span>
        <button className="dropdown-button bi bi-caret-down-fill"></button>
      </div>
    </section>
  );
};

export default DashboardOverview;
