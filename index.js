const defaultOptions = {
  onlyPrefix: false,
  noEqual: false
}

const uneUnicode = (str) => {
  str.replace(/\\u([\dA-Fa-f]{4})/g, (g, word) =>
    String.fromCodePoint(Number.parseInt(word, 16))
  )
}

const contentParseURL = (content, options) => {
  const onlyPrefix = options.withPrefix || defaultOptions.withPrefix
  const allowEqualLink = options.noEqual || defaultOptions.noEqual
  const re = onlyPrefix ? /(www.\S+|https?:\/\/)[\w-]+[.:]\w(([#&.\/=?]?[\w-]+))*\/?/g : /(www.\S+|https?:\/\/|)[\w-]+[.:]\w(([#&.\/=?]?[\w-]+))*\/?/g
  const re2 = /[^\s\w%./:|-]/gi
  const comsg = uneUnicode(content.toLowerCase().replace(re2, '')).normalize()
  const allLinkS = comsg.match(re)
  return allowEqualLink ? [...new Set(allLinkS)] : allLinkS
}

module.exports = (opt) => {
  if (opt !== void 0) Object.assign(options, opt)
}
module.exports.contentParseURL = contentParseURL