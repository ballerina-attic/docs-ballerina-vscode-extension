/**
 * Remove final newline characters from `value`.
 *
 * @param {unknown} value Value with trailing line feeds, coerced to string.
 * @return {string} Value without trailing newlines.
 */
export function trimTrailingLines(value) {
  return String(value).replace(/\n+$/, '')
}
