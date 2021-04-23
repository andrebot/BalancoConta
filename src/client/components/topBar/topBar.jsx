import React from 'react';

import { useAuth } from '../../hooks/authContext.jsx';

import './topBar.styl';

const TopBar = () => {
  const { user } = useAuth();

  return (
    <div className="top-bar">
      <div>oi</div>
      <div className="app-title">Finanças</div>
      <div>olá {user.name}</div>
    </div>
  );
};

export default TopBar;
