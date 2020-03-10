import { AuthService, AuthSignInParams } from '../models/auth.model';

// TODO: add AWS Cognito functionality.
export class CognitoAuthHelper implements AuthService {
  private isAuth: boolean = false;

  async signin(params: AuthSignInParams, updateAuth: VoidFunction): Promise<number> {
    this.isAuth = true;
    updateAuth();
    return new Promise(() => 2);
  }

  signout(updateAuth: VoidFunction): Promise<void> {
    this.isAuth = false;
    updateAuth();
    return Promise.resolve();
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}

const authCognitoHelper = new CognitoAuthHelper();
export { authCognitoHelper };
