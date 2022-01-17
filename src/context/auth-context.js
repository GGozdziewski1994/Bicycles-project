import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
    currentUser: '',
});

const retrieveStored = () => {
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
  const store = retrieveStored();
  const initialState = {
      token: '',
      user: '',
      isAdmin: false,
  };

  if(store) {
      initialState.token = store.token;
      initialState.user = store.user;
      initialState.isAdmin = store.isAdmin;
  };
  
  const [token, setToken] = useState(initialState.token);
  const [curUser, setCurUser] = useState(initialState.user);
  const [isAdmin, setIsAdmin] = useState(initialState.isAdmin);

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