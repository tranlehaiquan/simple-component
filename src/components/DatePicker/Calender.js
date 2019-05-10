import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import DatePanel from './Panel/DatePanel';
import MonthPanel from './Panel/MonthPanel';
import YearPanel from './Panel/YearPanel';
import Icon from '../Icon/Icon';
import {
  THIS_YEAR,
  THIS_MONTH,
  zeroPad,
  getPreviousMonth,
  getNextMonth,
  isDate,
  getYearPeriod,
  YEARS_SHOW
} from '../../util/date';

function Calender(props) {
  const { value, type } = props;
  const valueDate = isDate(value) ? value : new Date(value);

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

  const [view, setView] = useState(type || 'day');

  /**
   * Render header of calender
   */
  function renderHeader() {
    let label;

    if (view === 'year') {
      const yearPeriod = getYearPeriod(year);
      label = (
        <a className="sp-calender__view-control">
          {yearPeriod[0]} - {yearPeriod[1]}
        </a>
      );
    }

    if (view === 'month') {
      const typeIsTheSame = view === type;
      label = (
        <a onClick={typeIsTheSame ? undefined : changeViewToYear} className="sp-calender__view-control">{ year }</a>
      );
    }

    if (view === 'day') {
      const typeIsTheSame = view === type;
      label = (
        <>
          <a 
            onClick={typeIsTheSame ? undefined : changeViewToMonth} 
            className="sp-calender__view-control"
          >
            { zeroPad(month, 2) }
          </a> 
          <a 
            onClick={typeIsTheSame ? undefined : changeViewToYear} 
            className="sp-calender__view-control"
          >
            { year }
          </a>
        </>
      );
    }
    
    return(
      <div className="sp-calender__header">
        <button 
          onClick={handlePreviousClick}
          className="sp-calender__arrow sp-calender__arrow--left"
        >
          <Icon name="ARROW_LEFT" />
        </button>

        <div className="sp-calender__current-title">
          { label }
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

  /**
   * Render body of calender
   */
  function renderBody() {
    if(view === 'year') return <YearPanel year={year} onClick={handleOnDateChange} />;
    if(view === 'month') return <MonthPanel year={year} onClick={handleOnDateChange} />;
    
    return (
      <DatePanel 
        month={month} 
        year={year}
        value={value} 
        onClick={handleOnDateChange} 
      />
    );
  }

  /**
   * Handle previous arrow click
   */
  function handlePreviousClick() {
    if(view === 'month') {
      setYear(year - 1);
      return;
    }

    if(view === 'year') {
      setYear(year - YEARS_SHOW);
      return;
    }

    const previousMont = getPreviousMonth(month, year);
    setMonth(previousMont.month);

    if(previousMont.year === year) return;
    setYear(previousMont.year);
  }

  /**
   * Handle next arrow click
   */
  function handleNextClick() {
    if(view === 'month') {
      setYear(year + 1);
      return;      
    }

    if(view === 'year') {
      setYear(year + YEARS_SHOW);
      return;
    }

    const previousMont = getNextMonth(month, year);
    setMonth(previousMont.month);

    if(previousMont.year === year) return;
    setYear(previousMont.year);
  }

  /**
   * Handle everytime date, month, year click
   * @param {Number, String} value 
   */
  function handleOnDateChange(value) {
    const { onChange } = props;

    if(view === 'month') {
      // value: 1992-01
      const [newYear, newMonth] = value.split('-');
      if(type !== 'month') {
        setYear(+newYear);
        setMonth(+newMonth);
        changeViewToDay();
      } else {
        const newDate = new Date(valueDate);
        newDate.setYear(newYear);
        newDate.setMonth(+newMonth - 1);
        onChange(newDate);
      }
      return;
    }
    
    if(view === 'year') {
      setYear(+value);
      if(type !== 'year') {
        changeViewToMonth();
      } else {
        const newDate = new Date(valueDate);
        newDate.setYear(value);
        onChange(newDate);
      }
      return;
    }

    onChange(value);
  }

  /**
   * return function change to view
   * @param {String} name 
   */
  function changeViewTo(name) {
    return () => setView(name);
  }

  const changeViewToYear = changeViewTo('year');
  const changeViewToMonth = changeViewTo('month');
  const changeViewToDay = changeViewTo('day');

  return (
    <div className="sp-calender">
      { renderHeader() }
      <div className="sp-calender__body">
        { renderBody() }
      </div>
    </div>
  );
}

Calender.defaultProps = {
  onChange: () => undefined,
};

Calender.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
  onChange: propTypes.func,
  type: propTypes.oneOf(['year', 'month', 'day'])
};

export default Calender;
