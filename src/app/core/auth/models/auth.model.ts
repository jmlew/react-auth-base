export interface AuthSignInParams {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthService {
  // signin: (params: AuthSignInParams) => Promise<number | undefined>;
  // signout: (resolve: VoidFunction) => Promise<void>;
  // isAuthenticated: () => boolean;
}
