import React from 'react';
import navigationLinks from '../data/navigationLinks';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {navigationLinks.map((section) => (
        <div key={section.section} className="sidebar-section">
          <h4 className="sidebar-section-title">{section.section}</h4>
          <ul className="sidebar-links">
            {section.links.map((link) => (
              <li key={link.name}>
                <i className={`bi ${link.icon}`}></i> {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
