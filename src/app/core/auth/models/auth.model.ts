export interface AuthSignInParams {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthService {
  signin: (params: AuthSignInParams) => Promise<number>;
  signout: () => Promise<void>;
  isAuthenticated: () => boolean;
}
