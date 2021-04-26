import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.jsx';

import './dropdownMenuItem.styl';

const DropdownMenuItem = ({ icon, text, action }) => {
  return (
    <div className="dropdown-menu-item">
      <Button icon={icon} action={action}>
        {text}
      </Button>
    </div>
  );
};

DropdownMenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default DropdownMenuItem;
