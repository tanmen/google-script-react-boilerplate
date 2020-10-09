export type IPaths = {
  Root: Path,
  List: Path
}

export type Path = {
  path: (...args: Array<string | number>) => string;
  template: string;
}
