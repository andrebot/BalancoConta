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
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() + 1, 1),
      };
    case 'previousMonth':
      return {
        ...state,
        date: new Date(state.date.getFullYear(), state.date.getMonth() - 1, 1),
      };
    default:
      return state;
  }
};
