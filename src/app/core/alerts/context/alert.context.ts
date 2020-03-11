import { createContext, useContext } from 'react';

import { AlertConfig } from '../models/alert.model';

export interface AlertContextValue {
  alert: AlertConfig;
  setAlert: (alert: AlertConfig) => void;
}
export const AlertContext = createContext({} as AlertContextValue);

export function useAlert() {
  return useContext(AlertContext);
}
