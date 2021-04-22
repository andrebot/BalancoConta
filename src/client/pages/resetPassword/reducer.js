export default (state, action) => {
  switch (action.type) {
    case 'setEmail':
      if (!action.email) {
        return {
          ...state,
          email: action.email,
          emailErrors: ['required'],
        };
      } else {
        return {
          ...state,
          email: action.email,
          emailErrors: [],
        };
      }
    case 'sendResetEmail':
      if (!state.email) {
        return {
          ...state,
          emailErrors: ['required'],
        };
      } else {
        return {
          ...state,
          isSendingEmail: true,
        }
      }
      break;
    default:
      return state;
  }
};
