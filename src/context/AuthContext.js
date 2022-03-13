import React, {useState, createContext} from 'react';

export const AuthContext = createContext({
  user: undefined,
});

export function AuthProvider(props) {
  const {children} = props
  const [auth, setAuth] = useState(undefined)

  const valuesContext = {
    auth
  };

  return(
    <AuthContext.Provider value={valuesContext}>
      {children}
    </AuthContext.Provider>
  )
}