import { reactive } from "vue";
import { Location, Property, PropertyType } from "@properties/domain/models";
import { createPropertyUseCase } from '@properties/presentation/injections/properties';
import { toast } from "vue3-toastify";
import router from "@/routes";

const initalValues = {
  address: "",
  neighborhood: "",
  country: "",
  city: "",
  propertyType: "",
  price: null,
  rooms: null,
  baths: null,
  area: null,
  elevator: false,
  description: "",
}

const errors = {
  address: "",
  neighborhood: "",
  country: "",
  city: "",
  propertyType: "",
  price: "",
  rooms: "",
  baths: "",
  area: "",
  description: "",
}

const property = reactive({ ...initalValues })

function resetPropertyForm() {
  Object.assign(property, initalValues)
}

function formToDomain(): Property {
  const location = new Location(
    property.address,
    property.neighborhood,
    property.city,
    property.country,
  )
  const propertyDomain = new Property(
    property.price ?? 0,
    property.rooms ?? 0,
    property.baths ?? 0,
    property.area ?? 0,
    property.elevator,
    property.propertyType as PropertyType,
    location,
    property.description
  )
  return propertyDomain
}

async function submitPropertyForm() {
  try {
    const propertyDomain = formToDomain()
    const propertyDto = JSON.parse(JSON.stringify(propertyDomain))
    await createPropertyUseCase(propertyDto)
    toast.success("Property published successfully", {
      autoClose: 1000,
      onClose: () => router.push({ name: 'properties' }),
    })
    resetPropertyForm()
  } catch (error) {
    toast.warn(`Please check the errors\n${error}`, {
      autoClose: 3000,
    });
  }
}

export {
  submitPropertyForm,
  property,
  errors,
}
