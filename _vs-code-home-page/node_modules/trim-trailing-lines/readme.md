# trim-trailing-lines

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Remove final line feeds from a string.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install trim-trailing-lines
```

## Use

```js
import {trimTrailingLines} from 'trim-trailing-lines'

trimTrailingLines('foo\nbar') // => 'foo\nbar'
trimTrailingLines('foo\nbar\n') // => 'foo\nbar'
trimTrailingLines('foo\nbar\n\n') // => 'foo\nbar'
```

## API

This package exports the following identifiers: `trimTrailingLines`.
There is no default export.

### `trimTrailingLines(value)`

Remove final line feed characters from `value`.

###### Parameters

*   `value` (`string`) — Value with trailing line feeds, coerced to string.

###### Returns

`string` — Value without trailing newlines.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/trim-trailing-lines/workflows/main/badge.svg

[build]: https://github.com/wooorm/trim-trailing-lines/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/trim-trailing-lines.svg

[coverage]: https://codecov.io/github/wooorm/trim-trailing-lines

[downloads-badge]: https://img.shields.io/npm/dm/trim-trailing-lines.svg

[downloads]: https://www.npmjs.com/package/trim-trailing-lines

[size-badge]: https://img.shields.io/bundlephobia/minzip/trim-trailing-lines.svg

[size]: https://bundlephobia.com/result?p=trim-trailing-lines

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
