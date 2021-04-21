export default (state, action) => {
  switch (action.type) {
    case 'username':
      if (!action.username) {
        return {
          ...state,
          username: action.username,
          usernameErrors: ['required'],
        };
      } else {
        return {
          ...state,
          usernameErrors: [],
          username: action.username,
        };
      }
    default:
      return state;
  }
};
