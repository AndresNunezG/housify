import { Property } from "@properties/domain/models/property"

export interface IPropertyRepository {
  createProperty(data: Property): Promise<void>;
}
