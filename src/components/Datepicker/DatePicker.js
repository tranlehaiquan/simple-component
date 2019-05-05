import React from 'react';
import propTypes from 'prop-types';

import Calender from './Calender';
import Input from '../Input/Input';

function DatePicker(props) {
  const { value, placeholder, onChange } = props;

  return (
    <>
      <Input placeholder={placeholder} />
      <Calender onChange={onChange} value={value}/>
    </>
  );
}

DatePicker.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
  placeholder: propTypes.string,
  onChange: propTypes.func
};

DatePicker.defaultProps = {
  placeholder: '',
  onChange: () => undefined
};

export default DatePicker;
