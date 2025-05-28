// HealthStatusCards.jsx
import React from 'react';
import anatomyStatus from '../data/anatomyStatus';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  const cards = anatomyStatus.slice(2); // Assuming Heart and Lungs are first two

  return (
    <section className="health-status-cards-container">
      {cards.map((card) => (
        <div key={card.id} className="health-status-card">
          <div
            className="health-status-icon"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
          <div className="health-status-info">
            <h4>{card.name}</h4>
            <p>Date: {card.date}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${card.progress}%`, backgroundColor: card.color }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HealthStatusCards;
