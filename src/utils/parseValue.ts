import { ParsedTypes } from "./constants";

export function parseValue(type: string, value: any) {
  try {
    if (ParsedTypes.includes(type)) {
      return JSON.parse(value.trim());
    }

    return value;
  } catch (error) {
    return value;
  }
}
