import * as React from 'react';

export interface ToastProps {
  type: 'success' | 'info' | 'warning' | 'danger',
  message: string,
  show: boolean,
  customClass: string,
  close: () => void,
  duration: number,
  onClose: () => void
}

declare const Toast: React.ComponentType<ToastProps>;

export default Toast;
