import React, { useState } from 'react';
import Button from '../button/button.jsx';
import DatePicker from '../datePicker/datePicker.jsx';
import PropTypes from 'prop-types';

import './buttonDatePicker.styl';

const ButtonDatePicker = ({ setDate, pickMethod, children, type, icon, isCircle, initDate }) => {
  const [showPicker, setShowPicker] = useState(false);
  const setDateAndClose = date => {
    setDate(date);
    setShowPicker(false);
  };

  return (
    <div className={`date-button ${showPicker ? 'show' : ''}`}>
      <Button type={type} icon={icon} isCircle={isCircle} action={() => setShowPicker(!showPicker)}>
        {children}
      </Button>
      <DatePicker initDate={initDate} setDate={setDateAndClose} pickMethod={pickMethod} cancelAction={() => setShowPicker(false)}></DatePicker>
    </div>
  );
};

ButtonDatePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
  pickMethod: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf([
    'type2',
    'type3',
    '',
  ]),
  icon: PropTypes.string,
  isCircle: PropTypes.bool,
  initDate: PropTypes.instanceOf(Date),
};

ButtonDatePicker.defaultProps = {
  pickMethod: 'weekDays',
  isCircle: false,
}

export default ButtonDatePicker;
