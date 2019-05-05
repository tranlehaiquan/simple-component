import * as react from 'react';

export interface IconProps {
  width: number,
  height: number,
  tilte: string,
  description: string,
  name: string,
  className: string
}

declare const Icon: React.ComponentType<IconProps>;

export default Icon;
