import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';
import getMonthCalender, {
  THIS_YEAR,
  THIS_MONTH,
  CALENDAR_WEEKS,
  DAYS_OF_WEEK,
  zeroPad,
  getPreviousMonth,
  getNextMonth,
  isSameDay,
  isDate,
  WEEK_DAYS
} from '../../util/date';

function Datepicker(props) {
  const { value } = props;
  const valueDate = new Date(value);

  const [month, setMonth] = useState(isDate(valueDate) ? (valueDate.getMonth() + 1) : THIS_MONTH);
  const [year, setYear] = useState(valueDate ? valueDate.getFullYear() : THIS_YEAR);
  useEffect(() => {
    const valueDate = new Date(value);
    const isSameYearMonth = (valueDate.getMonth() + 1 === month) && valueDate.getFullYear() === year; 
    if (isDate(valueDate) && !isSameYearMonth) {
      setMonth(valueDate.getMonth() + 1);
      setYear(valueDate.getFullYear());
    }
  }, [value]);

  const today = new Date();

  function renderHeader() {
    return(
      <div className="sp-calender__header">
        <button 
          onClick={handlePreviousClick}
          className="sp-calender__arrow sp-calender__arrow--left"
        >
          <Icon name="ARROW_LEFT" />
        </button>

        <div className="sp-calender__current-title">
          { zeroPad(month, 2) } { year }
        </div>

        <button 
          onClick={handleNextClick}
          className="sp-calender__arrow sp-calender__arrow--right"
        >
          <Icon name="ARROW_RIGHT" />          
        </button>
      </div>
    );
  }

  function renderBody() {
    return renderDates();
  }

  function renderDates() {
    // return Array [YYYY, MM, DD]
    const dates = getMonthCalender(month, year);
    const {month: previousMonth} = getPreviousMonth(month, year);
    const {month: nextMonth} = getNextMonth(month, year);
    const valueDateSelected = new Date(value);

    const weeks = [... new Array(CALENDAR_WEEKS)].map((week, weekIndex) => {
      const days = [... new Array(DAYS_OF_WEEK)].map((day, dayIndex) => {
        const date = dates[DAYS_OF_WEEK * weekIndex + dayIndex];
        const dateObject = new Date(date.join('-'));
        const isToday = isSameDay(dateObject, today);
        const isDayFromPreviousMonth = +date[1] === previousMonth;
        const isDayFromNextMonth = +date[1] === nextMonth;
        const isSelected = isDate(valueDateSelected) && isSameDay(valueDateSelected, dateObject);

        return (
          <button 
            key={dayIndex} 
            className={classnames('sp-calender__date', {
              'sp-calender__date--today': isToday,
              'sp-calender__date--previous': isDayFromPreviousMonth,
              'sp-calender__date--next': isDayFromNextMonth,
              'sp-calender__date--inmonth': !isDayFromPreviousMonth && !isDayFromNextMonth,
              'sp-calender__date--selected': isSelected
            })}
            title={date.join('-')}
            data-date={date.join('-')}
            onClick={handleOnDateChange}
          >
            { date[2] }
          </button>
        );
      });

      return (<div key={weekIndex} className="sp-calender__row"> {days} </div>);
    });

    const weekDaysName = Object.keys(WEEK_DAYS).map((day) => {
      return <p className="sp-calender__day-name" key={day}>{WEEK_DAYS[day]}</p>;
    });

    return (
      <div className="sp-calender__body">
        <div className="sp-calender__days-name">
          {weekDaysName}
        </div>
        {weeks}
      </div>
    );
  }

  function handlePreviousClick() {
    const previousMont = getPreviousMonth(month, year);
    setMonth(previousMont.month);

    if(previousMont.year === year) return;
    setYear(previousMont.year);
  }

  function handleNextClick() {
    const previousMont = getNextMonth(month, year);
    setMonth(previousMont.month);

    if(previousMont.year === year) return;
    setYear(previousMont.year);
  }

  function handleOnDateChange(e) {
    const { onChange } = props;
    const { target } = e;
    const { date } = target.dataset;

    onChange(date);
  }

  return (
    <div className="sp-calender">
      { renderHeader() }
      { renderBody() }
    </div>
  );
}

Datepicker.defaultProps = {
  onChange: () => undefined
};

Datepicker.propTypes = {
  value: propTypes.oneOfType([propTypes.string, Date]),
  onChange: propTypes.func
};

export default Datepicker;
