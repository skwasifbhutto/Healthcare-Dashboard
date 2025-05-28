import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header con">
      <div className="header-left">
        <h1 className="app-title">Health<span className='app-title1'>care.</span></h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" disabled />
          <span className="search-icon bi bi-bell-fill"></span>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button" aria-label="Notifications"></button>
        <div className="user-profile">
          <img
            src="../src/assets/avatar.webp"
            alt="User Avatar"
            className="user-avatar"
          />
          <span className="user-name">wasif</span>
        </div>
        <button className="add-button" aria-label="Add">+</button>
      </div>
    </header>
  );
};

export default Header;
