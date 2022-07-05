import type { Dict } from "@nafeira/types-util";
export function split<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const picked: Dict = {};
  const omitted: Dict = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key as T[K])) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });

  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>];
}
