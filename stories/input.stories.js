import React from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Input from '../src/components/Input/Input';

storiesOf('Input', module)
  .addDecorator(withInfo)
  .add('Normal Input', () => (
    <Input 
      placeholder="hello the world" 
      size="md"
      onChange={action('Input onChange  value')}
      onBlur={action('Input onBlur')}
      onFocus={action('Input onFocus')}
    />
  ));
