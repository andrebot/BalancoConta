import React from 'react';
import propTypes from 'prop-types';
import './input.styl';

const FormInput = ({ label, type = 'text', name, children, value, setValue, errors = [] }) => {
  const errorMessages = children ? [].concat(children) : [];
  const onChange = evt => {
    const { value } = evt.target;

    setValue(value);
  };

  return (
    <div className="form-input-wrapper">
      <div className="form-input">
        <input value={value} onChange={onChange} type={type} name={name} autoComplete="off" required/>
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
  setValue: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string,
  errors: propTypes.arrayOf(propTypes.string),
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
