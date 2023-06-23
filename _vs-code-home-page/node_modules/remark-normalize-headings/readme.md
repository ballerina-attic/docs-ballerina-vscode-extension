# remark-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to make sure there is a single top level heading in a
document by adjusting heading ranks accordingly.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin to ensure there is one top
level heading in a document.

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**remark** adds support for markdown to unified.
**mdast** is the markdown AST that remark uses.
This is a remark plugin that transforms mdast.

## When should I use this?

This project is useful if you’re dealing with user generated content and want to
ensure that there is a single primary heading (usually the title of the
document) which everything else falls under.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install remark-normalize-headings
```

In Deno with [Skypack][]:

```js
import remarkNormalizeHeadings from 'https://cdn.skypack.dev/remark-normalize-headings@3?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import remarkNormalizeHeadings from 'https://cdn.skypack.dev/remark-normalize-headings@3?min'
</script>
```

## Use

Say we have the following file `example.md`:

```markdown
# Title

# Description

## Usage

### Example

## API

# Related
```

And our module `example.js` looks as follows:

```js
import {read} from 'to-vfile'
import {remark} from 'remark'
import remarkNormalizeHeadings from 'remark-normalize-headings'

main()

async function main() {
  const file = await remark()
    .use(remarkNormalizeHeadings)
    .process(await read('example.md'))

  console.log(String(file))
}
```

Now, running `node example` yields:

```markdown
# Title

## Description

### Usage

#### Example

### API

## Related
```

## API

This package exports no identifiers.
The default export is `remarkNormalizeHeadings`.

#### `unified().use(remarkNormalizeHeadings)`

Plugin to make sure there is a single top level heading in a document by
adjusting heading ranks accordingly.
There are no options.

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

This plugin works with `unified` version 2+ and `remark` version 3+.

## Security

Use of `remark-normalize-headings` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Related

*   [`mdast-normalize-headings`][mdast-normalize-headings]
    — mdast utility with similar functionality

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://github.com/remarkjs/remark-normalize-headings/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-normalize-headings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-normalize-headings.svg

[coverage]: https://codecov.io/github/remarkjs/remark-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/remark-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/remark-normalize-headings

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-normalize-headings.svg

[size]: https://bundlephobia.com/result?p=remark-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[unified]: https://github.com/unifiedjs/unified

[mdast-normalize-headings]: https://github.com/syntax-tree/mdast-normalize-headings

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[typescript]: https://www.typescriptlang.org

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
