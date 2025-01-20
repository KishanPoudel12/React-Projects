import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/configuration";
import { onAuthStateChange } from "firebase/auth";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  async function callback(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChange(auth, callback);
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
