import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();
const initState = {
  name: '',
  email: '',
  level: '',
  token: '',
};

/**
 * Initializes the authorization context with the logged user and returns the 
 * provider
 *
 * @param {Object} props React props
 * @param {Object} props.children Children elements 
 * @returns The provider component for the authorization feature
 */
function AuthProvider({ children }) {
  const [user, setUser] = useState(initState);
  const value = { user, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * This hook will provide the context for the user logged into the application 
 * 
 * @returns {Object} the user that is logged in
 */
function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth should be used within a Auth.Provider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth,
};
