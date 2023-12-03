import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [language, setLanguage] = useState('en');

  const authInfo = {
    cartItems,
    setCartItems,
    total,
    setTotal,
    loading,
    setLoading,
    language,
    setLanguage,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
