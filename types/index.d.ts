interface DefaultOption {
  withPrefixOnly?: boolean
  noEqual?: boolean
}

declare function _exports(opt?: DefaultOption): {
  contentParseURL: (
    content: string,
    options?: DefaultOption
  ) => string[] | undefined
  config: {
    withPrefixOnly: boolean
    noEqual: boolean
  }
}

export = _exports
