import { createContext, useState } from "react";

const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState({});

  const values = {
    login,
    setLogin
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};
export default LoginContext;
