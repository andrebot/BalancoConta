export const setYear = year => ({
  type: 'setYear',
  year,
});

export const setMonth = month => ({
  type: 'setMonth',
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
