import axios, { AxiosResponse } from 'axios';

import { ApiEndpoint } from '../enums/auth-api.enum';
import { UserParams } from '../models/user-api.model';
import { AuthSignInParams } from '../models/auth-api.model';

function getEndpoint(endpoint: ApiEndpoint): string {
  return `api/${endpoint}`;
}

export class ApiHelper {
  static authenticate(params: AuthSignInParams): Promise<AxiosResponse<number>> {
    return axios.post(getEndpoint(ApiEndpoint.Authenticate), params);
  }
  static registerUser(params: UserParams): Promise<AxiosResponse<number>> {
    return axios.post(getEndpoint(ApiEndpoint.Register), params);
  }
}
