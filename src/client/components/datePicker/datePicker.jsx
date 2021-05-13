import React, { useReducer, useEffect } from 'react';
import reducer from './reducer.js';
import { setContent, setYear } from './actions.js';
import Button from '../button/button.jsx';
import PropTypes from 'prop-types';

import './datePicker.styl';

const DatePicker = () => {
  const [state, dispatch] = useReducer(reducer, {
    year: 2021,
    month: 0,
    day: 1,
    weekDay: 'Mon',
    content: 'years',
  });
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const years = [];

  for (let year = 1900; year < 2100; year++) {
    years.push(year);
  }

  useEffect(() => {
    document.getElementById(`year${state.year}`).scrollIntoView({ block: 'center' });
  }, []);

  return (
    <div className="date-picker">
      <div className="side-panel" >
        <div
          className={`year ${state.content === 'years' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('years'))}
        >
          {state.year}
        </div>
        <div
          className={`day ${state.content === 'days' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('days'))}
        >
          {state.weekDay}, <br/> {months[state.month]} {state.day}
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className="years-list">
            {years.map((year, index) => 
              <div
                id={`year${year}`}
                className={`year ${year === state.year ? 'selected' : ''}`} 
                key={index}
                onClick={() => dispatch(setYear(year))}
              >
                {year}
              </div>
            )}
          </div>
        </div>
        <div className="buttons-wrapper">
          <Button type="type3">
            Cancel
          </Button>
          <Button type="type3">
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {};

export default DatePicker;
