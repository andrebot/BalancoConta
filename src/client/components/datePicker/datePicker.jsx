import React, { useReducer, useEffect } from 'react';
import reducer from './reducer.js';
import { setContent, setYear, setMonth } from './actions.js';
import Button from '../button/button.jsx';
import PropTypes from 'prop-types';

import './datePicker.styl';

const DatePicker = () => {
  const [state, dispatch] = useReducer(reducer, {
    year: 2021,
    month: 0,
    day: 1,
    weekDay: 'Mon',
    content: 'year',
  });
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const years = [];
  const selectMonth = month => dispatch(setMonth(month));

  for (let year = 1900; year < 2100; year++) {
    years.push(year);
  }

  useEffect(() => {
    if (state.content === 'year') {
      document.getElementById(`year${state.year}`).scrollIntoView({ block: 'center' });
    } else if (state.content === 'month') {
      document.getElementsByClassName('months-list')[0].scrollIntoView({ behavior: 'smooth' });
    } else if (state.content === 'weekDays') {
      document.getElementsByClassName('week-days')[0].scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.content]);

  return (
    <div className="date-picker">
      <div className="side-panel" >
        <div
          className={`year ${state.content === 'year' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('year'))}
        >
          {state.year}
        </div>
        <div
          className={`day ${
            state.content === 'weekDays' || state.content === 'month' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('day'))}
        >
          {state.weekDay}, <br/> {monthsShort[state.month]} {state.day}
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
          <div className="months-list">
            <div className="selected-year">{state.year}</div>
            <div className="months">
              {months.map((month, index) =>
                <Button
                  additionalClass={month === months[state.month] ? 'selected' : ''}
                  key={index}
                  type="type3"
                  action={() => selectMonth(index)}
                >
                  {month}
                </Button>
              )}
            </div>
          </div>
          <div className="week-days">
              <div>{months[state.month]} {state.year}</div>
              <div>weeks</div>
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
