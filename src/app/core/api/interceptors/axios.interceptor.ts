import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { createBearerToken, getJwtToken, isString } from '../../../shared/utils';
import { serverApiUrl } from '../constants';

interface InterceptorsHandler {
  onResponseError: (error: any) => void;
  onRequestError: (error: any) => void;
}
export function iniAxiosInterceptors(handlers: InterceptorsHandler) {
  axios.interceptors.request.use(requestSuccessInterceptor, (error: any) => {
    if (error) {
      handlers.onRequestError(getErrorMessage(error));
    }
    return requestErrorInterceptor(error);
  });
  axios.interceptors.response.use(responseSuccessInterceptor, (error: any) => {
    if (error) {
      handlers.onResponseError(getErrorMessage(error));
    }
    return responseErrorInterceptor(error);
  });
}

function getErrorMessage(error: any): string {
  if (error.response) {
    const message: string | any =
      error.response.data?.message || error.response.statusText;
    return isString(message) ? message : message.toString();
  } else if (error.request) {
    const request: XMLHttpRequest = error.request;
    return request.responseText || request.statusText;
  } else {
    const message: string | any = error.message;
    return isString(message) ? message : message.toString();
  }
}

function requestSuccessInterceptor(config: AxiosRequestConfig) {
  addAuthBearerToken(config);
  prependEnvironmentServerApiPath(config);
  addServerTimeout(config);
  return config;
}

function requestErrorInterceptor(error: any) {
  console.log('request error :', error);
  return Promise.reject(error);
}

function responseSuccessInterceptor(response: AxiosResponse) {
  return response;
}

function responseErrorInterceptor(error: any) {
  console.log('response error :', error);
  const status: number = error.status || error.response.status;
  if (status === 403 || status === 401) {
    // TODO: update auth state and signout.
  }
  return Promise.reject(error);
}

function addAuthBearerToken(config: AxiosRequestConfig): AxiosRequestConfig {
  const token: string = getJwtToken();
  if (token) {
    config.headers.Authorization = createBearerToken(token);
  }
  return config;
}

function addServerTimeout(config: AxiosRequestConfig): AxiosRequestConfig {
  config.timeout = 1000000;
  return config;
}

function prependEnvironmentServerApiPath(config: AxiosRequestConfig): AxiosRequestConfig {
  config.url = `${serverApiUrl}${config.url}`;
  return config;
}
