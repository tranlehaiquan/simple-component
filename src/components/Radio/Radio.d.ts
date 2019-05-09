import * as React from 'react';

export interface RadioProps {
  children?: React.ReactNode,
  checked?: boolean,
  onChange? (value: number | string | boolean, event: React.SyntheticEvent): void,
  value: number | string | boolean,
  name: string,
  disabled?: boolean,
  required?: boolean
}

declare const Radio: React.ComponentType<RadioProps>;

export default Radio;
