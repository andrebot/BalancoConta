export const setYear = year => ({
  type: 'setYear',
  content: 'month',
  year,
});

export const setMonth = month => ({
  type: 'setMonth',
  content: 'weekDays',
  month,
});

export const setDay = (day, weekDay) => ({
  type: 'setDay',
  weekDay,
  day,
});

export const setContent = content => ({
  type: 'setContent',
  content,
});
