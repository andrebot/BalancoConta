import React from 'react';
import Button from '../button/button.jsx';

import './dropdownMenuItem.styl';

const DropdownMenuItem = ({ icon, text }) => {
  return (
    <div className="dropdown-menu-item">
      <Button>
        {icon && <img src={icon} />}{text}
      </Button>
    </div>
  );
};

export default DropdownMenuItem;
