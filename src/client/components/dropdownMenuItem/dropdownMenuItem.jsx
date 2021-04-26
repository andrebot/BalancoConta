import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.jsx';

import './dropdownMenuItem.styl';

const DropdownMenuItem = ({ icon, text }) => {
  return (
    <div className="dropdown-menu-item">
      <Button icon={icon}>
        {text}
      </Button>
    </div>
  );
};

DropdownMenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default DropdownMenuItem;
