import { RouteConfig } from '../shared/models/routes.model';

const basePath = '/';

/**
 * Route config defining the details for each page which is navigated to via the
 * router.
 */
export const appRouteConfig: RouteConfig = {
  auth: {
    path: '/auth',
    basePath,
  },
};
