export default (state, action) => {
  switch(action.type) {
    case 'setYear':
      return {
        ...state,
        year: action.year,
        content: action.content,
      };
    case 'setMonth':
      return {
        ...state,
        month: action.month,
        content: action.content,
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
