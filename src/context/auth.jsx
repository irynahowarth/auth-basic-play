import React from 'react'
import {login as loginService} from './authService'
import { redirect } from 'react-router-dom';

export const AuthContext = React.createContext(
  {
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
}
);

export default function useAuth() {
  return (
    React.useContext(AuthContext)
  )
}

export function AuthProvider({ children }){

  const [isAuthenticated, setAuthenticated] = React.useState(true);

  const login = async (credentials) => {
    const result = await loginService(credentials); 
    if (result.success) {
      setAuthenticated(true);
    }
    return redirect('/admin');
  }

  const logout = () => {
      setAuthenticated(false);
  }
  return (
      <AuthContext.Provider value={{isAuthenticated: isAuthenticated, login: login, logout: logout}}>
          {children}
      </AuthContext.Provider>
  )
}