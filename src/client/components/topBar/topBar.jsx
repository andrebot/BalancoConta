import React from 'react';
import MenuButton from '../menuButton/menuButton.jsx';
import DropDownMenuItem from '../dropdownMenuItem/dropdownMenuItem.jsx';
import { useAuth } from '../../hooks/authContext.jsx';

import './topBar.styl';

const TopBar = () => {
  const { user } = useAuth();

  return (
    <div className="top-bar">
      <div className="app-menu">oi</div>
      <div className="app-title">Finanças</div>
      <div className="user-menu">
        <MenuButton text={`Hello, ${user.name}`}>
          <DropDownMenuItem text="Settings"></DropDownMenuItem>
          <DropDownMenuItem text="Logout"></DropDownMenuItem>
        </MenuButton>
      </div>
    </div>
  );
};

export default TopBar;
