import { CreatePropertyUseCase, GetHomePropertiesUseCase, UploadImageUseCase } from "@/properties/domain/useCases/propertyUseCase";
import { FirebasePropertyRepository } from "@/properties/infrastructure/repository/FirebasePropertyRepository";

const createPropertyUseCase = CreatePropertyUseCase(new FirebasePropertyRepository()).execute
const uploadImage = UploadImageUseCase(new FirebasePropertyRepository()).execute
const getHomeProperties = GetHomePropertiesUseCase(new FirebasePropertyRepository()).execute

export {
  createPropertyUseCase,
  uploadImage,
  getHomeProperties
}
