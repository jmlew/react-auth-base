import { createContext, useContext } from 'react';

export interface AuthContextValue {
  isAuth: boolean;
  updateAuth: () => void;
}
export const AuthContext = createContext({} as AuthContextValue);

export function useAuth() {
  return useContext(AuthContext);
}
