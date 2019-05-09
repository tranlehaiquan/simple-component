import * as React from 'react';

export interface InputProps {
  className?: string,
  placeholder?: string,
  readOnly?: boolean,
  name?: string,
  size?: 'md' | 'sm' | 'xs',
  disabled?: boolean,
  required?: boolean,
  maxLength?: number,
  minLength?: number,
  // clearable?: boolean,
  autoComplete?: boolean,
  nativeAutoComplete?: boolean,
  onFocus? (event: React.SyntheticEvent): void,
  onBlur? (event: React.SyntheticEvent): void,
  onChange? (event: React.SyntheticEvent): void,
  prefixIcon?: string | React.ReactNode,
  suffixIcon?: string | React.ReactNode,
  prefix?: string,
  suffix?: string
}

declare const Input: React.ComponentType<InputProps>;

export default Input;
