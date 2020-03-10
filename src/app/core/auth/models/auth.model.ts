export interface AuthSignInParams {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthService {
  signin: (params: AuthSignInParams, updateAuth: VoidFunction) => Promise<number>;
  signout: (updateAuth: VoidFunction) => Promise<void>;
  isAuthenticated: () => boolean;
}
