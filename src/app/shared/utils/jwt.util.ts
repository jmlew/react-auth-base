import jwt from 'jsonwebtoken';

import { WebStorage } from './web-storage.util';
import { isSameOrBeforeNow } from './date.util';

const jwtTokenKey = 'jwt-token';

export function getBearerToken(authHeader: string): string {
  return authHeader.slice(7, authHeader.length);
}

export function createBearerToken(jwtToken: string): string {
  return `Bearer ${jwtToken}`;
}

export function storeJwtToken(bearerToken: string, useSession?: boolean) {
  if (useSession) {
    WebStorage.session.set(jwtTokenKey, bearerToken);
  } else {
    WebStorage.local.set(jwtTokenKey, bearerToken);
  }
}

export function clearJwtToken() {
  if (WebStorage.local.get(jwtTokenKey)) {
    WebStorage.local.remove(jwtTokenKey);
  }
  if (WebStorage.session.get(jwtTokenKey)) {
    WebStorage.session.remove(jwtTokenKey);
  }
}

export function getJwtToken(): string {
  return WebStorage.local.get(jwtTokenKey) || WebStorage.session.get(jwtTokenKey);
}

export function getDecodedJwtToken(token: string): any {
  return jwt.decode(token, { complete: true });
}

export function isTokenExpired(payload: any): boolean {
  return payload.exp ? isSameOrBeforeNow(payload.exp) : false;
}
