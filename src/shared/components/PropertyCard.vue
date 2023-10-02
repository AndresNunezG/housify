<script setup lang="ts">
import AreaIcon from '@assets/icons/AreaIcon.vue'
import RoomIcon from '@assets/icons/RoomIcon.vue'
import LocationIcon from '@assets/icons/LocationIcon.vue'
import BathIcon from '@assets/icons/BathIcon.vue'
import CarIcon from '@assets/icons/CarIcon.vue'
import { type IProperty } from '../views/HomeView/utils'
import { formatCurrency } from '@shared/utils'

defineProps<{
  property: IProperty
}>()

</script>

<template>
  <article class="property-card">
    <section>
      <img
        class="property-img"
        :src="property.imageUrl.toString()"
        alt="property-image"
      />
    </section>
    <section class="card-content">
      <div class="d-flex align-items-center gap-8 m-10">
        <p class="price font-weight-bold m-0">{{ formatCurrency(property.price) }}</p>
        <div class="d-flex align-center gap-2">
          <location-icon :height="16" :width="16" />
          <p class="location-label m-0">{{ property.location.city }}</p>
        </div>
      </div>
      <div class="card-row">
        <div class="d-flex gap-3 justify-center w-100">
          <room-icon />
          <p class="m-0">{{ property.rooms }}</p>
        </div>
        <div class="d-flex gap-3 justify-center w-100">
          <bath-icon />
          <p class="m-0">{{ property.baths }}</p>
        </div>
        <div class="d-flex gap-3 justify-center w-100">
          <car-icon />
          <p class="m-0">{{ property.parkingSlots }}</p>
        </div>
        <div class="d-flex gap-3 justify-center w-100">
          <area-icon />
          <p class="m-0">{{ property.area }}m<sup>2</sup></p>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped lang="css">
.property-card {
  border-radius: 2rem;
  background-color: #FFF;
  padding: 1rem 1rem 2rem 1rem;
}
.card-content {
  margin: 1rem 0;
  & .price {
    font-weight: 900;
  }
  & .location-label {
    color: var(--paragraph-color);
    font-size: 14px;
  }
}
.property-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem
}
.card-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & div {
    grid-column: 1fr;
    color: var(--paragraph-color);

  }
}
</style>
