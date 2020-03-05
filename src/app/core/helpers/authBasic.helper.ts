import { AuthService } from '../../shared/models/auth.model';

class BasicAuthHelper implements AuthService {
  isAuthenticated: boolean = false;

  authenticate(cb: VoidFunction) {
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
