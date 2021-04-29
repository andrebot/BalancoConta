import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import Button from '../button/button.jsx';

import './menuSlideButton.styl';

const MenuSlideButton = ({ children }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  const history = useHistory();
  const handleClick = evt => {
    const target = evt.target;

    if (target.nodeName === 'SPAN') {
      history.push(target.attributes.getNamedItem('href').value);
      toggleActive();
    }
  };
  const debouncedHandle = debounce(200, evt => handleClick(evt));

  return (
    <div className={`menu-slide-button ${active ? 'active' : ''}`}>
      <Button icon='/icons/menu.svg' action={toggleActive}/>
      <div className="slide-menu" onClick={debouncedHandle}>
        {children}
      </div>
      <div className="overlay" onClick={toggleActive}></div>
    </div>
  );
};

MenuSlideButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MenuSlideButton;
