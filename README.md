# text-parse-url

Simple and liteweight URL Parser from any text and string.

# Options

- options.**withPrefixOnly**: only select terms start with `http/https/www`
- options.**noEqual**: never return the same url terms.

# Usage

```js
// Javascript
const { contentParseURL } = require('text-parse-url')({
  withPrefixOnly: true,
  noEqual: true,
})
const { contentParseURL } = require('text-parse-url')

//Typescript
import textParseUrl from 'text-parse-url'

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
