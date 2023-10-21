<script setup lang="ts">
import { reactive, onMounted } from "vue"
import { toast } from "vue3-toastify";
import { getHomeProperties } from '@properties/presentation/injections/properties'
import PropertyCard from "./PropertyCard.vue";
import LoaderComponent from "@shared/components/LoaderComponent.vue"
const properties = reactive([])

onMounted(async () => {
  try {
    const propertiesDocs = await getHomeProperties()
    Object.assign(properties, propertiesDocs)
  } catch(error) {
    console.log(error);
    toast.error("Properties list are not available at this moment")
  }
})
</script>

<template>
  <section class="w-100 mt-80">
    <section v-if="properties.length > 0" class="properties-list">
      <property-card
        v-for="property, index in properties"
        :property="property"
        :key="index"
      />
    </section>
    <div v-else class="loader-container w-100">
      <loader-component />
    </div>
  </section>
</template>

<style scoped lang="css">
.properties-list {
  display: grid;
  max-width: 1500px;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  column-gap: 2rem;
  padding: 3rem;
  &  .property-card {
    grid-column: 1fr;
  }
}
.loader-container {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
}
@media (max-width: 960px) {
  .properties-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 770px) {
  .properties-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .properties-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
