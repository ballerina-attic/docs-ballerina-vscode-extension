/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Heading} Heading
 */

import {visit} from 'unist-util-visit'

const max = 6

/**
 * Make sure that there is only one top-level heading in the document by
 * adjusting headings depths accordingly.
 *
 * @template {Node} T
 * @param {T} tree
 * @returns {T}
 */
export function normalizeHeadings(tree) {
  /** @type {boolean|undefined} */
  let multiple
  /** @type {Heading|undefined} */
  let first
  /** @type {Heading|undefined} */
  let title

  visit(tree, 'heading', (node) => {
    if (!first) {
      first = node
    }

    if (node.depth === 1) {
      if (title) {
        multiple = true
      } else {
        title = node
      }
    }
  })

  // If there are no titles, but there is a first heading.
  if (!title && first) {
    first.depth = 1
  }

  // If there are multiple titles.
  if (multiple) {
    visit(tree, 'heading', (node) => {
      if (node !== title && node.depth < max) {
        node.depth++
      }
    })
  }

  return tree
}
