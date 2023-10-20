import {
  createDocument,
  getAllCollectionDocuments,
  uploadImageToStorage,
} from "@/firebase"
import { Property } from "@properties/domain/models";
import { IPropertyRepository } from "@properties/domain/useCases";
import {
  fromPropertyDocListToDomainList
} from "@properties/infrastructure/adapters/propertyDto"

export class FirebasePropertyRepository implements IPropertyRepository {
  async createProperty(data: Property): Promise<void> {
    await createDocument("properties", data)
  }

  async uploadImage(file: File): Promise<string> {
    const imageUrl = await uploadImageToStorage(file)
    return imageUrl
  }

  async getHomeProperties(): Promise<Property[]> {
    const propertiesDocs = await getAllCollectionDocuments("properties")
    return fromPropertyDocListToDomainList(propertiesDocs)
  }
}
