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
    case 'startLogin':
      const usernameErrors = [];
      const passwordErrors = [];
      let hasError = false;

      if (!state.username) {
        usernameErrors.push('required');
        hasError = true;
      }

      if (!state.password) {
        passwordErrors.push('required');
        hasError = true;
      }

      return {
        ...state,
        usernameErrors,
        passwordErrors,
        isLoggingIn: !hasError,
      }
    default:
      return state;
  }
};
