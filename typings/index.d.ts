declare module 'text-parse-url' {
  interface DefaultOption {
    withPrefixOnly?: boolean
    noEqual?: boolean
  }
  export default function (opt?: DefaultOption): string[] | undefined
}
