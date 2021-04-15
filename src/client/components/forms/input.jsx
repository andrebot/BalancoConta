import React from 'react';
import propTypes from 'prop-types';
import './input.styl';

const FormInput = ({ label, type = 'text', name, }) => {
  return (
    <div className="form-input">
      <input type={type} name={name} autoComplete="off"/>
      <label htmlFor={name} className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  );
};

FormInput.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
