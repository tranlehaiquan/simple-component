import React, { memo } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import getMonthCalender, {
  CALENDAR_WEEKS,
  DAYS_OF_WEEK,
  getPreviousMonth,
  getNextMonth,
  isSameDay,
  isDate,
  WEEK_DAYS
} from '../../../util/date';

const weekDaysName = (
  <div className="sp-calender__days-name">
    {Object.keys(WEEK_DAYS).map((day) => {
      return <p className="sp-calender__day-name" key={day}>{WEEK_DAYS[day]}</p>;
    })}
  </div>
);

function DatePanel(props) {
  const { value, year, month, onClick } = props;
  // return Array [YYYY, MM, DD]
  const dates = getMonthCalender(month, year);
  const {month: previousMonth} = getPreviousMonth(month, year);
  const {month: nextMonth} = getNextMonth(month, year);
  const valueDateSelected = new Date(value);
  const today = new Date();

  function handleOnDateChange(e) {
    e.stopPropagation();

    const { date } = e.target.dataset;
    onClick(date, e);

  }

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
          data-date={dateObject.toString()}
          onClick={handleOnDateChange}
        >
          <span>
            { date[2] }
          </span>
        </button>
      );
    });

    return (<div key={weekIndex} className="sp-calender__row"> {days} </div>);
  });

  return (
    <>
      {weekDaysName}
      {weeks}
    </>
  );
}

DatePanel.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
  onClick: propTypes.func,
  year: propTypes.number,
  month: propTypes.number
};

DatePanel.defaultProps = {
  onClick: () => undefined
};

export default memo(DatePanel);
