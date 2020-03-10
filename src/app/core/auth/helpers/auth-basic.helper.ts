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
      this.storeBearerToken(response.headers, params.remember);
      // Return the user ID.
      return response.data;
    } catch (error) {
      return Promise.reject();
    }
  }

  signout(): Promise<void> {
    clearJwtToken();
    return Promise.resolve();
  }

  isAuthenticated(): boolean {
    const tokenData = this.getAuthTokenPayload();
    return tokenData != null;
  }

  private getAuthTokenPayload(): any {
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
