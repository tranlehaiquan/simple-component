import * as React from 'react';

export interface ToastProps {
  type?: 'success' | 'info' | 'warning' | 'danger',
  message?: string,
  show?: boolean,
  customClass?: string,
  duration?: number,
  close? (): void,
  onClose? (): void
}

declare const Toast: React.ComponentType<ToastProps>;

export default Toast;
