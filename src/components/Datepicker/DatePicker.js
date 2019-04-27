import React, { useState } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import Calender from './Calender';
import Input from '../Input/Input';

function DatePicker(props) {
  const { value, placeholder } = props;

  return (
    <>
      <Input placeholder={placeholder} />
      <Calender onChange={() => {}} value={new Date()}/>
    </>
  )
}

DatePicker.propTypes = {
  placeholder: propTypes.string
}

DatePicker.defaultProps = {
  placeholder: ''
}

export default DatePicker;
