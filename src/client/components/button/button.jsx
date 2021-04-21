import React from 'react';
import propTypes from 'prop-types';
import './button.styl';

const Button = function ({ children, disabled = false, action, style, type = '' }) {
  const createRipple = (evt) => {
    const btn = evt.target;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const boundingBox = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${evt.clientX - (boundingBox.x + radius)}px`;
    circle.style.top = `${evt.clientY - (boundingBox.y + radius)}px`;
    circle.classList.add('ripple');

    setTimeout(() => {
      circle.remove();
    }, 601); // that is the time we set in the css for the ripple effect

    btn.appendChild(circle);

    if (action && action instanceof Function) {
      setTimeout(() => {
        action(evt);
      }, 200);
    }
  };

  return (
    <div style={style}>
      <button className={`button ${type} ${disabled ? 'disabled' : ''}`} onClick={createRipple} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  disabled: propTypes.bool,
  action: propTypes.func,
  style: propTypes.object,
  type: propTypes.oneOf([
    'type2',
    '',
  ]),
};

Button.defaultProps = {
  disabled: false,
  type: '',
};

export default Button;