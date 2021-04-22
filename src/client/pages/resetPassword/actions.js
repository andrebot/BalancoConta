export function setEmail (email) {
  return {
    type: 'setEmail',
    email,
  };
}

export function sendResetEmail (email) {
  return {
    type: 'sendResetEmail',
    email,
  };
}
