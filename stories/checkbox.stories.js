import React, { useState } from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../src/components/Checkbox/Checkbox';
import CheckboxGroup from '../src/components/Checkbox/CheckboxGroup';

function CheckBoxState(props) {
  const { children } = props;
  const [values, setValues] = useState([]);

  function handleValuesChange(newValue, { target }) {
    action('checkbox change')(...arguments);
    const newValues = values.slice();

    if (target.checked) {
      newValues.push(newValue);
    } else {
      const indexOfValue = newValues.indexOf(newValue);
      newValues.splice(indexOfValue, 1);
    }

    setValues(newValues);
  }

  return children(values, handleValuesChange);
}

storiesOf('Checkbox', module)
  .addDecorator((story) => <div style={styles.wrapper}>{story()}</div>)
  .add('Normal checkbox', () => (
    <CheckBoxState>
      {(values, onChange) => (
        <>
          <Checkbox value="organe" name="vegetable" checked={values.includes('organe')} onChange={onChange}/>
          <Checkbox value="banana" name="vegetable" checked={values.includes('banana')} onChange={onChange}/>
        </>
      )}
    </CheckBoxState>
  ))
  .add('Disabled checkbox', () => (
    <Checkbox value="organe" name="vegetable" checked={false} disabled onChange={action('checkbox change')}/>
  ))
  .add('Checkbox with group', () => (
    <CheckBoxState>
      {(values, onChange) => (
        <CheckboxGroup onChange={onChange} values={values}>
          <Checkbox value="organe" name="vegetable" />
          <Checkbox value="banana" name="vegetable" />
          <Checkbox value="coconut" name="vegetable" required />
          <Checkbox value="carot" name="vegetable" disabled />
        </CheckboxGroup>
      )}
    </CheckBoxState>
  ));


const styles = {
  wrapper: {
    padding: '1em'
  }
};
