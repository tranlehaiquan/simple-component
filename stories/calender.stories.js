import React, { useState } from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import DatePicker, { Calender } from '../src/components/DatePicker';

function CalenderState(props) {
  const [date, setDate] = useState(new Date());

  function handleDateChange(value) {
    action('calender change')(...arguments);
    setDate(value);
  }

  return props.children(date, handleDateChange);
}

storiesOf('Calender', module)
  .addDecorator(withInfo)
  .add('Normal', () => {
    return (
      <CalenderState>
        {(date, onChange) => (
          <>
            { date.toString() }
            <Calender onChange={onChange} value={date} />
            
          </>
        )}
      </CalenderState>
    );
  }, {
    info: {
      inline: true, 
      header: false, 
      propTables: [Calender],
      propTablesExclude: [CalenderState]
    }
  })
  .add('Type year, month, day', () => {
    return (
      <CalenderState>
        {(date, onChange) => (
          <>
            { date.toString() }
            <Calender onChange={onChange} value={date} type />
            <Calender onChange={onChange} value={date} type="month"/>
            <Calender onChange={onChange} value={date} type="year"/>
          </>
        )}
      </CalenderState>
    );
  })
  .add('DatePicker', () => {
    return (
      <CalenderState>
        {(date, onChange) => (
          <DatePicker placeholder="Pick date" onChange={onChange} value={date} />
        )}
      </CalenderState>
    );
  });

