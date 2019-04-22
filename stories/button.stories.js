import React from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button/Button';

storiesOf('Button', module)
  .add('Normal', () => (
    <>
      <Button onClick={action('clicked')} disabled>
        Disabled button
      </Button>
      <Button onClick={action('clicked')} type="primary">
        Primary
      </Button>
      <Button onClick={action('clicked')} type="success">
        Success
      </Button>
      <Button onClick={action('clicked')} type="info">
        Info
      </Button>
      <Button onClick={action('clicked')} type="warning">
        Warning
      </Button>
      <Button onClick={action('clicked')} type="danger">
        Danger 😀 😎 👍 💯
      </Button>
    </>
  ))
  .add('Disabled button', () => (
    <>
      <Button onClick={action('clicked')} disabled>
        Disabled button
      </Button>
      <Button onClick={action('clicked')} type="primary" disabled>
        Primary
      </Button>
      <Button onClick={action('clicked')} type="success" disabled>
        Success
      </Button>
      <Button onClick={action('clicked')} type="info" disabled>
        Info
      </Button>
      <Button onClick={action('clicked')} type="warning" disabled>
        Warning
      </Button>
      <Button onClick={action('clicked')} type="danger" disabled>
        Danger
      </Button>
    </>
  ));
