import { AlertAlign, AlertType } from '../enums/alert.enum';

export interface AlertConfig {
  message: string;
  type: AlertType;
  align?: AlertAlign;
  duration?: number;
}
