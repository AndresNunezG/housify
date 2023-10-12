import { Property  } from "@properties/domain/models"
import { IPropertyRepository } from "@properties/domain/useCases"

export function CreatePropertyUseCase(propertyRepository: IPropertyRepository) {
  async function execute(data: Property) {
    await propertyRepository.createProperty(data)
  }

  return { execute }
}
