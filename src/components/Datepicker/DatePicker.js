import React from 'react';
import propTypes from 'prop-types';

import Calender from './Calender';
import Input from '../Input/Input';

function DatePicker(props) {
  const { value, placeholder } = props;

  return (
    <>
      <Input placeholder={placeholder} />
      <Calender onChange={() => {}} value={value}/>
    </>
  );
}

DatePicker.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
  placeholder: propTypes.string
};

DatePicker.defaultProps = {
  placeholder: ''
};

export default DatePicker;
