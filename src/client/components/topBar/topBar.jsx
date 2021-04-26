import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuButton from '../menuButton/menuButton.jsx';
import DropDownMenuItem from '../dropdownMenuItem/dropdownMenuItem.jsx';
import { useAuth } from '../../hooks/authContext.jsx';

import './topBar.styl';

const TopBar = () => {
  const { user } = useAuth();
  const history = useHistory();
  const logout = () => history.push('/');

  return (
    <div className="top-bar">
      <div className="app-menu">oi</div>
      <div className="app-title">Finanças</div>
      <div className="user-menu">
        <MenuButton text={`Hello, ${user.name}`}>
          <DropDownMenuItem text="Settings" icon={'/icons/settings.svg'}></DropDownMenuItem>
          <DropDownMenuItem text="Logout" icon={'/icons/logout.svg'} action={logout}></DropDownMenuItem>
        </MenuButton>
      </div>
    </div>
  );
};

export default TopBar;
