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
const { contentParseURL } = require('text-parse-url')({
  withPrefixOnly: true,
  noEqual: true,
})
const { contentParseURL } = require('text-parse-url')()

// Typescript
import textParseUrl from 'text-parse-url'
const { contentParseURL } = textParseUrl()

contentParseURL('My website link is ->www.google.com<-')
// Result: ['www.google.com']

contentParseURL('My website link is ->www.google.com<-', {
  withPrefixOnly: true,
})
// Result: []

contentParseURL('google.com google.com', {
  noEqual: true,
})
// Result: ['www.google.com']
```
