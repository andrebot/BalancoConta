import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.jsx';

import './menuButton.styl';

const MenuButton = ({ text, children }) => {
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);
  const toggleActive = () => setActive(!active);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const biggestText = children.reduce((text, child) => {
      const newText = child.props.text;

      if (newText.length > text.size) {
        return {
          size: newText.length,
          text: newText,
        };
      }

      return text;
    }, { size: 0, text: ''});

    context.font = 'normal 16px sans-serif'
    const mesurement = context.measureText(biggestText.text);
    setWidth(Math.ceil(mesurement.width + 41));
  }, []);
  
  return (
    <div className={`dropdown-menu-buttton ${active ? 'active' : ''}`}>
      <div className="dropdown-button">
        <Button action={toggleActive} icon={'/icons/down-chevron.svg'} iconSide="right">
          {text}
        </Button>
      </div>
      <div className="dropdown-menu" style={{
        width,
      }}>
        {children}
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MenuButton;
