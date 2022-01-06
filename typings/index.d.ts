declare module 'text-parse-url' {
  interface DefaultOption {
    withPrefixOnly: boolean
    noEqual: boolean
  }
  export default function (opt: DefaultOption): any
  export function contentParseURL(
    content: string,
    options: DefaultOption
  ): Array<string>
}
