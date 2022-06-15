interface ParseUrlOptions {
  withPrefixOnly?: boolean;
  noEqual?: boolean;
}

function uneUnicode(str: string): string {
  return str.replace(/\\u([\dA-Fa-f]{4})/g, (g, word) =>
    String.fromCodePoint(Number.parseInt(word, 16)),
  );
}

function getUrl(content: string, options?: ParseUrlOptions): string[] {
  if (!content && typeof content !== 'string') {
    return [];
  }

  let regexDefault = /(www.\S+|https?:\/\/|)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g;

  if (options?.withPrefixOnly === true) {
    regexDefault = /(www.\S+|https?:\/\/)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g;
  }

  const preparedParsingContent = uneUnicode(content.toLowerCase()).normalize();

  const linkGroups = preparedParsingContent.match(regexDefault);

  return options?.noEqual ? [...new Set(linkGroups)] : linkGroups || [];
}

function getUrlAmount(
  content: string,
  options?: Omit<ParseUrlOptions, 'noEqual'>,
): number {
  if (!content && typeof content !== 'string') {
    return -1;
  }

  let regexDefault = /(www.\S+|https?:\/\/|)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g;

  if (options?.withPrefixOnly === true) {
    regexDefault = /(www.\S+|https?:\/\/)[\w]+[.:]\w(([#&./=?]?[\w]+))*\/?/g;
  }

  const preparedParsingContent = uneUnicode(content.toLowerCase()).normalize();

  return preparedParsingContent.match(regexDefault)?.length || 0;
}

export { getUrl, getUrlAmount, ParseUrlOptions };
