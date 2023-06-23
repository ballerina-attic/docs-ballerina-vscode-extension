import {convertElement} from 'hast-util-is-element'
import {hasProperty} from 'hast-util-has-property'
import {embedded} from 'hast-util-embedded'
import bodyOkLink from 'hast-util-is-body-ok-link'

var basic = convertElement([
  'a',
  'abbr',
  // `area` is in fact only phrasing if it is inside a `map` element.
  // However, since `area`s are required to be inside a `map` element, and it’s
  // a rather involved check, it’s ignored here for now.
  'area',
  'b',
  'bdi',
  'bdo',
  'br',
  'button',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'i',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'output',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'template',
  'textarea',
  'time',
  'u',
  'var',
  'wbr'
])

var meta = convertElement('meta')

/**
 * @param {unknown} node
 * @returns {boolean}
 */
export function phrasing(node) {
  return (
    // @ts-ignore Looks like a text.
    (node && node.type === 'text') ||
    basic(node) ||
    embedded(node) ||
    bodyOkLink(node) ||
    (meta(node) && hasProperty(node, 'itemProp'))
  )
}
