import { AuthService, AuthSignInParams } from '../models/auth.model';

class BasicAuthHelper implements AuthService {
  isAuthenticated: boolean = false;

  authenticate(values: AuthSignInParams, cb: VoidFunction) {
    console.log('authenticating signin :', values);
    this.isAuthenticated = true;
    setTimeout(cb, 300);
  }

  signout(cb: VoidFunction) {
    this.isAuthenticated = false;
    setTimeout(cb, 300);
  }
}

const authBasicHelper = new BasicAuthHelper();
export { authBasicHelper };
