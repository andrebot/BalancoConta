export default (state, action) => {
  switch(action.type) {
    case 'setYear':
      return {
        ...state,
        year: action.year,
      };
    case 'setMonth':
      return {
        ...state,
        month: action.month,
      };
    case 'setDay':
      return {
        ...state,
        day: action.day,
        weekDay: action.weekDay,
      };
    case 'setContent':
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};
