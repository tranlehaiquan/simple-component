import * as React from 'react';

export interface CheckboxGroupProps {
  children?: React.ReactNode,
  checked?: boolean,
  onChange? (event: React.SyntheticEvent): void,
  values: Array<number | string | boolean>,
  name?: string,
  disabled?: boolean,
  className?: string,
  required?: boolean,
  indeterminate?: boolean,
  min?: number,
  max?: number
}

declare const CheckboxGroup: React.ComponentType<CheckboxGroupProps>;

export default CheckboxGroup;
