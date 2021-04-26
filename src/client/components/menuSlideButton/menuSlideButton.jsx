import React, { useState } from 'react';
import Button from '../button/button.jsx';

import './menuSlideButton.styl';

const MenuSlideButton = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);

  return (
    <div className={`menu-slide-button ${active ? 'active' : ''}`}>
      <Button icon='/icons/menu.svg' action={toggleActive}/>
      <div className="slide-menu">
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Dashboard</span>
        </div>
      </div>
      <div className="overlay" onClick={toggleActive}></div>
    </div>
  );
};

export default MenuSlideButton;
