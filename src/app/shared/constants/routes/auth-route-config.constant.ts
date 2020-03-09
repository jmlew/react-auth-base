import { RouteConfig } from '../../models/routes.model';

import { appRouteConfig } from './app-route-config.constant';

const basePath: string = appRouteConfig.auth.path;

/**
 * Route config defining the details for each page which is navigated to via the
 * router.
 */
export const authRouteConfig: RouteConfig = {
  signin: {
    path: '/signin',
    basePath,
    label: 'Sign In',
  },
  signout: {
    path: '/signout',
    basePath,
    label: 'Sign Out',
  },
};
