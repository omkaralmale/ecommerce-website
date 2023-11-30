import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const InitialToken = localStorage.getItem("key");
  const [authState, setAuthState] = useState({
    token: InitialToken,
    isLogin: false,
  });

  const loginHandler = (token) => {
    setAuthState({
      token: token,
      isLogin: true,
    });
    localStorage.setItem("key", token);
  };

  const logoutHandler = () => {
    setAuthState({
      token: "",
      isLogin: false,
    });
    localStorage.removeItem("key");
  };

  return (
    <AuthContext.Provider
      value={{
        token: authState.token,
        isLogin: authState.isLogin,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
