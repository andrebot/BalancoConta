export default (state, action) => {
  switch(action.type) {
    case 'setYear':
      return {
        ...state,
        date: new Date(action.year, state.date.getMonth(), state.date.getDate()),
        content: action.content,
      };
    case 'setMonth':
      return {
        ...state,
        date: new Date(state.date.getFullYear(), action.month, state.date.getDate()),
        content: action.content,
      };
    case 'setDay':
      return {
        ...state,
        selectedDate: new Date(state.date.getFullYear(), state.date.getMonth(), action.day),
      };
    case 'setContent':
      return {
        ...state,
        content: action.content,
      };
    case 'nextMonth':
      const currentDay = state.date.getDate();
      let nextDate = new Date(state.date.getFullYear(), state.date.getMonth() + 2, 0);

      if (state.date.getDate() <= nextDate.getDate()) {
        nextDate = new Date(nextDate.getFullYear(), nextDate.getMonth(), currentDay);
      }

      return {
        ...state,
        date: nextDate,
      };
    default:
      return state;
  }
};
