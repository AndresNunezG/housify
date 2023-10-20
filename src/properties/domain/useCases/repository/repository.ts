import { Property } from "@properties/domain/models/property"

export interface IPropertyRepository {
  createProperty(data: Property): Promise<void>;
  uploadImage(data: File): Promise<string>;
  getHomeProperties(): Promise<Property[]>;
}
