# text-parse-url

<div>
 <p>
  <a href="https://badge.fury.io/js/text-parse-url"><img src="https://badge.fury.io/js/text-parse-url.svg" alt="Latest" /></a>
  <a href="https://github.com/RealKoolisw/text-parse-url/actions/workflows/testing.yml"><img src="https://github.com/RealKoolisw/text-parse-url/actions/workflows/testing.yml/badge.svg" alt="Test" /></a>
 </p>
</div>

A simple and liteweight URL Parser from any text and string only around `10 KB` in size.\
Typescript is also supported.

# Options

- options.**withPrefixOnly**: only select terms start with `http/https/www`\
  Default: `false` - `Boolean`

- options.**noEqual**: never return the same url terms.\
  Default: `false` - `Boolean`

# Usage

```js
// Javascript
const { getUrl } = require('text-parse-url');

// Typescript
import { getUrl } from 'text-parse-url';

getUrl('My website link is ->www.google.com<-');
// Result: ['www.google.com']

getUrl('My website link is ->www.google.com<-', {
  withPrefixOnly: true,
});
// Result: []

getUrl('google.com google.com', {
  noEqual: true,
});
// Result: ['www.google.com']
```
