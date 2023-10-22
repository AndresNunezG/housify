<script setup lang="ts">
import { Property } from '@/properties/domain/models';
import AreaIcon from '@assets/icons/AreaIcon.vue'
import RoomIcon from '@assets/icons/RoomIcon.vue'
import LocationIcon from '@assets/icons/LocationIcon.vue'
import BathIcon from '@assets/icons/BathIcon.vue'
import { formatCurrency } from '@shared/utils'
import MapFixedWidget from '@/shared/components/MapFixedWidget.vue';

defineProps<{ property: Property }>()
</script>

<template>
  <section class="property-detail">
    <div class="image-container">
      <img
        :src="property.imageUrl"
        class="property-image"
        alt="property-image"
      >
    </div>
    <div class="map-container">
      <map-fixed-widget
        :latitude="property.location.latitude || 0"
        :longitude="property.location.longitude || 0"
      />
    </div>
    <div class="content-container">
      <section class="d-flex align-center gap-8">
        <h3 class="font-weight-bold text-tertiary">
          {{ formatCurrency(property.price) }}&nbsp;
        </h3>
        <p class="info-pair">
          <room-icon />
          <span class="m-0">{{ property.rooms }}</span>
        </p>
        <p class="info-pair">
          <bath-icon />
          <span class="m-0">{{ property.baths }}</span>
        </p>
        <p class="info-pair">
          <area-icon />
          <span>{{ property.area }} m<sup>2</sup></span>
        </p>
      </section>
      <div class="location-info d-flex align-items-center">
        <location-icon />
        <span class="font-secondary">
          {{ property.location.address }}.
          {{ property.location.city }}, {{ property.location.country }}.
          {{ property.location.neighborhood }}
        </span>
      </div>
      <div class="description">
        <p>{{ property.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
.property-detail {
 display: grid;
 grid-template-columns: 1fr 2fr;
 grid-template-rows: 2fr;
 grid-gap: 1rem;
}
.image-container {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  & .property-image {
    border-radius: var(--border-radius);
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}
.map-container {
  grid-column: 1 / 2;
  grid-row: 2 / -1;
  & .property-image {
    border-radius: var(--border-radius);
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}
.content-container {
  grid-column: 2 / -1;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  & .info-pair {
    display: flex;
    align-items: center;
  }
  & .description,
  & .location-info {
    max-width: 400px;
  }

  & .description {
    height: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
