import React, { memo } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import chunkArray from 'lodash/chunk';
import { YEARS_SHOW } from '../../../util/date';

function getStartYear(year) {
  const yearTen = +`${year}`.slice(2,3).padEnd(2, 0);
  return yearTen - (yearTen % YEARS_SHOW);
}

/**
 * Render years between 20
 * Example if 2020 -> [2020, 2021, ..., 2039]
 * Example if 2019 -> [2010, 2021, ..., 2029]
 */
function YearPanel(props) {
  const { year, onClick } = props;
  const yearBase = +`${year}`.slice(0, 2).padEnd(4, 0); // ex: 1992 -> 19
  const yearStart = getStartYear(year); // ex: 1992 -> 90 
  const today = new Date();

  /**
   * Handle year on click
   * @param {Event} e 
   */
  function handleOnClick(e) {
    const { year } = e.target.dataset;

    onClick(year, e);
  }

  const years = [... new Array(YEARS_SHOW)].map((y, index) => {
    const yearNumber = yearStart + index;
    const isCurrent = yearBase + yearNumber === today.getFullYear();
    const isSelected = yearBase + yearNumber === year;

    return (
      <button 
        key={yearBase + yearNumber}
        data-year={yearBase + yearNumber}
        onClick={handleOnClick}
        className={classnames('sp-calender__year', {
          ['sp-calender__year--current']: isCurrent,
          ['sp-calender__year--selected']: isSelected,
        })}
      >
        {yearBase + yearNumber}
      </button>
    );
  });
  const yearRows = chunkArray(years, 4);

  return yearRows.map((row, index) => (
    <div className="sp-calender__row" key={index}>
      { row }
    </div>
  ));
}

YearPanel.propTypes = {
  year: propTypes.number.isRequired,
  onClick: propTypes.func
};

YearPanel.defaultProps = {
  onClick: () => undefined
};

export default memo(YearPanel);
