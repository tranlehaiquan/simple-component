import * as react from 'react';

export interface CalenderProps {
  value: string | Date,
  onChange: (value: Date) => void,
  type: 'year' | 'month' | 'date'
}

declare const Calender: React.ComponentType<CalenderProps>;

export default Calender;
