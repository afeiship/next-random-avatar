# next-random-avatar
> Random avatar api.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-random-avatar
```

## apis
| api   | params | description                 |
| ----- | ------ | --------------------------- |
| men   | -      | Get random men image list.  |
| women | -      | Get random women image list |
| lego  | -      | Get random men lego list    |

## usage
```js
import NxRandomAvatar from '@jswork/next-random-avatar';

import NxRandomAvatar from 'next-random-avatar';

NxRandomAvatar.men(/*1~100*/);
NxRandomAvatar.women(/*1~100*/);
NxRandomAvatar.lego(/*1~10*/);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-random-avatar/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-random-avatar
[version-url]: https://npmjs.org/package/@jswork/next-random-avatar

[license-image]: https://img.shields.io/npm/l/@jswork/next-random-avatar
[license-url]: https://github.com/afeiship/next-random-avatar/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-random-avatar
[size-url]: https://github.com/afeiship/next-random-avatar/blob/master/dist/next-random-avatar.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-random-avatar
[download-url]: https://www.npmjs.com/package/@jswork/next-random-avatar
