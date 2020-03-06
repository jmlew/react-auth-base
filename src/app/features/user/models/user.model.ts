import { AuthSignInParams } from '../../../core/auth/models/auth.model';

export interface UserParams extends AuthSignInParams {
  firstname: string;
  lastname: string;
}
