export function setUsername (username) {
  return {
    type: 'username',
    username,
  };
}

export function setPassword (password) {
  return {
    type: 'password',
    password,
  };
}
