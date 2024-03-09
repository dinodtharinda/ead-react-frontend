// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking local storage)
    const isUserAuthenticated = localStorage.getItem('authenticated') === 'true';
    setAuthenticated(isUserAuthenticated);
  }, []);

  const login = () => {
    // Perform login logic
    localStorage.setItem('authenticated', 'true');
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    localStorage.setItem('authenticated', 'false');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
