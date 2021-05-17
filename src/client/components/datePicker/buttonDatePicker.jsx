import React, { useState } from 'react';
import Button from '../button/button.jsx';
import DatePicker from '../datePicker/datePicker.jsx';

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

export default ButtonDatePicker;
