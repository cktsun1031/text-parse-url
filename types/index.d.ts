interface ParseUrlOptions {
  withPrefixOnly?: boolean;
  noEqual?: boolean;
}

declare module 'text-parse-url' {
  export function parseURL(
    content: string,
    options?: ParseUrlOptions,
  ): string[];
}
