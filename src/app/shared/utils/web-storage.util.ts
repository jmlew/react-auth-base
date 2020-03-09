export enum StorageType {
  Session,
  Local,
}

/**
 * Get either localStorage or sessionStorage
 * @param type storage type
 */
export const getStorage: any = (type: StorageType) => {
  return type === StorageType.Session ? window.sessionStorage : window.localStorage;
};

/**
 * Set an item into storage
 * @param type storage type
 * @param key key to set
 * @param value value to set
 */
const setItem = (type: StorageType) => (key: string, value: any) => {
  getStorage(type).setItem(key, JSON.stringify(value));
};

/**
 * Get an item from storage
 * @param type storage type
 * @param key key to get
 * @param defaultVal value to return if key doesnt exist
 */
const getItem = (type: StorageType) => (key: string, defaultVal?: any) => {
  const val = getStorage(type).getItem(key);
  return !val || val === 'undefined' ? defaultVal : JSON.parse(val);
};

/**
 * Remove item from storage
 * @param type storage type
 * @param key key to remove
 */
const removeItem = (type: StorageType) => (key: string) => {
  getStorage(type).removeItem(key);
};

export type getItemType = (key: string, defaultVal?: any) => any;
export type setItemType = (key: string, value: any) => void;
export type removeItemType = (key: string) => void;

export interface WebStorageAPI {
  get: getItemType;
  set: setItemType;
  remove: removeItemType;
}

export interface WebStorageService {
  session: WebStorageAPI;
  local: WebStorageAPI;
}

export const WebStorage: WebStorageService = {
  session: {
    get: getItem(StorageType.Session),
    set: setItem(StorageType.Session),
    remove: removeItem(StorageType.Session),
  },
  local: {
    get: getItem(StorageType.Local),
    set: setItem(StorageType.Local),
    remove: removeItem(StorageType.Local),
  },
};
