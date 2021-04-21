export default (state, action) => {
  switch (action.type) {
    case 'password':
      if (!action.password) {
        return {
          ...state,
          password: action.password,
          passwordErrors: ['required']
        };
      } else {
        return {
          ...state,
          passwordErrors: [],
          password: action.password
        };
      }
      break;
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
      break;
  }
};
