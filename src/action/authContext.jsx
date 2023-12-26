import { createContext, useContext } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const auth = useAuth();
  console.log("auth", auth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { useAuthContext, AuthProvider };
