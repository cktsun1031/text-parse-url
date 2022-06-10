interface ParseUrlOptions {
  withPrefixOnly?: boolean;
  noEqual?: boolean;
}

function uneUnicode(str: string): string {
  return str.replace(/\\u([\dA-Fa-f]{4})/g, (g, word) =>
    String.fromCodePoint(Number.parseInt(word, 16)),
  );
}

function parseURL(content: string, options?: ParseUrlOptions): string[] {
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

export { parseURL, ParseUrlOptions };
