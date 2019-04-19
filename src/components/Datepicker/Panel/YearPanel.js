import React, { memo } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import chunkArray from 'lodash/chunk';
import { YEARS_SHOW, getYearPeriod } from '../../../util/date';

/**
 * Render years between 20
 * Example if 2020 -> [2020, 2021, ..., 2039]
 * Example if 2019 -> [2010, 2021, ..., 2029]
 */
function YearPanel(props) {
  const { year, onClick } = props;
  const yearBase = getYearPeriod(year)[0]; // ex: 1992 -> 1990
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
    const isCurrent = yearBase + index === today.getFullYear();
    const isSelected = yearBase + index === year;

    return (
      <button 
        key={yearBase + index}
        data-year={yearBase + index}
        onClick={handleOnClick}
        className={classnames('sp-calender__year', {
          ['sp-calender__year--current']: isCurrent,
          ['sp-calender__year--selected']: isSelected,
        })}
      >
        {yearBase + index}
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
