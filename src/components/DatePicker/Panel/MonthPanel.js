import React, { memo } from 'react';
import propTypes from 'prop-types';
import chunkArray from 'lodash/chunk';

import { YEAR_MONTHS } from '../../../util/date';

const yearKeys = Object.keys(YEAR_MONTHS);

/**
 * Render months
 */
function MonthPanel(props) {
  const { year, onClick } = props;

  function handleOnclick(e) {
    const { month } = e.target.dataset;

    onClick(month, e);
  }

  const months = [... new Array(12)].map((m, index) => {
    const monthOfYear = `${year}-${index + 1}`; // 1992-01
    return (
      <button 
        key={monthOfYear}
        data-month={monthOfYear}
        onClick={handleOnclick}
        className="sp-calender__month"
      >
        {yearKeys[index]}
      </button>
    );
  });
  const monthRows = chunkArray(months, 3);

  return monthRows.map((row, index) => (
    <div className="sp-calender__row" key={index}>
      { row }
    </div>
  ));
}

MonthPanel.propTypes = {
  year: propTypes.number.isRequired,
  onClick: propTypes.func
};

MonthPanel.defaultProps = {
  onClick: () => undefined
};


export default memo(MonthPanel);
