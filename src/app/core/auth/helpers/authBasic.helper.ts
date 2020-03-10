import axios, { AxiosResponse } from 'axios';

import { AuthService, AuthSignInParams } from '../models/auth.model';
import { AuthApiEndpoint } from '../enums/auth-api.enum';
import {
  clearJwtToken,
  getBearerToken,
  getDecodedJwtToken,
  getJwtToken,
  storeJwtToken,
} from '../../../shared/utils';

export class BasicAuthHelper implements AuthService {
  async signin(params: AuthSignInParams): Promise<number> {
    try {
      // Returns the user ID from the server.
      const response: AxiosResponse<number> = await axios.post(
        AuthApiEndpoint.Authenticate,
        params
      );
      // Store the bearer token from the reponse headers to web storage.
      const authHeader: string = response.headers && response.headers.authorization;
      if (authHeader) {
        this.storeBearerToken(authHeader, params.remember);
      }
      // Return the user ID.
      return response.data;
    } catch (error) {
      return Promise.reject();
    }
  }

  private storeBearerToken(authHeader: string, isRemember?: boolean) {
    const bearerToken: string = getBearerToken(authHeader);
    if (bearerToken) {
      storeJwtToken(bearerToken, !isRemember);
    }
  }

  signout(resolve: VoidFunction): Promise<void> {
    clearJwtToken();
    return new Promise(resolve);
  }

  /**
   * TODO: Add this flag to Context API and pass through app.
   */
  isAuthenticated(): boolean {
    const token: string = getJwtToken();
    if (token) {
      const tokenData = getDecodedJwtToken(token);
      console.log('tokenData :', tokenData);
      return true;
    }
    return false;
  }
}

const authBasicHelper = new BasicAuthHelper();
export { authBasicHelper };
