import { IconMat } from '../enums/icons.enum';

export interface RouteItem {
  path: string;
  basePath?: string;
  label?: string;
  icon?: IconMat;
}

export interface RouteConfig {
  [route: string]: RouteItem;
}
