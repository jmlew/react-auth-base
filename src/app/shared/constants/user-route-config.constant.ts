import { RouteConfig } from '../models/routes.model';
import { appRouteConfig } from './app-route-config.constant';

const basePath: string = appRouteConfig.user.path;

/**
 * Route config defining the details for each page which is navigated to via the
 * router.
 */
export const userRouteConfig: RouteConfig = {
  register: {
    path: '/register',
    basePath,
    label: 'Register',
  },
  forgotPw: {
    path: '/forgotPw',
    basePath,
    label: 'Forgot Password',
  },
  account: {
    path: '/account',
    basePath,
    label: 'Account',
  },
};
