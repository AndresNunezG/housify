<script setup lang="ts">
import { PROPERTIES } from './utils'
import PropertyCard from '@/shared/components/PropertyCard.vue';
</script>

<template>
  <section id="properties" class="properties">
    <h3 class="title text-center">
      <span class="marked-title">{{ $t("common.properties") }}&nbsp;</span>
      {{ $t("properties.thatYouWillLove") }}
    </h3>
    <section class="properties-container w-100">
      <property-card
        v-for="property, index in PROPERTIES"
        :key="index"
        :property="property"
      />
    </section>
  </section>
</template>

<style scoped lang="css">
.properties-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10%;
  &  .property-card {
    grid-column: 1fr;
  }
}
.properties {
  padding: 3rem;
  background-color: var(--background-secondary-color);
}
.title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 0;
}
.marked-title {
  color: var(--button-color);
}
</style>
