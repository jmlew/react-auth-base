import { AxiosResponse } from 'axios';

import { AuthService } from '../models/auth.model';
import {
  clearJwtToken,
  getBearerToken,
  getDecodedJwtToken,
  getJwtToken,
  isTokenExpired,
  storeJwtToken,
} from '../../../shared/utils';
import { ApiHelper } from '../../api/helpers';
import { AuthSignInParams } from '../../api/models/auth-api.model';

export class BasicAuthHelper implements AuthService {
  async signin(params: AuthSignInParams, updateAuth: VoidFunction): Promise<number> {
    try {
      // Returns the user ID from the server.
      const response: AxiosResponse<number> = await ApiHelper.authenticate(params);
      // Store the bearer token from the reponse headers to web storage.
      this.storeBearerToken(response.headers, params.remember);

      // Update global auth state.
      updateAuth();

      // Return the user ID.
      return response.data;
    } catch (error) {
      return Promise.reject();
    }
  }

  signout(updateAuth: VoidFunction): Promise<void> {
    clearJwtToken();

    // Update global auth state.
    updateAuth();
    return Promise.resolve();
  }

  isAuthenticated(): boolean {
    const token = this.getAuthTokenData();
    if (!token) {
      return false;
    }

    // TODO: surface message informng user as to session expiration.
    const { payload } = token;
    const isExpired: boolean = isTokenExpired(payload);
    return !isExpired;
  }

  private getAuthTokenData(): any {
    const token: string = getJwtToken();
    return token ? getDecodedJwtToken(token) : null;
  }

  private storeBearerToken(headers: any, isRemember?: boolean) {
    const authHeader: string = headers && headers.authorization;
    if (authHeader) {
      const bearerToken: string = getBearerToken(authHeader);
      if (bearerToken) {
        storeJwtToken(bearerToken, !isRemember);
      }
    }
  }
}

const authBasicHelper = new BasicAuthHelper();
export { authBasicHelper };
