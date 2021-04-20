import React from 'react';
import propTypes from 'prop-types';
import './input.styl';

const FormInput = ({ label, type = 'text', name, children, errors = [] }) => {
  const errorMessages = children ? [].concat(children) : [];

  return (
    <div className="form-input-wrapper">
      <div className="form-input">
        <input type={type} name={name} autoComplete="off" required/>
        <label htmlFor={name} className="label-name">
          <span className="content-name">{label}</span>
        </label>
      </div>
      <div className="error-message">
        {errorMessages.length > 0 && errorMessages.map((child, index ) => (
          <div key={index} style={{
            display: errors.indexOf(child.props.htmlFor) > -1 ? 'block' : 'none',
          }}>{child}</div>
        ))}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
  errors: propTypes.arrayOf(propTypes.string),
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
