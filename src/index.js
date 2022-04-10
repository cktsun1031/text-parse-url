const defaultOptions = {
  withPrefixOnly: false,
  noEqual: false,
}

const uneUnicode = (str) =>
  str.replace(/\\u([\dA-Fa-f]{4})/g, (g, word) =>
    String.fromCodePoint(Number.parseInt(word, 16))
  )

const contentParseURL = (content, options) => {
  if (!content && typeof content !== String) return undefined
  const optWithPrefixOnly = options && options.withPrefixOnly
  const optNoEqual = options && options.noEqual
  if (
    (optWithPrefixOnly && typeof optWithPrefixOnly !== 'boolean') ||
    (optNoEqual && typeof optNoEqual !== 'boolean')
  )
    throw new Error('Error Types of option!')
  const onlyPrefix =
    (options && optWithPrefixOnly) || defaultOptions.withPrefixOnly
  const allowEqualLink = (options && optNoEqual) || defaultOptions.noEqual
  const re = onlyPrefix
    ? /(www.\S+|https?:\/\/)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g
    : /(www.\S+|https?:\/\/|)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g
  const comsg = uneUnicode(content.toLowerCase()).normalize()
  const allLinkS = comsg.match(re)
  return allowEqualLink ? [...new Set(allLinkS)] : allLinkS || []
}

module.exports = (opt) => {
  if (opt !== void 0) Object.assign(defaultOptions, opt)
  return { contentParseURL, config: defaultOptions }
}
