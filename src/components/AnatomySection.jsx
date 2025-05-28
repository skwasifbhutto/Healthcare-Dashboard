import React from 'react';
import anatomyStatus from '../data/anatomyStatus';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <section className="anatomy-section">
      <div className="anatomy-image-container">
        <img
          src="../src/assets/human-body-frontal.jpg"
          alt="Human Anatomy"
          className="anatomy-image"
        />
        {anatomyStatus.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="anatomy-tag"
            style={{ top: item.position.top, left: item.position.left, backgroundColor: item.color }}
          >
            {item.name}
          </div>
        ))}
      </div>

    </section>
  );
};

export default AnatomySection;
