<script setup lang="ts">
import { toRefs } from 'vue';
import AreaIcon from '@assets/icons/AreaIcon.vue'
import RoomIcon from '@assets/icons/RoomIcon.vue'
import LocationIcon from '@assets/icons/LocationIcon.vue'
import BathIcon from '@assets/icons/BathIcon.vue'
import { Property } from '@/properties/domain/models'
import { formatCurrency } from '@shared/utils'

const props = defineProps<{ property: Property }>()
const { property } = toRefs(props)
</script>

<template>
  <article class="card">
    <img
      :src="property.imageUrl"
      alt="property-image"
      class="property-image"
    />
    <section class="card-content">
      <div class="d-flex align-items-center gap-8 m-10">
        <p class="m-0">
          <span class="font-weight-bold">
            {{ formatCurrency(property.price) }}&nbsp;
          </span>
        </p>
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
          <area-icon />
          <p class="m-0">{{ property.area }}m<sup>2</sup></p>
        </div>
      </div>
      <div class="d-flex align-items-center font-weight-light m-10 o-75">
        <location-icon />
        <span class="">{{ property.location.address }}. {{ property.location.city }}, {{ property.location.country }}</span>
      </div>
    </section>
  </article>
</template>

<style lang="css" scoped>
.card {
  border-radius: 2rem;
  background-color: #FFF;
  padding: 1rem 1rem 2rem 1rem;
  -webkit-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  -moz-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
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
.property-image {
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
