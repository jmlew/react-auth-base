import { AuthService, AuthSignInParams } from '../models/auth.model';

export class CognitoAuthHelper implements AuthService {
  private isAuth: boolean = false;

  signin(params: AuthSignInParams): Promise<number | undefined> {
    this.isAuth = true;
    return new Promise(() => 2);
  }

  signout(resolve: VoidFunction): Promise<void> {
    this.isAuth = false;
    return new Promise(resolve);
  }

  /**
   * TODO: remove in preference to call to the API for auth status.
   */
  isAuthenticated(): boolean {
    return this.isAuth;
  }
}

const authCognitoHelper = new CognitoAuthHelper();
export { authCognitoHelper };
