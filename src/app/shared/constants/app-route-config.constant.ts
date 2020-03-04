import { RouteConfig } from '../models/routes.model';
import { IconMat } from '../enums/icons.enum';

const basePath = '';

/**
 * Route config defining the details for each page which is navigated to via the
 * router.
 */
export const appRouteConfig: RouteConfig = {
  auth: {
    basePath,
    path: '/auth',
  },
  user: {
    basePath,
    path: '/user',
    label: 'User',
    icon: IconMat.AccountCircle,
  },
  accounts: {
    basePath,
    path: '/accounts',
    label: 'Accounts',
    icon: IconMat.Accounts,
  },
  transactions: {
    basePath,
    path: '/transactions',
    label: 'Transactions',
    icon: IconMat.Transactions,
  },
  cards: {
    basePath,
    path: '/cards',
    label: 'Cards',
    icon: IconMat.Card,
  },
};
