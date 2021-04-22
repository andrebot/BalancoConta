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
    case 'confirmPassword':
      if (!action.confirmPassword) {
        return {
          ...state,
          confirmPassword: action.confirmPassword,
          confirmPasswordErrors: ['required'],
        };
      } else if (action.confirmPassword !== state.password) {
        return {
          ...state,
          confirmPasswordErrors: ['notEqual'],
          confirmPassword: action.confirmPassword,
        };
      } else {
        return {
          ...state,
          confirmPasswordErrors: [],
          confirmPassword: action.confirmPassword,
        };
      }
    case 'doSignUp':
      const { username, password, confirmPassword } = state;
      const usernameErrors = [];
      const passwordErrors = [];
      const confirmPasswordErrors = [];
      let hasError = false;

      if (!username) {
        usernameErrors.push('required');
        hasError = true;
      }

      if (!password) {
        passwordErrors.push('required');
        hasError = true;
      }

      if (!confirmPassword) {
        confirmPasswordErrors.push('required');
        hasError = true;
      } else if (password !== confirmPassword) {
        confirmPasswordErrors.push('notEqual');
        hasError = true;
      }

      if (hasError) {
        return {
          ...state,
          usernameErrors,
          passwordErrors,
          confirmPasswordErrors,
        }
      } else {
        return {
          ...state,
          isRegistering: true,
        }
      }
    default:
      return state;
  }
};
