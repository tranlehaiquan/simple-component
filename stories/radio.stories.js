import React, { useState } from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from '../src/components/Radio/Radio';
import RadioGroup from '../src/components/Radio/RadioGroup';

function RadioState(props) {
  const { children } = props;
  const [value, setValue] = useState('banana');

  function handleValueChange(newValue) {
    action('radio change')(...arguments);

    setValue(newValue);
  }

  return children(value, handleValueChange);
}

storiesOf('Radio', module)
  .addDecorator((story) => <div style={styles.wrapper}>{story()}</div>)
  .add('Normal Radio', () => (
    <RadioState>
      {(value, onChange) => (
        <>
          <Radio value="organe" name="vegetable" checked={value === 'organe'} onChange={onChange}/>
          <Radio value="banana" name="vegetable" checked={value === 'banana'} onChange={onChange}/>
        </>
      )}
    </RadioState>
  ))
  .add('Disabled Radio', () => (
    <Radio value="organe" name="vegetable" checked={false} disabled onChange={action('checkbox change')}/>
  ))
  .add('Radio with group', () => (
    <RadioState>
      {(value, onChange) => (
        <RadioGroup onChange={onChange} value={value}>
          <Radio value="organe" name="vegetable" />
          <Radio value="banana" name="vegetable" />
        </RadioGroup>
      )}
    </RadioState>
  ));


const styles = {
  wrapper: {
    padding: '1em'
  }
}
