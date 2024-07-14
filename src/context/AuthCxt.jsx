import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthenticationFunction = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(pass) {
    console.log(pass == '1234');
    if (pass == '1234') {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationFunction;
