import { countries } from "@shared/data"
import { InvalidArgumentError } from "@shared/errors"
import { ensureValueIsDefined } from "@shared/validations"

export class Location {

  private static readonly MIN_ADDRESS_LENGTH = 5;
  private static readonly MIN_NEIGHBORHOOD_LENGTH = 5;
  private static readonly MIN_CITY_LENGTH = 3;

  address: string
  neighborhood: string
  city: string
  country: string

  constructor(
    address: string,
    neighborhood: string,
    city: string,
    country: string,
  ) {
    this.address = address
    this.neighborhood = neighborhood
    this.city = city
    this.country = country
    this.validations()
  }

  private validations() {
    this.ensureIsValidField("address", this.address, Location.MIN_ADDRESS_LENGTH);
    this.ensureIsValidField("neighborhood", this.neighborhood, Location.MIN_NEIGHBORHOOD_LENGTH);
    this.ensureIsValidField("city", this.city, Location.MIN_CITY_LENGTH);
    this.ensureIsValidCountry()
  }

  private ensureIsValidField(fieldName: string, value: string, minLength: number) {
    ensureValueIsDefined(value);
    if (value.length < minLength) {
      throw new InvalidArgumentError(
        `[${this.constructor.name}]: <${value}> is not a valid ${fieldName}`
      );
    }
  }

  private ensureIsValidCountry() {
    ensureValueIsDefined(this.country)
    const isValid = countries.some(country =>
      country.code.toLocaleUpperCase() === this.country.toLocaleUpperCase())
    if (!isValid) {
      throw new InvalidArgumentError(`[${this.constructor.name}]: <${this.country}> is not a valid country`)
    }
  }
}
