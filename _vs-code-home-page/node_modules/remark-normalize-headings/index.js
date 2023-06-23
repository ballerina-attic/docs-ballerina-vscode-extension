/**
 * @typedef {import('mdast').Root} Root
 */

import {normalizeHeadings} from 'mdast-normalize-headings'

/**
 * Plugin to make sure there is a single top level heading in a document by
 * adjusting heading ranks accordingly.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkNormalizeHeadings() {
  return normalizeHeadings
}
