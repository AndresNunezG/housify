import { createDocument } from "@/firebase"
import { Property } from "@/properties/domain/models";
import { IPropertyRepository } from "@/properties/domain/useCases";

export class FirebasePropertyRepository implements IPropertyRepository {
  async createProperty(data: Property): Promise<void> {
    await createDocument("properties", data)
  }
}
