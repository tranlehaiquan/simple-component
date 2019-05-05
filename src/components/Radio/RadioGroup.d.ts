import * as React from 'react';

export interface RadioGroupProps {
  children: React.ReactNode,
  value: number | string | boolean,
  name: string,
  onChange: (value: number | string | boolean, event: React.SyntheticEvent) => void,
  required: boolean,
  disabled: boolean
}

declare const RadioGroup: React.ComponentType<RadioGroupProps>;

export default RadioGroup;
