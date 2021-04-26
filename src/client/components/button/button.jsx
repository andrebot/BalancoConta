import React from 'react';
import propTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import './button.styl';

const Button = function ({
  children,
  disabled = false,
  action,
  style,
  type = '',
  icon,
}) {
  const debounceAction = debounce(200, evt => action(evt));
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
      debounceAction(evt);
    }
  };

  return (
    <div style={style}>
      <button className={`button ${type} ${disabled ? 'disabled' : ''}`} onClick={createRipple} disabled={disabled}>
        {icon && <img src={icon} />}{children}
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
  icon: propTypes.string,
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