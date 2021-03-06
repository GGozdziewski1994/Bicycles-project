import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
    currentUser: '',
});

const getAuthFromLocalStorage = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

    return {
        token,
        user,
        isAdmin,
    };
};

export const AuthContextProvider = props => {
  const authFromLocalStorage = getAuthFromLocalStorage();
  const initialAuthState = {
      token: '',
      user: '',
      isAdmin: false,
  };

  if(authFromLocalStorage) {
    initialAuthState.token = authFromLocalStorage.token;
    initialAuthState.user = authFromLocalStorage.user;
    initialAuthState.isAdmin = authFromLocalStorage.isAdmin;
  };
  
  const [token, setToken] = useState(initialAuthState.token);
  const [curUser, setCurUser] = useState(initialAuthState.user);
  const [isAdmin, setIsAdmin] = useState(initialAuthState.isAdmin);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, emailUser, isAdmin) => {
      setToken(token);
      localStorage.setItem('token', token);

      setCurUser(emailUser);
      localStorage.setItem('user', emailUser);

      setIsAdmin(isAdmin);
      localStorage.setItem('isAdmin', isAdmin);
  }

  const logoutHandler = () => {
      setToken(null);
      localStorage.removeItem('token');

      setCurUser(null);
      localStorage.removeItem('user');

      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
  }

  const contextValue = {
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
      currentUser: curUser,
      isAdmin,
  }

  return(
      <AuthContext.Provider value={contextValue}>
          {props.children}
      </AuthContext.Provider>
  );
};

export default AuthContext;