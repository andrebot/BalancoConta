const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const years = [];

for (let year = 1900; year < 2100; year++) {
  years.push(year);
}

/**
 * Returns the Month's abreviation. The month count starts at 0, where 0
 * is January.
 *
 * @param {number} month Number representing the month
 * @returns {string} The month's name abreviation
 */
export const getMonthShort = month => monthsShort[month];
/**
 * Returns the Month's name. The month count starts at 0, where 0
 * is January.
 *
 * @param {number} month Number representing the month
 * @returns {string} the month's name
 */
export const getMonth = month => months[month];
/**
 * Returns the weekday's name. The weekday count starts at 0, where 0
 * is Sunday.
 *
 * @param {number} day Number representing the weekday
 * @returns {string} the weekday's name
 */
export const getWeekDay = day => weekDays[day];
/**
 * Returns the weekday's abreviation. The weekday count starts at 0, where 0
 * is Sunday.
 *
 * @param {number} day Number representing the weekday
 * @returns {string} the weekday's abreviation
 */
export const getWeekDayShort = day => weekDaysShort[day];
/**
 * Return a list of all Month's names
 *
 * @returns {string[]} list with all month's name
 */
export const getMonths = () => months;
/**
 * Return a list of all weekday's abreviation
 *
 * @returns {string[]}
 */
export const getWeekDaysShort = () => weekDaysShort;
/**
 * Rerturns a list of the 100 years. Starting 50 years from now
 *
 * @returns {number[]} List of a hundred years
 */
export const getYears = () => years;
