<script setup lang="ts">
import { ref, computed, Ref } from 'vue';
import ChevronDownIcon from '@assets/icons/ChevronDownIcon.vue';

enum Locations {
  CITY = "city",
  ADDRESS = "address",
  NEIGHBORHOOD = "neighborhood",
}

enum PropertyTypes {
  APARTMENT = "apartment",
  HOUSE = "house",
  DUPLEX = "duplex"
}

const TRANSITION_DELAY = 2000;

const locations = [Locations.CITY, Locations.ADDRESS, Locations.NEIGHBORHOOD]
const propertyTypes = [PropertyTypes.APARTMENT, PropertyTypes.HOUSE, PropertyTypes.DUPLEX]

const currentLocation = computed(() => locations[currentLocationIndex.value])
const currentLocationIndex = ref(0)

const currentPropertyType = computed(() => propertyTypes[currentLocationIndex.value])
const currentPropertyIndex = ref(0)

const changeLocation = (refIndex: Ref<number>, iterable: (Locations | PropertyTypes)[]) => {
  if (refIndex.value < iterable.length - 1 ) {
    refIndex.value++
  } else {
    refIndex.value = 0
  }
}

setInterval(() => { changeLocation(currentLocationIndex, locations) }, TRANSITION_DELAY)
setInterval(() => { changeLocation(currentPropertyIndex, propertyTypes) }, TRANSITION_DELAY)

</script>

<template>
  <section class="search-banner d-flex justify-around align-items-center">
    <section class="filter d-flex flex-column">
      <div class="d-flex gap-4 align-center">
        <h3 class="m-0">{{ $t("searchBanner.location") }}</h3>
        <chevron-down-icon />
      </div>
      <div class="location-label--container">
        <Transition name="slide-left">
          <p v-if="currentLocation === Locations.CITY" class="location-label m-0">
            {{ $t(`searchBanner.locations.${currentLocation}`) }}
          </p>
          <p v-else-if="currentLocation === Locations.ADDRESS" class="location-label m-0">
            {{ $t(`searchBanner.locations.${currentLocation}`) }}
          </p>
          <p v-else-if="currentLocation === Locations.NEIGHBORHOOD" class="location-label m-0">
            {{ $t(`searchBanner.locations.${currentLocation}`) }}
          </p>
        </Transition>
      </div>
    </section>
    <section class="filter d-flex flex-column">
      <div class="d-flex gap-4 align-center">
        <h3 class="m-0">{{ $t("searchBanner.propertyType") }}</h3>
        <chevron-down-icon />
      </div>
      <div class="property-type-label--container">
        <Transition name="slide-left">
          <p v-if="currentPropertyType === PropertyTypes.APARTMENT" class="location-label m-0">
            {{ $t(`searchBanner.propertyTypes.${currentPropertyType}`) }}
          </p>
          <p v-else-if="currentPropertyType === PropertyTypes.HOUSE" class="location-label m-0">
            {{ $t(`searchBanner.propertyTypes.${currentPropertyType}`) }}
          </p>
          <p v-else-if="currentPropertyType === PropertyTypes.DUPLEX" class="location-label m-0">
            {{ $t(`searchBanner.propertyTypes.${currentPropertyType}`) }}
          </p>
        </Transition>
      </div>
    </section>
    <section class="filter d-flex flex-column">
      <div class="d-flex gap-4 align-center">
        <h3 class="m-0">{{ $t("searchBanner.maxPrice") }}</h3>
        <chevron-down-icon />
      </div>
      <p class="m-0">$6.000</p>
    </section>
    <router-link :to="{ name: 'login' }">
      <button class="search-btn btn btn-primary">Search</button>
    </router-link>
  </section>
</template>

<style scoped lang="css">
.search-banner {
  margin: 0 4rem;
  padding: 2rem 3rem;
  border-radius: 10rem;
  -webkit-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  -moz-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
}
.filter {
  margin: auto 0;
  gap: 0.8rem;
}
.search-btn {
  margin: auto 0;
  padding: 1.2rem 2.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 8rem;
  border-color: inherit;
}
.location-label--container,
.property-type-label--container {
  height: 1lh;
}
.location-label {
  position: absolute;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
