<script setup lang="ts">
import CustomInput from '@shared/components/CustomInput.vue';
import SectionDivider from '@shared/components/SectionDivider.vue';
import UploadIcon from '@assets/icons/UploadIcon.vue'
import { countries } from '@shared/data';
import {
  submitPropertyForm,
  isLoadingPropertyForm,
  productImage,
  property,
  errors,
  onFileChange,
} from "@properties/presentation/state/propertyFormController"
import LoaderComponent from '@/shared/components/LoaderComponent.vue';
import MapMarker from '../components/MapMarker.vue';
</script>

<template>
  <section class="property-form-view">
    <div v-if="isLoadingPropertyForm" class="loader-container">
      <loader-component />
    </div>
    <div class="form-container p-20">
      <h1>Publish new property</h1>
      <section-divider />
      <form @submit.prevent="submitPropertyForm">
        <div class="d-flex gap-8 w-100">
          <div class="d-flex flex-column w-50">
            <h3>Type</h3>
            <label for="property-type">Property type</label>
            <select
              v-model="property.propertyType"
              name="property-type"
              id="property-type"
              class="w-100"
              required
            >
              <option value="" disabled selected>Select your option</option>
              <option value="APARTMENT">Apartment</option>
              <option value="HOUSE">House</option>
              <option value="OFFICE">Office</option>
            </select>
            <div v-if="errors.propertyType" class="error-message">{{ errors.propertyType }}</div>
          </div>
          <div class="w-50">
            <h3>Price</h3>
            <div class="d-flex w-100">
              <custom-input
                v-model="property.price"
                :error="errors.price"
                class="w-100"
                type="number"
                label="Property monthly price"
              />
            </div>
          </div>
        </div>
        <section-divider />
        <div>
          <h3>Location</h3>
          <div class="d-flex w-100 gap-8 mb-10">
            <custom-input
              v-model="property.address"
              :error="errors.address"
              class="w-50"
              label="Address"
            />
            <custom-input
              v-model="property.neighborhood"
              :error="errors.neighborhood"
              class="w-50"
              label="Neighborhood"
            />
          </div>
          <div class="d-flex w-100 gap-8">
            <div class="d-flex flex-column w-50">
              <label for="country">Country</label>
              <select
                v-model="property.country"
                name="country"
                id="country"
                class="w-100"
                required
              >
                <option value="" selected>Select your option</option>
                <option
                  v-for="country in countries"
                  :key="country.code"
                  :value="country.code"
                >
                  {{ country.name }}
                </option>
              </select>
              <div v-if="errors.country" class="error-message">{{ errors.country }}</div>
            </div>
            <custom-input
              v-model="property.city"
              :error="errors.city"
              class="w-50"
              label="City"
            />
          </div>
          <p>Select property location</p>
          <map-marker />
        </div>
        <section-divider />
        <div>
          <h3>Characteristics</h3>
          <div class="d-flex w-100 gap-8 mb-10">
            <custom-input
              v-model="property.rooms"
              :error="errors.rooms"
              class="w-50"
              type="number"
              label="Rooms"
            />
            <custom-input
              v-model="property.baths"
              :error="errors.baths"
              class="w-50"
              type="number"
              label="Baths"
            />
          </div>
          <div class="d-flex w-100 gap-8 mb-10">
            <custom-input
              v-model="property.area"
              :error="errors.area"
              class="w-50"
              type="number"
              label="Area (m2)"
            />
            <div class="d-flex  align-center mt-5">
              <input type="checkbox" id="elevator">
              <label for="elevator" name="elevator">Elevator</label>
            </div>
          </div>
          <div class="d-flex gap-8 align-center w-100 mb-10">
            <label
              for="property-images"
              class="custom-file-input d-flex justify-center align-center gap-8"
            >
              <upload-icon fill="#094067" />
              Select Image
            </label>
            <p class="m-0 image-upload-name">{{ productImage?.name }}</p>
            <input
              type="file"
              id="property-images"
              name="property-images"
              accept="image/*"
              style="display: none"
              @change="onFileChange"
            >
          </div>
          <div class="d-flex flex-column w-100">
            <label for="description">Description</label>
            <textarea v-model="property.description" name="description" id="description" cols="30" rows="10"></textarea>
            <div v-if="errors.description" class="error-message">{{ errors.description }}</div>
          </div>
        </div>
        <section-divider />
        <div class="d-flex justify-end gap-4 footer">
          <router-link :to="{ name: 'properties' }">
            <button class="btn btn-secondary px-3">Cancel</button>
          </router-link>
          <button type="submit" class="btn btn-primary px-3 font-weight-bold">Save</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="css">
.loader-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  border-radius: var(--border-radius);
  border: solid 1px var(--stroke-color);
  height: 100%;
}
select:required:invalid {
  color: gray;
}
textarea {
  border-radius: var(--border-radius);
  padding: 1rem;
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
}
.property-form-view {
  background: url('@assets/layered-waves.svg') no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100dvw;
  height: 100dvh;
  display: grid;
  position: relative;
}
.form-container {
  background-color: var(--main-color);
  border-radius: 3rem;
  box-shadow: 0px 10px 15px 4px rgba(0,0,0,0.1);
  position: relative;
  width: 75dvw;
  max-height: 85vh;
  place-self: center;
  overflow-y: scroll;
  margin: 3rem;
}
.custom-file-input {
  cursor: pointer;
  border: solid 1px var(--stroke-color);
  padding: 10px 20px;
  border-radius: var(--border-radius);
  max-width: fit-content;
  transition: opacity 200ms;
}
.custom-file-input:hover {
  opacity: 0.5;
}
.image-upload-name {
  height: fit-content;
}
</style>
