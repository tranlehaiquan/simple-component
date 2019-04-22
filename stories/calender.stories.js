import React, { useState } from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Calender from '../src/components/Datepicker/Calender';

function CalenderState(props) {
  const [date, setDate] = useState(new Date());

  function handleDateChange(value) {
    action('calender change')(...arguments);
    setDate(value);
  }

  return props.children(date, handleDateChange);
}

storiesOf('Calender', module)
  .addDecorator((story) => <div style={styles.wrapper}>{story()}</div>)
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
  })
  .add('Type year, month, day', () => {
    return (
      <CalenderState>
        {(date, onChange) => (
          <>
            { date.toString() }
            <Calender onChange={onChange} value={date} style={styles.calender} />
            <Calender onChange={onChange} value={date} type="month" style={styles.calender}/>
            <Calender onChange={onChange} value={date} type="year" style={styles.calender}/>
          </>
        )}
      </CalenderState>
    );
  });

  const styles = {
    wrapper: {
      padding: '1em'
    }
  };
