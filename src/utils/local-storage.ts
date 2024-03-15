type ValueWithTTL<T> = {
  value: T;
  ttlTime: number;
};

export function getLocalStorageItem<T>(key: string): T {
  const result = globalThis.localStorage.getItem(key);
  if (!result) {
    return null as T;
  }
  const parsedResultWithTTL: ValueWithTTL<T> = JSON.parse(result);

  const ttlTime = parsedResultWithTTL.ttlTime;
  const currentTime = Date.now();
  const isTTLTimeCrossed = currentTime > ttlTime;

  if (isTTLTimeCrossed) {
    removeLocalStorageItem(key);
    return null as T;
  } else {
    return parsedResultWithTTL.value;
  }
}

/**
 *
 * @param key string
 * @param value any
 * @param ttl number in seconds
 */
export function setLocalStorageItem<T>(key: string, value: T, ttl: number) {
  const ttlTime = Date.now() + ttl * 1000;
  const valueWithTTL: ValueWithTTL<T> = {
    value,
    ttlTime,
  };
  const parsedValue = JSON.stringify(valueWithTTL);
  globalThis.localStorage.setItem(key, parsedValue);
}

export function removeLocalStorageItem(key: string) {
  globalThis.localStorage.removeItem(key);
}
