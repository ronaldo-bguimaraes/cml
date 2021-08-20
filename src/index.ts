import { scan } from "./scanner";

import { parse } from "./parser";

import { analyze } from "./analyzer";

import { generate } from "./generator";

export function transpile(string: string) {

  const scanResult = scan(string);

  const parseResult = parse(scanResult);

  const analyzeResult = analyze(parseResult);

  return generate(analyzeResult);

}