interface ParseUrlOptions {
  withPrefixOnly?: boolean;
  noEqual?: boolean;
}

declare module 'text-parse-url' {
  export function getUrl(content: string, options?: ParseUrlOptions): string[];

  export function getUrlAmount(
    content: string,
    options?: Omit<ParseUrlOptions, 'noEqual'>,
  ): number;
}
