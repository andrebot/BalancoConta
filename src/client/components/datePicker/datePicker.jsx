import React, { useReducer, useEffect, useState } from 'react';
import reducer from './reducer.js';
import {
  setContent,
  setYear,
  setMonth,
  setDay,
  nextMonth,
  previousMonth,
} from './actions.js';
import Button from '../button/button.jsx';
import PropTypes, { element } from 'prop-types';

import './datePicker.styl';

const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const years = [];

for (let year = 1900; year < 2100; year++) {
  years.push(year);
}

const DatePicker = setDate => {
  const [state, dispatch] = useReducer(reducer, {
    content: 'weekDays',
    date: new Date(2021, 0, 1),
    selectedDate: new Date(2021, 0, 1),
  });
  const [calendarWeekDays, setWeekDays] = useState([]);
  const selectMonth = month => dispatch(setMonth(month));
  const createDays = () => {
    const firstWeekDay = new Date(state.date.getFullYear(), state.date.getMonth(), 1).getDay();
    const daysInMonth = new Date(state.date.getFullYear(), state.date.getMonth() + 1, 0).getDate();
    const selectedDay = state.selectedDate.getDate();
    const selectedMonth = state.selectedDate.getMonth();
    const currentMonth = state.date.getMonth();
    const elements = [];

    for (let currentWeekDay = 0; currentWeekDay < firstWeekDay; currentWeekDay++) {
      if (currentWeekDay < firstWeekDay) {
        elements.push(<div key={currentWeekDay} className="day-fill"></div>);
      }
    }

    for (let currentDay = 1; currentDay <= daysInMonth; currentDay++) {
      if (currentMonth !== selectedMonth || 
          (currentMonth === selectedMonth && selectedDay !== currentDay)) {
        elements.push(
          <div
            key={currentDay + firstWeekDay}
            className="day"
            onClick={() => dispatch(setDay(currentDay))}
          >
            {currentDay}
          </div>
        );
      } else if (currentDay === selectedDay) {
        elements.push(
          <div
            key={currentDay + firstWeekDay}
            className="day selected"
            onClick={() => dispatch(setDay(currentDay))}
          >
            {currentDay}
          </div>
        );
      }
    }

    return elements;
  };

  useEffect(() => {
    if (state.content === 'year') {
      document.getElementById(`year${state.selectedDate.getFullYear()}`).scrollIntoView({ block: 'center' });
    } else if (state.content === 'month') {
      document.getElementsByClassName('months-list')[0].scrollIntoView({ behavior: 'smooth' });
    } else if (state.content === 'weekDays') {
      document.getElementsByClassName('week-days')[0].scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.content]);

  useEffect(() => {
    setWeekDays(createDays());
  }, [state.date, state.selectedDate]);

  return (
    <div className="date-picker">
      <div className="side-panel" >
        <div
          className={`year ${state.content === 'year' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('year'))}
        >
          {state.selectedDate.getFullYear()}
        </div>
        <div
          className={`day ${
            state.content === 'weekDays' || state.content === 'month' ? 'active' : ''}`}
          onClick={() => dispatch(setContent('weekDays'))}
        >
          {weekDays[state.selectedDate.getDay()]}, <br/> {monthsShort[state.selectedDate.getMonth()]} {state.selectedDate.getDate()}
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className="years-list">
            {years.map((year, index) => 
              <div
                id={`year${year}`}
                className={`year ${year === state.selectedDate.getFullYear() ? 'selected' : ''}`} 
                key={index}
                onClick={() => dispatch(setYear(year))}
              >
                {year}
              </div>
            )}
          </div>
          <div className="months-list">
            <div className="selected-year">
              <Button type="type3" action={() => dispatch(setContent('year'))}>
                {state.date.getFullYear()}
              </Button>
            </div>
            <div className="months">
              {months.map((month, index) =>
                <Button
                  additionalClass={month === months[state.selectedDate.getMonth()] ? 'selected' : ''}
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
              <div className="month-year">
                <Button
                  icon="/icons/down-chevron-black.svg"
                  type="type3"
                  action={() => dispatch(previousMonth())}/>
                <Button type="type3" action={() => dispatch(setContent('month'))}>
                  {months[state.date.getMonth()]} {state.date.getFullYear()}
                </Button>
                <Button
                  icon="/icons/down-chevron-black.svg"
                  type="type3"
                  action={() => dispatch(nextMonth())}/>
              </div>
              <div className="week">
                {weekDaysShort.map((weekday, index) => <div key={index}>{weekday}</div>)}
              </div>
              <div className="days">
                {calendarWeekDays}
              </div>
            </div>
        </div>
        <div className="buttons-wrapper">
          <Button type="type3">
            Cancel
          </Button>
          <Button type="type3" action={() => setDate(state.date)}>
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  // setDate: PropTypes.func.isRequired,
};

export default DatePicker;
