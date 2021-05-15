export const setYear = year => ({
  type: 'setYear',
  content: 'month',
  year,
});

export const setMonth = (month, content = 'weekDays') => ({
  type: 'setMonth',
  content,
  month,
});

export const setDay = (day) => ({
  type: 'setDay',
  day,
});

export const setContent = content => ({
  type: 'setContent',
  content,
});

export const nextMonth = () => ({
  type: 'nextMonth',
});

export const previousMonth = () => ({
  type: 'previousMonth',
});
