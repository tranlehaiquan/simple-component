import * as React from 'react';

export interface CheckboxProps {
  children?: React.ReactNode,
  checked?: boolean,
  onChange? (event: React.SyntheticEvent): void,
  value: [number | string | boolean],
  name?: string,
  disabled?: boolean,
  className?: string,
  required?: boolean,
  indeterminate?: boolean
}

declare const Checkbox: React.ComponentType<CheckboxProps>;

export default Checkbox;
