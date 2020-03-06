export interface AuthSignInParams {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthService extends AuthState {
  authenticate: (values: AuthSignInParams, cb: VoidFunction) => void;
  signout: (cb: VoidFunction) => void;
}
