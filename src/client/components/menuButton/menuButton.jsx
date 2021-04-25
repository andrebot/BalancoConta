import React, { useState, useEffect } from 'react';
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
        <Button action={toggleActive}>
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

export default MenuButton;
