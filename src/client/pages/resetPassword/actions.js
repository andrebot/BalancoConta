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

export function emailSent() {
  return {
    type: 'emailSent',
  };
}
