import { AuthService, AuthSignInParams } from '../models/auth.model';

// TODO: add AWS Cognito functionality.
export class CognitoAuthHelper implements AuthService {
  private isAuth: boolean = false;

  async signin(params: AuthSignInParams): Promise<number> {
    this.isAuth = true;
    return new Promise(() => 2);
  }

  signout(): Promise<void> {
    this.isAuth = false;
    return Promise.resolve();
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}

const authCognitoHelper = new CognitoAuthHelper();
export { authCognitoHelper };
