import { InvalidArgumentError } from "@shared/errors"
import { ensureValueIsDefined } from "@shared/validations"
import { Location } from "@properties/domain/models"

export enum PropertyType {
  Apartment = "APARTMENT",
  House = "HOUSE",
  Office = "OFFICE",
}

export class Property {

  private static readonly MIN_AMOUNT_VALUE = 0;

  price: number
  rooms: number
  baths: number
  area: number
  description: string
  elevator: boolean
  type: PropertyType
  location: Location
  imageUrl?: string

  constructor(
    price: number,
    rooms: number,
    baths: number,
    area: number,
    elevator: boolean,
    type: PropertyType,
    location: Location,
    description: string,
    imageUrl: string,
  ) {
    this.price = price
    this.rooms = rooms
    this.baths = baths
    this.area = area
    this.elevator = elevator
    this.type = type
    this.location = location
    this.description = description
    this.imageUrl = imageUrl
    this.validations()
  }

  private validations() {
    this.ensureIsValidField("price", this.price)
    this.ensureIsValidField("rooms", this.rooms)
    this.ensureIsValidField("baths", this.baths)
    this.ensureIsValidField("area", this.area)
    this.ensureIsValidElevator()
    this.ensureIsValidDescription()
  }

  private ensureIsValidField(fieldName: string, value: number) {
    ensureValueIsDefined(value);
    if (value < Property.MIN_AMOUNT_VALUE) {
      throw new InvalidArgumentError(
        `[${this.constructor.name}]: <${value}> is not a valid ${fieldName}`
      );
    }
  }

  private ensureIsValidElevator() {
    ensureValueIsDefined(this.elevator)
  }

  private ensureIsValidDescription() {
    ensureValueIsDefined(this.description)
    if (this.description === "") {
      throw new InvalidArgumentError(
        `[${this.constructor.name}]: <${this.description}> is not a valid description`
      )
    }
  }
}
