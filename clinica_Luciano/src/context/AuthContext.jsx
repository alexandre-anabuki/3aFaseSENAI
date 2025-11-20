// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Se já tiver email no localStorage, mantém login
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setUser({ email: savedEmail });
    }
  }, []);

  const login = (email) => {
    localStorage.setItem("email", email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem("email");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook customizado para consumir o contexto
export const useAuth = () => useContext(AuthContext);
