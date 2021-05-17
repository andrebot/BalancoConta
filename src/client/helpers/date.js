const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const years = [];

for (let year = 1900; year < 2100; year++) {
  years.push(year);
}

export const getMonthShort = month => monthsShort[month];
export const getMonth = month => months[month];
export const getWeekDay = day => weekDays[day];
export const getWeekDayShort = day => weekDaysShort[day];
export const getMonths = () => months;
export const getWeekDaysShort = () => weekDaysShort;
export const getYears = () => years;