import { AuthSignInParams } from './auth-api.model';

export interface UserParams extends AuthSignInParams {
  firstname: string;
  lastname: string;
  passwordConfirm: string;
}
