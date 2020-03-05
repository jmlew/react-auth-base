export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthService extends AuthState {
  authenticate: (cb: VoidFunction) => void;
  signout: (cb: VoidFunction) => void;
}
