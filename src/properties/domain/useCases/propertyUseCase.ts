import { Property  } from "@properties/domain/models"
import { IPropertyRepository } from "@properties/domain/useCases"

export function CreatePropertyUseCase(propertyRepository: IPropertyRepository) {
  async function execute(data: Property) {
    await propertyRepository.createProperty(data)
  }

  return { execute }
}

export function UploadImageUseCase(propertyRepository: IPropertyRepository) {
  async function execute(file: File) {
    return await propertyRepository.uploadImage(file)
  }

  return { execute }
}

export function GetHomePropertiesUseCase(propertyRepository: IPropertyRepository) {
  async function execute() {
    return await propertyRepository.getHomeProperties()
  }

  return { execute }
}
