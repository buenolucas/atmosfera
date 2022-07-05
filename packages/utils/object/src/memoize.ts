export type Get = (
  obj: Readonly<object>,
  path: string | number,
  fallback?: any,
  index?: number
) => any;

export const memoize = (fn: Get) => {
  const cache = new WeakMap();

  const memoizedFn: Get = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    const map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    const value = fn(obj, path, fallback, index);

    map.set(path, value);

    return value;
  };

  return memoizedFn;
};

// export const memoizedGet = memoize(get);

// /**
//  * Get value from deeply nested object, based on path
//  * It returns the path value if not found in object
//  *
//  * @param path - the string path or value
//  * @param scale - the string path or value
//  */
// export function getWithDefault(path: any, scale: any) {
//   return memoizedGet(scale, path, path);
// }

//export const memoizedGet = memoize(get);
