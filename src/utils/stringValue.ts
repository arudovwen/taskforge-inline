import { ParsedTypes } from "./constants";

export function stringValue(type: string, value: any) {
  if (ParsedTypes.includes(type)) {
    return JSON.stringify(value);
  }

  return value;
}
