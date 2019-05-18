import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Input from '../src/components/Input/Input';

storiesOf('Input', module)
  .addDecorator(withInfo)
  .add('Normal', () => (
    <Input 
      placeholder="hello the world" 
      onChange={action('Input onChange  value')}
      onBlur={action('Input onBlur')}
      onFocus={action('Input onFocus')}
    />
  ))
  .add('Size', () => (
    <>
      <Input 
        placeholder="Input size md" 
        size="md"
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
      />
      <Input 
        placeholder="Input size sm" 
        size="sm"
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
      />
      <Input 
        placeholder="Input size xs" 
        size="xs"
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
      />
    </>
  ))
  .add('Prefix/ suffix', () => (
    <>
      <Input 
        placeholder="Input size xs" 
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
        prefix="https://"
        suffix=".com"
      />
      
      <Input
        placeholder="Input size xs" 
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
        prefix="https://"
        suffix=".com"
        size="md"
      />
    </>
  ))
  .add('PrefixIcon/ suffixIcon', () => (
    <>
      <Input
        placeholder="Input size xs" 
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
        prefixIcon="CLOSE"
      />

      <Input 
        placeholder="Input size xs" 
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
        suffixIcon="CLOSE"
      />

      <Input 
        placeholder="Input size xs" 
        onChange={action('Input onChange  value')}
        onBlur={action('Input onBlur')}
        onFocus={action('Input onFocus')}
        suffixIcon="CALENDER"
      />
    </>
  ));
