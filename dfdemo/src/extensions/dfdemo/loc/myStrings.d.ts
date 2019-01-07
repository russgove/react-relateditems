declare interface IDfdemoCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'DfdemoCommandSetStrings' {
  const strings: IDfdemoCommandSetStrings;
  export = strings;
}
