/**
 * Get value from a deeply nested object using a string path.
 * Memorizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param fallback  - the fallback value
 */
export function get(
  obj: Record<string, any>,
  path: string | number,
  fallback?: any,
  index?: number
) {
  const key = typeof path === 'string' ? path.split('.') : [path]

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break
    obj = obj[key[index]]
  }

  return obj === undefined ? fallback : obj
}
