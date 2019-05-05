import * as react from 'react';

export interface ButtonProps {
  autoFocus: boolean,
  disabled: boolean,
  type: string,
  nativeType: 'button'| 'submit'| 'reset',
  children: React.ReactNode,
  onClick: (event: React.MouseEvent) => void
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
