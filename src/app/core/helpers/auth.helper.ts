class AuthHelper {
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

const authHelper = new AuthHelper();
export { authHelper };
