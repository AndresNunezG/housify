<script setup lang="ts">
import { reactive, onMounted } from "vue"
import { toast } from "vue3-toastify";
import { getHomeProperties } from '@properties/presentation/injections/properties'

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
  <section>
    <pre>
      {{ properties }}
    </pre>
  </section>
</template>
