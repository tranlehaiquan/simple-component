import * as react from 'react';

export interface ButtonProps {
  autoFocus?: boolean,
  disabled?: boolean,
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger',
  nativeType: 'button'| 'submit'| 'reset',
  children: React.ReactNode,
  onClick?( event: React.SyntheticEvent ): void
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
