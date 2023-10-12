import { CreatePropertyUseCase } from "@/properties/domain/useCases/propertyUseCase";
import { FirebasePropertyRepository } from "@/properties/infrastructure/repository/FirebasePropertyRepository";

const createPropertyUseCase = CreatePropertyUseCase(new FirebasePropertyRepository()).execute

export {
  createPropertyUseCase
}
