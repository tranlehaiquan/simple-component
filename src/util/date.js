// example: 2017 - YYYY
export const THIS_YEAR = +(new Date().getFullYear());
// From 1 - 12 not 0 - 11
export const THIS_MONTH = +(new Date().getMonth()) + 1;
// Week days names and shortnames
export const WEEK_DAYS = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat'
};
// Weeks displayed on calendar
export const CALENDAR_WEEKS = 6;
export const DAYS_OF_WEEK = Object.keys(WEEK_DAYS).length;
/**
 * Detect if is leap year
 * @param {Number} year
 * @return {Boolean} is leap year
 */
export const isLeapYear = (year = THIS_YEAR) => {
  if(year % 4 !== 0) return false;
  if(year % 100 !== 0) return true;
  if(year % 400 !== 0) return false;
  return true;
};

/**
 * Get days of month
 * @param {Number} month 
 * @param {Number} year
 * @return {Number} [28, 29, 30, 31]
 */
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const month30Day= [4, 6, 9, 11];
  const isLeap = isLeapYear(year);

  return month === 2
    ? isLeap 
      ? 29
      : 28
    : month30Day.includes(month)
      ? 30
      : 31;
};

/**
 * 
 * @param {Number} month 
 * @param {Number} year
 * @return {Number} from 1 - 7
 */
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
};

// Pads a string value with leading zeroes(0) until length is reached
// For example: zeroPad(5, 2) => '05'
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
};

/**
 * Check if date is Date or not
 * @param {*} date 
 */
export const isDate = date => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());
  
  return isDate && isValidDate;
};

/**
 * (bool) Checks if two date values are the same day
 * @param {Date} date 
 * @param {Date} basedate 
 * @return {Boolean} Is same day?
 */
export const isSameDay = (date, basedate = new Date()) => {
  
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = +(basedate.getMonth()) + 1;
  const basedateYear = basedate.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = +(date.getMonth()) + 1;
  const dateYear = date.getFullYear();

  return (+basedateDate === +dateDate) && (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
  
};

// (string) Formats the given date as YYYY-MM-DD
// Months and Days are zero padded
export const getDateISO = (date = new Date) => {
  
  if (!isDate(date)) return null;

  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2)
  ].join('-');
  
};

// ({month, year}) Gets the month and year before the given month and year
// For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
// while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
export const getPreviousMonth = (month, year) => {
  const prevMonth = (month > 1) ? month - 1 : 12;
  const prevMonthYear = (month > 1) ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

// ({month, year}) Gets the month and year after the given month and year
// For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
// while: getNextMonth(12, 2000) => {month: 1, year: 2001}
export const getNextMonth = (month, year) => {
  const nextMonth = (month < 12) ? month + 1 : 1;
  const nextMonthYear = (month < 12) ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

/**
 * Calender builder for a month in specified year
 * @return {Array} [YYYY, MM, DD]
 */
export default (month = THIS_MONTH, year = THIS_YEAR) => {
  
  // Get number of days in the month and the month's first day
  
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  // Get number of days to be displayed from previous and next months
  // These ensure a total of 42 days (6 weeks) displayed on the calendar
  
  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);

  // Get the previous and next months and years
  
  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

  // Get number of days in previous month
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  // Builds dates to be displayed from previous month
  
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [ prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2) ];
  });

  // Builds dates to be displayed from current month
  
  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from next month
  
  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  // Combines all dates from previous, current and next months
  return [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ];
  
};
