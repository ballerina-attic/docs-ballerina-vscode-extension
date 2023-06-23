# mdast-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to make sure that there is only one top-level heading
in the document by adjusting headings depths accordingly.

Providing multiple top-level headings per single markdown document is confusing
for tools that assume that there is only a single top-level heading that
contains some meta-information (usually title) about the document.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install mdast-normalize-headings
```

## Use

```js
import {u} from 'unist-builder'
import {normalizeHeadings} from 'mdast-normalize-headings'

const tree = u('root', [
  u('heading', {depth: 1}, [u('text', 'title')]),
  u('heading', {depth: 2}, [u('text', 'description')]),
  u('heading', {depth: 1}, [u('text', 'example')])
])

console.log(tree)

normalizeHeadings(tree)

console.log(tree)
```

Yields:

```js
{
  type: 'root',
  children: [
    {type: 'heading', depth: 1, children: [Array]},
    {type: 'heading', depth: 2, children: [Array]},
    {type: 'heading', depth: 1, children: [Array]}
  ]
}
{
  type: 'root',
  children: [
    {type: 'heading', depth: 1, children: [Array]},
    {type: 'heading', depth: 3, children: [Array]},
    {type: 'heading', depth: 2, children: [Array]}
  ]
}
```

## API

This package exports the following identifiers: `normalizeHeadings`.
There is no default export.

### `normalizeHeadings(tree)`

Modifies [tree][] in-place.
Returns `tree`.

## Security

Use of `mdast-normalize-headings` does not involve [**hast**][hast] so there are
no openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-normalize-headings`][normalize-headings]
    — [**remark**][remark] plugin wrapper
*   [`mdast-util-heading-range`](https://github.com/syntax-tree/mdast-util-heading-range)
    — use headings as ranges

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-normalize-headings/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-normalize-headings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-normalize-headings.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/mdast-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/mdast-normalize-headings

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-normalize-headings.svg

[size]: https://bundlephobia.com/result?p=mdast-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[normalize-headings]: https://github.com/remarkjs/remark-normalize-headings

[tree]: https://github.com/syntax-tree/unist#tree

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast
