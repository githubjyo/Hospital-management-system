// src/contexts/AuthContext.jsx
import React, { createContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('hms_user');
    return raw ? JSON.parse(raw) : null;
  });

  const loginLocal = (userObj) => {
    setUser(userObj);
    localStorage.setItem('hms_user', JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hms_user');
  };

  return (
    <AuthContext.Provider value={{ user, loginLocal, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;