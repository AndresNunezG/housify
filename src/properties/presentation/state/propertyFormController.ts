import { ref, reactive, Ref } from "vue";
import { Location, Property, PropertyType } from "@properties/domain/models";
import {
  createPropertyUseCase,
  uploadImage
} from '@properties/presentation/injections/properties';
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
  images: [],
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

const selectedMarker = ref({})

function resetPropertyForm() {
  Object.assign(property, initalValues)
}

function formToDomain(downloadUrl: string): Property {
  const location = new Location(
    property.address,
    property.neighborhood,
    property.city,
    property.country,
    (selectedMarker.value as { position: { lat: number } }).position.lat,
    (selectedMarker.value as { position: { lng: number } }).position.lng,
  )
  const propertyDomain = new Property(
    property.price ?? 0,
    property.rooms ?? 0,
    property.baths ?? 0,
    property.area ?? 0,
    property.elevator,
    property.propertyType as PropertyType,
    location,
    property.description,
    downloadUrl,
  )
  return propertyDomain
}

const isLoadingPropertyForm = ref(false)
async function submitPropertyForm() {
  try {
    isLoadingPropertyForm.value = true
    const downloadUrl = await uploadImage(productImage.value!)
    const propertyDomain = formToDomain(downloadUrl)
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
  } finally {
    isLoadingPropertyForm.value = false
  }
}

const productImage: Ref<File | undefined> = ref(undefined)
function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    productImage.value = input.files[0];
  }
}

export {
  submitPropertyForm,
  onFileChange,
  isLoadingPropertyForm,
  property,
  errors,
  productImage,
  selectedMarker,
}
