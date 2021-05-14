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
        date: new Date(state.date.getFullYear(), state.date.getMonth(), action.day),
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
