import * as react from 'react';

export interface DatePickerProps {
  value: string | Date,
  onChange: (value: Date) => void,
  type: 'year' | 'month' | 'date'
}

declare const DatePicker: React.ComponentType<DatePickerProps>;

export default DatePicker;
