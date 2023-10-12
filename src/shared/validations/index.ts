import { InvalidArgumentError } from "@shared/errors"

export function ensureValueIsDefined(value: any): void {
  if (value === null || value === undefined) {
    throw new InvalidArgumentError("Value must be defined")
  }
}
